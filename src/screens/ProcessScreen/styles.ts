import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 35px;
    letter-spacing: 6px;
    line-height: 41px;
    margin: 0px 40px;
    margin-top: 40px;
    text-align: center;
    font-weight: 500;
  }

  .procedimentos {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 600px;
    width: 70%;
    max-width: 800px;
    overflow-y: auto;
    overflow-x: hidden;
    
    ::-webkit-scrollbar {
  width: 10px;
  
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:linear-gradient( white , #F09C9C );
  border-radius: 10px;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  transition: 500ms ease-in-out;
  background: #F09C9C; 
  
}
  }
`;
export const Procedimento = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;

  h3 {
    font-family: "Inter";
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }

  p {
    margin: 0px 10px;
    font-size: 19px;
    letter-spacing: 2px;
  }

  label {
    font-size: 35px;
    letter-spacing: 4px;
  }
  strong {
    color: #f09c9c;
  }
`;
