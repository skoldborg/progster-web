import * as CSS from "csstype"

export const colorKeys = [
	"black",
	"black33",
	"white",
	"red",
	"orange",
	"pink",
	"green",
	"yellow",
	"brown",
	"mint",
	"cream",
	"darkcream",
	"gray",
	"lightgray",
	"bodyColor",
	"bodyTextColor",
] as const

export type ColorKeys = typeof colorKeys[number]

// Primaries
const black = "var(--black)"
const black33 = "var(--black33)"
const white = "var(--white)"
const red = "var(--red)"
const orange = "var(--orange)"
const pink = "var(--pink)"
const green = "var(--green)"
const yellow = "var(--yellow)"
const brown = "var(--brown)"
const mint = "var(--mint)"
const cream = "var(--cream)"
const darkcream = "var(--darkcream)"
const gray = "var(--gray)"
const lightgray = "var(--lightgray)"

export const colors: Record<ColorKeys, CSS.Property.Color> = {
	black,
	black33,
	white,
	red,
	orange,
	pink,
	green,
	yellow,
	brown,
	mint,
	cream,
	darkcream,
	gray,
	lightgray,
	bodyColor: orange,
	bodyTextColor: black33,
}
