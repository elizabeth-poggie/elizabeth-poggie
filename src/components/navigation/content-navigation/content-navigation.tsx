import { NavItem } from "../../../interfaces/navigation";
import { Text } from "../../typography/text/text";
import { Link } from "../link/link";
import styles from "./content-navigation.module.scss";

interface IProps {
  navItems: NavItem[];
}

export function ContentNavigation({ navItems }: Readonly<IProps>) {
  return (
    <nav>
      <ul>
        {navItems.map((item) => {
          return (
            <li key={item.href}>
              <Link href={item.href}>
                <Text>{item.name}</Text>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
