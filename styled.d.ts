// import original module declarations
import "styled-components";
import { colors } from "../styles/constants/colors";
import { Breakpoints } from "../styles/theme";

// and extend them!
declare module "styled-components" {
    export interface DefaultTheme {
        darkMode: boolean;
        breakpoints: Breakpoints;
        colors: typeof colors;
    }

    export type ColorKeys = keyof DefaultTheme["colors"];
}
