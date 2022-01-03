import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  h1{
  font-size:35px;
  letter-spacing: 2px;
  margin:0px 40px;
  margin-top:40px;
      text-align:center;
      font-weight:400;
      strong{
          color:#9CECF0
      }
  }

  .procedimentos{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height:600px;
      width:70%;
      background:red;
  }
`;

export const Name = styled.h3`
  margin: 10px 0px;
  font-size:25px;
  font-family: "Dosis", sans-serif;
  color: #00c2cb;
`;

export const WrapperQRCODE = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom:40px
`;