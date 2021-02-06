import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		width: 100vw;
		height: 100vh;
		font-family: 'Open Sans Condensed';
		margin: 0;
		padding: 20px 40px;
        background-image: linear-gradient(to bottom right, #434046, #181819);
        background-repeat: no-repeat;
        background-attachment: fixed;
		background-size: cover;
		overflow: none;
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		
	}

	* {

        box-sizing: border-box;
        color: #E0610E
	}
`;
