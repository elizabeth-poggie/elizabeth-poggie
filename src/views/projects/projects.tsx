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
import { ScrollableContainer } from "../../components/layout/scrollable-container/scrollable-container";

interface Props {
  allProjects: Project[];
}

export function Projects({ allProjects }: Props) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [height, setHeight] = React.useState<number>(0);
  const observedHeightRef = React.useRef(null);
  const imageRef = React.useRef(null);

  /** 
  TODO - Make it such that when there is a scroll event outside of this list (e.g. the body),
  it is this list that is updated instead

  similar to this behavior: https://magazine.ssense.com/

  this might be the place to start => https://codepen.io/fcalderan/pen/qBYyRgE?editors=0010 
  orrrr => https://stackoverflow.com/questions/9280258/prevent-body-scrolling-but-allow-overlay-scrolling
  oooooorrrrrr google this => react scroll overaly and not body when scrolling

  this might be the closest thing to what i want actually lol
  or => https://jsfiddle.net/csdigitaldesign/NDx47/ or https://stackoverflow.com/questions/16094785/have-a-fixed-position-div-that-needs-to-scroll-if-content-overflows
  
  TODO - maybe also fix the scrollbar to be outside the div instead like this => https://stackoverflow.com/questions/74462846/place-scroll-bar-outside-div
  */

  React.useEffect(() => {
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
        <ScrollableContainer heightMultiplier={120}>
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
        </ScrollableContainer>
      </div>
    </div>
  );
}
