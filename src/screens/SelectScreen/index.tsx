import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Procedimento } from "./styles";
import { BsCheck2Square } from "react-icons/bs";

export function SelectScreen(){
    const navigate = useNavigate();

    const array=[
        {
            id:'1',
            step:'Admissional',
            date:'07/01/2022',
            company:'ETM Consultoria e Sistemas',
        },
        {
            id:'2',
            step:'Demissional',
            date:'07/01/2022',
            company:'Microsoft',
        },
        {
            id:'3',
            step:'Demissional 2 Example',
            date:'08/01/2022',
            company:'Microsoft',
        },
    ]

    return(
        <Container>
                <h1>ESCOLHA QUAL A DEMANDA<br></br> PARA HOJE</h1>
                <div className='procedimentos'>
                    {array.map((item)=>(
                         <Procedimento key={item.id}>
                         <div>
                         <h3>{item.step}</h3>
                         <p>Data <strong>{item.date}</strong></p>
                         <p>Empresa <strong>{item.company}</strong></p>
                         </div>
                         <BsCheck2Square color='white' size={40}></BsCheck2Square>
                     </Procedimento>
                    ))}
                   
                </div>
               
                <Button style={{maxWidth:800}}onClick={()=>navigate('/process')}><label>Prosseguir</label></Button>
                
        </Container>
    )
}