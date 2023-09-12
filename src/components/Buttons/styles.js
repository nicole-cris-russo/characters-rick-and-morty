import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40vw;
  margin: 20px 0 30px;

  @media screen and (max-width: 700px) {
    width: 83vw;
  }
`;

export const Button = styled.a`
  width: 50px;
  height: 40px;
  border: 3px solid #0c8093;
  background-color: #073138;
  border-radius: 5px;
  color: white;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    color: pink;
  }

  &:nth-child(1) {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }

  &:hover {
    border: 3px solid #e3ed0e;
    background-color: #12a1b8;
    transition: 0.2s;
  }

  @media screen and (max-width: 700px) {
    width: 70px;
  }
`;
