import { TypographyProps } from "../../styles/styled-system"

export type Variants =
	| "paragraph-16"
	| "paragraph-14"
	| "headline-1"
	| "headline-2"
	| "headline-3"

export interface Variant extends TypographyProps {
	as: any
}

export const bodyFontFamily = "Roboto Mono, helvetica, arial, sans-serif"
export const headingFontFamily = "Reverb-Bold, helvetica, arial, serif"

export type FontWeight = "normal" | "bold"

export const fontWeight: Record<FontWeight, string> = {
	normal: "400",
	bold: "700",
}

export const variants: Record<Variants, Variant> = {
	"headline-1": {
		as: "h1",
		fontSize: { _: 9, s: 16, l: 20, xl: 20 },
		fontWeight: "bold",
		letterSpacing: 0.25,
		mb: 1.75,
	},
	"headline-2": {
		as: "h2",
		fontSize: { _: 3, l: 4 },
		fontWeight: "bold",
		mb: 4,
	},
	"headline-3": {
		as: "h3",
		fontSize: { _: 2.25, l: 2.5 },
		fontWeight: "bold",
		mb: 3,
	},
	"paragraph-16": {
		as: "p",
		fontSize: 2,
		mb: 2,
	},
	"paragraph-14": {
		as: "p",
		fontSize: 1.75,
		mb: 2,
	},
}
