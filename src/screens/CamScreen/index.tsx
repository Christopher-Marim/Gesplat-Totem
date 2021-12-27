import { BsArrowRight } from "react-icons/bs";
import { Button } from "../../components/Button";
import { WebcamComponent } from "../../components/Cam";
import { Container, Name,WrapperCam } from "./styles";

export function CamScreen() {
  return (
    <Container>
      <Name>GESPLAT</Name>
      <WrapperCam>
        <WebcamComponent></WebcamComponent>
      </WrapperCam>
      <Button><label>FINALIZAR</label><BsArrowRight color="white" size={40}></BsArrowRight></Button>
    </Container>
  );
}
