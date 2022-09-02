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
			<Flex as="section" display="block">
				<h1 className="visually-hidden">Progster - Freelance Web Developer</h1>
				<Flex
					flexDirection="column"
					w={1}
					h="100vh"
					maxw={240}
					mx="auto"
					alignItems="center"
				>
					<Flex
						h={1}
						display="block"
						m={{ _: 3, m: 5, l: 5 }}
						position="relative"
						zIndex="1"
					>
						<AboutContainer
							h={1}
							flexDirection="column"
							justifyContent="center"
							maxw={70}
						>
							<Text variant="preamble">
								I am Pierre Sköldborg, a web developer from Sweden living in
								Gothenburg.
							</Text>

							<Text variant="paragraph-20">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
								unde tempore excepturi pariatur sit. Repellat mollitia vero,
								omnis aut vitae minus explicabo obcaecati cumque enim, quis
								voluptatem, earum laudantium nesciunt.
							</Text>

							<Text variant="paragraph-20">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
								labore ullam facere ipsam similique animi iste voluptatum
								provident architecto est neque eligendi dolores tempore nisi
								obcaecati placeat, doloremque corporis suscipit.
							</Text>
						</AboutContainer>
					</Flex>
					<ItsameContainer>
						<Image
							src="/itsame-polaroid.png"
							alt="A picture of myself on one of my better days"
							width="655"
							height="799"
							layout="responsive"
							quality="100"
						/>
					</ItsameContainer>
				</Flex>
			</Flex>
		</>
	)
}
