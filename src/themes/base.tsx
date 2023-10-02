import { createTheme } from '@mui/material/styles';


export const baseTheme = createTheme( {
    typography:{
      h1:{
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: 64,
        color: 'red',
      },
    
    },
    palette:{
        customColor: {main: '#234'}
     },
    components: {
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            // Map the new variant to render a <h1> by default
            h1: 'h1',
          },
        },
      },
    },
  })

