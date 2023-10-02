import { CSSObject } from "@emotion/react";
import { PaletteColor, SimplePaletteColorOptions } from "@mui/material/styles"
import { TypographyOptions } from "@mui/material/styles/createTypography";
  
import { Theme as MUITheme, ThemeOptions as MUIThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
   declare interface ThemeOptions {
      //
    }
    declare interface Theme {
      //  unstable_sx?: CSSObject
    }
    interface TypographyVariants {
        customFont: TypographyOptions
    }
    interface Palette {
        customColor?: PaletteColor
    }
    interface PaletteOptions {
        customColor?: SimplePaletteColorOptions
    }
}
