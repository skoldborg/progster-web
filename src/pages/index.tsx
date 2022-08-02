import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { colors } from "../styles/constants"
import { HeroGraphics } from "../components/HeroGraphics"
import styled, { css } from "styled-components"
import { breakpoint } from "../styles"
import { fadeInUp, TRANSITION_CURVE } from "../styles/constants"
import { useInView } from "react-intersection-observer"

const BorderBox = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
	bottom: 24px;
	left: 24px;
	border: 1px solid #313638;
`

export default function Home() {
	const { ref: aboutRef, inView } = useInView({
		threshold: 0.2,
	})

	return (
		<>
			<Head>
				<title>Progster</title>
				<meta
					name="description"
					content="I am a web developer with over 10 years experience in helping companies build fast, scalable, and accessible platforms for their digital prescence."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Flex
				as="section"
				position="relative"
				w="100vw"
				h="100vh"
				// justifyContent="center"
				// alignItems="center"
				p={3}
			>
				<BorderBox></BorderBox>
				<Flex flexDirection="column" p={3}>
					<Text fontSize={3}>Progster</Text>

					<Text>
						Hi, I'm Pierre Sköldborg. <br /> I make internets.
					</Text>
				</Flex>
			</Flex>
		</>
	)
}
