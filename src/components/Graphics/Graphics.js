import Bar from "./Bar/Bar";
import Scatter from "./Scatter/Scatter";
import { Body, BodyGraphics } from "./GraphicsStyled";

function Graphics() {
  return (
    <Body>
      <BodyGraphics>
        <Bar></Bar>
        <Scatter></Scatter>
      </BodyGraphics>
    </Body>
  );
}

export default Graphics;
