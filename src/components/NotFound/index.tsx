import { Box, Typography, Card, CardContent } from '@mui/material';

export function NotFound() {
	return(
		<>
			<Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2, borderRadius: 4, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
				<CardContent>
					<Typography variant="h5" align="center" gutterBottom>
						Oh I'm sorry...
					</Typography>
					<Box sx={{ textAlign: 'justify' }}>
						<Typography variant="body1" gutterBottom>
							<h5>404 - Page not found =/</h5>
      				<p>The page you are looking for does not exist.</p>
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</>
	)
}