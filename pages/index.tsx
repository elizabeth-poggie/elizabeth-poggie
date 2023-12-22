import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { NavBar } from "../src/components/navigation/nav-bar/nav-bar";
import { About } from "../src/views/about/about";
import { NavItem } from "../src/interfaces/footer";

// TODO - maybe come up with a better way to control this routing or make it so the footer is only defined in one place
export const navItems: Array<NavItem> = [
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

export default function Index() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie</title>
      </Head>
      <NavBar navItems={navItems} />
      <About />
    </>
  );
}
