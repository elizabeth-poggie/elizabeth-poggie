import { ILink } from "../../../interfaces/note";
import { Text } from "../../typography/text/text";
import { Link } from "../link/link";
import styles from "./nav-bar.module.scss";

// TODO - add footer item hover animation

interface IProps {
  navItems: ILink[];
}

export function NavBar({ navItems }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {navItems.map((item) => {
          return (
            <div key={item.href}>
              <Link href={item.href}>
                <Text variant="h2">{item.text}</Text>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
