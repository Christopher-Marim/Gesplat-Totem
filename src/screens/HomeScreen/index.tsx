import { Container, WrapperCpf, WrapperQRCODE } from "./styles";
import { WebcamComponent } from "../../components/Cam";
import { QrCodeComponent } from "../../components/QrCode";
import { Logo } from "../../components/LogoComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { maskCpf } from "../../utils/mask";
import { BsArrowRight } from "react-icons/bs";

export function HomeScreen() {
  const navigate = useNavigate();

  const [valor, setValor] = useState("");
  const [valorAux, setValorAux] = useState("");
  const [nextPage, setNextPageOn] = useState(false);

  function handleChangeMask(event:any) {
    const { value } = event.target;
    var v = value.replace(/\./g, '')  
    setValorAux(v.replace(/\-/g, ''));
    if(value.length == 14){
      setNextPageOn(true)
    }
    else{
      setNextPageOn(false)
    }
    setValor(maskCpf(value));
  }
  return (
    <Container>
      <Logo></Logo>
      <WrapperCpf>
        <label>DIGITE SEU CPF</label>
        <div>
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
        {
          nextPage && (
            <BsArrowRight color="#F09C9C" size={40} style={{marginLeft:-50, cursor:'pointer'}} onClick={() => {
                navigate("user");
              }}></BsArrowRight>
          )
        }
        </div>
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
