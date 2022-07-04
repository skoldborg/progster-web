import Head from "next/head"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { Button } from "../components/Button"
import styled from "styled-components"

const Title = styled(Text)``

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
			<Flex
				flexDirection="column"
				w={1}
				h={1}
				justifyContent="center"
				alignItems="center"
			>
				<Title variant="headline-1" className="long-shadow">
					PROGSTER
				</Title>
				<Button>Hire me</Button>
			</Flex>
		</>
	)
}
