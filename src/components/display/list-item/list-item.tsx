import { Category } from "../../../interfaces/category";
import { Link } from "../../navigation/link/link";
import { Text } from "../../typography/text/text";
import styles from "./list-item.module.scss";

// TODO - add list item hover animation

interface Props {
  title: string;
  rightContent?: React.ReactNode;
  subContent?: React.ReactNode;
  href?: string;
}

export function ListItem({ title, rightContent, subContent, href }: Props) {
  return (
    <Link href={href}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Text variant="h1">{title}</Text>
          {rightContent}
        </div>
        {subContent}
      </div>
    </Link>
  );
}

interface ListItemCategoriesProps {
  categories: Category[];
}

/**
 *
 * Helper function for ListItem subContent
 *
 */
export function ListItemCategories({ categories }: ListItemCategoriesProps) {
  return (
    <div className={styles.categories}>
      {categories.map((category: string, i: number) => {
        return (
          <>
            <Text variant="subheading" style="italics">
              {category}
            </Text>
            {i === categories.length - 1 ? null : (
              <Text variant="subheading" style="italics">
                , &nbsp;
              </Text>
            )}
          </>
        );
      })}
    </div>
  );
}
