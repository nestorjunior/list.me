import React, { FormEvent, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Google as GoogleIcon, Instagram as InstagramIcon } from '@mui/icons-material';


export function Signup() {
	const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validateEmail(email)) {
			setError('Invalid email');
			return;
		}

		if (!validatePassword(password)) {
			setError('Password must be at least 6 characters long');
			return;
		}

		if (password !== confirmPassword) {
			console.log('Passwords do not match');
      return;
		}
	};

	const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

	const validatePassword = (password: string): boolean => {
		return password.length >= 6;
	}

	return (
		<>
			<Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: '400px', backgroundColor: '#f4f5f6', padding: '20px', borderRadius: '25px', border: '6px solid var(--white-100)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',}} onSubmit={handleSubmit}>
				<Typography variant="h5" align="center" sx={{ mt: 0 }}>
					Signup
				</Typography>
				
				<TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
				<TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" fullWidth required />
				<TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant="outlined" fullWidth required />

				{error && <div className="error-message">{error}</div>}

				<Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
			
				<Typography variant="body2" align="center" sx={{ mt: 0 }}>
					<a href="#">Already have an account? Log in.</a>
				</Typography>

				<Typography variant="body2" align="center" sx={{ mt: 0 }}>
					By registering, you agree to our<br/>
					<a href="#">Terms, Privacy Policy and Cookies Policy.</a>
				</Typography>
			
				<Button variant="contained" color="primary" fullWidth startIcon={<GoogleIcon />} sx={{ backgroundColor: '#4285F4', color: '#fff', '&:hover': { backgroundColor: '#357ae8' } }} onClick={() => { console.log('Login Google')}}>
					Sign in with Google
				</Button>
			
				<Button variant="contained" color="secondary" fullWidth startIcon={<InstagramIcon />} sx={{ backgroundColor: '#E1306C', color: '#fff', '&:hover': { backgroundColor: '#c1265c' } }} onClick={() => { console.log('Login Instagram')}}>
					Sign in with Instagram
				</Button>
			</Box>
		</>
	)
}
