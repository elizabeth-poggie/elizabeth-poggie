import { Text } from "../../typography/text/text";
import styles from "./pill-button.module.scss";

type Color = "black" | "white";

interface IProps {
  title: string;
  color?: Color;
  onClick: () => void;
}

export function PillButton({ title, color = "black", onClick }: IProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <Text variant="subheading2">{title}</Text>
    </button>
  );
}
