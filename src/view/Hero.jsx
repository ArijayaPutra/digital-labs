import heroMobile from '../assets/hero-mobile.png';
import Navbar from '../component/Navbar';
import { ParallaxBanner } from 'react-scroll-parallax';
const Hero = () => {
	return (
		<ParallaxBanner id='home' layers={[{ image: heroMobile, speed: -25 }]} className='flex  flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat h-[90vh] '>
			<Navbar />
			<div className='flex flex-col items-center justify-center gap-6 w-10/12 md:w-1/2 z-50'>
				<h1 className='font-playfair font-semibold italic text-center text-balance text-4xl md:text-6xl'>Elevating Dreams, Crafting Success</h1>
				<p className='font-jakarta text-center text-lg md:text-xl'>
					We specialize in transforming ambitions into achievements, breathing life into ideas that resonate, and crafting success stories that inspire.
				</p>
			</div>
		</ParallaxBanner>
	);
};

export default Hero;
