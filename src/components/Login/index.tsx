import React, { FormEvent, useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';

import { 
	LoginFormContainer,
	LoginFormStyled,
} from './styles'

export function Login () {
  // const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [error, setError] = useState<string>('');

  // const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (!validateEmail(email)) {
  //     setError('Invalid email');
  //     return;
  //   }

  //   if (!validatePassword(password)) {
  //     setError('Password must be at least 6 characters long');
  //     return;
  //   }

  //   setError('');

  //   try {
  //     const token = await authenticateUser(email, password);
  //     localStorage.setItem('token', token);
  //     window.location.href = '/';
  //   } catch (error) {
  //     console.error('Error authenticating:', error);
  //     setError('Check your credentials and try again');
  //   }
  // };

  // const validateEmail = (email: string): boolean => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const validatePassword = (password: string): boolean => {
  //   return password.length >= 6;
  // };

  // const authenticateUser = async (
  //   email: string,
  //   password: string
  // ): Promise<string> => {
  //   const url =
  //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3qEBHWnUAwir0xQ2B9NztF7TIeOSLjPU';

  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password,
  //       returnSecureToken: true,
  //     }),
  //   });

  //   if (!response.ok) {
  //     console.log(response);
  //     throw new Error('Authentication error');
  //   }

  //   const data = await response.json();
  //   return data.idToken;
  // };

  return (
    // <LoginFormContainer>
		// 	<div className="col-sm-4">
		// 		<LoginFormStyled className="card mb-4">
		// 			<div className="card-header">Login</div>
		// 			<div className="card-body">
		// 				<form onSubmit={handleSubmit}>
		// 					<div className="mb-3">
		// 						<label className="small mb-1">Email</label>
		// 						<input 
		// 							className='form-control'
		// 							type="email"
		// 							placeholder="Email"
		// 							value={email}
		// 							onChange={(e) => setEmail(e.target.value)}
		// 							required
		// 							style={{marginBottom: '15px'}}
		// 						/>
		// 					</div>

		// 					<div className="mb-3">
		// 						<label className="small mb-1">Password</label>
		// 						<input 
		// 							className='form-control'
		// 							type="password"
		// 							placeholder="Password"
		// 							value={password}
		// 							onChange={(e) => setPassword(e.target.value)}
		// 							required
		// 							style={{marginBottom: '15px'}}
		// 						/>
		// 					</div>
							
		// 					{error && <div className="error-message">{error}</div>}

		// 					<Button color='error' variant="contained">
		// 						Save changes
		// 					</Button>
		// 				</form>
		// 			</div>
		// 		</LoginFormStyled>
		// 	</div>
    // </LoginFormContainer>
		<>
			
			<Box
				component="form"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					width: '100%',
					maxWidth: '400px',
					backgroundColor: '#f4f5f6',
					padding: '20px',
					borderRadius: '25px',
					border: '6px solid var(--white-100)',
					boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
				}}
    	>
      <Typography variant="h5" align="center" sx={{ mt: 0 }}>
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Entrar
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 0 }}>
        <a href="#">Esqueceu a senha?</a>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ backgroundColor: '#4285F4', color: '#fff', '&:hover': { backgroundColor: '#357ae8' } }}
        onClick={() => {
          console.log('Login Google')
        }}
      >
        Entrar com Google
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        startIcon={<InstagramIcon />}
        sx={{ backgroundColor: '#E1306C', color: '#fff', '&:hover': { backgroundColor: '#c1265c' } }}
        onClick={() => {
          console.log('Login Instagram')
        }}
      >
        Entrar com Instagram
      </Button>
    </Box>
			
		</>
  );
};
