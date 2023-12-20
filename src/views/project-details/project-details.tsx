import { Image } from "../../components/display/image/image";
import { Text } from "../../components/typography/text/text";
import { IProjectDetails } from "../../interfaces/project";
import styles from "./project-details.module.scss";
import markdownStyles from "../../styles/markdown-styles.module.scss";
import { Link } from "../../components/navigation/link/link";

interface IProps {
  projectDetails: IProjectDetails;
}

export function ProjectDetails({ projectDetails }: IProps) {
  return (
    <div className={styles.container}>
      <Image src={projectDetails.coverSrc} variant="lead" />
      <div className={styles.info}>
        <div className={styles.title}>
          <Text variant="h1">{projectDetails.title}</Text>
          <Text variant="p">{projectDetails.organization}</Text>
          <Link href={projectDetails.referenceLink}>
            <Text variant="subheading">Read more here</Text>
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: projectDetails.content }}
          />
        </div>
      </div>
    </div>
  );
}
