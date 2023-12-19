import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { Footer } from "../src/components/navigation/footer/footer";
import { About } from "../src/views/about/about";
import { FooterItem } from "../src/interfaces/footer";

// TODO - maybe come up with a better way to control this routing or make it so the footer is only defined in one place
export const footerItems: Array<FooterItem> = [
  {
    href: "/",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/art",
    name: "Art",
  },
];

// TODO - set up a provider for global information
export default function Index() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <About />
      <Footer footerItems={footerItems} />
    </>
  );
}
