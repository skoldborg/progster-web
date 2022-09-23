import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { colors } from "../styles/constants"
import { HeroGraphics } from "../components/HeroGraphics"
import styled, { css } from "styled-components"
import { breakpoint } from "../styles"
import { TRANSITION_CURVE } from "../styles/constants"

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

const IntroInner = styled.div`
	position: absolute;
	top: max(360px, 55vh, 110vw);
	right: 0;
	text-align: center;
	color: ${colors.white};
	width: 100%;
	max-width: 560px;

	${breakpoint("s")`
        top: unset;
        bottom: 0;
        text-align: right;
    `}

	${breakpoint("l")`
		right: 20%;
	`}
`

export default function Home() {
	const router = useRouter()
	const ref = React.useRef(null)
	const [heroGraphicsIsVisible, setHeroGraphicsIsVisible] =
		React.useState(false)
	const [introTextIsVisible, setIntroTextIsVisible] = React.useState(false)

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setHeroGraphicsIsVisible(true)
		}, 0)

		return () => clearTimeout(timeout)
	}, [])

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setIntroTextIsVisible(true)
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
				<Flex
					flexDirection="column"
					w={1}
					h="100vh"
					maxw={240}
					mx="auto"
					style={{ overflowY: "hidden" }}
				>
					<Flex
						h={1}
						display="block"
						m={{ _: 3, m: 5, l: 5 }}
						position="relative"
					>
						<HeroGraphics isVisible={heroGraphicsIsVisible} parentRef={ref} />
						<IntroContainer className={introTextIsVisible ? "reveal" : ""}>
							<IntroInner>
								<Text fontSize={3}>
									Hi, I'm&nbsp;
									<Link href="/about">
										<a
											onClick={(e) => {
												e.preventDefault()

												setHeroGraphicsIsVisible(false)
												setIntroTextIsVisible(false)

												setTimeout(() => {
													router.push("/about")
												}, 1200)
											}}
										>
											Pierre Sköldborg
										</a>
									</Link>
									.
									<br />I make internets.
								</Text>
							</IntroInner>
						</IntroContainer>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
