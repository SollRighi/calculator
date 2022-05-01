import styled from "styled-components";

interface textoDisplay {
  texto: string;
}

const StyleDisplay = styled.div`
  grid-column: span 4;
  text-align: right;
  background-color: #c4c6cf;
  font-family: "Roboto Mono", monospace;
  font-size: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  min-height: 53px;
`;

export const Display = (props: textoDisplay) => {
  return <StyleDisplay> {props.texto} </StyleDisplay>;
};
