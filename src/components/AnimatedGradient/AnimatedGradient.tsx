import * as React from "react"
import styled from "styled-components"
import Granim from "granim"

import { opts } from "./granimSettings"

const AnimatedGradientCanvas = styled.canvas`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const AnimatedGradient: React.FC = (props) => {
	const ref = React.useRef()

	React.useEffect(() => {
		if (
			typeof window !== undefined &&
			typeof document !== undefined &&
			ref?.current
		) {
			new Granim(opts)
		}
	}, [ref])

	return <AnimatedGradientCanvas ref={ref} id="animated-gradient-canvas" />
}

export { AnimatedGradient }
