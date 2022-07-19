import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  bgcolor: "#222831",
  padding: "0 60px",
  mainColor: "#eeeeee",
  moPadding: "0 20px",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
li{
    list-style: none;
}

body{

    font-family: "Noto sans KR" , sans-serif;
    background-color: ${mainStyle.bgcolor};
    letter-spacing: -1px;
}

a{
    text-decoration: none;
}

`;
