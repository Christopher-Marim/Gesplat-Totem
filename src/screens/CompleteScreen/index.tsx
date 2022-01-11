import { Container, WrapperQRCODE } from "./styles";
import { FiCheck } from "react-icons/fi";
import { color } from "../../utils/colors";
import { useEffect, useState } from "react";
import { QrCodeComponent } from "../../components/QrCode";
import { Logo } from "../../components/LogoComponent";
import { Progressbar } from './../../components/ProgressBar/index';
import { useNavigate } from 'react-router-dom';
export function CompleteScreen() {
  const navigate = useNavigate();
  const [showQrCode, setShowQrCode] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowQrCode(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <Logo></Logo>
      {!showQrCode && (
        <>
          <FiCheck color={'white'} size={250}></FiCheck>
          <h1>
            ENTRADA <strong>FINALIZADA</strong>
            <br></br>AGUARDE SUA VEZ
          </h1>
        </>
      )}

      {showQrCode && (
        <>
        <Progressbar velocidade={0.02} onComplete={()=>{navigate('/')}}></Progressbar>
          <WrapperQRCODE>
            <QrCodeComponent text="https://www.etm.srv.br/"></QrCodeComponent>
          </WrapperQRCODE>
          <h1>
            ACESSE NOSSO SITE E VEJA SUA POSIÇÃO NA FILA NA PALMA DA SUA MÃO
          </h1>
          <button  className="buttonBack" onClick={()=>{navigate('/')}}>Voltar ao Inicio</button>
        </>
      )}
    </Container>
  );
}
