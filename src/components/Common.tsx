import styled from 'styled-components';

export const ContentBox = styled.div`
	background-color: var(--bg-lighter);
	border: 1px solid var(--border);
	border-radius: 8px;
	margin-bottom: 30px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const BoxHeader = styled.div`
	background-color: #2a2a2a;
	padding: 12px 20px;
	border-bottom: 1px solid var(--border);
	font-weight: bold;
	color: var(--primary);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const BoxContent = styled.div`
	padding: 20px;
`;

export const Button = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primary);
	color: #fff;
	padding: 12px 24px;
	border-radius: 6px;
	font-weight: bold;
	transition: background-color 0.2s;
	border: none;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background-color: var(--secondary);
		color: #fff;
	}
`;

export const Disclaimer = styled.div`
	background-color: rgba(255, 165, 0, 0.1);
	border-left: 4px solid orange;
	padding: 15px 20px;
	margin-bottom: 30px;
	font-size: 0.9rem;
	color: #ffd8a8;
	line-height: 1.4;

	p {
		margin: 5px 0;
	}
`;

export const VideoEmbed = styled.div`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
	overflow: hidden;
	margin-bottom: 30px;
	border-radius: 8px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
`;
