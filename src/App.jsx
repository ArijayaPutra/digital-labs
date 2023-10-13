import { useState, useEffect, useRef } from 'react';
import Hero from './view/Hero';
import AboutUs from './view/About';
import Services from './view/Services';
import Space from './view/Space';
import Works from './view/Works';
import Contact from './view/Contact';
import Footer from './view/Footer';

import SplashPotrait from './assets/mobile.gif';
import SplashLandscape from './assets/desktop.mp4';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactPlayer from 'react-player';

function App() {
	const [showSplash, setShowSplash] = useState(true);
	const [isWhiteBackground, setIsWhiteBackground] = useState(false);

	useEffect(() => {
		// Set latar belakang menjadi putih setiap 3 detik
		const intervalId = setInterval(() => {
			setIsWhiteBackground((prev) => !prev);
		}, 2100);

		// Membersihkan interval saat komponen tidak lagi ter-render
		return () => clearInterval(intervalId);
	}, []);

	const backgroundColor = isWhiteBackground ? '#FFFFFF' : '#05090A';

	useEffect(() => {
		const splashTimeout = setTimeout(() => {
			setShowSplash(false);
		}, 3000);

		return () => clearTimeout(splashTimeout);
	}, []);

	const cursorRef = useRef(null);
	const cursor2Ref = useRef(null);

	const [language, setLanguage] = useState(true);

	const toggleLanguage = () => {
		setLanguage(!language);
	};

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
				<div className='w-full h-screen ' style={{ backgroundColor, transition: 'background-color' }}>
					<img src={SplashPotrait} alt='splash' className='w-full h-full object-cover md:hidden' />

					<ReactPlayer
						className='hidden md:block object-cover'
						width='100%'
						height='100vh'
						playing={true}
						controls={false}
						muted={true}
						loop={true}
						style={{ position: 'fixed', top: 0, left: 0, objectfit: 'cover' }}
						url={SplashLandscape}
					/>
				</div>
			) : (
				<>
					<div ref={cursorRef} className='cursor -z-50 md:z-50  '></div>
					<div ref={cursor2Ref} className='cursor2 -z-50 md:z-50'></div>

					{language ? (
						<div
							className='flex items-center justify-center rounded-full p-1 md:p-2 bg-grey-50 left-4 md:top-4 top-6 absolute z-30 w-12  md:w-16 aspect-square cursor-pointer'
							onClick={toggleLanguage}
						>
							<h1 className='font-playfair text-xl md:text-2xl font-bold text-primary-500 hover:scale-125 transition-all '>ID</h1>
						</div>
					) : (
						<div
							className='flex items-center justify-center rounded-full p-1 md:p-2 bg-grey-900 left-4 md:top-4 top-6 absolute z-30 w-12  md:w-16 aspect-square cursor-pointer'
							onClick={toggleLanguage}
						>
							<h1 className='font-playfair text-xl md:text-2xl font-bold text-white hover:scale-125 transition-all '>EN</h1>
						</div>
					)}

					<ParallaxProvider>
						{/* Letakkan konten-konten di sini */}
						<Hero language={language} /> {/* Jika Anda ingin Hero di atas */}
						<AboutUs language={language} />
						<Services language={language} />
						<Space language={language} />
						<Works language={language} />
					</ParallaxProvider>
					<Contact language={language} />
					<Footer language={language} />
				</>
			)}
		</>
	);
}

export default App;
