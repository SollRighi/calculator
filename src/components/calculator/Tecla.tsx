import React from "react";
import styled from "styled-components";

interface TeclaProps {
  tecla?: string;
  cor?: string;
}

const StyledTecla = styled.div`
  background-color: ${(props: TeclaProps) => props.cor};
  text-align: center;
  width: fit-content;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Roboto Mono", monospace;
  font-size: 30px;
  border-radius: 0px 20px 0px 20px;
  box-shadow: 18px 16px 15px -10px black;
`;

export const Tecla = (props: TeclaProps) => {
  return <StyledTecla cor={props.cor || "#1e96eb"}>{props.tecla}</StyledTecla>;
};
