import { navItems } from "../../../pages";
import { CollectionItemLink } from "../../components/navigation/collection-item-link/collection-item-link";
import { TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./home.module.scss";

export function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Text variant="title" align="center" gutterBottom={4}>
          Elizabeth Poggie
        </Text>
        <nav className={styles.navigation}>
          {navItems.map((item, index) => {
            return (
              <>
                <div className={styles.navItemWrapper}>
                  <TextLink href={item.href} variant="h2">
                    {item.text}
                  </TextLink>
                </div>
                {index < navItems.length - 1 && (
                  <span className={styles.dotWrapper}> • </span>
                )}
              </>
            );
          })}
        </nav>
        <div className={styles.coolText}>
          <Text variant="p" align="center">
            I’m currently a lecturer at John Abbott College and also manage
            various events throughout Montreal.
          </Text>
        </div>
      </section>
    </div>
  );
}
