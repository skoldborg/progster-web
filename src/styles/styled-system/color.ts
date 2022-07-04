import { system, Config } from "styled-system"

const configs: Config = {
	textColor: {
		property: "color",
		scale: "colors",
	},
	backgroundColor: {
		property: "backgroundColor",
		scale: "colors",
	},
}

export const color = system(configs)
