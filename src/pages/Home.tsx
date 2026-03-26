import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Download, ExternalLink, Info } from 'lucide-react';
import { 
	ContentBox, 
	BoxHeader, 
	BoxContent, 
	Disclaimer, 
	VideoEmbed, 
	Button 
} from '../components/Common';

const Home = () => {
	return (
		<div>
			<Disclaimer>
				<p>The Worms IP is owned by Team17 / Everplay Group.</p>
				<p>This project does not represent either Team17 or Everplay Group.</p>
				<p>I thank the aforementioned parties in advance for understanding this is a fan project, for the love of Worms</p>
			</Disclaimer>

			<VideoEmbed>
				<iframe 
					src="https://www.youtube.com/embed/afNnbrYio5k" 
					title="Worms68k Party Trailer" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
					allowFullScreen
				></iframe>
			</VideoEmbed>

			<ContentBox>
				<BoxHeader>
					Get Worms68K Party!
					<Download size={20} />
				</BoxHeader>
				<BoxContent style={{ textAlign: 'center' }}>
					<p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
						Experience the full Worms World Party clone on your TI-89 calculator.
					</p>
					<Button href="./assets/Worms68kParty.zip" download>
						<Download size={20} style={{ marginRight: '10px' }} />
						Download Worms68kParty.zip
					</Button>
					<p style={{ marginTop: '20px' }}>
						Need help installing & running the game? <Link to="/install" style={{ fontWeight: 'bold' }}>Click here</Link>
					</p>
				</BoxContent>
			</ContentBox>

			<ContentBox>
				<BoxHeader>
					Learn more about Worms68k
					<Info size={20} />
				</BoxHeader>
				<BoxContent>
					<p>
						Worms68k Party is a scratch-rewrite of a project started over 20 years ago. 
						It features a custom state machine, a unique "Mix-In" weapon system, 
						and optimized physics for the TI-89's 68000 processor.
					</p>
					<p>
						With 77 unique weapons, textured gray-scale maps, and a robust physics engine, 
						this is one of the most ambitious games ever developed for the TI-89 platform.
					</p>
					<div style={{ marginTop: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
						<Link to="/about">
							<Button as="span">
								Read the Full Story
							</Button>
						</Link>
						<Button 
							href="https://github.com/worms68k-party/worms68k-party" 
							target="_blank" 
							rel="noopener noreferrer"
							style={{ backgroundColor: '#444' }}
						>
							<ExternalLink size={18} style={{ marginRight: '8px' }} />
							View on GitHub
						</Button>
					</div>
				</BoxContent>
			</ContentBox>
		</div>
	);
};

export default Home;
