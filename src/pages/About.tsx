import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Menu, X, BookOpen } from 'lucide-react';
import StateMachine from '../components/StateMachine';
import { BoxHeader, BoxContent } from '../components/Common';

const AboutContainer = styled.div`
	display: flex;
	gap: 30px;
	position: relative;
	
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const Sidebar = styled.nav<{ isOpen: boolean }>`
	width: 250px;
	position: sticky;
	top: 20px;
	height: calc(100vh - 40px);
	overflow-y: auto;
	background: rgba(30, 30, 30, 0.7);
	backdrop-filter: blur(10px);
	border-radius: 12px;
	padding: 20px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

	background: rgba(30, 30, 30, 0.7);
	backdrop-filter: blur(5px);

	@media (max-width: 900px) {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 1000;
		width: 280px;
		transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(-100%)'};
		transition: transform 0.3s ease-in-out;
		box-shadow: 10px 0 20px rgba(0, 0, 0, 0.5);
	}
`;

const SidebarTitle = styled.h3`
	margin-top: 0;
	color: var(--primary);
	font-size: 1.1rem;
	border-bottom: 1px solid var(--border);
	padding-bottom: 10px;
`;

const NavList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const NavItem = styled.li<{ active: boolean }>`
	margin-bottom: 5px;
	
	a {
		display: block;
		padding: 8px 12px;
		border-radius: 4px;
		color: ${({ active }) => active ? 'var(--primary)' : 'var(--text-dim)'};
		background: ${({ active }) => active ? 'rgba(0, 171, 174, 0.1)' : 'transparent'};
		font-weight: ${({ active }) => active ? 'bold' : 'normal'};
		border-left: 3px solid ${({ active }) => active ? 'var(--primary)' : 'transparent'};
		transition: all 0.2s;

		&:hover {
			color: var(--secondary);
			background: rgba(146, 97, 237, 0.05);
		}
	}
`;

const CodeBox = styled.div`
	background: #1e1e1e;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
	margin: 20px 0;
	border: 1px solid rgba(255, 255, 255, 0.05);

	code {
		background: none !important;
		padding: 0 !important;
		border-radius: 0 !important;
		color: inherit !important;
		font-size: inherit !important;
	}
`;

const MainColumn = styled.div`
	flex: 1;
	max-width: 850px;
	background: rgba(30, 30, 30, 0.7);
	backdrop-filter: blur(10px);
	border-radius: 12px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
	overflow: hidden;

	background: rgba(30, 30, 30, 0.7);
	backdrop-filter: blur(5px);

	@media (max-width: 600px) {
		/* padding moved to BoxContent */
	}

	/* Markdown styles */
	h1 { color: var(--primary); border-bottom: 2px solid var(--primary); padding-bottom: 10px; margin-top: 40px; }
	h1:first-child { margin-top: 0; }
	h2 { color: var(--secondary); border-bottom: 1px solid var(--border); padding-bottom: 5px; margin-top: 30px; }
	p { margin-bottom: 1.5rem; }
	img { max-width: 100%; height: auto; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 10px rgba(0,0,0,0.5); }
	
	/* Target only inline code tags */
	:not(pre) > code {
		background: rgba(0, 171, 174, 0.15);
		padding: 2px 6px;
		border-radius: 4px;
		font-size: 0.9em;
		color: var(--primary);
	}

	pre {
		background: none !important;
		padding: 0 !important;
		margin: 0 !important;
	}

	ul, ol {
		margin-bottom: 1.5rem;
		padding-left: 20px;
		li { margin-bottom: 8px; }
	}

	blockquote {
		border-left: 4px solid var(--primary);
		background: rgba(0, 171, 174, 0.05);
		margin: 20px 0;
		padding: 10px 20px;
		font-style: italic;
	}
`;

const MobileMenuBtn = styled.button`
	display: none;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 1001;
	background: var(--primary);
	color: white;
	border: none;
	border-radius: 50%;
	width: 50px;
	height: 50px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
	cursor: pointer;
	align-items: center;
	justify-content: center;

	@media (max-width: 900px) {
		display: flex;
	}
`;

const Overlay = styled.div<{ isOpen: boolean }>`
	display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 999;
`;

const About = () => {
	const [markdown, setMarkdown] = useState('');
	const [headings, setHeadings] = useState<{ id: string, text: string }[]>([]);
	const [activeId, setActiveId] = useState('');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	
	useEffect(() => {
		window.scrollTo(0, 0);
		fetch('./write_up.md')
			.then(res => res.text())
			.then(text => {
				setMarkdown(text);
				// Extract headings
				const headingLines = text.split('\n').filter(line => line.startsWith('# '));
				const extractedHeadings = headingLines.map(line => {
					const text = line.replace('# ', '').trim();
					const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
					return { id, text };
				});
				setHeadings(extractedHeadings);
			});
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const headingElements = headings.map(h => document.getElementById(h.id));
			const scrollPosition = window.scrollY + 100;

			for (let i = headingElements.length - 1; i >= 0; i--) {
				const el = headingElements[i];
				if (el && el.offsetTop <= scrollPosition) {
					setActiveId(headings[i].id);
					break;
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [headings]);

	const scrollTo = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const offset = element.offsetTop - 20;
			window.scrollTo({
				top: offset,
				behavior: 'smooth'
			});
		}
		setIsSidebarOpen(false);
	};

	return (
		<AboutContainer>
			<Overlay isOpen={isSidebarOpen} onClick={() => setIsSidebarOpen(false)} />
			<Sidebar isOpen={isSidebarOpen}>
				<SidebarTitle>Contents</SidebarTitle>
				<NavList>
					{headings.map(h => (
						<NavItem key={h.id} active={activeId === h.id}>
							<a 
								href={`#${h.id}`} 
								onClick={(e) => { e.preventDefault(); scrollTo(h.id); }}
							>
								{h.text}
							</a>
						</NavItem>
					))}
				</NavList>
			</Sidebar>

			<MainColumn>
				<BoxHeader>
					Project Write-up
					<BookOpen size={20} />
				</BoxHeader>
				<BoxContent style={{ padding: '40px' }}>
					<ReactMarkdown
						rehypePlugins={[rehypeRaw]}
						components={{
							h1: ({ children }) => {
								const text = String(children);
								const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
								return <h1 id={id}>{children}</h1>;
							},
							img: ({ src, alt }) => {
								if (src?.includes('state_machine')) {
									return <StateMachine />;
								}
								return <img src={src} alt={alt} />;
							},
							code({ node, inline, className, children, ...props }: any) {
								const match = /language-(\w+)/.exec(className || '');
								return !inline && match ? (
									<CodeBox>
										<SyntaxHighlighter
											style={vscDarkPlus as any}
											language={match[1]}
											PreTag="div"
											customStyle={{
												background: 'transparent',
												padding: '20px',
												margin: 0
											}}
											{...props}
										>
											{String(children).replace(/\n$/, '')}
										</SyntaxHighlighter>
									</CodeBox>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								);
							},
							// Ensure all external links open in new tab
							a: ({ href, children }) => {
								const isExternal = href?.startsWith('http');
								return (
									<a 
										href={href} 
										target={isExternal ? "_blank" : undefined} 
										rel={isExternal ? "noopener noreferrer" : undefined}
									>
										{children}
									</a>
								);
							}
						}}
					>
						{markdown}
					</ReactMarkdown>
				</BoxContent>
			</MainColumn>

			<MobileMenuBtn onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
				{isSidebarOpen ? <X /> : <Menu />}
			</MobileMenuBtn>
		</AboutContainer>
	);
};

export default About;
