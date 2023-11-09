import * as React from "react"
import styled, { css } from "styled-components"
import {
	variant,
	ResponsiveValue,
	display,
	DisplayProps,
	alignItems,
	verticalAlign,
	VerticalAlignProps,
	AlignItemsProps,
} from "styled-system"
import { variants, Variants } from "../../styles/constants/typography"
import { typography, TypographyProps } from "../../styles/styled-system"
import { colors } from "../../styles"

export interface TextProps
	extends TypographyProps,
		DisplayProps,
		AlignItemsProps,
		VerticalAlignProps {
	id?: string
	variant?: Variants
	as?: any
	href?: string
	truncate?: ResponsiveValue<
		"singleLine" | "twoLine" | "threeLine" | "fourLine" | "none"
	>
	className?: string
	children?: React.ReactNode
}

export const textStyles = css`
	${typography}
	${display}
	${alignItems}
	${verticalAlign}
	${variant({
		prop: "truncate",
		variants: {
			singleLine: {
				width: "100%",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis",
			},
			twoLine: {
				overflow: "hidden",
				display: "-webkit-box",
				"-webkit-line-clamp": "2",
				"-webkit-box-orient": "vertical",
				whiteSpace: "normal",
			},
			threeLine: {
				overflow: "hidden",
				display: "-webkit-box",
				"-webkit-line-clamp": "3",
				"-webkit-box-orient": "vertical",
				whiteSpace: "normal",
			},
			fourLine: {
				overflow: "hidden",
				display: "-webkit-box",
				"-webkit-line-clamp": "4",
				"-webkit-box-orient": "vertical",
				whiteSpace: "normal",
			},
			none: {
				overflow: "visisble",
				display: "inline",
				"-webkit-line-clamp": "none",
				"-webkit-box-orient": "initial",
				whiteSpace: "normal",
			},
		},
	})}
	${(props) =>
		!(props as TextProps).textColor &&
		css`
				color: ${colors.bodyTextColor};
		
		}`}
`

const withConfig = {
	shouldForwardProp: (prop: any, defaultValidatorFn: any) =>
		![
			"lineHeight",
			"fontWeight",
			"fontSize",
			"fontFamily",
			"display",
			"mr",
			"whitespace",
			"letterSpacing",
			"textColor",
			"variant",
		].includes(prop) && defaultValidatorFn(prop),
}

/**
 * Text element
 */
export const TextStyled = styled.p.withConfig(withConfig)`
	${textStyles}
`

const Text: React.FC<TextProps> = ({ variant = "paragraph-16", ...rest }) => (
	<TextStyled {...variants[variant]} {...rest} />
)

export { Text }
