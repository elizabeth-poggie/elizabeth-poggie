import Head from "next/head";
import Meta from "../src/views/meta/meta";
import { INote } from "../src/interfaces/note";
import { Home } from "../src/views/home/home";
import { getAllCourses } from "../src/utils/api";
import { Burger } from "../src/components/navigation/burger/Burger";
import { navItems } from ".";

export default function AboutPage() {
  return (
    <>
      <Meta />
      <Head>
        <title>Elizabeth Poggie • About</title>
      </Head>
      <Burger navItems={navItems} />
      <Home />
    </>
  );
}
