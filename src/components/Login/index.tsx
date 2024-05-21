// import { FormEvent, useState } from 'react';
// import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
// import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';
// import { StyledTypography, StyledButton } from './styles';
import { Card, CardContent, Typography, TextField, Box, Button, Grid, CardActions, IconButton } from '@mui/material';
import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';

export function Login() {
	// const [email, setEmail] = useState<string>('');
	// const [password, setPassword] = useState<string>('');
	// const [error, setError] = useState<string>('');

	// const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	if (!validateEmail(email)) {
	// 		setError('Invalid email');
	// 		return;
	// 	}

	// 	if (!validatePassword(password)) {
	// 		setError('Password must be at least 6 characters long');
	// 		return;
	// 	}

	// 	setError('');

	// 	try {
	// 		const token = await authenticateUser(email, password);
	// 		localStorage.setItem('token', token);
	// 		window.location.href = '/';
	// 	} catch (error) {
	// 		console.error('Error authenticating:', error);
	// 		setError('Check your credentials and try again');
	// 	}
	// };

	// const validateEmail = (email: string): boolean => {
	// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// 	return emailRegex.test(email);
	// };

	// const validatePassword = (password: string): boolean => {
	// 	return password.length >= 6;
	// };

	// const authenticateUser = async (
	// 	email: string,
	// 	password: string
	// ): Promise<string> => {
	// 	const url =
	// 		'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3qEBHWnUAwir0xQ2B9NztF7TIeOSLjPU';

	// 	const response = await fetch(url, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			email,
	// 			password,
	// 			returnSecureToken: true,
	// 		}),
	// 	});

	// 	if (!response.ok) {
	// 		console.log(response);
	// 		throw new Error('Authentication error');
	// 	}

	// 	const data = await response.json();
	// 	return data.idToken;
	// };
	const handleGoogleLogin = () => {
    // Implementação do login com Google
    console.log("Google login");
  };

  const handleInstagramLogin = () => {
    // Implementação do login com Instagram
    console.log("Instagram login");
  };

	return (
		<>
			{/* <Box 
				component="form" 
				sx={{ 
					display: 'flex', 
					flexDirection: 'column', 
					gap: 1, 
					width: '100%', 
					maxWidth: '400px', 
					backgroundColor: '#f4f5f6', 
					padding: '15px', 
					borderRadius: '25px', 
					border: '6px solid var(--white-100)', 
					boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' 
				}} 
				onSubmit={handleSubmit}
				>
				
				<StyledTypography variant="h5" align="center">Login</StyledTypography>

				<TextField 
					value={email} 
					onChange={(e) => setEmail(e.target.value)} 
					label="Email" 
					fullWidth 
					required 
					sx={{
						'& .MuiOutlinedInput-root': {
							'&.Mui-focused fieldset': {
								borderColor: '#5e646b',
							},
							'&.Mui-focused input': {
								color: '#5e646b', 
							},
							'& input::placeholder': {
								color: '#5e646b', 
								opacity: 1, 
							},
						},
						'& .MuiInputLabel-root': {
							'&.Mui-focused': {
								color: '#5e646b', 
							},
						},
					}}
				/>
				<TextField 
					value={password} 
					onChange={(e) => setPassword(e.target.value)} 
					label="Password" 
					type="password"
					fullWidth 
					required 
					sx={{
						'& .MuiOutlinedInput-root': {
							'&.Mui-focused fieldset': {
								borderColor: '#5e646b',
							},
							'&.Mui-focused input': {
								color: '#5e646b', 
							},
							'& input::placeholder': {
								color: '#5e646b', 
								opacity: 1, 
							},
						},
						'& .MuiInputLabel-root': {
							'&.Mui-focused': {
								color: '#5e646b', 
							},
						},
					}}
				/>
				{error && <div className="error-message">{error}</div>}
				<StyledButton type="submit" fullWidth>Enter</StyledButton>

				<Typography variant="body2" align="center" sx={{ mt: 0 }}>
					<a href="#">Forgot password?</a>
				</Typography>

				<Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
					<IconButton color="primary" onClick={() => { console.log('login com Google') }}>
						<GoogleIcon />
					</IconButton>
					<IconButton color="secondary" onClick={() => { console.log('Login com instagram') }}>
						<InstagramIcon />
					</IconButton>
				</Box>
			</Box> */}
			<Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 4, padding: 2, borderRadius: 4, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
				<CardContent>
					<Typography variant="h5" align="center" gutterBottom>
						Login
					</Typography>
					<Box sx={{ maxWidth: 300, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
						<TextField
							fullWidth
							label="Email"
							variant="outlined"
							size="small"
							type="email"
							placeholder="Enter your email"
							margin="normal"
						/>
						<TextField
							fullWidth
							label="Password"
							variant="outlined"
							size="small"
							type="password"
							placeholder="Enter your password"
							margin="normal"
						/>
						<Button variant="contained" color="primary" size="large">
							Login
						</Button>
						<Button variant="contained" color="error" onClick={handleGoogleLogin} startIcon={<GoogleIcon />} size="large">
							Login with Google
						</Button>
						<Button variant="contained" color="secondary" onClick={handleInstagramLogin} startIcon={<InstagramIcon />} size="large">
							Login with Instagram
						</Button>
					</Box>
				</CardContent>
			</Card>
		</>
	);
};
