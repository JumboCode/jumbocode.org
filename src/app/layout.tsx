import React from 'react';

import Footer from 'components/Footer';
import Nav from 'components/Nav';
import Frame from 'components/Frame';

import { Analytics } from '@vercel/analytics/react';

import 'styles/global/base.scss';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Full scale on mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

        {/* Favicon & etc. */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#03000c" />
        <meta name="msapplication-TileColor" content="#03000c" />
        <meta name="theme-color" content="#03000c" />

        <meta property="og:locale" content="en_US" />

        {/* Preload fonts */}
        <link rel="preload" href="/fonts/inter/Inter.var.woff2?v=4.00" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>

      <body>
        <Nav />

        <main>
          {children}
          <Frame />
        </main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}

export const metadata = {
  title: {
    template: '%s | JumboCode',
    default: 'JumboCode',
  },
};

export const revalidate = 60;
