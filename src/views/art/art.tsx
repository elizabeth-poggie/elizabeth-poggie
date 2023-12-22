import { Image } from "../../components/display/image/image";
import { IArt } from "../../interfaces/art";
import styles from "./art.module.scss";

interface IProps {
  allArt: Array<IArt>;
}

export function Art({ allArt }: IProps) {
  const col1 = allArt.slice(0, allArt.length / 2);
  const col2 = allArt.slice(allArt.length / 2);

  const renderColumn = (colArt: Array<IArt>) => {
    if (!colArt.length) {
      return null;
    }

    return (
      <div className={styles.column}>
        {colArt.map((art: IArt) => {
          return <Image src={art.src} />;
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
