import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Text } from "../../typography/text/text";
import styles from "./link.module.scss";

interface Props extends NextLinkProps {
  children: React.ReactNode;
}

export function Link({ children, ...args }: Props) {
  return (
    <NextLink {...args} className={styles.link}>
      {children}
    </NextLink>
  );
}
