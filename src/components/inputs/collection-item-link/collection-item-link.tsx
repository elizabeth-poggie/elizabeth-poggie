import { cs } from "../../../utils/helpers/classHelpers";
import { Link } from "../../navigation/link/link";
import styles from "./collection-item-link.module.scss";

const colorToStyleMap = {
  default: styles.default,
  green: styles.green,
  yellow: styles.yellow,
};

interface IProps {
  children: React.ReactNode;
  color?: string;
  href: string;
}

export function CollectionItemLink({
  children,
  color = "default",
  href,
}: IProps) {
  return (
    <div className={cs(styles.collectionItem, colorToStyleMap[color])}>
      <Link href={href}>{children}</Link>
    </div>
  );
}
