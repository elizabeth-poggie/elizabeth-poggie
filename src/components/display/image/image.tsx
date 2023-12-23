import { cs } from "../../../utils/helpers/classHelpers";
import { default as NextImage } from "next/image";
import styles from "./image.module.scss";

const imageVariantToStyleMap = {
  default: styles.default,
  cover: styles.cover,
  thumbnail: styles.thumbnail,
  lead: styles.lead,
  listItem: styles.listItem,
};

const imageVariantToContainerStyleMap = {
  default: styles.defaultContainer,
  cover: styles.coverContainer,
  thumbnail: styles.thumbnailContainer,
  lead: styles.leadContainer,
};

const imageFilterToStyleMap = {
  default: null,
  darken: styles.darken,
};

type ImageFilter = "default" | "darken";
type ImageVariant = "default" | "cover" | "thumbnail" | "lead" | "listItem";

interface IProps {
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

export function Image({
  src,
  variant = "default",
  filter = "default",
}: IProps) {
  return (
    <div className={imageVariantToContainerStyleMap[variant]}>
      <NextImage
        className={cs(
          imageVariantToStyleMap[variant],
          imageFilterToStyleMap[filter]
        )}
        src={src}
        alt="yeet"
        fill={true}
      />
    </div>
  );
}
