import { useState, useEffect } from 'react';
import Hero from './view/Hero';
import AboutUs from './view/About';
import Services from './view/Services';
import Space from './view/Space';
import Works from './view/Works';
import Contact from './view/Contact';
import Footer from './view/Footer';

import SplashPotrait from './assets/potrait.mp4';

function App() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const splashTimeout = setTimeout(() => {
			setShowSplash(false);
		}, 2500);

		return () => clearTimeout(splashTimeout);
	}, []);

	return (
		<>
			{showSplash ? (
				<video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'fixed', top: 0, left: 0 }}>
					<source src={SplashPotrait} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			) : (
				<>
					<Hero />
					<AboutUs />
					<Services />
					<Space />
					<Works />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
