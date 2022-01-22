import { Container, Stage } from "@inlet/react-pixi";
import styled from "styled-components";
import {  ShootHandler, Spaceship } from "./components/spaceship/Spaceship";
import { useState } from "react";
import { Bullet, BulletProps } from "./components/bullet/Bullet";

const App = () => {
    const [bullets, setBullets] = useState<Array<BulletProps & {created: number}>>([])

    const onShoot: ShootHandler = (i) => {
      const created = Date.now();
      setBullets(prev => [...prev, { ...i, created }])
      setTimeout(() => setBullets(prev => prev.filter(i => i.created !== created)), 2000)
    }

    return (
        <StyledApp>
            <Stage width={1000} height={600} options={{ backgroundAlpha: 0 }}>
                <Container position={[500, 300]}>
                    {bullets.map(({created, ...bullet}) => (
                        <Bullet key={created} {...bullet} />
                      ))
                    }
                    <Spaceship onShoot={onShoot}/>
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
