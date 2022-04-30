import styled from "styled-components";
import { Display } from "./Display";
import { Tecla } from "./Tecla";

const StyleTeclas = styled.div`
  background-color: #2c47f2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 18px 16px 15px -10px black;
`;

export const Calculator = () => {
  return (
    <StyleTeclas>
      <Display />
      <Tecla tecla="7" />
      <Tecla tecla="8" />
      <Tecla tecla="9" />
      <Tecla tecla="/" cor="#11807a" />
      <Tecla tecla="4" />
      <Tecla tecla="5" />
      <Tecla tecla="6" />
      <Tecla tecla="x" cor="#11807a" />
      <Tecla tecla="1" />
      <Tecla tecla="2" />
      <Tecla tecla="3" />
      <Tecla tecla="-" cor="#11807a" />
      <Tecla tecla="0" />
      <Tecla tecla="." cor="#11807a" />
      <Tecla tecla="+" cor="#11807a" />
      <Tecla tecla="=" cor="#11807a" />
    </StyleTeclas>
  );
};
