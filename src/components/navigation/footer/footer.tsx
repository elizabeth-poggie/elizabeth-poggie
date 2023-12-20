import { FooterItem } from "../../../interfaces/footer";
import { Text } from "../../typography/text/text";
import { Link } from "../link/link";
import styles from "./footer.module.scss";

// TODO - add footer item hover animation

interface Props {
  footerItems: Array<FooterItem>;
}

export function Footer({ footerItems }: Props) {
  return (
    <div className={styles.footer}>
      {footerItems.map((item) => {
        return (
          <Link href={item.href}>
            <Text variant="h1">{item.name}</Text>
          </Link>
        );
      })}
    </div>
  );
}
