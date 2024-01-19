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
  listItem: styles.listItemContainer,
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
        className={cs(
          imageVariantToStyleMap[variant],
          imageFilterToStyleMap[filter]
        )}
        src={src}
        alt="didn't load lol"
        fill={fill}
      />
    </div>
  );
}
