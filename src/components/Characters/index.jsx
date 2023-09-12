import CharCard from "../CharCard";
import Logo from "../assets/logo.png";
import { Container, List } from "./styles";
import styles from "./styles.module.css";

const Characters = ({ characterList }) => {
  return (
    <Container>
      <img src={Logo} alt="Logo" className={styles.Image} id="logo"/>
      <List>
        {characterList.map((character) => {
          return (
            <li key={character.id}>
              <CharCard character={character}></CharCard>
            </li>
          );
        })}
      </List>
    </Container>
  );
};

export default Characters;
