import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Github } from 'lucide-react';

const HeaderWrapper = styled.header`
	width: 100%;
	max-width: 1200px;
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
	font-size: 1.2rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
	padding: 5px 10px;
	border-radius: 4px;
	transition: all 0.2s;

	&.active {
		color: var(--primary);
		background: rgba(0, 0, 0, 0.3);
	}

	&:hover {
		color: var(--secondary);
		background: rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
		padding: 2px 5px;
	}
	
	@media (max-width: 480px) {
		font-size: 0.7rem;
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
		svg {
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
			<NavLinks>
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/install">Install</HeaderLink>
				<HeaderLink to="/about">About</HeaderLink>
			</NavLinks>
			<GithubLinkContainer>
				<GithubIconLink 
					href="https://github.com/worms68k-party/worms68k-party" 
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
