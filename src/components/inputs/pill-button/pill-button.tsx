import { cs } from "../../../utils/classHelpers";
import { Text } from "../../typography/text/text";
import styles from "./pill-button.module.scss";

const colorToStyleMap = {
  default: styles.default,
  green: styles.green,
  yellow: styles.yellow,
};

// TODO - maybe extend the TextColor type here idk
type PillColor = "default" | "green" | "yellow";

interface IProps {
  title: string;
  color?: PillColor;
  onClick: () => void;
}

// i'm making an assumption here that for every pill button i make, i need to make the text
export function PillButton({ title, color = "default", onClick }: IProps) {
  return (
    <button
      className={cs(styles.button, colorToStyleMap[color])}
      onClick={onClick}
    >
      <Text
        variant="subheading2"
        color={color === "default" ? undefined : color}
      >
        {title}
      </Text>
    </button>
  );
}
