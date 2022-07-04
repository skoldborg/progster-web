import { baseFontSize, bodyFontFamily, headingFontFamily } from "../constants"

export default `
  body {
    font-size: ${baseFontSize}px;
    font-family: ${bodyFontFamily};
    line-height: 1.3;
    text-rendering: geometricPrecision;
  }

  h1 {
    font-family: ${headingFontFamily};
  }
`
