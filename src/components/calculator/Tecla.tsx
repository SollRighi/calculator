import React from "react";
import styled from "styled-components";

interface TeclaProps {
  tecla: string;
  cor?: string;
  aoClicar: () => void;
}
interface StyledProps {
  cor?: string;
}

const StyledTecla = styled.div`
  background-color: ${(props: StyledProps) => props.cor};
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
  return (
    <StyledTecla cor={props.cor || "#1e96eb"} onClick={props.aoClicar}>
      {props.tecla}
    </StyledTecla>
  );
};
