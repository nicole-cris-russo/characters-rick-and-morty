import styles from "./styles.module.css";
import { DivCard } from "./styles.js";

const CharCard = ({ character }) => {
  return (
    <DivCard character={character}>
      <div className={styles.DivPicture}>
        <img
          className={styles.Picture}
          src={character.image}
          alt={character.name}
        />
      </div>
      <h3 className={styles.Name}>Name: {character.name}</h3>
      <span>Origin: {character.origin.name}</span>
      <span>Species: {character.species}</span>
    </DivCard>
  );
};

export default CharCard;
