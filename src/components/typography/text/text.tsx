import { cs } from "../../../utils/helpers/classHelpers";
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

export type TextColor = "white" | "grey" | "green" | "offWhite" | "yellow";

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
  id?: string; // probs need to extend the attribute class here instead lol
}

export function Text({
  children,
  id,
  variant = "p",
  align = "left",
  color = "offWhite",
  style = "normal",
}: Readonly<ITextProps>) {
  return (
    <span
      id={id}
      className={cs(
        textVariantToStyleMap[variant],
        alignToStyleMap[align],
        styleToStyleMap[style],
        colorToStyleMap[color]
      )}
    >
      {children}
    </span>
  );
}
