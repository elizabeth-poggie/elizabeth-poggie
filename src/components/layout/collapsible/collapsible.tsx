import { useState } from "react";
import { Text } from "../../typography/text/text";
import styles from "./collapsible.module.scss";

export function Collapsible() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className={`${styles.collapsible} ${isOpen ? styles.active : ""}`}
        onClick={handleToggle}
      >
        Open Collapsible
      </button>
      {isOpen && (
        <div className={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </div>
      )}
    </>
  );
}
