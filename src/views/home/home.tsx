import { navItems } from "../../../pages";
import { PillButton } from "../../components/inputs/pill-button/pill-button";
import { CollectionItemLink } from "../../components/navigation/collection-item-link/collection-item-link";
import { Link, TextLink } from "../../components/navigation/link/link";
import { Text } from "../../components/typography/text/text";
import { INote } from "../../interfaces/note";
import styles from "./home.module.scss";

export function Home() {
  const handler = () => {};
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
          <Text variant="p" align="center" gutterBottom={8}>
            I’m currently a lecturer at John Abbott College and also manage
            various events throughout Montreal.
          </Text>
          <Link href="https://johnabbott-my.sharepoint.com/:f:/g/personal/elizabeth_poggie_johnabbott_qc_ca/EmJG4r5e94RGjUIPNISK0bYBjbBUlnZy6kfKsjvHeByVIg?e=9sS4Uv">
            <PillButton onClick={() => null} title="Download Test 1 here" />
          </Link>
        </div>
      </section>
    </div>
  );
}
