import { keyframes } from "styled-components"

export const TRANSITION_CURVE = `cubic-bezier(.79, .3, 0, .96)`

export const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(48px);
    }
    60% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`
