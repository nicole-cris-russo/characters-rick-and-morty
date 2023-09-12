import { Button, Container } from "./styles.js";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const Buttons = ({ limitPages, currentPage, setCurrentPage }) => {
  const nextPages = () => {
    if (currentPage < limitPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPages = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Container>
      <Button href="#logo" onClick={() => prevPages()}>
        <FcPrevious onClick={() => nextPages()}></FcPrevious>
      </Button>
      <Button href="#logo" onClick={() => nextPages()}>
        <FcNext onClick={() => nextPages()}></FcNext>
      </Button>
    </Container>
  );
};

export default Buttons;
