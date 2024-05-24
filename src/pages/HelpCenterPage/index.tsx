import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { MainContainer } from './styles';
import { Box, Typography, Card, CardContent } from '@mui/material';
import content from '../../utils/content.json'

export function HelpCenterPage () {
	const { title, description } = content.helpCenterPage;

	return(
		<>
			<div className="container-fluid px-0">
				<Navbar/>
				<MainContainer>
					<Card sx={{ maxWidth: 800, margin: 'auto', marginTop: 4, padding: 2, borderRadius: 4, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)' }}>
							<CardContent>
								<Typography variant="h5" align="center" gutterBottom sx={{ color: "#212529bf" }}>
								{title}
								</Typography>
								<Box sx={{ textAlign: 'justify' }}>
									<Typography variant="body1" gutterBottom sx={{ color: "#212529bf" }}>
									{description}
									</Typography>
								</Box>
							</CardContent>
						</Card>
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}