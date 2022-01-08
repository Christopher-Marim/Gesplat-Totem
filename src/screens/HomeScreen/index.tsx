import { Container, WrapperCpf, WrapperQRCODE } from "./styles";
import { WebcamComponent } from "../../components/Cam";
import { QrCodeComponent } from "../../components/QrCode";
import { Logo } from "../../components/LogoComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { maskCpf } from "../../utils/mask";

export function HomeScreen() {
  const navigate = useNavigate();

  const [valor, setValor] = useState("");
  const [valorAux, setValorAux] = useState("");

  function handleChangeMask(event:any) {
    const { value } = event.target;
    var v = value.replace(/\./g, '')  
    setValorAux(v.replace(/\-/g, ''));

    setValor(maskCpf(value));
  }
  return (
    <Container>
      <Logo></Logo>
      <WrapperCpf>
        <label>DIGITE SEU CPF</label>
        <input
          inputMode="numeric"
          placeholder="123.456.789-10"
          onChange={handleChangeMask}
          maxLength={14}
          value={valor}
          /* onClick={() => {
            navigate("user");
          }} */
        ></input>
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
