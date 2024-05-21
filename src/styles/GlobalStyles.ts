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

	a {
		font-weight: 700;
		font-size: 0.875rem;
		color: var(--gray-900);
		line-height: 1.75;
		text-transform: uppercase;
		padding: 6px 8px;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}

  :root {
    --blue-50: #d5e8eb;
    --blue-100: #dfedf0;
    --blue-200: #c0d9de;
    --blue-300: #9cc5cb;
    --blue-400: #80b3bb;
    --blue-500: #6ca8b1;
    --blue-600: #60a3ae;
    --blue-700: #4e8e99;
    --blue-800: #417f88;
		--blue-900: #7FA2A8;
    /* --blue-900: #2c6e78; */

    --gray-50: #f4f5f6;
    --gray-100: #e7e7e7;
    --gray-200: #cccccc;
    --gray-300: #b0b1b1;
    --gray-400: #97999b;
    --gray-500: #868a8e;
    --gray-600: #7e8389;
    --gray-700: #6b7077;
    --gray-800: #5e646b;
    --gray-900: #212529bf;

    --red-50: #ffeaed;
    --red-100: #fed5d9;
    --red-200: #f2aab1;
    --red-300: #e87c87;
    --red-400: #e05562;
    --red-500: #db3c4b;
    --red-600: #da2d40;
    --red-700: #c21f31;
    --red-800: #ad182b;
    --red-900: #980b22;
  }
`
