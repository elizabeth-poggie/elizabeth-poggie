import { AppProps } from "next/app";
import React from "react";
import styles from "../src/styles/app.module.scss";
// @ts-ignore: Hacky work around to make my page not have visible scroll bars
import noScrollStyles from "../src/styles/app.css";
import { useMDXComponents } from "../src/mdx-components/useMDXComponents";
import { MDXProvider } from "@mdx-js/react";
export default function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Read more about editing the body tag of Next.js applications here
   * https://smnh.me/add-class-to-body-tag-in-nextjs
   */
  React.useEffect(() => {
    document.body.className = styles.layout;
  });

  /**
   * Read more about this logic here
   * https://nextjs.org/docs/pages/building-your-application/configuring/mdx
   *
   */
  const components = useMDXComponents({});
  return (
    <MDXProvider components={components}>
      <Component style={noScrollStyles} {...pageProps} />
    </MDXProvider>
  );
}
