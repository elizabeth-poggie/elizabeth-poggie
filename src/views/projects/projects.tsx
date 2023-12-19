import { Text } from "../../components/typography/text/text";
import { Image } from "../../components/display/image/image";
import { Project } from "../../interfaces/project";

interface Props {
  allProjects: Project[];
}

export function Projects({ allProjects }: Props) {
  return (
    <div>
      <Text variant="title">Projects</Text>
      <hr />
      {allProjects.map((project: Project) => {
        return (
          <div key={project.slug}>
            <Text>{project.title}</Text>
            <Text>{project.year}</Text>
            <div>
              {project.categories.map((category) => {
                return <Text>{category}</Text>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
