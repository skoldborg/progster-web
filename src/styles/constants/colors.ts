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
const black = "#000000"
const black33 = "#333333"
const white = "#FFFFFF"
const red = "#ea4715"
const orange = "#ff6b01"
const pink = "#ffc3de"
const green = "#009c45"
const yellow = "#ffd200"
const brown = "#85543c"
const mint = "#00e09d"
const cream = "#f2e8d9"
const darkcream = "#cbc3b6"
const gray = "#949494"
const lightgray = "#e6e6e6"

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
	bodyColor: black33,
	bodyTextColor: white,
}
