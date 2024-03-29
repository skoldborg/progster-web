import * as React from "react"
import { Flex } from "../Flex"
import { Text } from "../Text"
import { breakpoint } from "../../styles"
import styled from "styled-components"

interface VerbosityRegulatorProps {
	handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const VerbosityRegulatorStyled = styled.div`
	display: none;
	align-items: center;
	flex-direction: column;
	margin-top: 24px;

	${breakpoint("m")`
		display: flex;
        width: 100%;
	`}
`

const VerbosityRegulatorOption = styled.div`
	display: flex;
	height: 40px;
	margin: 0;
	position: relative;
	margin: 0 32px;

	input {
		height: 100%;
		left: 0;
		margin: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	label {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 12px;
	}

	.radio {
		position: relative;
		&:before {
			content: "";
			display: block;
			border: 1px solid var(--black);
			border-radius: 50%;
			width: 20px;
			height: 20px;
		}

		&:after {
			content: "";
			border-radius: 50%;
			width: 12px;
			height: 12px;
			background-color: var(--black);
			position: absolute;
			top: 4px;
			left: 4px;
			transform: scale(0);
			transition: transform 0.1s ease-in-out;
		}
	}

	input:checked + label {
		.radio:after {
			transform: scale(1);
		}
	}
`

const VerbosityRegulator = ({ handleOnChange }: VerbosityRegulatorProps) => {
	return (
		<VerbosityRegulatorStyled>
			<Text fontWeight="bold">Adjust verbosity of bio</Text>
			<Flex w={1} justifyContent="space-between" alignItems="center">
				<VerbosityRegulatorOption>
					<input
						type="radio"
						id="verbosity-short"
						name="verbosity"
						value="1"
						onChange={(e) => handleOnChange(e)}
						defaultChecked
					/>
					<label htmlFor="verbosity-short">
						<span className="radio"></span>
						Short and sweet
					</label>
				</VerbosityRegulatorOption>
				<VerbosityRegulatorOption>
					<input
						type="radio"
						id="verbosity-medium"
						name="verbosity"
						value="2"
						onChange={(e) => handleOnChange(e)}
					/>
					<label htmlFor="verbosity-medium">
						<span className="radio"></span>
						Medium please
					</label>
				</VerbosityRegulatorOption>
				<VerbosityRegulatorOption>
					<input
						type="radio"
						id="verbosity-long"
						name="verbosity"
						value="3"
						onChange={(e) => handleOnChange(e)}
					/>
					<label htmlFor="verbosity-long">
						<span className="radio"></span>I want it all!
					</label>
				</VerbosityRegulatorOption>
			</Flex>
		</VerbosityRegulatorStyled>
	)
}

export { VerbosityRegulator }
