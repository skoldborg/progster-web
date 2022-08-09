import { TypographyProps } from "../../styles/styled-system"

export type Variants =
	| "paragraph-16"
	| "paragraph-20"
	| "headline-1-plus"
	| "headline-1"
	| "headline-2"
	| "headline-3"
	| "preamble"

export interface Variant extends TypographyProps {
	as: any
}

export const bodyFontFamily = "'DM Sans', helvetica, arial, sans-serif"
export const headingFontFamily = "'Condiment', helvetica, arial, serif"

export type FontWeight = "normal" | "bold"

export const fontWeight: Record<FontWeight, string> = {
	normal: "400",
	bold: "600",
}

export const variants: Record<Variants, Variant> = {
	"headline-1-plus": {
		as: "h1",
		fontSize: { _: 9, s: 16 },
		fontWeight: "bold",
		letterSpacing: 0.25,
		mb: 1.75,
	},
	"headline-1": {
		as: "h1",
		fontSize: { _: 4, s: 6, l: 10 },
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
	"paragraph-20": {
		as: "p",
		fontSize: 2.5,
		mb: 2,
	},
	preamble: {
		as: "p",
		fontSize: 3,
		fontWeight: "bold",
		mb: 2,
	},
}
