import { cs } from "../../../utils/classHelpers";
import styles from "./text.module.scss";

const textVariantToStyleMap = {
  title: styles.title,
  subheading: styles.subheading,
  subheading2: styles.subheading2,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  p: styles.p,
};

const alignToStyleMap = {
  left: null,
  center: styles.center,
  right: styles.right,
  justify: styles.justify,
};

const styleToStyleMap = {
  normal: null,
  italics: styles.italics,
  uppercase: styles.uppercase,
  capitalize: styles.capitalize,
};

const colorToStyleMap = {
  white: styles.white,
  grey: styles.grey,
  green: styles.green,
  offWhite: styles.offWhite,
  yellow: styles.yellow,
};

const decorationToStyleMap = {
  none: null,
  underline: styles.underline,
  bold: styles.bold,
};

type TextAlign = "left" | "center" | "right" | "justify";

type TextVariant =
  | "title"
  | "subheading"
  | "subheading2"
  | "h1"
  | "h2"
  | "h3"
  | "p";

type TextStyle = "normal" | "italics" | "uppercase" | "capitalize";

type TextDecoration = "none" | "underline" | "bold";

type TextColor = "white" | "grey" | "green" | "offWhite" | "yellow";

export interface ITextProps {
  children: React.ReactNode;
  /**
   * predefined style variants
   *
   * @example "title"
   */
  variant?: TextVariant;
  /**
   * text content alignment
   *
   * @example "center"
   */
  align?: TextAlign;
  /**
   * set different font styles
   *
   * @example "italics"
   */
  style?: TextStyle;
  /**
   * set text color
   * @example "grey"
   */
  color?: TextColor;
  /**
   * set text decoration
   * @example "underline"
   */
  decoration?: TextDecoration;
  /**
   * Bottom padding as a function of $unit
   * @example 1
   */
  gutterBottom?: number;
  /**
   * Top padding as a function of $unit
   * @example 1
   */
  gutterCeiling?: number;
  id?: string; // probs need to extend the attribute class here instead lol
}

export function Text({
  children,
  id,
  variant = "p",
  align = "left",
  color = "offWhite",
  style = "normal",
  decoration = "none",
  gutterBottom = 0,
  gutterCeiling = 0,
}: Readonly<ITextProps>) {
  return (
    <span
      id={id}
      className={cs(
        textVariantToStyleMap[variant],
        alignToStyleMap[align],
        styleToStyleMap[style],
        colorToStyleMap[color],
        decorationToStyleMap[decoration]
      )}
      style={{
        display: gutterBottom || gutterCeiling ? `block` : `inline`, // adding padding assumes you are a block type. default is inline for links.
        paddingBottom: `calc(${gutterBottom} * 5px)`,
        paddingTop: `calc(${gutterCeiling} * 5px)`,
      }}
    >
      {children}
    </span>
  );
}
