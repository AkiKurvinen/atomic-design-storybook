import { createTheme } from '@mui/material/styles';
import * as colors from './colors'
import { baseTheme } from './base'

export const dark =  createTheme({
    ...baseTheme,
    palette: {
     // ...baseTheme.palette,
      mode: 'dark',
      primary: { main: colors.white },
      background: { paper: colors.paper_dark }
    },
})