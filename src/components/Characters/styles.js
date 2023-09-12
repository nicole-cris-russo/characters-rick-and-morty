import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 700px) {
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  margin: 20px 0;

  @media screen and (max-width: 700px) {
    display: flex;
    padding: 10px;
    width: 90vw;
    overflow-x: auto;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
