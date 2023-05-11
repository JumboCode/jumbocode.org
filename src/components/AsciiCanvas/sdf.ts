import TinySDF from '@mapbox/tiny-sdf';

// TODO: move to OffscreenCanvas in a worker when it’s supported

export default function generateSDF(
  str: string,
  font: { fontSize: number; fontFamily: string; fontWeight: string; letterSpacing: number; },
  buffer = Math.ceil(font.fontSize / 8),
  radius = Math.ceil(font.fontSize / 3),
) {
  // Setup

  const { fontSize, fontFamily, fontWeight, letterSpacing } = font;
  const tinySdf = new TinySDF({
    fontSize,
    fontFamily,
    fontWeight,
    buffer,
    radius,
    cutoff: 0.25,
  });

  // Measure kerning

  tinySdf.ctx.fontKerning = 'normal';
  const kern = (a: string, b: string) => {
    const separate = tinySdf.ctx.measureText(a).width + tinySdf.ctx.measureText(b).width;
    const together = tinySdf.ctx.measureText(`${a}${b}`).width;
    const kerning = together - separate;
    return kerning;
  };
  const kernings = [...str].slice(0, -1)
    .map((char, i) => kern(char, str[i + 1]!))
    .map((k) => k + letterSpacing * fontSize);

  // Draw characters

  const glyphMap = Object.fromEntries(
    [...str]
      .filter((char, i, arr) => arr.indexOf(char) === i) // deduplicate
      .map((char) => [char, tinySdf.draw(char)]), // render
  );
  const glyphs = [...str].map((char) => glyphMap[char]!);

  // Combine glyphs

  const finalHeight = tinySdf.size;
  const finalWidth = Math.ceil(
    glyphs.map((g) => g.glyphAdvance).reduce((sum, n) => sum + n, 0)
    + kernings.reduce((sum, n) => sum + n, 0)
    + tinySdf.buffer * 2,
  );
  const out = new Uint8ClampedArray(finalWidth * finalHeight);

  // The maximum value observed at the “border” of any SDF is the step that’s safe to use out of
  // bounds of the component glyphs.
  let borderMax = 0;

  let x = 0;
  for (let i = 0; i < glyphs.length; i += 1) {
    const glyph = glyphs[i]!;
    for (let glyphRow = 0; glyphRow < glyph.height; glyphRow += 1) {
      for (let glyphCol = 0; glyphCol < glyph.width; glyphCol += 1) {
        // Update borderMax
        const yBorder = glyphRow === 0 || glyphRow === glyph.height - 1;
        const xBorder = glyphCol === 0 || glyphCol === glyph.width - 1;
        if (xBorder || yBorder) {
          borderMax = Math.max(borderMax, glyph.data[glyphRow * glyph.width + glyphCol]!);
        }
        // Copy data
        const glyphDataIdx = glyphRow * glyph.width + glyphCol;
        const outRow = (tinySdf.size - glyph.glyphTop - tinySdf.buffer * 4) + glyphRow;
        const outCol = Math.round(x) + glyphCol;
        const outIdx = outRow * finalWidth + outCol;
        out[outIdx] = Math.max(out[outIdx]!, glyph.data[glyphDataIdx]!);
      }
    }
    x += glyph.glyphAdvance + (kernings[i] ?? 0);
  }

  // The default 0 might be too big a jump; use borderMax instead
  for (let i = 0; i < out.length; i += 1) {
    out[i] = Math.max(out[i]!, borderMax);
  }

  return { width: finalWidth, height: finalHeight, data: out, buffer, radius };
}