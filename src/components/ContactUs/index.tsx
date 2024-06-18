import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
	Box,
	Button,
	Card,
	CardContent,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import { type FormEvent, useState } from "react";
import { styled } from "styled-components";

const StyledCard = styled(Card)`
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
  border-radius: 16px !important;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const SocialLinksBox = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;

export function ContactUs() {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [subject, setSubject] = useState<string>("");
	const [message, setMessage] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [success, setSuccess] = useState<string>("");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!validateEmail(email)) {
			setError("Invalid email");
			return;
		}

		if (!name || !subject || !message) {
			setError("Please fill in all fields");
			return;
		}

		setError("");
		setSuccess("");

		try {
			await sendContactForm(name, email, subject, message);
			setSuccess("Message sent successfully!");
			setName("");
			setEmail("");
			setSubject("");
			setMessage("");
		} catch (error) {
			console.error("Error sending message:", error);
			setError("Failed to send message. Please try again later.");
		}
	};

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const sendContactForm = async (
		name: string,
		email: string,
		subject: string,
		message: string,
	): Promise<void> => {
		const response = await fetch("https://example.com/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, subject, message }),
		});

		if (!response.ok) {
			throw new Error("Failed to send message");
		}
	};

	return (
		<StyledCard>
			<CardContent>
				<Typography
					variant="h5"
					align="center"
					gutterBottom
					sx={{ color: "#212529bf", fontWeight: "bold" }}
				>
					Contact Us
				</Typography>
				<Box
					component="form"
					sx={{
						maxWidth: 600,
						margin: "auto",
						display: "flex",
						flexDirection: "column",
						gap: 2,
					}}
					onSubmit={handleSubmit}
				>
					<TextField
						value={name}
						onChange={(e) => setName(e.target.value)}
						fullWidth
						label="Name"
						variant="outlined"
						size="small"
						placeholder="Enter your name"
						margin="normal"
						required
					/>
					<TextField
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
						label="Email"
						variant="outlined"
						size="small"
						type="email"
						placeholder="Enter your email"
						margin="normal"
						required
					/>
					<TextField
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						fullWidth
						label="Subject"
						variant="outlined"
						size="small"
						placeholder="Enter the subject"
						margin="normal"
						required
					/>
					<TextField
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						fullWidth
						label="Message"
						variant="outlined"
						size="small"
						multiline
						rows={4}
						placeholder="Enter your message"
						margin="normal"
						required
					/>

					{error && (
						<div className="error-message" style={{ color: "red" }}>
							{error}
						</div>
					)}
					{success && (
						<div className="success-message" style={{ color: "green" }}>
							{success}
						</div>
					)}

					<Button
						type="submit"
						variant="contained"
						color="primary"
						size="large"
					>
						Send Message
					</Button>
				</Box>
				<SocialLinksBox>
					<IconButton
						href="https://www.instagram.com"
						target="_blank"
						color="inherit"
					>
						<InstagramIcon fontSize="large" />
					</IconButton>
					<IconButton
						href="https://www.facebook.com"
						target="_blank"
						color="inherit"
					>
						<FacebookIcon fontSize="large" />
					</IconButton>
				</SocialLinksBox>
			</CardContent>
		</StyledCard>
	);
}
