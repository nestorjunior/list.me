// import { FormEvent, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 16px !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export function Signup() {

	const handleGoogleLogin = () => {
    console.log("Google login");
  };

  const handleInstagramLogin = () => {
    console.log("Instagram login");
  };
	
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

	// const handleGoogleSignup = () => {
  //   // Implementação do cadastro com Google
  //   console.log("Google signup");
  // };

  // const handleInstagramSignup = () => {
  //   // Implementação do cadastro com Instagram
  //   console.log("Instagram signup");
  // };

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
			<StyledCard>
        <CardContent>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: "#212529bf", fontWeight: "bold" }}
          >
            Login
          </Typography>
          <Box
            sx={{
              maxWidth: 600,
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
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
            <Button
              variant="contained"
              color="error"
              onClick={handleGoogleLogin}
              startIcon={<GoogleIcon />}
              size="large"
            >
              Login with Google
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleInstagramLogin}
              startIcon={<InstagramIcon />}
              size="large"
            >
              Login with Instagram
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
		</>
	)
}
