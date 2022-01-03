import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "./styles";

export function ProcessScreen(){
    const navigate = useNavigate();

    return(
        <Container>
                <h1>PROCEDIMENTOS<br></br> PARA HOJE</h1>
                <div className='procedimentos'>
                    <div>
                        <div>
                        <h3>ANTROPOMETRIA</h3>
                        <p>Andar 1</p>
                        <p>Posição 5</p>
                        </div>
                        <label><strong>F</strong>03</label>
                    </div>
                </div>
                <Button onClick={()=>navigate('/finish')}><label>Prosseguir</label></Button>
        </Container>
    )
}