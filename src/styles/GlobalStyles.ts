import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 16px;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body, h1, h2, h3, h4, h5, h6, p, ol, ul {
		margin: 0;
		padding: 0;
		font-weight: normal;
	}

	ol, ul {
		list-style: none;
	}

	img {
		max-width: 100%;
		height: auto;
	}

  body {
		font-family: "Roboto Condensed", sans-serif;
  }

	input:focus{
		border-color: var(--blue-100)!important;
		box-shadow: 0 0 0 0.1rem rgba(127, 162, 168, 0.7)!important;
	}

	label {
		color: var(--gray-200);
	}

	.mt-10-negative {
		margin-top: -10px;
	}

  :root {
    --blue-100: #d5e8eb;
    --blue-200: #7fa2a8;
		--blue-200-hover: #658b91;
		--blue-300: #0000ff;
		--white-100: #f6f6f8;
    --white-200: #d9d9e7;
		--gray-100: #e5e5e5;
		--gray-200: #212529bf;
    --gray-300: #212529;
		--black-100: #525656;
    --black-200: #090a0a;
		--orange-100: #fe9486;
    --orange-200: #de4c5a;
		--orange-200-hover: #c63341;
		--rose-100: #fbf6f6
  }
`;
