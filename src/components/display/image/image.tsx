import styles from "./image.module.scss";

const imageVariantToStyleMap = {
  default: null,
  cover: styles.coverImage,
};

const imageVariantToContainerStyleMap = {
  default: null,
  cover: styles.coverContainer,
};

type ImageVariant = "default" | "cover";

interface Props {
  /**
   * path of the image
   */
  src: string;
  /**
   * predefined style variants
   *
   * @example "cover"
   */
  variant?: ImageVariant;
}

// TODO - maybe make a proper 100vh cover variant
export function Image({ src, variant = "default" }: Props) {
  return (
    <div className={imageVariantToContainerStyleMap[variant]}>
      <img className={imageVariantToStyleMap[variant]} src={src} />
    </div>
  );
}
