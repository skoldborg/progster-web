import Document, {
	Html,
	Head,
	Main,
	DocumentContext,
	NextScript,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=Condiment&family=DM+Sans&display=swap"
						rel="stylesheet"
					/>
					<link rel="stylesheet" href="https://use.typekit.net/sid6uwf.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
