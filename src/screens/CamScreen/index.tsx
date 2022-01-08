
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { WebcamComponent } from "../../components/Cam";
import { Logo } from "../../components/LogoComponent";
import { Container,WrapperCam } from "./styles";

export function CamScreen() {
    const navigate = useNavigate();
  return (
    <Container>
      <Logo></Logo>
      <WrapperCam>
        <WebcamComponent></WebcamComponent>
      </WrapperCam>
      <Button onClick={()=>navigate('/select')}><label>FINALIZAR</label></Button>
    </Container>
  );
}
