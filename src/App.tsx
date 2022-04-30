import { Calculator } from "./components/calculator/Calculator";
import { Titulo } from "./components/Titulo";
import styled from "styled-components";

const StyleBody = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyleBody>
      <Titulo titulo="A Calculadora da Sol"></Titulo>
      <Calculator />
    </StyleBody>
  );
}

export default App;
