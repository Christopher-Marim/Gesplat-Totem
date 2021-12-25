import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      background-color: #293039;
      font-size: ${px2vw(24)};
      font-family: 'Inter', sans-serif ;
      color:white;
    }
`;

export default Global;