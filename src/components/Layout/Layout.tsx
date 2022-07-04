import { Navbar } from "../Navbar/Navbar"
import { Flex } from "../Flex"

interface LayoutProps {
	children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Flex as="main" w={1} h={1}>
				{children}
			</Flex>
		</>
	)
}

export { Layout }
