import styles from "./text.module.scss";

const variantToStyleMap = {
  title: styles.title,
  subheading: styles.subheading,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  p: styles.p,
};

// TODO - Support the below types if i get bored

// type colours = "default" | "grey";
// type size = "default" | "xs" | "sm" | "md" | "lg";
// type weight = "default" | "bold" | "thin";
// type textTransform = "default" | "lowercase" | "uppercase" | "capitalize";
// type align = "left" | "center" | "right";
// type overflowWrap = "normal" | "anywhere" | "break-word";
type variant = "title" | "subheading" | "h1" | "h2" | "h3" | "p";

interface Props {
  /**
   * Predefined style variants
   *
   * @example "title"
   */
  variant?: variant;
  children: string;
}

export function Text({ variant = "p", children }: Props) {
  return <div className={`${variantToStyleMap[variant]}`}>{children}</div>;
}
