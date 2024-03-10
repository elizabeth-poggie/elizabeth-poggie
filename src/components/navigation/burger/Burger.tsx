import { slide as Menu } from "react-burger-menu";
import { ILink } from "../../../interfaces/note";
import { Link, TextLink } from "../link/link";
import { Cross } from "hamburger-react";
import { Text } from "../../typography/text/text";
import React from "react";
import styles from "./Burger.module.scss";

interface IProps {
  navItems?: ILink[];
}
/**
 * See more cool burgers here
 * @link https://hamburger-react.netlify.app/
 */
export function Burger({ navItems }: IProps) {
  const [isOpen, setOpen] = React.useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Menu
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      customCrossIcon={false}
      customBurgerIcon={<Cross toggled={isOpen} toggle={setOpen} size={22} />}
    >
      {navItems?.map((item) => {
        return (
          <div key={item.href} className={styles.item}>
            <TextLink href={item.href} color="white">
              {item.text}
            </TextLink>
          </div>
        );
      })}
    </Menu>
  );
}
