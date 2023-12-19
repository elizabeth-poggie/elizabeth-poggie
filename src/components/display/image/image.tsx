import { cs } from "../../../utils/helpers/classHelpers";
import styles from "./image.module.scss";

const imageVariantToStyleMap = {
  default: styles.default,
  cover: styles.coverImage,
};

const imageVariantToContainerStyleMap = {
  default: null,
  cover: styles.coverContainer,
};

const imageFilterToStyleMap = {
  default: null,
  darken: styles.darken,
};

type ImageFilter = "default" | "darken";
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
  /**
   * predefined image filters
   *
   * @example "darken"
   */
  filter?: ImageFilter;
}

export function Image({ src, variant = "default", filter = "default" }: Props) {
  return (
    <div className={imageVariantToContainerStyleMap[variant]}>
      <img
        className={cs(
          imageVariantToStyleMap[variant],
          imageFilterToStyleMap[filter]
        )}
        src={src}
      />
    </div>
  );
}
