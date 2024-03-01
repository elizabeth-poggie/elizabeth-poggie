import { Image } from "../../display/image/image";
import { slide as Menu } from "react-burger-menu";
import styles from "./Burger.module.scss";
// @ts-ignore: Hacky work around to make my page not have visible scroll bars
import defaultStyles from "../../../styles/app.css";

interface IProps {}

export function Burger({}: IProps) {
  return (
    <Menu customBurgerIcon={<Image src="/assets/svg/burger-menu.svg" />}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
    </Menu>
  );
}
