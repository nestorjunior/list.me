import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Open Sans", sans-serif;
  }

  :root {
    --blue-100: #d5e8eb;
    --blue-200: #7fa2a8;
		--blue-300: #0000ff;
		--white-100: #F6F6F8;
    --white-200: #d9d9e7;
		--gray-100: #7A7A7A;
    --gray-200: #212529;
		--black-100: #525656;
    --black-200: #090a0a;
		--orange-100: #fe9486;
    --orange-200: #de4c5a;
		--rose-100: #fbf6f6
  }
`;
