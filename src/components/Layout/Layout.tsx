import { Flex } from "../Flex"

interface LayoutProps {
	children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Flex as="main" display="block" w={1} h={1}>
				{children}
			</Flex>
		</>
	)
}

export { Layout }
