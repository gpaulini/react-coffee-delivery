import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}
	
	body {
		background-color: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors['base-text']};
		font-family: ${props => props.theme.fontFamily.roboto};
		padding-bottom: 10rem;
	}

	body > * {
		max-width: 72rem;
		margin-inline: auto;
	}

	h1 {
		color: ${props => props.theme.colors['base-title']};
		font-family: ${props => props.theme.fontFamily.baloo}
	}

	h2, h3, h4, h5, h6 {
		color: ${props => props.theme.colors['base-subtitle']};
	}

  :focus,
	:active {
		outline: 0
	}
	
	input,
	button,
	textarea {
		border-radius: 6px;
		border: none;
		background-color: transparent;
	}

	input {
		background-color: ${props => props.theme.colors['base-input']};

		&[type=number] {
			&::-webkit-inner-spin-button, 
			&::-webkit-outer-spin-button { 
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					margin: 0; 
			}
		}
	}

	button {
		cursor: pointer;
	}
`
