import React from "react"
import Head from "next/head"
import Link from "next/link"
import styled, { css, keyframes } from "styled-components"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { VerbosityRegulator } from "../components/VerbosityRegulator"
import { fadeInUp, TRANSITION_CURVE, breakpoint } from "../styles"

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

const fadeInContainer = css`
	animation-name: ${fadeInUp};
	animation-timing-function: ${TRANSITION_CURVE};
	animation-duration: 1s;
	animation-delay: 0;
	animation-fill-mode: both;
`

const AboutContainer = styled(Flex)`
	${fadeInContainer}
`

const BackLink = styled.a`
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
	}

	&:hover {
		svg {
			${movePrevBtnArrow};
		}
	}
`

export default function About() {
	const [bioLength, setBioLength] = React.useState(1)

	const adjustVerbosity = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		setBioLength(Number(target.value) ?? 1)
	}

	React.useEffect(() => {
		if (typeof window !== "undefined") {
			const mediaQuery = window.matchMedia("screen and (max-width: 768px)")

			if (mediaQuery.matches) {
				setBioLength(2)
			}
		}
	}, [])

	return (
		<>
			<Head>
				<title>Progster - Freelance web developer - About</title>
				<meta
					name="description"
					content="My name is Pierre Sköldborg and I'm a freelance web developer from Gothenburg. I work across the full Javascript stack and have a particular fondness for React and NodeJS."
				/>
			</Head>
			<Flex
				as="section"
				flexDirection="column"
				h={{ m: 1 }}
				justifyContent="center"
			>
				<h1 className="visually-hidden">Progster - Freelance Web Developer</h1>
				<Flex
					flexDirection="column"
					w={1}
					maxw={240}
					mx="auto"
					alignItems="center"
				>
					<Link href="/" passHref>
						<BackLink aria-label="Navigate back to startpage">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								aria-hidden="true"
							>
								<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
							</svg>
						</BackLink>
					</Link>
					<Flex
						display="block"
						m={{ _: 3, m: 5, l: 5 }}
						position="relative"
						zIndex="1"
					>
						<AboutContainer
							py={{ _: 10, l: 5 }}
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							maxw={80}
						>
							<Text variant="preamble">
								Hey! My name is Pierre Sköldborg. I'm a freelance web developer
								from Sweden living in Gothenburg.
							</Text>

							{bioLength >= 2 && (
								<>
									<Text variant="paragraph-20">
										I work across the full Javascript stack and have a
										particular fondness for NodeJS and React.
									</Text>
									<Text variant="paragraph-20">
										In addition to my work as a developer I also teach a course
										in NodeJS and MongoDB (among other things) at{" "}
										<a
											href="https://www.yrgo.se/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Yrgo
										</a>
										.
									</Text>
								</>
							)}

							{bioLength > 2 && (
								<Text variant="paragraph-20">
									When I'm not writing code I am most likely spending time with
									my wife and two kids, watching Arsenal beat Spurs, playing
									and/or listening to music, or watching a movie.
								</Text>
							)}
							<VerbosityRegulator handleOnChange={adjustVerbosity} />
						</AboutContainer>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
