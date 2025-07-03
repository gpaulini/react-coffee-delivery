import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	body {
		background-color: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors['base-text']};
		font-family: 'Roboto', sans-serif;
	}

	body > * {
		max-width: 72rem;
		margin-inline: auto;
	}

	h1 {
		color: ${props => props.theme.colors['base-title']};
		font-family: 'Baloo 2', sans-serif;
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
	}

	button {
		cursor: pointer;
	}
`
