import Head from "next/head"
import { Button } from "../components/Button"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"

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
				pl={4}
				justifyContent="center"
				alignItems="center"
			>
				<Text variant="headline-1" className="long-shadow">
					PROGSTER
				</Text>

				<Flex flexDirection="column" alignItems="center" maxw={70}>
					<Text fontSize={3} textAlign="center" mb={6}>
						Hi, I'm Pierre Sköldborg. <br />
						I'm an independent web developer who loves to build web experiences
						that are accessible to everyone.
						{/* Web Developer <br />
						Living in Gothenburg <br />
						+10 years experience <br />
						Available for hire */}
					</Text>
					<Flex>
						<Button>Tell me more</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
