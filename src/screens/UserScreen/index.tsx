import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Logo } from "../../components/LogoComponent";
import user from "../../assets/user.svg";
import { Container } from "./styles";

export function UserScreen(){
    const navigate = useNavigate();
    return(
        <Container>
            <Logo></Logo>
            <img className="imgUser" src={user} style={{backgroundColor:'whitesmoke'}}></img>
            <h3>OLÁ <strong>THALYS MARIM</strong>, TIRAREMOS UMA FOTO SUA PARA CONFIRMAR SUA PRESENÇA</h3>
            <Button onClick={()=>navigate('/cam')}><label>PROSSEGUIR</label></Button>
        </Container>
    );
}