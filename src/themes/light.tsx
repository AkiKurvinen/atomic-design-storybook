import { createTheme } from '@mui/material/styles';
import * as colors from './colors'
import { baseTheme } from './base'

export const light = createTheme({
    ...baseTheme,
    palette: {
      mode: 'light',
      primary: { main: colors.primary },
      background: { paper: colors.paper_light }
    },
})