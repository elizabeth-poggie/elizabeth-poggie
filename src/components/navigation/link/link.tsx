import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styles from "./link.module.scss";

interface IProps extends NextLinkProps {
  children: React.ReactNode;
}

export function Link({ children, ...args }: IProps) {
  return (
    <NextLink {...args} className={styles.link}>
      {children}
    </NextLink>
  );
}
