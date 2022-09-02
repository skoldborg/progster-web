import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { colors } from "../styles/constants"
import { HeroGraphics } from "../components/HeroGraphics"
import styled, { css } from "styled-components"
import { breakpoint } from "../styles"
import { fadeInUp, TRANSITION_CURVE } from "../styles/constants"

export const fadeInContainer = css`
	animation-name: ${fadeInUp};
	animation-timing-function: ${TRANSITION_CURVE};
	animation-duration: 1s;
	animation-delay: 1.5s;
	animation-fill-mode: both;
`

const IntroContainer = styled(Flex)`
	position: absolute;
	bottom: 0;
	left: 0;
	min-height: 65vw;
	width: 100%;
	height: 100%;
	opacity: 0;
	transform: translateY(64px);
	transition: all 1s ${TRANSITION_CURVE};
	transition-delay: 0.2s;

	&.reveal {
		opacity: 1;
		transform: translateY(0);
		transition: all 1s ${TRANSITION_CURVE};
	}

	${breakpoint("l")`
        min-height: 30vw;
    `}
`

const Intro = styled(Text)`
	font-size: 24px;
	margin-bottom: 0;
	position: absolute;
	top: max(360px, 75vh, 110vw);
	text-align: center;
	color: ${colors.white};
	width: 100%;
	max-width: 560px;

	${breakpoint("s")`
        top: unset;
        bottom: 0;
        right: 20%;
        text-align: right;
    `}
`

export default function Home() {
	const ref = React.useRef(null)
	const [heroGraphicsVisible, setHeroGraphicsVisible] = React.useState(false)
	const [introTextVisible, setIntroTextVisible] = React.useState(false)

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setHeroGraphicsVisible(true)
		}, 0)

		return () => clearTimeout(timeout)
	}, [])

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setIntroTextVisible(true)
		}, 1500)

		return () => clearTimeout(timeout)
	}, [])

	return (
		<>
			<Head>
				<title>Progster - Freelance Web Developer</title>
				<meta
					name="description"
					content="I am a web developer with over 10 years experience in helping companies build fast, scalable, and accessible platforms for their digital prescence."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Flex as="section" display="block" ref={ref}>
				<h1 className="visually-hidden">Progster - Freelance Web Developer</h1>
				<Flex flexDirection="column" w={1} h="100vh" maxw={240} mx="auto">
					<Flex h={1} display="block" m={{ _: 2, l: 12 }} position="relative">
						<HeroGraphics visible={heroGraphicsVisible} parentRef={ref} />
						<IntroContainer className={introTextVisible ? "reveal" : ""}>
							<Intro fontSize={3} mb={6}>
								Hi, I'm&nbsp;
								<Link href="#about">
									<a
										onClick={() => {
											setHeroGraphicsVisible(false)
											setIntroTextVisible(false)
										}}
									>
										Pierre Sköldborg
									</a>
								</Link>
								.
								<br />I make internets.
							</Intro>
						</IntroContainer>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
