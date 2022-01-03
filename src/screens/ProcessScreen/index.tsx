import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Procedimento } from "./styles";

export function ProcessScreen(){
    const navigate = useNavigate();

    const array=[
        {
            id:'1',
            step:'Antropometria',
            level:'1',
            position:'5',
            fila_tipo:'F',
            fila_number:'03'
        },
        {
            id:'2',
            step:'TESTE DE BOCA',
            level:'1',
            position:'2',
            fila_tipo:'F',
            fila_number:'03'
        },
        {
            id:'3',
            step:'Teste de olho',
            level:'1',
            position:'7',
            fila_tipo:'F',
            fila_number:'03'
        },
        {
            id:'3',
            step:'Teste de olho',
            level:'1',
            position:'7',
            fila_tipo:'F',
            fila_number:'03'
        },
        {
            id:'3',
            step:'Teste de olho',
            level:'1',
            position:'7',
            fila_tipo:'F',
            fila_number:'03'
        },
    ]

    return(
        <Container>
                <h1>PROCEDIMENTOS<br></br> PARA HOJE</h1>
                <div className='procedimentos'>
                    {array.map((item)=>(
                         <Procedimento key={item.id}>
                         <div>
                         <h3>{item.step}</h3>
                         <p>Andar <strong>{item.level}</strong></p>
                         <p>Posição <strong>{item.position}</strong></p>
                         </div>
                         <label><strong>{item.fila_tipo}</strong>{item.fila_number}</label>
                     </Procedimento>
                    ))}
                   
                </div>
               
                <Button style={{maxWidth:800}}onClick={()=>navigate('/finish')}><label>Prosseguir</label></Button>
                
        </Container>
    )
}