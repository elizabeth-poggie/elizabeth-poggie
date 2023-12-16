import { Text } from "../../typography/text/text";
import { Link } from "../link/link";
import styles from "./footer.module.scss";

interface Props {}

export function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <Text>About</Text>
      </Link>
      <Link href="/projects">
        <Text>Projects</Text>
      </Link>
      <Link href="/art">
        <Text>Art</Text>
      </Link>
    </div>
  );
}
