import { LuArrowUpRight } from 'react-icons/lu';
import ServiceCard from '../component/ServiceCard.jsx';
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import BgGrey from '../assets/bg-abu.svg';
import PropTypes from 'prop-types';
const Services = ({ language }) => {
	Services.propTypes = {
		language: PropTypes.bool.isRequired,
	};
	return (
		<ParallaxBanner layers={[{ image: BgGrey, speed: -30 }]} id='service' className='bg-white mb-8 '>
			<div className='bg-grey-50 pb-8 '>
				<div className='md:hidden'>
					<div className='flex flex-col justify-center gap-6 p-6 '>
						<div className='flex z-50 items-center gap-2 text-base text-primary-500 font-jakarta'>
							{language ? <h3>What We Do</h3> : <h3>Layanan Kami</h3>}
							<LuArrowUpRight size={'1.5em'} />
						</div>
						{language ? (
							<div className='flex flex-col gap-6 z-40'>
								<h1 className='font-bold text-4xl text-gray-900 text-balance'>
									<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
										<span className='font-playfair  text-primary-500 italic'>One Window</span>
									</ScrollAnimation>{' '}
									Solutions Provider
								</h1>

								<div className='w-full z-40'>
									<ServiceCard language={language} />
								</div>
							</div>
						) : (
							<div className='flex flex-col gap-6 z-40'>
								<h1 className='font-bold text-4xl text-gray-900 text-balance'>
									<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Solusi</span>
									</ScrollAnimation>{' '}
									untuk Segala Kebutuhan Brand Anda
								</h1>

								<div className='w-full z-40'>
									<ServiceCard language={language} />
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Untuk tampilan desktop */}
				<div className='hidden md:grid grid-cols-2   justify-center px-28 py-16 gap-y-8 '>
					<div className='flex flex-col z-40 gap-y-6'>
						<div className='flex items-center gap-2 text-2xl text-primary-500 font-jakarta'>
							{language ? <h3>What We Do</h3> : <h3>Layanan Kami</h3>}
							<LuArrowUpRight size={'1.5em'} />
						</div>
						{language ? (
							<div className='flex flex-col gap-10 z-40'>
								<h1 className='font-bold text-6xl text-gray-900 text-balance'>
									<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
										<span className='font-playfair  text-primary-500 italic'>One Window</span>
									</ScrollAnimation>{' '}
									Solutions Provider
								</h1>
							</div>
						) : (
							<div className='flex flex-col gap-10 z-40'>
								<h1 className='font-bold text-6xl text-gray-900 text-balance'>
									<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Solusi</span>
									</ScrollAnimation>{' '}
									untuk Segala Kebutuhan Brand Anda
								</h1>
							</div>
						)}
					</div>

					<div className='z-40'>
						<div className='w-full '>
							<ServiceCard language={language} />
						</div>
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
};

export default Services;
