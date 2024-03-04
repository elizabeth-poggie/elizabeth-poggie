import { Image } from "../../components/display/image/image";
import { INote } from "../../interfaces/note";
import styles from "./art.module.scss";

interface IProps {
  allArt: INote[];
}

export function Art({ allArt }: IProps) {
  const col1 = allArt.slice(0, allArt.length / 2);
  const col2 = allArt.slice(allArt.length / 2);

  const renderColumn = (colArt: INote[]) => {
    if (!colArt.length) {
      return null;
    }

    return (
      <div className={styles.column}>
        {colArt.map((art: INote) => {
          return <Image src={art.coverSrc} />;
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderColumn(col1)}
      {renderColumn(col2)}
    </div>
  );
}
