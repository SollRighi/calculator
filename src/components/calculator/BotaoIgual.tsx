import styled from "styled-components";

interface TeclaProps2 {
  tecla: string;
  cor?: string;
  aoClicar: () => void;
}
interface StyledProps {
  cor?: string;
}
const StyleTeclaIgual = styled.div`
  background-color: ${(props: StyledProps) => props.cor};
  text-align: center;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Roboto Mono", monospace;
  font-size: 30px;
  border-radius: 0px 20px 0px 20px;
  box-shadow: 18px 16px 15px -10px black;
  transition: 0.2s;
  display: grid;
  grid-column: span 4;

  &:active {
    transform: scale(0.5);
  }
`;

export const BotaoIgual = (props: TeclaProps2) => {
  return (
    <StyleTeclaIgual cor={props.cor || "#1e96eb"} onClick={props.aoClicar}>
      {props.tecla}
    </StyleTeclaIgual>
  );
};
