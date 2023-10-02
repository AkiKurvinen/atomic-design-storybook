import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { Preview } from '@storybook/react'
import { GlobalStyles }  from '../src/GlobalStyles'
import { ThemeProvider } from '@emotion/react'
import {light} from '../src/themes/light' 
import {dark} from '../src/themes/dark' 

const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: light,
      dark: dark,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyles,
  }),
];

const preview: Preview = {

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decoratiors:[
      decorators
    ],
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;