import heroMobile from '../assets/hero.jpg';
import Navbar from '../component/Navbar';
import { ParallaxBanner } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
const Hero = ({ language }) => {
	Hero.propTypes = {
		language: PropTypes.bool.isRequired,
	};
	return (
		<ParallaxBanner id='home' layers={[{ image: heroMobile, speed: -25 }]} className='flex  flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat h-[90vh] '>
			<Navbar language={language} />
			<div className='flex flex-col items-center justify-center gap-6 w-10/12 md:w-1/2 z-50'>
				{language ? (
					<div className='flex flex-col items-center justify-center gap-6'>
						<h1 className='font-playfair font-semibold italic text-center text-balance text-4xl md:text-6xl'>Elevating Dreams, Crafting Success</h1>
					</div>
				) : (
					<div className='flex flex-col items-center justify-center gap-6'>
						<h1 className='font-playfair font-semibold italic text-center text-balance text-4xl md:text-6xl'>Bagian dari Kisah Sukses Anda</h1>
					</div>
				)}
			</div>
		</ParallaxBanner>
	);
};

export default Hero;
