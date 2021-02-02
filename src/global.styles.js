import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;
        background-image: linear-gradient(to bottom right, #6A7148, #2A3B1B);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		
	}

	* {
        box-sizing: border-box;
        color: #989F7D
	}
`;
