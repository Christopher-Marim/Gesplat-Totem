import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .imgUser {
    width: 300px;
    height: 300px;
    border-radius: 15px;
    object-fit:cover;
    margin:10px;
    border: solid 3px white;
  
  }

  h3 {
    width:55%;
    margin:30px 10px;
    font-size: 22px;
    text-align:center;
    letter-spacing:2px;

    strong{
      color:#F09C9C;
    }
  }
`;
