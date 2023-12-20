import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { Project, ProjectCategory } from "../../interfaces/project";
import styles from "./projects.module.scss";
import React from "react";
import { Link } from "../../components/navigation/link/link";
import { HorizontalLine } from "../../components/display/horizontal-line/horizontal-line";
import { cs } from "../../utils/helpers/classHelpers";

interface Props {
  allProjects: Project[];
}

export function Projects({ allProjects }: Props) {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [height, setHeight] = React.useState<number>(0);
  const observedHeightDiv = React.useRef(null);

  const scrollableDiv = React.useRef(null);
  // what should we do when scrolling occurs
  function runOnScroll(element) {
    // not the most exciting thing, but a thing nonetheless
    console.log(element);
  }

  React.useEffect(() => {
    // custom scrolling behavior - prevent body from scrolling
    document.body.style.overflow = "hidden";

    // custom padding - configure div to match title and horizontal line height
    if (!observedHeightDiv.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (observedHeightDiv.current.offsetHeight !== height) {
        setHeight(observedHeightDiv.current.offsetHeight);
      }
    });
    resizeObserver.observe(observedHeightDiv.current);

    return () => {
      // clean up custom scrolling behavior
      document.body.style.overflow = "scroll";
      // clean up resize observer
      resizeObserver.disconnect();
    };
  }, [observedHeightDiv.current]);

  const onMouseEnter = (projectIndex: number) => {
    setImageSrc(allProjects[projectIndex].coverSrc);
  };
  const onMouseLeave = () => {
    setImageSrc(null);
  };

  return (
    <div className={styles.container}>
      <div
        className={cs(styles.projectImage)}
        style={{ paddingTop: `${height}px` }}
      >
        {imageSrc ? <Image src={imageSrc} variant="thumbnail" /> : null}
      </div>
      <div className={styles.projectsList}>
        <div ref={observedHeightDiv}>
          <Text variant="title">Projects</Text>
          <HorizontalLine />
        </div>
        <div ref={scrollableDiv} className={styles.scrollableList}>
          {allProjects.map((project: Project, i: number) => {
            return (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div
                  className={styles.project}
                  onMouseEnter={() => onMouseEnter(i)}
                  onMouseLeave={onMouseLeave}
                >
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
                {i === allProjects.length - 1 ? null : <HorizontalLine />}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
