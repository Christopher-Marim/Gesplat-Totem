import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  
  .buttonBack{
    width:400px;
    padding:20px;
    color:white;
    background:transparent;
    border:2px solid white;
    border-radius:10px;
    font-size:20px;
    margin-bottom:20px;
    cursor:pointer;
  }

  h1{
  font-size:35px;
  letter-spacing: 2px;
  margin:0px 40px;
  margin-bottom:40px;
      text-align:center;
      font-weight:400;
      strong{
          color:#F09C9C
      }
  }
`;

export const WrapperQRCODE = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom:40px
`;