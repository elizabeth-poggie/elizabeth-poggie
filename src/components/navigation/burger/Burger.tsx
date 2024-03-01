import { Image } from "../../display/image/image";
import styles from "./Burger.module.scss";

interface IProps {}

export function Burger({}: IProps) {
  return (
    <div className={styles.burger}>
      <Image src="/assets/svg/burger-menu.svg" />
    </div>
  );
}
