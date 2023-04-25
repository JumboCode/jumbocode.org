// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IAboutPageFields {
  /** sections */
  sections: ISections;
}

export interface IAboutPage extends Entry<IAboutPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'aboutPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IApplyPageFields {
  /** Heading */
  heading: string;

  /** Pictures */
  pictures?: Asset[] | undefined;

  /** Subheading */
  subheading: Document;

  /** Roles */
  roles: IRole[];

  /** Learn More */
  learnMore?: Document | undefined;

  /** FAQ */
  faq?: Document | undefined;
}

/** Copy that appears on the “apply” page */

export interface IApplyPage extends Entry<IApplyPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'applyPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICallToActionSectionFields {
  /** Heading */
  heading: string;

  /** Main Text */
  mainText: string;

  /** Organization Description */
  organizationDescription: string;

  /** Student Description */
  studentDescription: string;
}

/** The call-to-action section in the "about" page design */

export interface ICallToActionSection
  extends Entry<ICallToActionSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'callToActionSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICaseStudyFields {
  /** Project Name */
  projectName: string;

  /** Project Year */
  projectYear: string;

  /** slug */
  slug: string;

  /** Thumbnail */
  thumbnail?: Asset | undefined;

  /** Preview description */
  previewDescription: string;

  /** Platform */
  platform: string;

  /** Header Image */
  headerImage: Asset;

  /** Main Image */
  mainImage: Asset;

  /** Main Description */
  mainDescription: string;

  /** Nonprofit Logo */
  nonprofitLogo: Asset;

  /** Nonprofit Description */
  nonprofitDescription: string;

  /** Team Members */
  teamMembers?: ITeamMember[] | undefined;
}

export interface ICaseStudy extends Entry<ICaseStudyFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'caseStudy';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICaseStudySectionFields {
  /** Case Studies */
  caseStudies: ICaseStudy[];
}

/** Homepage building block for a collection of case study previews */

export interface ICaseStudySection extends Entry<ICaseStudySectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'caseStudySection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IClubMemberFields {
  /** Picture */
  picture: Asset;

  /** Name */
  name: string;

  /** Bio */
  bio?: string | undefined;
}

export interface IClubMember extends Entry<IClubMemberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'clubMember';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ICommunityPartnerContactFields {
  /** Heading */
  heading: string;

  /** Description */
  description?: Document | undefined;
}

/** Content for introducing the community partner signup form */

export interface ICommunityPartnerContact
  extends Entry<ICommunityPartnerContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'communityPartnerContact';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IEBoardMemberFields {
  /** clubMember */
  clubMember: IClubMember;

  /** Role */
  role: string;
}

export interface IEBoardMember extends Entry<IEBoardMemberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'eBoardMember';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IEBoardSectionFields {
  /** Heading */
  heading: string;

  /** boardMembers */
  boardMembers: IEBoardMember[];
}

export interface IEBoardSection extends Entry<IEBoardSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'eBoardSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomepageFields {
  /** Heading */
  heading: string;

  /** Sections */
  sections: ISections;
}

export interface IHomepage extends Entry<IHomepageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'homepage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPastProjectsPageFields {
  /** Heading */
  heading: string;

  /** Subheading */
  subheading: string;
}

/** Heading and subheading text for the page which lists the past projects */

export interface IPastProjectsPage extends Entry<IPastProjectsPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pastProjectsPage';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IRoleFields {
  /** Name */
  name: string;

  /** Slug */
  slug: string;

  /** Application link */
  applicationLink?: string | undefined;

  /** Description */
  description: Document;
}

/** A single role people can apply for, including a slug (which goes in the URL), an application URL, a description, and other miscellaneous metadata. */

export interface IRole extends Entry<IRoleFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'role';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionsFields {
  /** Sections */
  sections?:
    | (
        | ICallToActionSection
        | ICaseStudySection
        | IStatsSection
        | IEBoardSection
        | IValuesSection
      )[]
    | undefined;
}

/** Content sections for modular pages (initially homepage and about) */

export interface ISections extends Entry<ISectionsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sections';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IStatisticFields {
  /** Statistic */
  statistic: string;

  /** Description */
  description: string;
}

/** Eye-catching statistics for the hero section */

export interface IStatistic extends Entry<IStatisticFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'statistic';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IStatsSectionFields {
  /** Attention Grab */
  catchphrase: string;

  /** Statistics */
  statistics: IStatistic[];
}

/** Stats section for the about page */

export interface IStatsSection extends Entry<IStatsSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'statsSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ITeamMemberFields {
  /** Club Member */
  clubMember: IClubMember;

  /** Role */
  role?: string | undefined;
}

export interface ITeamMember extends Entry<ITeamMemberFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'teamMember';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IValueFields {
  /** image */
  image: Asset;

  /** heading */
  heading: string;

  /** body */
  body: string;
}

/** Columnated content for "our values" section */

export interface IValue extends Entry<IValueFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'value';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IValuesSectionFields {
  /** values */
  values: IValue[];
}

export interface IValuesSection extends Entry<IValuesSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'valuesSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'aboutPage'
  | 'applyPage'
  | 'callToActionSection'
  | 'caseStudy'
  | 'caseStudySection'
  | 'clubMember'
  | 'communityPartnerContact'
  | 'eBoardMember'
  | 'eBoardSection'
  | 'homepage'
  | 'pastProjectsPage'
  | 'role'
  | 'sections'
  | 'statistic'
  | 'statsSection'
  | 'teamMember'
  | 'value'
  | 'valuesSection';

export type IEntry =
  | IAboutPage
  | IApplyPage
  | ICallToActionSection
  | ICaseStudy
  | ICaseStudySection
  | IClubMember
  | ICommunityPartnerContact
  | IEBoardMember
  | IEBoardSection
  | IHomepage
  | IPastProjectsPage
  | IRole
  | ISections
  | IStatistic
  | IStatsSection
  | ITeamMember
  | IValue
  | IValuesSection;

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
