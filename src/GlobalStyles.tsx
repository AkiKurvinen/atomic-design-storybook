import { RuleSet, createGlobalStyle, css } from 'styled-components';
import { paper_light, text_light, paper_dark, text_dark } from './themes/colors'
import { Theme } from '@mui/material/styles';

/*
export const GlobalLight = css`
:root{
  --text: ${text_light};
  --paper: ${paper_light};
}`

export const GlobalDark = css`
:root{
  --text: ${text_dark};
  --paper: ${paper_dark};
}`
*/
export const GlobalStyles = createGlobalStyle<{ theme: Theme}>`

:root {
  --text: ${props => (props.theme.palette.text.primary )};
  --paper: ${props => (props.theme.palette.background.paper )};
  --primary: #ac0028;
  --secondary: #424242;
  --disabled: #888;

  --font-base: "Raleway", sans-serif;
  
  --nav_height: 70px;
}


body {
  scrollbar-width: thin;
  scrollbar-color: var(--primary) var(--paper);
  margin: 0;
  height: 100vh;
  font-family: var(--font-base);
  text-align: center;
  background-color: var(--paper);
  color: var(--text);
}

body::-webkit-scrollbar {
  width: 15px;
}
body::-webkit-scrollbar-track {
  background: var(--paper);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 6px;
  border: 3px solid var(--paper);
}
`