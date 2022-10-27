import * as React from "react"
import { breakpoint } from "../../styles"
import styled from "styled-components"

type SocialLinkType = "linkedin" | "email"

interface SocialLinkProps extends React.HTMLProps<HTMLAnchorElement> {
	type: SocialLinkType
	label: string
}

const SocialLinkStyled = styled.a``

const SocialLink = ({
	type,
	label,
	href,
	target,
	rel,
	...rest
}: SocialLinkProps) => {
	return (
		<SocialLinkStyled href={href} target={target} rel={rel}>
			<img
				src={type === "linkedin" ? "/linkedin.svg" : "/email.svg"}
				alt=""
				style={{
					width: type === "linkedin" ? "30px" : "40px",
				}}
			/>
			<span className="visually-hidden">{label}</span>
		</SocialLinkStyled>
	)
}

export { SocialLink }
