import styled from "styled-components";
import { Display } from "./Display";
import { Tecla } from "./Tecla";

const StyleTeclas = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const Calculator = () => {
  return (
    <StyleTeclas>
      <Display />
      <Tecla tecla="7" />
      <Tecla tecla="8" />
      <Tecla tecla="9" />
      <Tecla tecla="/" />
      <Tecla tecla="4" />
      <Tecla tecla="5" />
      <Tecla tecla="6" />
      <Tecla tecla="x" />
      <Tecla tecla="1" />
      <Tecla tecla="2" />
      <Tecla tecla="3" />
      <Tecla tecla="-" />
      <Tecla tecla="0" />
      <Tecla tecla="." />
      <Tecla tecla="+" />
      <Tecla tecla="=" />
    </StyleTeclas>
  );
};
