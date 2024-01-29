import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { IProject } from "../../interfaces/project";
import styles from "./projects.module.scss";
import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import {
  ListItem,
  ListItemCategories,
} from "../../components/display/list-item/list-item";
import { ListLayout } from "../../components/layout/list-layout/list-layout";

interface IProps {
  allProjects: IProject[];
}

export function Projects({ allProjects }: IProps) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const imageRef = React.useRef(null);

  const onMouseEnter = (projectIndex: number) => {
    setImageSrc(allProjects[projectIndex].coverSrc);
    imageRef.current.classList.add(styles.fade);
  };

  const onMouseLeave = () => {
    setImageSrc(null);
    imageRef.current.classList.remove(styles.fade);
  };

  const renderPhoto = () => {
    return (
      <div ref={imageRef} className={styles.projectImage}>
        {imageSrc ? <Image src={imageSrc} variant="thumbnail" /> : null}
      </div>
    );
  };

  const renderList = () => {
    return (
      <>
        {allProjects.map((project: IProject, i: number) => {
          return (
            <div
              key={project.slug}
              onMouseEnter={() => onMouseEnter(i)}
              onMouseLeave={onMouseLeave}
            >
              <ListItem
                title={project.title}
                href={`/projects/${project.slug}`}
                rightContent={<Text variant="subheading">{project.year}</Text>}
                subContent={
                  <ListItemCategories categories={project.categories} />
                }
              />
              {i === allProjects.length - 1 ? null : <HorizontalLine />}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <ListLayout
      title="Projects"
      leftContent={renderPhoto()}
      listContent={renderList()}
    />
  );
}
