import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { IProject } from "../../interfaces/project";
import styles from "./projects.module.scss";
import React from "react";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { cs } from "../../utils/helpers/classHelpers";
import {
  ListItem,
  ListItemCategories,
} from "../../components/display/list-item/list-item";
import { ScrollableContainer } from "../../components/layout/scrollable-container/scrollable-container";

interface IProps {
  allProjects: IProject[];
}

export function Projects({ allProjects }: IProps) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [height, setHeight] = React.useState<number>(0);
  const observedHeightRef = React.useRef(null);
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    // custom styling - configure project image div padding to match title and horizontal line height
    if (!observedHeightRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (
        observedHeightRef.current &&
        observedHeightRef.current.offsetHeight !== height
      ) {
        setHeight(observedHeightRef.current.offsetHeight);
      }
    });
    resizeObserver.observe(observedHeightRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [observedHeightRef]);

  const onMouseEnter = (projectIndex: number) => {
    setImageSrc(allProjects[projectIndex].coverSrc);
    imageRef.current.classList.add(styles.fade);
  };
  const onMouseLeave = () => {
    setImageSrc(null);
    imageRef.current.classList.remove(styles.fade);
  };

  return (
    <div className={styles.container}>
      <div
        ref={imageRef}
        className={cs(styles.projectImage)}
        style={{ paddingTop: `${height}px` }}
      >
        {imageSrc ? <Image src={imageSrc} variant="thumbnail" /> : null}
      </div>
      <div className={styles.projectsList}>
        <div ref={observedHeightRef}>
          <Text variant="title">Projects</Text>
          <HorizontalLine />
        </div>
        <div className={styles.scrollableContainer}>
          <ScrollableContainer>
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
                    rightContent={
                      <Text variant="subheading">{project.year}</Text>
                    }
                    subContent={
                      <ListItemCategories categories={project.categories} />
                    }
                  />
                  {i === allProjects.length - 1 ? null : <HorizontalLine />}
                </div>
              );
            })}
          </ScrollableContainer>
        </div>
      </div>
    </div>
  );
}
