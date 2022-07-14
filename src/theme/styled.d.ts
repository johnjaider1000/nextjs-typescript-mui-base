import {
  PaletteColor,
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from "@mui/material";

import { ColorList } from "./types";

declare module "@mui/material/styles" {
  interface Palette {
    customColor: ColorList;
    custonButtonColor: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    customColor: ColorList;
    custonButtonColor: SimplePaletteColorOptions;
  }
  export function createTheme(options?: ThemeOptions, ...args: object[]): Theme;
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    custonButtonColor: true;
  }
}

export default createTheme({ palette });
