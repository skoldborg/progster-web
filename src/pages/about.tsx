import Head from "next/head"
import Image from "next/image"
import styled, { css } from "styled-components"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { rollInLeft, fadeInUp, TRANSITION_CURVE } from "../styles"

export const fadeInContainer = css`
	animation-name: ${fadeInUp};
	animation-timing-function: ${TRANSITION_CURVE};
	animation-duration: 1s;
	animation-delay: 0;
	animation-fill-mode: both;
`

const AboutContainer = styled(Flex)`
	${fadeInContainer}
`

const rollInImage = css`
	animation-name: ${rollInLeft};
	animation-timing-function: ${TRANSITION_CURVE};
	animation-duration: 1s;
	animation-delay: 0.8s;
	animation-fill-mode: both;
`

const ItsameContainer = styled.figure`
	position: absolute;
	right: -40px;
	top: 60%;
	transform: translateY(-50%);
	width: 320px;
	height: auto;
	z-index: 0;

	${rollInImage}
`

const VerbosityRegulator = styled.input`
	width: 100%;
	-webkit-appearance: none;
	background: transparent;

	::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	::-ms-track {
		width: 100%;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	// Thumb
	::-webkit-slider-thumb {
		width: 24px;
		height: 24px;
		background-color: var(--white);
		border-radius: 50%;
	}
`

export default function About() {
	return (
		<>
			<Head>
				<title>Progster - About</title>
				<meta
					name="description"
					content="I am a web developer with over 10 years experience in helping companies build fast, scalable, and accessible platforms for their digital prescence."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex as="section" flexDirection="column" h={1} justifyContent="center">
				<h1 className="visually-hidden">Progster - Freelance Web Developer</h1>
				<Flex
					flexDirection="column"
					w={1}
					maxw={240}
					mx="auto"
					alignItems="center"
				>
					<Flex
						display="block"
						m={{ _: 3, m: 5, l: 5 }}
						position="relative"
						zIndex="1"
					>
						<AboutContainer
							h={1}
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
							maxw={80}
						>
							<Text variant="preamble">
								Hey! My name is Pierre Sköldborg. I'm a web developer from
								Sweden living in Gothenburg.
							</Text>

							<Text variant="paragraph-20">
								I've been making websites since stuff like HTML Frames were must
								haves for every site, and CSS was the shiny new toy. A lot has
								happened since then.
							</Text>

							<Text variant="paragraph-20">
								For my own part I took my web development hobby and turned it
								into a profession back in 2013, and since then I've had the
								privilege of working with a wide variety of clients and
								agencies.
							</Text>
						</AboutContainer>
						<VerbosityRegulator
							type="range"
							id="verbosity-regulator"
							name="verbosity-regulator"
							min="1"
							max="3"
						/>
						<label className="visually-hidden" htmlFor="verbosity-regulator">
							Regulate the verbosity of my tired about text.
						</label>
					</Flex>
					{/* <ItsameContainer>
						<Image
							src="/itsame-polaroid.png"
							alt="A picture of myself on one of my better days"
							width="655"
							height="799"
							layout="responsive"
							quality="100"
						/>
					</ItsameContainer> */}
				</Flex>
			</Flex>
		</>
	)
}
