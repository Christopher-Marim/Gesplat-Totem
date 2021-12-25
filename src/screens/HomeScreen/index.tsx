import { Container, WrapperCpf, WrapperQRCODE } from "./styles";
import { WebcamComponent } from "../../components/Cam";
import { QrCodeComponent } from "../../components/QrCode";
import { Logo } from "../../components/LogoComponent";

export function HomeScreen() {
  return (
    <Container>
      <Logo></Logo>
      <WrapperCpf>
        <label>DIGITE SEU CPF</label>
        <input inputMode='numeric' placeholder="123.456.789-10"></input>
      </WrapperCpf>
      <h3>OU</h3>
      <WrapperQRCODE>
        <label>APONTE A CÂMERA PARA ENTRAR NA FILA</label>
        <QrCodeComponent text="https://www.facebook.com/"></QrCodeComponent>
      </WrapperQRCODE>
      {/* <WebcamComponent></WebcamComponent>  */}
    </Container>
  );
}
