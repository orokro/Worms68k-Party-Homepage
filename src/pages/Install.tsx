import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AlertTriangle, HardDrive, Terminal, Download } from 'lucide-react';
import { 
	ContentBox, 
	BoxHeader, 
	BoxContent, 
	Disclaimer,
	Button
} from '../components/Common';

const StepList = styled.ol`
	padding-left: 20px;
	li {
		margin-bottom: 12px;
		line-height: 1.4;
	}
	strong {
		color: var(--primary);
	}
`;

const WarningBox = styled(Disclaimer)`
	border-left-color: #ff4d4d;
	background-color: rgba(255, 77, 77, 0.1);
	color: #ffb3b3;
`;

const LinkList = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 15px;

	li {
		margin-bottom: 8px;
	}

	a {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: bold;
	}
`;

const Install = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<WarningBox>
				<p><strong><AlertTriangle size={18} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> IMPORTANT: BACK UP YOUR DATA!</strong></p>
				<p>Worms68k Party is extremely memory-hungry and pushes the TI-89 to its limits. Before installing, ensure you have backed up all your important variables and programs. ARCHIVE EVERYTHING you aren't using to free up RAM.</p>
			</WarningBox>

			<ContentBox>
				<BoxHeader>
					Installation Guide (Windows)
					<HardDrive size={20} />
				</BoxHeader>
				<BoxContent>
					<div style={{ textAlign: 'center', marginBottom: '30px', padding: '20px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
						<p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>First, download the game package:</p>
						<Button href="./assets/Worms68kParty.zip" download>
							<Download size={20} style={{ marginRight: '10px' }} />
							Download Worms68kParty.zip
						</Button>
					</div>

					<p>Follow these steps to get Worms68k Party running on your TI-89 or TI-89 Titanium:</p>
					<StepList>
						<li><strong>Download and Extract:</strong> Download the <code>Worms68kParty.zip</code> and extract its contents to your computer.</li>
						<li><strong>Check Memory:</strong> The game files (unzipped) require approximately <strong>96 KB</strong> of storage space. Ensure your calculator has enough Flash ROM and RAM available.</li>
						<li><strong>Setup Folder:</strong> On your TI-89, create a new folder called <code>worms</code> (Press <code>[2nd] [VAR-LINK]</code>, then <code>[F1]</code> {'->'} <code>5:Create Folder</code>).</li>
						<li><strong>Set Directory:</strong> Set <code>worms</code> as your current directory (Type <code>setFold(worms)</code> on the home screen).</li>
						<li><strong>Connect:</strong> Connect your TI-89 to your computer via USB (Titanium) or Silver Link / Black Link cable.</li>
						<li><strong>Transfer Files:</strong> Open <strong>TI-Connect</strong> software and use the "Device Explorer" to browse your calculator.</li>
						<li><strong>Drag & Drop:</strong> Drag and drop the following files into the <code>worms</code> folder:
							<ul>
								<li><code>wgame.89z</code> (Game Engine)</li>
								<li><code>wmenu.89z</code> (Menu System)</li>
								<li><code>worms68k.89p</code> (TI-Basic Loader)</li>
								<li><code>wormsdat.89e</code> (Game Data)</li>
							</ul>
						</li>
						<li><strong>ARCHIVE EVERYTHING:</strong> Once transferred, use <code>[VAR-LINK]</code> to select all four files and press <code>[F1]</code> {'->'} <code>8:Archive</code>. Running the game from Archive is mandatory to save RAM and prevent crashes.</li>
						<li><strong>Launch:</strong> On your home screen, type <code>worms68k()</code> and press <code>[ENTER]</code>.</li>
					</StepList>
				</BoxContent>
			</ContentBox>

			<ContentBox>
				<BoxHeader>
					Linux & macOS Users
					<Terminal size={20} />
				</BoxHeader>
				<BoxContent>
					<p>If you aren't on Windows, you can use the excellent open-source <strong>TILP</strong> (TI Linking Program) to transfer files.</p>
					<p>TILP is a cross-platform linking program that supports almost all TI calculators and link cables.</p>
					<p>You can find it's main pages here:</p>
					<LinkList>
						<li>
							<a href="https://github.com/debrouxl/tilibs" target="_blank" rel="noopener noreferrer">
								Official `tilibs` GitHub
							</a>
						</li>
						<li>
							<a href="https://github.com/debrouxl/tilp_and_gfm" target="_blank" rel="noopener noreferrer">
								Official `tilp_and_gfm` GitHub
							</a>
						</li>
					</LinkList>
					<p>
						Or, if you prefer, you can use the web-based version of TILP, which runs directly in your browser and supports file transfers over USB (with WebUSB):
					</p>
					<LinkList>
						<a href="https://tiplanet.org/scripts/webtilibs/webtilp.html" target="_blank" rel="noopener noreferrer">
							WebTILP Site
						</a>
					</LinkList>

					<div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
						<h4 style={{ margin: '0 0 10px 0' }}>💡 Pro Tip: Emulation</h4>
						<p style={{ margin: 0, fontSize: '0.9rem' }}>
							If you don't have a physical calculator, you can run Worms68k Party in an emulator like <a href="https://www.ticalc.org/archives/files/fileinfo/84/8442.html" target="_blank" rel="noopener noreferrer">Virtual TI</a> or <a href="https://sourceforge.net/projects/gtktiemu/" target="_blank" rel="noopener noreferrer">TiEmu</a>. Simply load a TI-89 ROM and drag the game files into the emulator window.
						</p>
					</div>
				</BoxContent>
			</ContentBox>
		</div>
	);
};

export default Install;
