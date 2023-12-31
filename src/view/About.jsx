import { LuArrowUpRight } from 'react-icons/lu';
import About1 from '../assets/about-1.png';
import About2 from '../assets/about-2.png';
import Desktop1 from '../assets/about-1-desktop.png';
import Desktop2 from '../assets/about-2-desktop.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import BgWhite from '../assets/bg-white.svg';
import PropTypes from 'prop-types';

const AboutUs = ({ language }) => {
	AboutUs.propTypes = {
		language: PropTypes.bool.isRequired,
	};
	return (
		<ParallaxBanner layers={[{ image: BgWhite, speed: -30 }]} id='about' className='bg-white mb-8 '>
			<div>
				<div className='md:hidden'>
					<div className='flex flex-col justify-center gap-6 p-6 '>
						<div className='flex items-center gap-2 text-base text-primary-500 font-jakarta z-50'>
							{language ? <h3>About us</h3> : <h3>Tentang Kami</h3>}
							<LuArrowUpRight size={'1.5em'} />
						</div>
						{language ? (
							<div className='flex flex-col gap-6 z-50'>
								<h1 className='font-bold text-4xl text-gray-900 text-balance'>
									Bringing{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Magic</span>
									</ScrollAnimation>{' '}
									to Your Brand
								</h1>
								<p className='text-base text-gray-700 font-semibold'>
									At our digital branding agency, we are the storytellers of the digital age, meticulously crafting every pixel and syllable to illuminate your brand&apos;s essence. Our mission is to
									not only meet your branding needs but to exceed them, leaving an indelible digital footc
								</p>
							</div>
						) : (
							<div className='flex flex-col gap-6  z-50'>
								<h1 className='font-bold text-4xl text-gray-900 text-balance'>
									Dipandu{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Proses</span>
									</ScrollAnimation>{' '}
									Berbasis{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Teknologi</span>
									</ScrollAnimation>{' '}
									Berorientasi{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className=' inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Hasil</span>
									</ScrollAnimation>{' '}
								</h1>
								<p className='text-base text-gray-700 font-semibold'>
									Kami membantu proses integrasi digital dan seni melalui kreativitas kolaboratif dan teknologi masa kini. AI, Blockchain, dan Metaverse adalah medium untuk menjangkau sebanyak mungkin
									peluang. Di luar visual dan konten, kami menyajikan narasi strategis berbasis audiens dengan pemanfaatan teknologi untuk hasil yang berdampak. Kolaborasi ciamik antara seni dan
									teknologi terbarukan akan membawa inovasi positif bagi setiap brand
								</p>
							</div>
						)}

						<div className='w-full flex items-center justify-center z-40'>
							<img src={About1} alt='about us' className='w-full' />
						</div>
					</div>
					{language ? (
						<div className='flex flex-col justify-center gap-6 p-6 '>
							<div className='flex flex-col gap-6 z-50'>
								<h1 className='font-bold text-4xl text-gray-900 text-balance'>
									Guiding Brands to Digital Eminence and{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Beyond</span>
									</ScrollAnimation>{' '}
								</h1>
								<p className='text-base text-gray-700 font-semibold'>
									At our digital branding agency, we are the storytellers of the digital age, meticulously crafting every pixel and syllable to illuminate your brand&apos;s essence. Our mission is to
									not only meet your branding needs but to exceed them, leaving an indelible digital footprint that captivates and inspires.
								</p>
							</div>

							<div className='w-full flex items-center justify-center z-40'>
								<img src={About2} alt='about us' className='w-full' />
							</div>
						</div>
					) : (
						<div className='flex flex-col justify-center gap-6 p-6 '>
							<div className='flex flex-col  z-50'>
								<h1 className='font-bold text-4xl text-gray-900 text-balance'>
									Keunggulan{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Digital</span>
									</ScrollAnimation>{' '}
									Terbarukan
								</h1>
							</div>

							<div className='w-full flex items-center justify-center mt-4 z-40'>
								<img src={About2} alt='about us' className='w-full' />
							</div>
						</div>
					)}
				</div>

				{/* Untuk tampilan desktop */}
				<div className='hidden md:flex flex-col justify-center px-28 py-16 gap-y-8 '>
					<div className='flex z-40 items-center gap-2 text-2xl text-primary-500 font-jakarta'>
						{language ? <h3>About us</h3> : <h3>Tentang Kami</h3>}
						<LuArrowUpRight size={'1.5em'} />
					</div>
					{language ? (
						<div className='grid grid-cols-5 z-40 '>
							<h1 className='font-bold  text-6xl text-gray-900 text-balance col-span-2  '>
								Bringing{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className=' inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Magic</span>
								</ScrollAnimation>
								to Your Brand
							</h1>
							<p className='text-xl text-gray-700 font-semibold col-span-3 pl-18 pt-6  '>
								At our digital branding agency, we are the storytellers of the digital age, meticulously crafting every pixel and syllable to illuminate your brand&apos;s essence. Our mission is to
								not only meet your branding needs but to exceed them, leaving an indelible digital footprint that captivates and inspires.
							</p>
						</div>
					) : (
						<div className='grid grid-cols-5 z-40 '>
							<h1 className='font-bold  text-6xl text-gray-900 text-balance col-span-2  '>
								Dipandu{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Proses</span>
								</ScrollAnimation>{' '}
								Berbasis{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Teknologi</span>
								</ScrollAnimation>{' '}
								Berorientasi{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className=' inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Hasil</span>
								</ScrollAnimation>{' '}
							</h1>
							<p className='text-xl text-gray-700 font-semibold col-span-3 pl-18 pt-6  '>
								Kami membantu proses integrasi digital dan seni melalui kreativitas kolaboratif dan teknologi masa kini. AI, Blockchain, dan Metaverse adalah medium untuk menjangkau sebanyak mungkin
								peluang. Di luar visual dan konten, kami menyajikan narasi strategis berbasis audiens dengan pemanfaatan teknologi untuk hasil yang berdampak. Kolaborasi ciamik antara seni dan
								teknologi terbarukan akan membawa inovasi positif bagi setiap brand
							</p>
						</div>
					)}

					<div className='grid grid-cols-5 mt-12 z-40'>
						<div className='w-full flex items-center justify-start col-span-2'>
							<img src={Desktop1} alt='about us' className='w-11/12' />
						</div>
						<div className='flex flex-col gap-6 col-span-3 pl-18 justify-between '>
							<div className='flex flex-col gap-6 pr-24 '>
								{language ? (
									<h1 className='font-bold text-6xl text-gray-900 text-balance '>
										Guiding Brands to Digital Eminence and{' '}
										<ScrollAnimation animateIn='animate__fadeIn' className='w-1/2 inline-block'>
											<span className='font-playfair  text-primary-500 italic'>Beyond</span>
										</ScrollAnimation>{' '}
									</h1>
								) : (
									<h1 className='font-bold text-6xl text-gray-900 text-balance '>
										Keunggulan{' '}
										<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
											<span className='font-playfair  text-primary-500 italic'>Digital</span>
										</ScrollAnimation>{' '}
										Terbarukan
									</h1>
								)}
							</div>

							<div className='w-full flex items-center justify-center'>
								<img src={Desktop2} alt='about us' className='w-full' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
};

export default AboutUs;
