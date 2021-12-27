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
    border: double 3px transparent;
  border-radius: 10%;
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, rgba(5, 82, 171, 1), rgba(0, 219, 146, 1));
  background-origin: border-box;
  background-clip: content-box, border-box;
  }

  h3 {
    width:50%;
    margin:30px;
    font-size: 22px;
    text-align:center;

    strong{
      color:#9CECF0;
    }
  }
`;
