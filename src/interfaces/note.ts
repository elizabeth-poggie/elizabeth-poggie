export interface ILink {
  text: string;
  href: string;
}

export type CategoryToLinkMap = {
  [key in string]: ILink[];
};

/**
 * Note
 * @interface INote
 */
export interface INote {
  /**
   * Point of access
   * @example "2024-01-26-Intro-to-Programming"
   */
  slug: string;
  /**
   * Header
   * @example "Intro to JavaScript"
   */
  title: string;
  /**
   * Subheader
   * @example "as taught by Poggie in 2024"
   * @example "as made by Nana in 2012"
   */
  subtitle?: string;
  /**
   * Contains a selection of related categories
   * @example "John Abbott College" "Recipes"
   */
  collection?: string;
  /**
   * Group of belonging
   * @example "User Interfaces" "Web 1"
   */
  category: string;
  /**
   * Type of content
   * @example "Lecture" "Quiz Answers" "Assignment"
   */
  subcategory?: string;
  /**
   * @deprecated use subcategory instead
   */
  type?: string;
  /**
   * Date of creation in UTC
   */
  created: string;
  /**
   * Date of update in UTC
   */
  updated?: string;
  /**
   * path to cover image
   */
  coverSrc?: string;
  /**
   * paths to gallery images
   * @deprecated using mdx files now, no need for fancy galleries anymore
   */
  gallerySrc?: string[];
  /**
   * Markdown
   * @deprecated creating a brand strategy, colours will be handled differently
   */
  color?: string;
  /**
   * Filepath of where a given notes images are located in the /public
   * Used to enable relative linking while keeping notes organized in a component driven style
   */
  assetPath?: string;
  /**
   * @deprecated use assetPath instead
   */
  baseFolder?: string;
  /**
   * Markdown
   * @deprecated using MDX now
   */
  content?: string;
  /**
   * Where does it belong in the order
   */
  number?: number;
}

export type Frontmatter = Omit<INote, "content">;
