import * as React from "react"
import { Flex } from "../Flex"
import { Button } from "../Button"
import styled from "styled-components"

const NavbarStyled = styled(Flex)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
`

const Navbar: React.FC = (props) => {
	return (
		<NavbarStyled as="nav" py={3} px={3} justifyContent="flex-end">
			<Button>Menu</Button>
		</NavbarStyled>
	)
}

export { Navbar }
