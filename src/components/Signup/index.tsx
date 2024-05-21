// import { FormEvent, useState } from 'react';
// import { Box, TextField, Typography, IconButton } from '@mui/material';
// import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';
// import { StyledButton } from './styles';
import React from 'react';
import { Card, CardContent, Typography, TextField, Box, Button, Grid, CardActions } from '@mui/material';
import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';

export function Signup() {
	// const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
	// const [confirmPassword, setConfirmPassword] = useState<string>('');
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

	// 	if (password !== confirmPassword) {
	// 		console.log('Passwords do not match');
  //     return;
	// 	}
	// };

	// const validateEmail = (email: string): boolean => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

	// const validatePassword = (password: string): boolean => {
	// 	return password.length >= 6;
	// }

	const handleGoogleSignup = () => {
    // Implementação do cadastro com Google
    console.log("Google signup");
  };

  const handleInstagramSignup = () => {
    // Implementação do cadastro com Instagram
    console.log("Instagram signup");
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
				<Typography variant="h5" align="center">Signup</Typography>
				
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
				<TextField 
					value={password} 
					onChange={(e) => setConfirmPassword(e.target.value)}
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
				<StyledButton type="submit" fullWidth>Register</StyledButton>
				
				<Typography variant="body2" align="center" sx={{ mt: 0 }}>
					<a href="#">Already have an account? Log in.</a>
				</Typography>

				<Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
					<IconButton color="primary" onClick={() => { console.log('login com Google')}}>
						<GoogleIcon />
					</IconButton>
					<IconButton color="secondary" onClick={() => { console.log('Login com instagram')}}>
						<InstagramIcon />
					</IconButton>
				</Box>

				<Typography variant="body2" align="center" sx={{ mt: 0 }}>
					By registering, you agree to our<br/>
					<a href="#">Terms, Privacy Policy and Cookies Policy.</a>
				</Typography>

			</Box> */}
			<Card sx={{ maxWidth: 400, margin: 'auto', marginTop: 4, padding: 2, borderRadius: 4, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
				<CardContent>
					<Typography variant="h5" align="center" gutterBottom>
						Sign Up
					</Typography>
					<Box sx={{ maxWidth: 300, margin: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
						<TextField
							fullWidth
							label="Username"
							variant="outlined"
							size="small"
							placeholder="Enter your username"
							margin="normal"
						/>
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
						<TextField
							fullWidth
							label="Confirm Password"
							variant="outlined"
							size="small"
							type="password"
							placeholder="Confirm your password"
							margin="normal"
						/>
						<Button variant="contained" color="primary" size="large">
							Sign Up
						</Button>
						<Button variant="contained" color="error" onClick={handleGoogleSignup} startIcon={<GoogleIcon />} size="large">
							Sign up with Google
						</Button>
						<Button variant="contained" color="secondary" onClick={handleInstagramSignup} startIcon={<InstagramIcon />} size="large">
							Sign up with Instagram
						</Button>
					</Box>
				</CardContent>
			</Card>
		</>
	)
}
