import * as React from "react"
import styled, { css } from "styled-components"
import { scale, colors, headingFontFamily } from "../../styles"

export type ButtonSize = "normal" | "small"

export interface ButtonProps {
	children?: React.ReactNode
	disabled?: boolean
	size?: ButtonSize
}

export interface ButtonComponent {
	/**
	 * Anchor-tag
	 */
	Anchor: typeof ButtonAnchor
}

export const ButtonStyles = css<ButtonProps>`
	display: inline-block;
	margin: 0;
	padding: 0;
	z-index: 10;
	outline: none;
	border: none;
	cursor: pointer;
	border-radius: 10px;
	font-family: ${headingFontFamily};
	background: ${colors.black};
	transition: background 0s linear 0s;

	& > span {
		display: inline-block;
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 2;
		text-align: center;
		background: ${colors.white};
		border: 1px solid ${colors.white};
		color: ${colors.black};
		letter-spacing: 1px;
		border-radius: 10px;
		padding: ${scale.px(1.5)} ${scale.px(2)};
		font-size: ${scale.px(3)};
		line-height: ${scale.px(3)};
		text-transform: uppercase;
		transform: translate(4px, -4px);
		transition: all 0.15s cubic-bezier(0.25, 1, 0.5, 1);
	}

	&:before,
	&:after {
		background: ${colors.black};
		content: "";
		display: block;
		position: absolute;
		height: 0px;
		width: 0px;
	}

	&:before {
		left: 1px;
		top: 2px;
		width: 10px;
		height: 8px;
		transform: skewY(-45deg);
		transition: top 0.15s cubic-bezier(0.25, 1, 0.5, 1);
	}

	&:after {
		bottom: 1px;
		right: 2px;
		width: 8px;
		height: 10px;
		transform: skew(-45deg);
		transition: right 0.15s cubic-bezier(0.25, 1, 0.5, 1);
	}

	&:disabled {
		cursor: default;
		opacity: 50%;
	}

	// Hover animation
	&:hover,
	&:focus {
		& > * {
			transform: translate(8px, -8px);
		}

		&:before {
			top: 0;
		}

		&:after {
			right: 0;
		}
	}

	// Click animation
	&:active {
		background: transparent;
		transition: background 0s linear 0.15s;

		& > * {
			transform: translate(0);
		}

		&:before {
			top: 8px;
		}

		&:after {
			right: 8px;
		}
	}
`

// Stop attr in list from rendering to component HTML
const withConfig = {
	shouldForwardProp: (prop: any, defaultValidatorFn: any) =>
		![
			"lineHeight",
			"fontWeight",
			"fontSize",
			"display",
			"mr",
			"whitespace",
			"textColor",
			"variant",
		].includes(prop) && defaultValidatorFn(prop),
}

const ButtonBase: React.FC<
	{
		component: any
	} & ButtonProps
> = ({ children, component: Component, ...rest }) => (
	<Component {...rest}>
		<span>{children}</span>
	</Component>
)

const defaultProps: ButtonProps = {
	disabled: false,
	size: "normal",
}

/**
 * Button element
 */
const ButtonStyled = styled.button.withConfig(withConfig)`
	${ButtonStyles}
`

export interface ButtonButtonProps
	extends ButtonProps,
		Omit<React.HTMLProps<HTMLButtonElement>, "size"> {}

const Button: React.FC<ButtonButtonProps> & ButtonComponent = (props) => (
	<ButtonBase component={ButtonStyled} {...props} />
)

Button.defaultProps = defaultProps

/**
 * Anchor element
 */
const AnchorStyled = styled.a.withConfig(withConfig)`
	${ButtonStyles}
`
const ButtonAnchor: React.FC<
	ButtonProps & Omit<React.HTMLProps<HTMLAnchorElement>, "size">
> = (props) => <ButtonBase component={AnchorStyled} {...props} />

Button.Anchor = ButtonAnchor
Button.Anchor.defaultProps = defaultProps

export { Button }
