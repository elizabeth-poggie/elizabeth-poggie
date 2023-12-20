import { Image } from "../../components/display/image/image";
import { Text } from "../../components/typography/text/text";
import { IProjectDetails } from "../../interfaces/project";
import styles from "./project-details.module.scss";
import markdownStyles from "../../styles/markdown-styles.module.scss";
import { Link } from "../../components/navigation/link/link";
import { ScrollableContainer } from "../../components/layout/scrollable-container/scrollable-container";

interface IProps {
  projectDetails: IProjectDetails;
}

export function ProjectDetails({ projectDetails }: IProps) {
  return (
    <div className={styles.container}>
      <Image src={projectDetails.coverSrc} variant="lead" />
      <div className={styles.info}>
        <div className={styles.leftContent}>
          <div className={styles.title}>
            <Text variant="title">{projectDetails.title}</Text>
          </div>
          <Text variant="p">{projectDetails.organization}</Text>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: projectDetails.content }}
          />
        </div>
      </div>
      {projectDetails.gallerySrcs ? (
        <ScrollableContainer scrollDirection="horizontal" heightMultiplier={80}>
          {projectDetails.gallerySrcs.map((src: string) => (
            <div className={styles.imageContainer}>
              <Image src={src} />
            </div>
          ))}
        </ScrollableContainer>
      ) : null}
    </div>
  );
}
