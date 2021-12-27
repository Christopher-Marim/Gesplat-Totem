import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Name = styled.h3`
  position: absolute;
  margin: 10px 0px;
  top: 0;
  font-family: "Dosis", sans-serif;
  color: #00c2cb;
`;

export const WrapperCam = styled.div`
  width:85%;
  height:80%;
  border-radius:20px;
  margin-bottom:40px;
`;