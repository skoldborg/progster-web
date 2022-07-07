import Head from "next/head"
import Link from "next/link"
import { Button } from "../components/Button"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
// import styled from "styled-components"

// const Section = styled(Flex)`

// `

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
			<Flex flexDirection="column">
				<Flex
					as="section"
					flexDirection="column"
					w={1}
					h={1}
					minh="100vh"
					pl={{ _: 3, l: 6 }}
					justifyContent="center"
				>
					<Text variant="headline-1" className="long-shadow">
						PROGSTER
					</Text>

					<Flex flexDirection="column" maxw={70}>
						<Text fontSize={3} mb={6}>
							Hi, I'm&nbsp;
							<Link href="#about">
								<a>Pierre Sköldborg</a>
							</Link>
							.
							<br />I make&nbsp;
							<Link href="/work">
								<a>internets</a>
							</Link>
							.
						</Text>
					</Flex>
				</Flex>
				<Flex
					as="section"
					id="about"
					flexDirection="column"
					w={1}
					h={1}
					minh="100vh"
					pl={{ _: 3, l: 6 }}
					justifyContent="center"
				>
					<Flex flexDirection="column" w={80} maxw="80%">
						<Text variant="preamble">
							I am Pierre Sköldborg, a web developer from Sweden living in
							Gothenburg.
						</Text>

						<Text variant="paragraph-20">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
							unde tempore excepturi pariatur sit. Repellat mollitia vero, omnis
							aut vitae minus explicabo obcaecati cumque enim, quis voluptatem,
							earum laudantium nesciunt.
						</Text>

						<Text variant="paragraph-20">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							labore ullam facere ipsam similique animi iste voluptatum
							provident architecto est neque eligendi dolores tempore nisi
							obcaecati placeat, doloremque corporis suscipit.
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
