import { Calculator } from "./components/calculator/Calculator";
import { Titulo } from "./components/Titulo";
import styled from "styled-components";
import ceu from "./components/imagem/ceu.jpg";

interface FotoBody {
  imagem: string;
}

const StyleBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props: FotoBody) => props.imagem});
  background-size: cover;
`;

function App() {
  return (
    <StyleBody imagem={ceu}>
      <br />
      <Titulo titulo="A Calculadora da Sol"></Titulo>
      <br />
      <br />
      <br />
      <Calculator />
    </StyleBody>
  );
}

export default App;
