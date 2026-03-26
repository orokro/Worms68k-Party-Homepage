import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Github } from 'lucide-react';

const HeaderWrapper = styled.header`
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	position: relative;
	aspect-ratio: 1202 / 454;
	background-image: url('./img/header_logo.png');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

const NavLinks = styled.nav`
	position: absolute;
	/* Range: (262, 348) to (940, 454) out of 1202x454 */
	left: ${(262 / 1202) * 100}%;
	top: ${(348 / 454) * 100}%;
	width: ${((940 - 262) / 1202) * 100}%;
	height: ${((454 - 348) / 454) * 100}%;
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 600px) {
		/* Adjust for mobile if needed, but keeping ratio for now */
	}
`;

const HeaderLink = styled(NavLink)`
	color: #fff;
	font-weight: bold;
	font-size: 1.1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	padding: 8px 20px;
	border-radius: 50px;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	background: rgba(0, 0, 0, 0.2);
	box-shadow: 0 4px 0px rgba(0, 0, 0, 0.3);

	&.active {
		color: #fff;
		background: var(--primary);
		box-shadow: 0 4px 0px #007a7c;
	}

	&:hover {
		color: #fff;
		background: var(--secondary);
		transform: scale(1.05) rotate(-1deg);
		box-shadow: 0 6px 0px #6a44b0;
	}

	&:active {
		transform: translateY(2px);
		box-shadow: 0 2px 0px #6a44b0;
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
		padding: 4px 12px;
	}
	
	@media (max-width: 480px) {
		font-size: 0.6rem;
		padding: 2px 8px;
	}
`;

const GithubLinkContainer = styled.div`
	position: absolute;
	/* Range: (1000, 0) to (1202, 155) out of 1202x454 */
	left: ${(1000 / 1202) * 100}%;
	top: ${(0 / 454) * 100}%;
	width: ${((1202 - 1000) / 1202) * 100}%;
	height: ${(155 / 454) * 100}%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GMLinkContainer = styled.div`
	position: absolute;
	/* Mirror of GithubLinkContainer: (0, 0) to (202, 155) out of 1202x454 */
	left: 0;
	top: ${(0 / 454) * 100}%;
	width: ${((1202 - 1000) / 1202) * 100}%;
	height: ${(155 / 454) * 100}%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const GithubIconLink = styled.a`
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 0.8rem;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	transition: color 0.2s;

	&:hover {
		color: var(--primary);
	}

	span {
		margin-top: 4px;
	}

	@media (max-width: 768px) {
		svg, img {
			width: 18px;
			height: 18px;
		}
		span {
			display: none;
		}
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<GMLinkContainer>
				<GithubIconLink 
					href="https://gregmiller.online/" 
					target="_blank" 
					rel="noopener noreferrer"
				>
					<img src="./img/gm_icon.png" alt="GM Icon" width={24} height={24} />
					<span>About Me</span>
				</GithubIconLink>
			</GMLinkContainer>
			<NavLinks>
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/install">Install</HeaderLink>
				<HeaderLink to="/about">About</HeaderLink>
			</NavLinks>
			<GithubLinkContainer>
				<GithubIconLink 
					href="https://github.com/orokro/Worms68k-Party" 
					target="_blank" 
					rel="noopener noreferrer"
				>
					<Github size={24} />
					<span>GitHub</span>
				</GithubIconLink>
			</GithubLinkContainer>
		</HeaderWrapper>
	);
};

export default Header;
