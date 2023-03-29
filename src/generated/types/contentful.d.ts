/* eslint-disable */

// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

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

export interface ICaseStudyFields {
  /** Project Name */
  projectName: string;

  /** Thumbnail */
  thumbnail?: Asset | undefined;

  /** Preview description */
  previewDescription?: string | undefined;

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

export interface IHeroSectionFields {
  /** Attention Grab */
  catchphrase: string;

  /** Statistics */
  statistics: IStatistic[];
}

/** Hero section for the homepage */

export interface IHeroSection extends Entry<IHeroSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'heroSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomepageFields {
  /** Heading */
  heading: string;

  /** Content */
  content: (ICaseStudySection | IHeroSection)[];
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

export type CONTENT_TYPE =
  | 'applyPage'
  | 'caseStudy'
  | 'caseStudySection'
  | 'communityPartnerContact'
  | 'heroSection'
  | 'homepage'
  | 'role'
  | 'statistic';

export type IEntry =
  | IApplyPage
  | ICaseStudy
  | ICaseStudySection
  | ICommunityPartnerContact
  | IHeroSection
  | IHomepage
  | IRole
  | IStatistic;

export type LOCALE_CODE = 'en-US';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
