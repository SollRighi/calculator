import React from "react";
import styled from "styled-components";

interface TeclaProps {
  tecla: string;
}

const StyledTecla = styled.div`
  background-color: red;
  text-align: center;
  width: fit-content;
  padding: 2px;
  font-family: "Roboto Mono", monospace;
`;

export const Tecla = (props: TeclaProps) => {
  return <StyledTecla> {props.tecla} </StyledTecla>;
};
