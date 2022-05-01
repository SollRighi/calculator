import styled from "styled-components";
import { Display } from "./Display";
import { Tecla } from "./Tecla";
import { useState } from "react";
import { BotaoIgual } from "./BotaoIgual";

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
  const [valor, setValor] = useState("");
  const [valorSalvo, setValorSalvo] = useState("");
  const [sinal, setOperacao] = useState("");

  function printarDisplay(tecla: string) {
    let novoValor = valor + tecla;
    setValor(novoValor);
  }

  function defineOperacao(tecla: string) {
    setOperacao(tecla); //salvando o valor passado na tecla em operação
    setValorSalvo(valor); //salvando o valor que estava no display
    setValor("");
  }

  function resultadoFinal() {
    let resultado = 0;

    switch (sinal) {
      case "/":
        resultado = Number(valorSalvo) / Number(valor);
        break;

      case "x":
        resultado = Number(valorSalvo) * Number(valor);
        break;

      case "+":
        resultado = Number(valorSalvo) + Number(valor);
        break;

      case "-":
        resultado = Number(valorSalvo) - Number(valor);
        break;

      default:
        break;
    }

    setValor(String(resultado));
  }

  return (
    <StyleTeclas>
      <Display texto={valor} />
      <Tecla tecla="7" aoClicar={() => printarDisplay("7")} />
      <Tecla tecla="8" aoClicar={() => printarDisplay("8")} />
      <Tecla tecla="9" aoClicar={() => printarDisplay("9")} />
      <Tecla tecla="/" aoClicar={() => defineOperacao("/")} cor="#11807a" />
      <Tecla tecla="4" aoClicar={() => printarDisplay("4")} />
      <Tecla tecla="5" aoClicar={() => printarDisplay("5")} />
      <Tecla tecla="6" aoClicar={() => printarDisplay("6")} />
      <Tecla tecla="x" aoClicar={() => defineOperacao("x")} cor="#11807a" />
      <Tecla tecla="1" aoClicar={() => printarDisplay("1")} />
      <Tecla tecla="2" aoClicar={() => printarDisplay("2")} />
      <Tecla tecla="3" aoClicar={() => printarDisplay("3")} />
      <Tecla tecla="-" aoClicar={() => defineOperacao("-")} cor="#11807a" />
      <Tecla tecla="0" aoClicar={() => printarDisplay("0")} />
      <Tecla tecla="." aoClicar={() => printarDisplay(".")} cor="#11807a" />
      <Tecla tecla="+" aoClicar={() => defineOperacao("+")} cor="#11807a" />
      <Tecla tecla="C" aoClicar={() => setValor("")} cor="#11807a" />
      <BotaoIgual tecla="=" aoClicar={() => resultadoFinal()} cor="#11807a" />
    </StyleTeclas>
  );
};
