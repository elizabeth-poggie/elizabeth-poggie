import { cs } from "../../../utils/helpers/classHelpers";
import { default as NextImage } from "next/image";
import styles from "./image.module.scss";
import path from "path";

const imageVariantToStyleMap = {
  default: styles.default,
  cover: styles.cover,
  thumbnail: styles.thumbnail,
  lead: styles.lead,
  listItem: styles.listItem,
  galleryItem: styles.galleryItem,
  galleryDetailsItem: styles.galleryDetailsItem,
};

const imageVariantToContainerStyleMap = {
  default: styles.defaultContainer,
  cover: styles.coverContainer,
  thumbnail: styles.thumbnailContainer,
  lead: styles.leadContainer,
  listItem: styles.listItemContainer,
  galleryItem: styles.galleryItemContainer,
  galleryDetailsItem: styles.galleryDetailsItemContainer,
};

const imageFilterToStyleMap = {
  default: null,
  darken: styles.darken,
};

type ImageFilter = "default" | "darken";
type ImageVariant =
  | "default"
  | "cover"
  | "thumbnail"
  | "lead"
  | "listItem"
  | "galleryItem"
  | "galleryDetailsItem";

export interface IImageProps {
  /**
   * path of the image
   */
  src?: string;
  /**
   * path of the image
   */
  alt?: string;
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
  /**
   * custom image loaders for MDX Content
   *
   * @example "darken"
   */
  customImageLoader?: ({ src }) => string;
}

export function Image({
  src,
  alt = "didn't load lol",
  variant = "default",
  filter = "default",
  customImageLoader,
}: IImageProps) {
  /**
   * NextImage guarantees faster up page loads and better performance. In this use case, the prop `fill` will always be set to true since
   * we are *always* dynamically accessing our images.
   *
   * FUTURE NOTE: When using `fill`, the container element must have `position: relative` and `display: block`
   *
   * More on the `fill` prop can be seen here ➡️ https://nextjs.org/docs/pages/building-your-application/optimizing/images#image-sizing
   */
  const fill = true;

  return (
    <div className={imageVariantToContainerStyleMap[variant]}>
      <NextImage
        loader={customImageLoader}
        className={cs(
          imageVariantToStyleMap[variant],
          imageFilterToStyleMap[filter]
        )}
        src={src}
        alt={alt}
        fill={fill}
      />
    </div>
  );
}
