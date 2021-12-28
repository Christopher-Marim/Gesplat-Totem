import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { WebcamComponent } from "../../components/Cam";
import { Container, Name,WrapperCam } from "./styles";

export function CamScreen() {
    const navigate = useNavigate();
  return (
    <Container>
      <Name>GESPLAT</Name>
      <WrapperCam>
        <WebcamComponent></WebcamComponent>
      </WrapperCam>
      <Button onClick={()=>navigate('/finish')}><label>FINALIZAR</label><BsArrowRight color="white" size={40}></BsArrowRight></Button>
    </Container>
  );
}
