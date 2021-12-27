import React from "react";
import { ButtonStyles } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

export function Button({children, ...rest}:Props){
    return(
        <>
        <ButtonStyles {...rest}>{children}</ButtonStyles>
        </>
    )
}