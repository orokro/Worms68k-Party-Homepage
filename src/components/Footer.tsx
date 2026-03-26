import styled from 'styled-components';

const FooterWrapper = styled.footer`
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px 20px;
	/* border-top: 1px solid var(--border); */
	text-align: center;
	color: var(--text-dim);
	font-size: 0.9rem;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<p>
				A project by <a href="https://gregmiller.online/" target="_blank" rel="noopener noreferrer">Greg Miller</a>
			</p>
			<p>© Greg Miller, 2026</p>
		</FooterWrapper>
	);
};

export default Footer;
