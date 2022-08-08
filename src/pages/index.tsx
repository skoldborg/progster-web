import Head from "next/head"
import React from "react"

import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { AnimatedGradient } from "../components/AnimatedGradient"
import styled from "styled-components"

const Title = styled(Text)`
	position: absolute;
	top: 24px;
	left: 50%;
	transform: translateX(-50%);
`

const BorderBox = styled.div`
	position: absolute;
	top: 24px;
	right: 24px;
	bottom: 24px;
	left: 24px;
	border: 1px solid #313638;
`

export default function Home() {
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

			<Flex as="section" position="relative" w="100vw" h="100vh" p={3}>
				<AnimatedGradient />
				<Title variant="headline-1" textAlign="center">
					Progster
				</Title>
				<Flex
					w={1}
					flexDirection="column"
					position="relative"
					p={3}
					alignItems="center"
					justifyContent="center"
				>
					<Text textAlign="center" fontSize={4}>
						Hi, I'm Pierre Sköldborg. <br /> I make internets.
					</Text>
				</Flex>
			</Flex>
		</>
	)
}
