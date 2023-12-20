import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { Project } from "../../interfaces/project";
import styles from "./projects.module.scss";
import React from "react";
import { Link } from "../../components/navigation/link/link";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { cs } from "../../utils/helpers/classHelpers";
import { Category } from "../../interfaces/category";
import {
  ListItem,
  ListItemCategories,
} from "../../components/display/list-item/list-item";

interface Props {
  allProjects: Project[];
}

export function Projects({ allProjects }: Props) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [height, setHeight] = React.useState<number>(0);
  const observedHeightRef = React.useRef(null);
  const imageRef = React.useRef(null);

  React.useEffect(() => {
    // custom scrolling behavior - prevent body from scrolling
    document.body.style.overflow = "hidden";

    // custom padding - configure div to match title and horizontal line height
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
      // clean up custom scrolling behavior
      document.body.style.overflow = "scroll";
      // clean up resize observer
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

  // TODO - make a "ListItem" component that centralizes the project item logic in on
  // TODO - add "hover" behavior
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
        <div className={styles.scrollableList}>
          {allProjects.map((project: Project, i: number) => {
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
        </div>
      </div>
    </div>
  );
}
