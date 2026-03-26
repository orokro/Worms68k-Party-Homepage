import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	:root {
		--primary: #00ABAE;
		--secondary: #9261ED;
		--bg-dark: #121212;
		--bg-lighter: #1e1e1e;
		--text: #e0e0e0;
		--text-dim: #a0a0a0;
		--border: #333;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: var(--bg-dark);
		color: var(--text);
		font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		line-height: 1.6;
	}

	a {
		color: var(--primary);
		text-decoration: none;
		transition: color 0.2s;
		
		&:hover {
			color: var(--secondary);
		}
	}

	* {
		box-sizing: border-box;
		/* Use tabs for indentation where possible in CSS if outputting */
	}

	code {
		font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
		tab-size: 4;
	}

	/* Only apply "inline" look to code tags that aren't in a pre block */
	:not(pre) > code {
		background: rgba(0, 171, 174, 0.15);
		padding: 2px 6px;
		border-radius: 4px;
		color: var(--primary);
	}

	/* Scrollbar styling */
	::-webkit-scrollbar {
		width: 10px;
	}
	::-webkit-scrollbar-track {
		background: var(--bg-dark);
	}
	::-webkit-scrollbar-thumb {
		background: #333;
		border-radius: 5px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #444;
	}
`;
