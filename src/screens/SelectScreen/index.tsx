import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { BsUnsheck, Container, Procedimento } from "./styles";
import { BsCheck2Square } from "react-icons/bs";
import { useState } from "react";

interface currentSelect{
    id:string;
    select:string;
    date:string;
    company:string;
}

export function SelectScreen(){
    const navigate = useNavigate();

    const [currentSelect, setCurrentSelect] = useState<currentSelect>();

    const array:currentSelect[]=[
        {
            id:'1',
            select:'Admissional',
            date:'07/01/2022',
            company:'ETM Consultoria e Sistemas',
        },
        {
            id:'2',
            select:'Demissional',
            date:'07/01/2022',
            company:'Microsoft',
        },
        {
            id:'3',
            select:'Demissional 2 Example',
            date:'08/01/2022',
            company:'Microsoft',
        },
    ]

    return(
        <Container>
                <h1>ESCOLHA QUAL A DEMANDA<br></br> PARA HOJE</h1>
                <div className='procedimentos'>
                    {array.map((item)=>(
                         <Procedimento key={item.id} onClick={()=>{setCurrentSelect(item)}}>
                         <div>
                         <h3>{item.select}</h3>
                         <p>Data <strong>{item.date}</strong></p>
                         <p>Empresa <strong>{item.company}</strong></p>
                         </div>
                         {
                             currentSelect?.id ==item.id?(
                                 <BsCheck2Square color='#f09c9c' size={40}></BsCheck2Square>
                             ):(
                                 <BsUnsheck></BsUnsheck>
                             )
                         }
                     </Procedimento>
                    ))}
                   
                </div>
               
                <Button style={{maxWidth:800}}onClick={()=>navigate('/process')}><label>Prosseguir</label></Button>
                
        </Container>
    )
}