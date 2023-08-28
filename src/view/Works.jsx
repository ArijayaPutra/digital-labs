import { LuArrowUpRight } from 'react-icons/lu';
import WorkCard from '../component/WorkCard';
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import BgGrey from '../assets/bg-abu.svg';
const Works = () => {
	return (
		<ParallaxBanner layers={[{ image: BgGrey, speed: -30 }]} id='work' className='bg-white mb-8 '>
			<div className='-50 pb-8'>
				<div className='flex flex-col justify-center items-center gap-6 p-6  '>
					<div className='flex z-40 items-center gap-2 text-base md:text-2xl text-primary-500 font-jakarta'>
						<h3>Our Works</h3>
						<LuArrowUpRight size={'1.5em'} />
					</div>

					<div className='flex flex-col gap-6 z-40 '>
						<h1 className='font-bold text-4xl text-gray-900 text-center md:text-6xl'>
							Our Visual{' '}
							<ScrollAnimation animateIn='animate__fadeIn' className=' inline-block'>
								<span className='font-playfair  text-primary-500 italic'>Odyssey</span>
							</ScrollAnimation>{' '}
						</h1>
					</div>
					<div className='w-full flex justify-center items-center mt-16 z-40 '>
						<WorkCard />
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
};

export default Works;
