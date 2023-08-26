import heroMobile from '../assets/hero-mobile.png';
import Navbar from '../component/Navbar';

const Hero = () => {
	return (
		<div className='bg-cover bg-center bg-no-repeat h-[90vh] flex flex-col justify-center items-center text-white' style={{ backgroundImage: `url(${heroMobile})` }}>
			<Navbar />
			<div className='flex flex-col items-center justify-center gap-6 w-10/12'>
				<h1 className='font-playfair font-semibold italic text-center text-balance text-4xl'>Elevating Dreams, Crafting Success</h1>
				<p className='font-jakarta text-center text-lg'>
					We specialize in transforming ambitions into achievements, breathing life into ideas that resonate, and crafting success stories that inspire.
				</p>
			</div>
		</div>
	);
};

export default Hero;
