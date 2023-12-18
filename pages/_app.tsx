import { AppProps } from "next/app";
import React from "react";
import styles from "../src/styles/app.module.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Read more about editing the body tag of Next.js applications here
   * https://smnh.me/add-class-to-body-tag-in-nextjs
   */
  React.useEffect(() => {
    document.body.className = styles.layout;
  });
  return <Component {...pageProps} />;
}
