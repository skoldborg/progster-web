import Head from "next/head"
import { Button } from "../components/Button"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"

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
			<Flex
				flexDirection="column"
				h={1}
				pl={4}
				justifyContent="center"
				w={80}
				maxw="80%"
			>
				<Text variant="preamble">
					I am Pierre Sköldborg, a web developer from Sweden living in
					Gothenburg.
				</Text>

				<Text variant="paragraph-20">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae unde
					tempore excepturi pariatur sit. Repellat mollitia vero, omnis aut
					vitae minus explicabo obcaecati cumque enim, quis voluptatem, earum
					laudantium nesciunt.
				</Text>

				<Text variant="paragraph-20">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore
					ullam facere ipsam similique animi iste voluptatum provident
					architecto est neque eligendi dolores tempore nisi obcaecati placeat,
					doloremque corporis suscipit.
				</Text>

				<Flex>
					<Button>Back</Button>
				</Flex>
			</Flex>
		</>
	)
}
