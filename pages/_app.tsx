import { AppProps } from "next/app";
import React, { useState } from "react";
import styles from "../src/styles/app.module.scss";
// @ts-ignore: Hacky work around to make my page not have visible scroll bars
import noScrollStyles from "../src/styles/app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    /**
     * Read more about editing the body tag of Next.js applications here
     * https://smnh.me/add-class-to-body-tag-in-nextjs
     */
    document.body.className = styles.layout;
  });

  return <Component style={noScrollStyles} {...pageProps} />;
}
