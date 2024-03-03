import { ITextProps, Text } from "../../typography/text/text";
import styles from "./text-button.module.scss";

interface IProps extends ITextProps {
  onClick: () => void;
}

export function TextButton({ children, onClick, ...args }: IProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Text {...args}>{children}</Text>
    </button>
  );
}
