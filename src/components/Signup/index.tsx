import { FormEvent, useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
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
			<Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', maxWidth: '400px', backgroundColor: '#f4f5f6', padding: '5px', borderRadius: '25px', border: '6px solid var(--white-100)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}} onSubmit={handleSubmit}>
				<Typography variant="h5" align="center">Signup</Typography>
				
				<TextField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" fullWidth required/>
				<TextField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="outlined" fullWidth required />
				<TextField label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} variant="outlined" fullWidth required />

				{error && <div className="error-message">{error}</div>}
				<Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
				
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

			</Box>
		</>
	)
}
