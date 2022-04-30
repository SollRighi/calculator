import styled from "styled-components";

interface TituloProps {
  titulo: string;
}

const StyleTitulo = styled.h1`
  align-items: flex-start;
`;

export const Titulo = (props: TituloProps) => {
  return <StyleTitulo>{props.titulo}</StyleTitulo>;
};
