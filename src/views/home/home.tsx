import { navItems } from "../../../pages";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { CollectionItemLink } from "../../components/navigation/collection-item-link/collection-item-link";
import { Link, TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./home.module.scss";

export function Home() {
  const filteredItems = navItems.filter((note) => note.text !== "Home");
  const renderNavBar = () => {
    return (
      <nav className={styles.navigation}>
        {filteredItems.map((item, index) => {
          return (
            <>
              <div className={styles.navItemWrapper}>
                <TextLink href={item.href} variant="h2">
                  {item.text}
                </TextLink>
              </div>
              {index < filteredItems.length - 1 && (
                <span className={styles.dotWrapper}> • </span>
              )}
            </>
          );
        })}
      </nav>
    );
  };
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Text variant="title" align="center" gutterBottom={4}>
          Elizabeth Poggie
        </Text>
        {renderNavBar()}
        <div className={styles.coolText}>
          <Text variant="p" align="center" gutterBottom={8}>
            I’m currently a lecturer at John Abbott College and manage various
            events throughout Montreal.
          </Text>
          <Link href="mailto:elizabethpoggie@gmail.com">
            <PillButton onClick={() => null} title="Contact me" />
          </Link>
        </div>
      </section>
    </div>
  );
}
