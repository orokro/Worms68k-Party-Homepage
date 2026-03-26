import styled from 'styled-components';

export const ContentBox = styled.div`
	background-color: rgba(30, 30, 30, 0.7); /* Slightly transparent version of --bg-lighter */
	backdrop-filter: blur(10px);
	/* border: 1px solid rgba(255, 255, 255, 0.1); */
	border-radius: 12px;
	margin-bottom: 30px;
	overflow: hidden;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
	background: rgba(30, 30, 30, 0.7);
	backdrop-filter: blur(5px);
`;

export const BoxHeader = styled.div`
	background-color: rgba(42, 42, 42, 0.8);
	padding: 15px 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	font-weight: bold;
	color: var(--primary);
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.1rem;
`;

export const BoxContent = styled.div`
	padding: 25px;
`;

export const Button = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: var(--primary);
	color: #fff;
	padding: 14px 28px;
	border-radius: 50px;
	font-weight: bold;
	transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	border: none;
	cursor: pointer;
	text-decoration: none;
	box-shadow: 0 4px 0px #007a7c;

	&:hover {
		background-color: var(--secondary);
		color: #fff;
		transform: scale(1.05) rotate(-1deg);
		box-shadow: 0 6px 0px #6a44b0;
	}

	&:active {
		transform: translateY(2px);
		box-shadow: 0 2px 0px #6a44b0;
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
