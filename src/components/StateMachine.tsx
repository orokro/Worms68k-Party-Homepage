import styled from 'styled-components';

const SVGContainer = styled.div`
	background: rgba(30, 30, 30, 0.7);
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	overflow: hidden;
	box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
	margin: 20px 0;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		max-width: 100%;
		height: auto;
	}

	/* Theme colors */
	rect, polygon[fill="#7acff5"], path[fill="#7acff5"] {
		fill: var(--primary) !important;
	}

	path[stroke="#000000"] {
		stroke: var(--secondary) !important;
	}

	/* Keep diamond and box borders black */
	rect, polygon {
		stroke: #000000 !important;
	}

	ellipse[fill="black"] {
		fill: #EFEFEF !important;
		stroke: #EFEFEF !important;
	}

	text {
		fill: #EFEFEF !important;
		font-family: 'Segoe UI', sans-serif !important;
	}

	div {
		color: #EFEFEF !important;
		line-height: 1.2;
	}

	/* Specific box text might need to be darker for readability on teal */
	foreignObject.box-text div {
		color: #121212 !important;
		font-weight: bold !important;
	}
`;

const StateMachine = () => {
	return (
		<SVGContainer>
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="624px" height="586px" viewBox="-40 -20 700 620">
				<g>
					{/* Place Worms */}
					<g>
						<rect x="303" y="12.25" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="303" y="12.25" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								Place Worms
							</div>
						</foreignObject>
					</g>

					{/* Game Launched (Initial) */}
					<g>
						<ellipse cx="26" cy="26.5" rx="10" ry="10" fill="black" stroke="#000000" pointer-events="all"/>
						<foreignObject x="-40" y="45" width="132" height="40">
							<div style={{ fontSize: '12px', textAlign: 'center' }}>Game<br/>Launched</div>
						</foreignObject>
					</g>

					{/* Game Exit (Final) */}
					<g>
						<ellipse cx="607" cy="487.5" rx="7" ry="7" fill="black" stroke="#000000" pointer-events="all"/>
						<ellipse cx="607" cy="487.5" rx="10" ry="10" fill="none" stroke="#000000" pointer-events="all"/>
						<foreignObject x="540" y="505" width="132" height="40">
							<div style={{ fontSize: '12px', textAlign: 'center' }}>Game<br/>Exit</div>
						</foreignObject>
					</g>

					{/* Choice Diamond */}
					<g>
						<polygon points="137.99,0.25 208.99,26.5 137.99,52.75 67,26.5" fill="#7acff5" stroke="#000000" strokeMiterlimit="10" pointer-events="all"/>
						<foreignObject x="67" y="-2" width="140" height="52.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '11px', textAlign: 'center' }}>
								User-placed<br/>Worms Enabled
							</div>
						</foreignObject>
					</g>

					{/* Cursor */}
					<g>
						<rect x="419" y="149.5" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="419" y="149.5" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								Cursor
							</div>
						</foreignObject>
					</g>

					{/* WormSelect */}
					<g>
						<rect x="61" y="149.5" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="61" y="149.5" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								WormSelect
							</div>
						</foreignObject>
					</g>

					{/* Turn */}
					<g>
						<rect x="63" y="212.5" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="63" y="212.5" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								Turn
							</div>
						</foreignObject>
					</g>

					{/* TurnEnd */}
					<g>
						<rect x="63" y="387.5" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="63" y="387.5" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								TurnEnd
							</div>
						</foreignObject>
					</g>

					{/* Pause */}
					<g>
						<rect x="303" y="241" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="303" y="241" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								Pause
							</div>
						</foreignObject>
					</g>

					{/* Death */}
					<g>
						<rect x="63" y="469.5" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="63" y="469.5" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								Death
							</div>
						</foreignObject>
					</g>

					{/* AfterTurn */}
					<g>
						<rect x="62.99" y="556.5" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="62.99" y="556.5" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								AfterTurn
							</div>
						</foreignObject>
					</g>

					{/* GameOver */}
					<g>
						<rect x="419" y="469" width="150" height="28.5" rx="10" ry="10" fill="#7acff5" stroke="#000000" pointer-events="all"/>
						<foreignObject x="419" y="469" width="150" height="28.5" className="box-text">
							<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '12px', textAlign: 'center' }}>
								GameOver
							</div>
						</foreignObject>
					</g>

					{/* Connectors */}
					{/* Start -> Choice */}
					<path d="M 36 26.51 L 64.76 26.51" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					
					{/* Choice -> PlaceWorms (Yes) */}
					<path d="M 209.03 26.49 L 300.62 26.43" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="230" y="28" width="40" height="20">
						<div style={{ fontSize: '11px', textAlign: 'center' }}>Yes</div>
					</foreignObject>

					{/* PlaceWorms -> Cursor */}
					<path d="M 453.14 26.43 L 484 26.43 Q 494 26.43 494 36.43 L 494 147.26" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="498" y="55" width="120" height="40">
						<div style={{ fontSize: '10px' }}>User Asked to Pick<br/>Location for Worm</div>
					</foreignObject>

					{/* Cursor -> PlaceWorms */}
					<path d="M 474 149.5 L 474 93.51 Q 474 83.51 464 83.51 L 374 83.51 Q 364 83.51 364 73.51 L 364 42.99" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="390" y="86" width="100" height="40">
						<div style={{ fontSize: '10px' }}>Repeat Until<br/>Worms Placed</div>
					</foreignObject>

					{/* Choice -> WormSelect (No) */}
					<path d="M 138.14 52.77 L 138.28 147.05" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="141" y="90" width="30" height="20">
						<div style={{ fontSize: '11px' }}>No</div>
					</foreignObject>

					{/* WormSelect -> Turn */}
					<path d="M 136 178 L 136 210.48" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="139" y="187" width="100" height="20">
						<div style={{ fontSize: '11px' }}>User Picks Worm</div>
					</foreignObject>

					{/* Turn -> Cursor */}
					<path d="M 213 221 L 240 221 Q 250 221 250 211 L 250 171.29 Q 250 161.29 260 161.29 L 416.62 161.29" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="265" y="162" width="140" height="40">
						<div style={{ fontSize: '10px' }}>User Activated Weapon/Tool<br/>That requires a Location</div>
					</foreignObject>

					{/* Turn -> TurnEnd */}
					<path d="M 137 241 L 136.02 384.76" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="140" y="327" width="140" height="60">
						<div style={{ fontSize: '10px' }}>Uses Weapon or,<br/>Takes Damage or,<br/>Time Runs out</div>
					</foreignObject>

					{/* Cursor -> TurnEnd */}
					<path d="M 494 178 L 494 390.71 Q 494 400.71 484 400.71 L 217.09 400.71" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="498" y="245" width="120" height="60">
						<div style={{ fontSize: '10px' }}>Time Runs out or,<br/>Cursor immediately<br/>invokes weapon</div>
					</foreignObject>

					{/* Turn -> Pause */}
					<path d="M 189.03 241 L 189.03 250 Q 189.03 259 199.03 259 L 298.91 259" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="190" y="260" width="100" height="20">
						<div style={{ fontSize: '11px', textAlign: 'center' }}>User Pauses</div>
					</foreignObject>

					{/* Pause -> Turn */}
					<path d="M 378 269.5 L 378 277.77 Q 378 286.03 368 286.03 L 187.03 286.03 Q 177.03 286.03 177.03 276.03 L 177.03 242.32" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="190" y="287" width="100" height="20">
						<div style={{ fontSize: '11px', textAlign: 'center' }}>User Unpauses</div>
					</foreignObject>

					{/* PlaceWorms -> WormSelect */}
					<path d="M 344 40.75 L 344 72.03 Q 344 82.03 334 82.03 L 188 82.03 Q 178 82.03 178 92.03 L 178 147.26" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="225" y="84" width="120" height="40">
						<div style={{ fontSize: '10px' }}>Start Game once<br/>all Worms placed</div>
					</foreignObject>

					{/* Cursor -> Turn */}
					<path d="M 475.03 178 L 475.03 194.03 Q 475.03 204.03 465.03 204.03 L 305.03 204.03 Q 295.03 204.03 295.03 214.03 L 295.03 223.97 Q 295.03 233.91 285.03 233.91 L 215.38 233.86" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="330" y="204" width="120" height="20">
						<div style={{ fontSize: '11px' }}>User picked location</div>
					</foreignObject>

					{/* TurnEnd -> Death */}
					<path d="M 138 416 L 138 430.49 Q 138 440.49 137.9 450.49 L 137.74 467.05" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="140" y="420" width="160" height="60">
						<div style={{ fontSize: '10px' }}>Everything is "Settled"<br/>(Physics Items at rest,<br/>weapons over, etc)</div>
					</foreignObject>

					{/* Death -> AfterTurn */}
					<path d="M 138 498 L 138 554.27" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="140" y="507" width="160" height="60">
						<div style={{ fontSize: '10px' }}>Everything is "Settled"<br/>(Physics Items at rest,<br/>weapons over, etc)</div>
					</foreignObject>

					{/* AfterTurn -> WormSelect */}
					<path d="M 62.99 570.77 L 27.03 570.77 Q 17.03 570.77 17.03 560.77 L 17.03 173.63 Q 17.03 163.63 27.03 163.62 L 58.91 163.57" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="-120" y="293" width="140" height="60" transform="rotate(-90 25 300)">
						<div style={{ fontSize: '10px', width: '160px', textAlign: 'center', letterSpacing: '0.5px' }}>Next Teams Turn<br/>Return to WormSelect</div>
					</foreignObject>

					{/* Death -> GameOver */}
					<path d="M 213.03 485.37 L 415.48 486.98" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="285" y="487" width="100" height="40">
						<div style={{ fontSize: '10px' }}>One or both<br/>Teams eliminated</div>
					</foreignObject>

					{/* TurnEnd -> GameOver (Surrender) */}
					<path d="M 155.03 241 L 155.03 300.03 Q 155.03 310.03 165.03 310.03 L 445.03 310.03 Q 455.03 310.03 455.03 320.03 L 455.03 466.76" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>
					<foreignObject x="280" y="310" width="120" height="20">
						<div style={{ fontSize: '11px', textAlign: 'center' }}>Player Surrenders</div>
					</foreignObject>

					{/* GameOver -> Final */}
					<path d="M 569.03 485.37 L 594.76 485.37" fill="none" stroke="#000000" strokeMiterlimit="10" marker-end="url(#arrowhead)"/>

				</g>
				<defs>
					<marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
						<polygon points="0 0, 10 3.5, 0 7" fill="var(--secondary)" />
					</marker>
				</defs>
			</svg>
		</SVGContainer>
	);
};

export default StateMachine;
