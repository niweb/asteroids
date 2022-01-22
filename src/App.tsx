import { Container, Stage } from "@inlet/react-pixi";
import styled from "styled-components";
import { Spaceship } from "./Spaceship";

function App() {
    return (
        <StyledApp>
            <Stage width={1000} height={600} options={{ backgroundAlpha: 0 }}>
                <Container position={[500, 300]}>
                    <Spaceship />
                </Container>
            </Stage>
        </StyledApp>
    );
}

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #0B191E;
  & > * {
    border: 5px solid #D2E7EE;
  }
`

export default App;
