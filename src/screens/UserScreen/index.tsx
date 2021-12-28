import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Logo } from "../../components/LogoComponent";
import { Container } from "./styles";
import { BsArrowRight } from "react-icons/bs";

export function UserScreen(){
    const navigate = useNavigate();
    return(
        <Container>
            <Logo></Logo>
            <img className="imgUser" src='https://trello.com/1/cards/61819706c0128151f22ad8c1/attachments/61819720a917d60ff8fcb720/previews/61819721a917d60ff8fcb724/download/Thalys_Marim_2021-10-31.png'></img>
            <h3>OLÁ <strong>THALYS MARIM</strong>, ESTAREMOS TIRANDO UMA FOTO SUA PARA CONFIRMAR SUA PRESENÇA</h3>
            <Button onClick={()=>navigate('/cam')}><label>PROSSEGUIR</label><BsArrowRight color="white" size={40}></BsArrowRight></Button>
        </Container>
    );
}