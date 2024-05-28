import Head from "next/head"
import Link from "next/link"
import { Flex } from "../components/Flex"
import { Text } from "../components/Text"
import { BackLink } from "../components/BackLink/BackLink"
import { scale } from "../styles"
import styled from "styled-components"

const ProjectLink = styled.a`
	font-size: ${scale.px(4)};
	text-decoration: none;
	margin-bottom: ${scale.px(1)};

	&:hover {
		text-decoration: underline;
	}
`

export default function Projects() {
	return (
		<>
			<Head>
				<title>Progster - Freelance web developer - About</title>
				<meta
					name="description"
					content="My name is Pierre Sköldborg and I'm a freelance web developer from Gothenburg. I work across the full Javascript stack and have a particular fondness for React and NodeJS."
				/>
			</Head>
			<Flex
				as="section"
				flexDirection="column"
				h={{ m: 1 }}
				justifyContent="center"
			>
				<h1 className="visually-hidden">Progster - Freelance Web Developer</h1>
				<Flex
					flexDirection="column"
					w={1}
					maxw={240}
					mx="auto"
					alignItems="center"
				>
					<Link href="/" passHref>
						<BackLink aria-label="Navigate back to startpage">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								aria-hidden="true"
							>
								<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
							</svg>
						</BackLink>
					</Link>
					<Flex
						display="block"
						m={{ _: 3, m: 5, l: 5 }}
						position="relative"
						zIndex="1"
					>
						<Text
							as="h2"
							textTransform="uppercase"
							textAlign="center"
							textDecoration="underline"
							mb={6}
						>
							Selected Projects
						</Text>

						<Flex as="ul" alignItems="center" flexDirection="column">
							<Flex as="li" flexDirection="column" alignItems="center" mb={4}>
								<ProjectLink
									href="https://folkhalsomyndigheten.se"
									target="_blank"
									rel="noopenen noreferrer"
								>
									Public Health Agency of Sweden
								</ProjectLink>
								<Text mb={1}>2023 &ndash; Lead Front End</Text>
								<Text>React | Typescript | Accessibility | Storybook</Text>
							</Flex>

							<Flex as="li" flexDirection="column" alignItems="center" mb={4}>
								<ProjectLink
									href="https://folkhalsomyndigheten.se"
									target="_blank"
									rel="noopenen noreferrer"
								>
									GöteborgsOperan
								</ProjectLink>
								<Text mb={1}>2022 &ndash; Lead Front End</Text>
								<Text>
									React | NodeJS | Typescript | GraphQL | Docker | Azure DevOps
									| Accessibility | Storybook
								</Text>
							</Flex>

							<Flex as="li" flexDirection="column" alignItems="center" mb={4}>
								<ProjectLink
									href="https://folkhalsomyndigheten.se"
									target="_blank"
									rel="noopenen noreferrer"
								>
									Capio
								</ProjectLink>
								<Text mb={1}>2021 &ndash; Lead Front End</Text>
								<Text>
									React | Typescript | React Query | Styled Components |
									Storybook
								</Text>
							</Flex>

							<Flex as="li" flexDirection="column" alignItems="center" mb={4}>
								<ProjectLink
									href="https://folkhalsomyndigheten.se"
									target="_blank"
									rel="noopenen noreferrer"
								>
									SDG Impact Assessment Tool
								</ProjectLink>
								<Text mb={1}>2021 &ndash; Lead Developer</Text>
								<Text>
									React | NodeJS | Prismic | Typescript | MongoDB | GraphQL |
									Auth0
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}
