import { Navbar } from "../Navbar/Navbar"
import { Flex } from "../Flex"

interface LayoutProps {
	children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}
			<Flex as="main" display="block" w={1} style={{ overflowY: "hidden" }}>
				{children}
			</Flex>
		</>
	)
}

export { Layout }
