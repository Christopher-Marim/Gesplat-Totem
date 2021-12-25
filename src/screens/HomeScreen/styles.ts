import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width:100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3{
    margin:30px;
    font-size:22px;
  }
  
`;
export const WrapperCpf = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width:60%;

  label{
    margin:30px;
    font-size:22px;
  }

  input{
    padding:10px 20px;
    height:50px;
    border-radius:8px;
    border:none;
    width:100%;
    font-size:22px;
  }
  
`;
export const WrapperQRCODE = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  label{
    margin-bottom:30px;
    font-size:22px;
  }
`;