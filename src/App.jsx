import { useState, useEffect, useRef } from 'react';
import Hero from './view/Hero';
import AboutUs from './view/About';
import Services from './view/Services';
import Space from './view/Space';
import Works from './view/Works';
import Contact from './view/Contact';
import Footer from './view/Footer';

import SplashPotrait from './assets/potrait.mp4';
import SplashLandscape from './assets/landscape.mp4';
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const splashTimeout = setTimeout(() => {
			setShowSplash(false);
		}, 2500);

		return () => clearTimeout(splashTimeout);
	}, []);

	const cursorRef = useRef(null);
	const cursor2Ref = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			cursorRef.current.style.cssText = cursor2Ref.current.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
		};

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<>
			{showSplash ? (
				<video autoPlay muted loop style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'fixed', top: 0, left: 0 }}>
					<source src={SplashPotrait} type='video/mp4' className='md:hidden' />
					<source src={SplashLandscape} type='video/mp4' className='hidden md:block' />
					Your browser does not support the video tag.
				</video>
			) : (
				<>
					<div ref={cursorRef} className='cursor z-50'></div>
					<div ref={cursor2Ref} className='cursor2 z-50'></div>
					<ParallaxProvider>
						<Hero />
						<AboutUs />
						<Services />
						<Space />
						<Works />
					</ParallaxProvider>
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
}

export default App;
