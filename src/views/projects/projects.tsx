import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { Project } from "../../interfaces/project";
import styles from "./projects.module.scss";

interface Props {
  allProjects: Project[];
}

export function Projects({ allProjects }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.projectImage}>
        <Image src={allProjects[0].coverSrc} />
      </div>
      <div className={styles.projectsList}>
        <Text variant="title">Projects</Text>
        <hr />
        {allProjects.map((project: Project) => {
          return (
            <>
              <div key={project.slug} className={styles.project}>
                <div className={styles.projectTitle}>
                  <Text variant="h1">{project.title}</Text>
                  <Text variant="subheading">{project.year}</Text>
                </div>
                <div className={styles.projectCategories}>
                  {project.categories.map((category) => {
                    return (
                      <Text variant="subheading" style="italics">
                        {category}&#x2c; &nbsp;
                      </Text>
                    );
                  })}
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
