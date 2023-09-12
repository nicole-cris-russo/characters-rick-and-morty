import styled, { css } from "styled-components";

export const DivCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  row-gap: 8px;
  width: 190px;
  height: 300px;
  background-color: #00ddff50;
  border: 2px solid #00ddff;
  box-shadow: 1px 1px 0px 5px #eaff0099;
  box-sizing: content-box;
  text-align: center;
  border-radius: 5px;
  color: white;
  transition: 0.3s;

  &:hover {
    transform: scale(1.03);
    transition: 0.3s;
    background-color: #00ddff90;
    box-shadow: 1px 1px 0px 5px #eaff00ea;
  }

  ${({ character }) =>
    character.status === "Dead" &&
    css`
      background-color: #ff080050;
      box-shadow: 1px 1px 0px 5px #ff08009a;
      &:hover {
        background-color: #ff080090;
        box-shadow: 1px 1px 0px 5px #ff0800;
      }
    `}

  @media screen and (max-width: 700px) {
    width: 200px;
    height: 320px;
  }
`;
