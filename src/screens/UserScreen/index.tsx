import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Logo } from "../../components/LogoComponent";
import { Container } from "./styles";

export function UserScreen(){
    const navigate = useNavigate();
    return(
        <Container>
            <Logo></Logo>
            <img className="imgUser" src='https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg'></img>
            <h3>OLÁ <strong>THALYS MARIM</strong>, TIRAREMOS UMA FOTO SUA PARA CONFIRMAR SUA PRESENÇA</h3>
            <Button onClick={()=>navigate('/cam')}><label>PROSSEGUIR</label></Button>
        </Container>
    );
}