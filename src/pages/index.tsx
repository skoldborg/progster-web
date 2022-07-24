import Head from "next/head"
import Link from "next/link"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { HeroGraphics } from "../components/HeroGraphics"
import styled from "styled-components"
import { breakpoint } from "../styles"

const IntroContainer = styled(Flex)`
	position: absolute;
	bottom: 0;
	left: 0;
	min-height: 65vw;
	width: 100%;
	height: 100%;

	${breakpoint("l")`
        min-height: 30vw;
    `}
`

const Intro = styled(Text)`
	font-size: 24px;
	margin-right: 24px;
	margin-bottom: 0;
	color: var(--black33);
	position: absolute;
	top: max(360px, 75vh, 110vw);
	text-align: center;
	width: 100%;
	max-width: 560px;

	${breakpoint("s")`
        top: unset;
        bottom: 0;
        right: 0;
        text-align: right;
    `}
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

			<Flex as="section" display="block">
				<span className="visually-hidden">p</span>
				<Flex
					flexDirection="column"
					w={1}
					h="calc(100vh - 24px)"
					maxw={240}
					mx="auto"
				>
					<Flex h={1} display="block" m={{ _: 2, l: 3 }} position="relative">
						<HeroGraphics />
						<IntroContainer>
							<Intro fontSize={3} mb={6}>
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
							</Intro>
						</IntroContainer>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				as="section"
				id="about"
				flexDirection="column"
				w={1}
				h={1}
				minh="100vh"
				mt={{ l: 25 }}
				pr={{ _: 3, l: 6 }}
				alignItems="flex-end"
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
						labore ullam facere ipsam similique animi iste voluptatum provident
						architecto est neque eligendi dolores tempore nisi obcaecati
						placeat, doloremque corporis suscipit.
					</Text>
				</Flex>
			</Flex>
		</>
	)
}
