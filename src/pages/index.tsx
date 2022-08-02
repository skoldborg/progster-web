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

export const fadeInContainer = css`
	animation-name: ${fadeInUp};
	animation-timing-function: ${TRANSITION_CURVE};
	animation-duration: 1s;
	animation-delay: 1.5s;
	animation-fill-mode: both;
`

const IntroContainer = styled(Flex)`
	position: absolute;
	bottom: 0;
	left: 0;
	min-height: 65vw;
	width: 100%;
	height: 100%;
	${fadeInContainer};

	${breakpoint("l")`
        min-height: 30vw;
    `}
`

const Intro = styled(Text)`
	font-size: 24px;
	margin-right: 24px;
	margin-bottom: 0;
	color: var(--cream);
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

const AboutContainer = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	gap: 48px;
	align-items: start;
	max-width: 900px;

	transform: translateY(0);
	opacity: 1;
	transition: all 1.4s cubic-bezier(0.83, 0, 0.17, 1);

	&.hide {
		transform: translateY(64px);
		opacity: 0;
	}
`

const AboutImage = styled.div`
	position: relative;

	&:after {
		content: "";
		display: block;
		position: absolute;
		top: 20px;
		left: 20px;
		width: 100%;
		height: 100%;
		border: 2px solid ${colors.cream};
		z-index: -1;
	}

	// img {
	// 	width: 400px;
	// }
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
				mt={{ l: 32 }}
				alignItems="center"
				justifyContent="center"
			>
				<AboutContainer ref={aboutRef} className={inView ? "" : "hide"}>
					<Flex flexDirection="column" maxw={80} w={1}>
						<Text textColor="cream" variant="preamble">
							I am Pierre Sköldborg, a web developer from Sweden living in
							Gothenburg.
						</Text>

						<Text textColor="cream" variant="paragraph-20">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
							unde tempore excepturi pariatur sit. Repellat mollitia vero, omnis
							aut vitae minus explicabo obcaecati cumque enim, quis voluptatem,
							earum laudantium nesciunt.
						</Text>

						<Text textColor="cream" variant="paragraph-20">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
							labore ullam facere ipsam similique animi iste voluptatum
							provident architecto est neque eligendi dolores tempore nisi
							obcaecati placeat, doloremque corporis suscipit.
						</Text>
					</Flex>

					<AboutImage>
						<Image
							src="/itsame.png"
							alt="A picture of myself on one of my better days"
							width="646"
							height="795"
							layout="responsive"
							quality="100"
						/>
					</AboutImage>
				</AboutContainer>
			</Flex>
		</>
	)
}
