import styled from "styled-components";

interface TituloProps {
  titulo: string;
}

const StyleTitulo = styled.h1`
  align-items: flex-start;
  color: white;
  font: bold;
  font-family: "Roboto Mono", monospace;
  text-shadow: 0.1em 0.1em black;
`;

export const Titulo = (props: TituloProps) => {
  return <StyleTitulo>{props.titulo}</StyleTitulo>;
};
