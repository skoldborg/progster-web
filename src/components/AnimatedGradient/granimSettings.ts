const green = "rgba(175, 198, 141, 1)"
const pink = "rgba(255, 140, 170, 1)"
const blue = "rgba(54, 183, 209, 1)"
const orange = "rgba(244, 146, 6, 1)"

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
					{ color: green, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: pink, pos: 0.8 },
					{ color: orange, pos: 1 },
				],
				[
					{ color: green, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: pink, pos: 0.8 },
					{ color: orange, pos: 1 },
				],
				[
					{ color: green, pos: 0.1 },
					{ color: pink, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: orange, pos: 1 },
				],
				[
					{ color: green, pos: 0.1 },
					{ color: pink, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: green, pos: 1 },
				],
				[
					{ color: orange, pos: 0.1 },
					{ color: pink, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: green, pos: 1 },
				],
				[
					{ color: blue, pos: 0.1 },
					{ color: orange, pos: 0.3 },
					{ color: green, pos: 0.8 },
					{ color: pink, pos: 1 },
				],
				[
					{ color: green, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: pink, pos: 0.8 },
					{ color: orange, pos: 1 },
				],
				[
					{ color: pink, pos: 0.1 },
					{ color: green, pos: 0.3 },
					{ color: blue, pos: 0.8 },
					{ color: orange, pos: 1 },
				],
				[
					{ color: pink, pos: 0.1 },
					{ color: green, pos: 0.3 },
					{ color: orange, pos: 0.8 },
					{ color: blue, pos: 1 },
				],
				[
					{ color: orange, pos: 0.1 },
					{ color: pink, pos: 0.3 },
					{ color: green, pos: 0.8 },
					{ color: blue, pos: 1 },
				],
				[
					{ color: orange, pos: 0.1 },
					{ color: blue, pos: 0.3 },
					{ color: pink, pos: 0.8 },
					{ color: green, pos: 1 },
				],
			],
			transitionSpeed: 2000,
			loop: true,
		},
	},
}
