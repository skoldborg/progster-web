import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { theme, GlobalStyles } from "../styles"
import "../../public/fonts/fonts.css"
import "../styles/base/functions.scss"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
