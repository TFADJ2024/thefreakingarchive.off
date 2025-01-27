// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = never;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * TitleOne field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.titleone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  titleone: prismic.RichTextField;

  /**
   * Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * DescriptionOne field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.descriptionone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descriptionone: prismic.RichTextField;

  /**
   * DescriptionTwo field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.descriptiontwo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descriptiontwo: prismic.RichTextField;

  /**
   * Subtitle field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.RichTextField;

  /**
   * Video field in *About*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: about.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;

  /**
   * Contact field in *About*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Contact
   * - **API ID Path**: about.contact
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  contact: prismic.TitleField;

  /**
   * email field in *About*
   *
   * - **Field Type**: Link
   * - **Placeholder**: e-mail
   * - **API ID Path**: about.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email: prismic.LinkField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice> /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type CategoriesDocumentDataSlicesSlice = never;

/**
 * Content for Categories documents
 */
interface CategoriesDocumentData {
  /**
   * Title field in *Categories*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Categories*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CategoriesDocumentDataSlicesSlice> /**
   * Meta Title field in *Categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: categories.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: categories.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Categories*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: categories.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Categories document from Prismic
 *
 * - **API ID**: `categories`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoriesDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoriesDocumentData>,
    "categories",
    Lang
  >;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Footer credits field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: credits
   * - **API ID Path**: footer.footer_credits
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  footer_credits: prismic.RichTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Content for Marquee documents
 */
interface MarqueeDocumentData {
  /**
   * marquee field in *Marquee*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: marquee
   * - **API ID Path**: marquee.marquee
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  marquee: prismic.RichTextField;
}

/**
 * Marquee document from Prismic
 *
 * - **API ID**: `marquee`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MarqueeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MarqueeDocumentData>,
    "marquee",
    Lang
  >;

/**
 * Item in *Navigation → Links*
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  label: prismic.TitleField;

  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

type NavigationDocumentDataSlicesSlice = never;

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;

  /**
   * `slices` field in *Navigation*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<NavigationDocumentDataSlicesSlice>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type ProjectDocumentDataSlicesSlice = ProjectImagesSlice;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * First Name Last Name field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.students_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  students_name: prismic.KeyTextField;

  /**
   * Project Descrption field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_descrption
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_descrption: prismic.RichTextField;

  /**
   * Project Image (Max 5 images) field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  project_image: prismic.ImageField<"pic 2" | "pic 3">;

  /**
   * Project Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.project_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  project_title: prismic.KeyTextField;

  /**
   * Year Month field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  date: prismic.KeyTextField;

  /**
   * Slice Zone field in *Project*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: project.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectDocumentDataSlicesSlice> /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: project.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: project.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the site
   * - **API ID Path**: settings.siteTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  siteTitle: prismic.TitleField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

type YearsDocumentDataSlicesSlice = YearItemSlice;

/**
 * Content for Years documents
 */
interface YearsDocumentData {
  /**
   * Title field in *Years*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: years.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Years*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: years.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<YearsDocumentDataSlicesSlice> /**
   * Meta Title field in *Years*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: years.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Years*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: years.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Years*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: years.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Years document from Prismic
 *
 * - **API ID**: `years`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type YearsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<YearsDocumentData>, "years", Lang>;

export type AllDocumentTypes =
  | AboutDocument
  | CategoriesDocument
  | FooterDocument
  | MarqueeDocument
  | NavigationDocument
  | PageDocument
  | ProjectDocument
  | SettingsDocument
  | YearsDocument;

/**
 * Primary content in *ProjectImages → Default → Primary*
 */
export interface ProjectImagesSliceDefaultPrimary {
  /**
   * projectimage field in *ProjectImages → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project_images.default.primary.projectimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  projectimage: prismic.ImageField<never>;
}

/**
 * Default variation for ProjectImages Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectImagesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectImagesSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectImages*
 */
type ProjectImagesSliceVariation = ProjectImagesSliceDefault;

/**
 * ProjectImages Shared Slice
 *
 * - **API ID**: `project_images`
 * - **Description**: ProjectImages
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectImagesSlice = prismic.SharedSlice<
  "project_images",
  ProjectImagesSliceVariation
>;

/**
 * Primary content in *YearItem → Default → Primary*
 */
export interface YearItemSliceDefaultPrimary {
  /**
   * Project Image field in *YearItem → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: year_item.default.primary.projectimg
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  projectimg: prismic.ImageField<never>;

  /**
   * Project Title field in *YearItem → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: project title
   * - **API ID Path**: year_item.default.primary.project_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_title: prismic.TitleField;

  /**
   * Project Description field in *YearItem → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: project description
   * - **API ID Path**: year_item.default.primary.project_description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  project_description: prismic.TitleField;

  /**
   * Name Student field in *YearItem → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: your full name
   * - **API ID Path**: year_item.default.primary.name_student
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name_student: prismic.TitleField;
}

/**
 * Default variation for YearItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type YearItemSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<YearItemSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *YearItem*
 */
type YearItemSliceVariation = YearItemSliceDefault;

/**
 * YearItem Shared Slice
 *
 * - **API ID**: `year_item`
 * - **Description**: YearItem
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type YearItemSlice = prismic.SharedSlice<
  "year_item",
  YearItemSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      CategoriesDocument,
      CategoriesDocumentData,
      CategoriesDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      MarqueeDocument,
      MarqueeDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      ProjectDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      YearsDocument,
      YearsDocumentData,
      YearsDocumentDataSlicesSlice,
      AllDocumentTypes,
      ProjectImagesSlice,
      ProjectImagesSliceDefaultPrimary,
      ProjectImagesSliceVariation,
      ProjectImagesSliceDefault,
      YearItemSlice,
      YearItemSliceDefaultPrimary,
      YearItemSliceVariation,
      YearItemSliceDefault,
    };
  }
}
