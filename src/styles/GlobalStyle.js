import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* =================================
  //* reset
  ================================= */
  * {margin: 0;padding: 0;border: none;background: none;font-size: 100%;font: inherit;box-sizing: border-box;-webkit-tap-highlight-color: transparent;}
  ol,ul {list-style: none;} em {font-size: normal;} img {vertical-align: top;outline: none;}
  input,select,textarea,button {appearance: none;-webkit-appearance: none;outline: none;background: none;border: none;border-radius: 0;margin: 0;padding: 0;}
  input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {background: transparent;background-clip: text;-webkit-background-clip: text;}
  textarea {resize: none;} ::placeholder {font: inherit;}
  a {text-decoration: none;color: inherit;}a:visited {background: none;}a:active {background: none;}

  /* =================================
  //* custom global
  ================================= */
  body {
    font-family: var(--font-noto), 
    -apple-system, 
    BlinkMacSystemFont, 
    system-ui, 
    Roboto, 
    'Helvetica Neue', 
    'Segoe UI', 
    'Apple SD Gothic Neo', 
    'Noto Sans KR', 
    'Malgun Gothic', sans-serif;
  }
  h1{
    font-size: 24px;
    margin-bottom: 5px;
  }
  span {
    font-weight: bold;
  }
  .font1 {font-family: var(--font-galmuri);}
  .font2 {font-family: var(--font-noto);}
  .font3 {font-family: var(--font-gaegu);}
  .font4 {font-family: var(--font-neo);}
  .font5 {font-family: var(--font-bit);}
  .font6 {font-family: var(--font-peace);}
  .font7 {font-family: var(--font-gangwon);}
  .font8 {font-family: var(--font-jua);}
  .font9 {font-family: var(--font-yangjin);}
  .font10 {font-family: var(--font-pre);}
  .font11 {font-family: var(--font-hs);}
  .font12 {font-family: var(--font-score);}
  .font13 {font-family: var(--font-gmarket);}

  .c1 {background: var(--silver);}
  .c2 {background: var(--gray);}
  .c3 {background: var(--black);}
  .c4 {background: var(--yellow);}
  .c5 {background: var(--night);}
  .c6 {background: var(--carrot);}
  .c7 {background: var(--green);}
  .c8 {background: var(--pink);}
  .c9 {background: var(--pale);}

  .flex {display: flex;}
  .box {width: 100px; height: 100px;}

  .gap-large {margin-right: var(--gap-large)}
  .gap-big {margin-right: var(--gap-big)}
  .gap-md {margin-right: var(--gap-md)}
  .gap-sm {margin-right: var(--gap-sm)}
`;

export default GlobalStyle;
