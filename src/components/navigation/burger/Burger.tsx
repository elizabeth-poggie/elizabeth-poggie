import { slide as Menu } from "react-burger-menu";
import { ILink } from "../../../interfaces/note";
import { Link } from "../link/link";
import { Cross } from "hamburger-react";
import { Text } from "../../typography/text/text";
import React from "react";

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
          <div key={item.href}>
            <Link href={item.href}>
              <Text variant="h2">{item.text}</Text>
            </Link>
          </div>
        );
      })}
    </Menu>
  );
}
