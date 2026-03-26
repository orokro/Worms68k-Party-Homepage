import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Install from './pages/Install';
import About from './pages/About';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const MainContent = styled.main`
	flex: 1;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 20px;
`;

function App() {
	return (
		<Router>
			<GlobalStyles />
			<AppContainer>
				<Header />
				<MainContent>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/install" element={<Install />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</MainContent>
				<Footer />
			</AppContainer>
		</Router>
	);
}

export default App;
