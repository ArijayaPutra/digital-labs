import { LuArrowUpRight } from 'react-icons/lu';
import SpaceCard from '../component/SpaceCard';
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import BgWhite from '../assets/bg-white.svg';
const Space = () => {
	return (
		<ParallaxBanner layers={[{ image: BgWhite, speed: -30 }]} className='bg-white mb-8  '>
			<div className='bg-white pb-8 '>
				<div className='md:hidden'>
					<div className='flex flex-col justify-center items-center gap-6 p-6'>
						<div className='flex z-50  items-center gap-2 text-base text-primary-500 font-jakarta'>
							<h3>Our Space</h3>
							<LuArrowUpRight size={'1.5em'} />
						</div>

						<div className='flex flex-col gap-6 z-40 '>
							<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>
								Witness Our{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Legacy</span>
								</ScrollAnimation>
								In Every Click
							</h1>
						</div>
						<div className='w-full'>
							<SpaceCard />
						</div>
					</div>
				</div>

				{/* Untuk tampilan desktop */}
				<div className='hidden md:flex flex-col justify-center items-center px-28 py-16 gap-y-8 '>
					<div className='flex z-40 items-center gap-2 text-xl text-primary-500 font-jakarta'>
						<h3>Our Space</h3>
						<LuArrowUpRight size={'1.5em'} />
					</div>
					<div className='flex flex-col gap-6 z-40 px-48'>
						<h1 className='font-bold text-6xl text-gray-900 text-balance text-center'>
							Witness Our{' '}
							<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
								<span className='font-playfair  text-primary-500 italic'>Legacy</span>
							</ScrollAnimation>{' '}
							In Every Click
						</h1>
					</div>
					<div className='w-full z-40'>
						<SpaceCard />
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
};

export default Space;
