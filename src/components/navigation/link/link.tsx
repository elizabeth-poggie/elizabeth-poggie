import NextLink, { LinkProps as NextLinkProps } from "next/link";
import styles from "./link.module.scss";
import { ITextProps, Text } from "../../typography/text/text";

export interface ILinkProps extends NextLinkProps {
  children: React.ReactNode;
}

export function Link({ children, ...args }: ILinkProps) {
  return (
    <NextLink {...args} className={styles.link}>
      {children}
    </NextLink>
  );
}

interface ITextLinkProps extends ILinkProps, ITextProps {}

export function TextLink({ children, ...args }: ITextLinkProps) {
  return (
    <Link {...args}>
      <Text {...args}>{children}</Text>
    </Link>
  );
}
