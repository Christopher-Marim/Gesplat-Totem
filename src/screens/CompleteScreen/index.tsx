import { Container, Name, WrapperQRCODE } from "./styles";
import { FiCheck } from "react-icons/fi";
import { color } from "../../utils/colors";
import { useEffect, useState } from "react";
import { QrCodeComponent } from "../../components/QrCode";
export function CompleteScreen() {
  const [showQrCode, setShowQrCode] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowQrCode(true);
    }, 3000);
  }, []);

  return (
    <Container>
      <Name>GESPLAT</Name>
      {!showQrCode && (
        <>
          <FiCheck color={color.verde} size={250}></FiCheck>
          <h1>
            ENTRADA <strong>FINALIZADA</strong>
            <br></br>AGUARDE SUA VEZ
          </h1>
        </>
      )}

      {showQrCode && (
        <>
          <WrapperQRCODE>
            <QrCodeComponent text="https://www.etm.srv.br/"></QrCodeComponent>
          </WrapperQRCODE>
          <h1>
            ACESSE NOSSO SITE E VEJA SUA POSIÇÃO NA FILA NA PALMA DA SUA MÃO
          </h1>
        </>
      )}
    </Container>
  );
}
