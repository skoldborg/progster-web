import { css } from "styled-components"

export default css`
	// Only show focus outline when required by WCAG
	.js-focus-visible :focus:not(.focus-visible) {
		outline: none;
	}

	:root {
		--white: #fff;
		--black: #000000;
		--red: #e95257;
		--orange: #de8c6e;
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
		background: linear-gradient(
			to bottom right,
			#fe9908 10%,
			#fe7a0b 30%,
			#fa6914 50%,
			#e55f17 80%,
			#c15016 100%
		);
		background-attachment: fixed;
		color: ${({ theme }) => theme.colors.black};
		height: 100%;
	}

	body > div:first-child,
	div#__next,
	div#__next > div {
		height: 100%;
	}

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
