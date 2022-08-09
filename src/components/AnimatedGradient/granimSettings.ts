const purple = "rgba(72,93,166, 1)"
const blue = "rgba(0,161,186, 1)"
const oceanGreen = "rgba(54,196,134, 1)"
const meadowGreen = "rgba(0,191,152, 1)"

// #6d327c, #485DA6, #00a1ba, #00BF98, #36C486

export const opts: Granim.Options = {
	element: "#animated-gradient-canvas",
	name: "granim",
	elToSetClassOn: "body",
	direction: "diagonal",
	isPausedWhenNotInView: true,
	scrollDebounceThreshold: 300,
	stateTransitionSpeed: 1000,
	states: {
		"default-state": {
			gradients: [
				[
					{ color: purple, pos: 0.1 },
					{ color: oceanGreen, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: meadowGreen, pos: 1 },
				],
				[
					{ color: purple, pos: 0.1 },
					{ color: oceanGreen, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: meadowGreen, pos: 1 },
				],
				[
					{ color: purple, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: oceanGreen, pos: 0.8 },
					{ color: meadowGreen, pos: 1 },
				],
				[
					{ color: purple, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: oceanGreen, pos: 0.8 },
					{ color: purple, pos: 1 },
				],
				[
					{ color: meadowGreen, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: oceanGreen, pos: 0.8 },
					{ color: purple, pos: 1 },
				],
				[
					{ color: oceanGreen, pos: 0.1 },
					{ color: meadowGreen, pos: 0.3 },
					{ color: purple, pos: 0.8 },
					{ color: blue, pos: 1 },
				],
				[
					{ color: purple, pos: 0.1 },
					{ color: oceanGreen, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: meadowGreen, pos: 1 },
				],
				[
					{ color: blue, pos: 0.1 },
					{ color: purple, pos: 0.3 },
					{ color: oceanGreen, pos: 0.8 },
					{ color: meadowGreen, pos: 1 },
				],
				[
					{ color: blue, pos: 0.1 },
					{ color: purple, pos: 0.3 },
					{ color: meadowGreen, pos: 0.8 },
					{ color: oceanGreen, pos: 1 },
				],
				[
					{ color: meadowGreen, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: purple, pos: 0.8 },
					{ color: oceanGreen, pos: 1 },
				],
				[
					{ color: meadowGreen, pos: 0.1 },
					{ color: oceanGreen, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: purple, pos: 1 },
				],
			],
			transitionSpeed: 2000,
			loop: true,
		},
	},
}
