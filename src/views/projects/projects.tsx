import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { Project, ProjectCategory } from "../../interfaces/project";
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
        {allProjects.map((project: Project, i: number) => {
          return (
            <>
              <div key={project.slug} className={styles.project}>
                <div className={styles.projectTitle}>
                  <Text variant="h1">{project.title}</Text>
                  <Text variant="subheading">{project.year}</Text>
                </div>
                <div className={styles.projectCategories}>
                  {project.categories.map(
                    (category: ProjectCategory, i: number) => {
                      return (
                        <>
                          <Text variant="subheading" style="italics">
                            {category}
                          </Text>
                          {i === project.categories.length - 1 ? null : (
                            <Text variant="subheading" style="italics">
                              , &nbsp;
                            </Text>
                          )}
                        </>
                      );
                    }
                  )}
                </div>
              </div>
              {i === allProjects.length - 1 ? null : <hr />}
            </>
          );
        })}
      </div>
    </div>
  );
}
