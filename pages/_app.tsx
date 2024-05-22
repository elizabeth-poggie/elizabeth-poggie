import { AppProps } from "next/app";
import React, { useState } from "react";
import styles from "../src/styles/app.module.scss";
// @ts-ignore: Hacky work around to make my page not have visible scroll bars
import noScrollStyles from "../src/styles/app.css";
import { useMDXComponents } from "../src/mdx-components/useMDXComponents";
import { MDXProvider } from "@mdx-js/react";
export default function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Avoiding hydration issues lol
   */
  const [mounted, setMounted] = useState(false);
  /**
   * Read more about this logic here
   * https://nextjs.org/docs/pages/building-your-application/configuring/mdx
   */
  const components = useMDXComponents({});

  React.useEffect(() => {
    /**
     * Read more about editing the body tag of Next.js applications here
     * https://smnh.me/add-class-to-body-tag-in-nextjs
     */
    document.body.className = styles.layout;
    setMounted(true);
  });

  if (!mounted) {
    // Optionally render a loader or nothing while mounting to avoid hydration mismatch
    return null;
  }
  return (
    <MDXProvider components={components}>
      <Component style={noScrollStyles} {...pageProps} />
    </MDXProvider>
  );
}
