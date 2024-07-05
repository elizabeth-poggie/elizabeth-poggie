export interface ILink {
  text: string;
  href: string;
}

/**
 * Note
 * @interface INote
 * @member {string} slug point of access
 * @member {string} title header
 * @member {string} subtitle subheader
 * @member {string} category group of belonging
 * @member {string} type type of content
 * @member {string} number number in series
 * @member {string} created date of creation
 * @member {string} updated date of update
 * @member {string} coverSrc path to cover image
 * @member {string} gallerySrc path to gallery images
 * @member {ILink} link link to related content
 * @member {string} content note content in markdown
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
   * Group of belonging, Sorting relies on this member
   * @example "User Interfaces"
   */
  category: string;
  /**
   * Type of content, Sorting relies on this member
   * @example "Lecture"
   * @example "Strategy"
   */
  type?: string;
  /**
   * number in series
   * @example 1
   */
  number: number; // TODO - maybe replace with better logic in the future
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
   */
  gallerySrc?: string[];
  /**
   * Link to related content
   * @type ILink
   * @example {text: "slides", href: "path/to/slides.pdf"}
   */
  link?: ILink;
  /**
   * Markdown
   */
  color?: string;
  /**
   * Base URL of where the images are located in the public && content folders
   * Used to enable relative linking for static website generators
   */
  baseFolder?: string;
  /**
   * Markdown
   */
  content?: string;
}
