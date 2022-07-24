import { css } from "styled-components"

export default css`
	// Only show focus outline when required by WCAG
	.js-focus-visible :focus:not(.focus-visible) {
		outline: none;
	}

	:root {
		--white: #ffffff;
		--black: #000000;
		--red: #ea4715;
		--orange: #ff6b01;
		--pink: #ffc3de;
		--green: #009c45;
		--yellow: #ffd200;
		--brown: #85543c;
		--mint: #00e09d;
		--cream: #f2e8d9;
		--darkcream: #cbc3b6;
		--gray: #949494;
		--lightgray: #e6e6e6;
	}

	html {
		box-sizing: border-box;
		height: 100%;
	}
	body {
		position: relative;
		background-color: var(--orange);
		color: ${({ theme }) => theme.colors.black};
		height: 100%;

		// &:after {
		// 	content: "";
		// 	display: block;
		// 	width: 100%;
		// 	height: 100%;
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	background: radial-gradient(
		// 		circle at -30%,
		// 		#333,
		// 		#333 20%,
		// 		var(--red) 70%,
		// 		var(--orange) 80%,
		// 		#333 81%
		// 	);
		// 	z-index: -1;
		// }
	}

	// body > div:first-child,
	// div#__next,
	// div#__next > div {
	// 	height: 100%;
	// }

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	img {
		max-width: 100%;
	}

	a {
		display: inline-block;
		color: inherit;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`
