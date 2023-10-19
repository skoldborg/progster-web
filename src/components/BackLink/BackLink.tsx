import styled, { css, keyframes } from "styled-components"
import { breakpoint } from "../../styles"

const moveBackLinkKeyframes = keyframes`
    0% {
        transform: translateX(0px);
        opacity: 1;
    }

    5% {
        transform: translateX(0px);
        opacity: 1;
    }

    30% {
        transform: translateX(-24px);
        opacity: 0;
    }

    60% {
        transform: translateX(80px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`

const movePrevBtnArrow = css`
	animation-name: ${moveBackLinkKeyframes};
	animation-timing-function: cubic-bezier(0.55, 0.003, 0.164, 0.991);
	animation-duration: 0.4s;
	animation-fill-mode: forwards;
`

const BackLinkStyled = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 24px;
	top: 32px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid var(--black);
	font-size: 18px;
	overflow: hidden;
	z-index: 2;

	${breakpoint("m")`
		left: 32px;
	`}

	svg {
		width: 20px;
		height: 20px;
		pointer-events: none;
	}

	&:hover {
		cursor: pointer;

		svg {
			${movePrevBtnArrow};
		}
	}
`

const BackLink = (props) => <BackLinkStyled {...props} />

export { BackLink }
