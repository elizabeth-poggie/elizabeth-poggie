import { Image } from "../../components/display/image/image";
import { Text } from "../../components/typography/text/text";
import { IProjectDetails } from "../../interfaces/project";
import styles from "./project-details.module.scss";
import markdownStyles from "../../styles/markdown-styles.module.scss";
import { Carousel } from "../../components/layout/scrollable-container/scrollable-container";

interface IProps {
  projectDetails: IProjectDetails;
}

export function ProjectDetails({ projectDetails }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentHeader}>
        <div className={styles.leadImageContainer}>
          <Image src={projectDetails.coverSrc} variant="lead" />
        </div>
        <div className={styles.contentDetails}>
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
      </div>
      {projectDetails.gallerySrcs?.length ? (
        <div className={styles.carouselContainer}>
          <Carousel>
            {projectDetails.gallerySrcs.map((src: string) => (
              <Image src={src} variant="listItem" />
            ))}
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}
