import { LuArrowUpRight } from 'react-icons/lu';
import About1 from '../assets/about-1.png';
import About2 from '../assets/about-2.png';
import Desktop1 from '../assets/about-1-desktop.png';
import Desktop2 from '../assets/about-2-desktop.png';

const AboutUs = () => {
	return (
		<div className='bg-white mb-8 '>
			<div className='md:hidden'>
				<div className='flex flex-col justify-center gap-6 p-6'>
					<div className='flex items-center gap-2 text-base text-primary-500 font-jakarta'>
						<h3>About us</h3>
						<LuArrowUpRight size={'1.5em'} />
					</div>

					<div className='flex flex-col gap-6'>
						<h1 className='font-bold text-4xl text-gray-900 text-balance'>
							Bringing <span className='font-playfair  text-primary-500 italic'>Magic</span> to Your Brand
						</h1>
						<p className='text-xs text-gray-700 font-semibold'>
							At our digital branding agency, we are the storytellers of the digital age, meticulously crafting every pixel and syllable to illuminate your brand&apos;s essence. Our mission is to not
							only meet your branding needs but to exceed them, leaving an indelible digital footc
						</p>
					</div>

					<div className='w-full flex items-center justify-center'>
						<img src={About1} alt='about us' className='w-full' />
					</div>
				</div>

				<div className='flex flex-col justify-center gap-6 p-6'>
					<div className='flex flex-col gap-6'>
						<h1 className='font-bold text-4xl text-gray-900 text-balance'>
							Guiding Brands to Digital Eminence and <span className='font-playfair  text-primary-500 italic'>Beyond</span>{' '}
						</h1>
						<p className='text-xs text-gray-700 font-semibold'>
							At our digital branding agency, we are the storytellers of the digital age, meticulously crafting every pixel and syllable to illuminate your brand&apos;s essence. Our mission is to not
							only meet your branding needs but to exceed them, leaving an indelible digital footprint that captivates and inspires.
						</p>
					</div>

					<div className='w-full flex items-center justify-center'>
						<img src={About2} alt='about us' className='w-full' />
					</div>
				</div>
			</div>

			{/* Untuk tampilan desktop */}
			<div className='hidden md:flex flex-col justify-center p-28 gap-y-8 '>
				<div className='flex items-center gap-2 text-2xl text-primary-500 font-jakarta'>
					<h3>About us</h3>
					<LuArrowUpRight size={'1.5em'} />
				</div>

				<div className='grid grid-cols-5 '>
					<h1 className='font-bold text-6xl text-gray-900 text-balance col-span-2  '>
						Bringing <span className='font-playfair  text-primary-500 italic'>Magic</span> to Your Brand
					</h1>
					<p className='text-xl text-gray-700 font-semibold col-span-3 pl-18 pt-6  '>
						At our digital branding agency, we are the storytellers of the digital age, meticulously crafting every pixel and syllable to illuminate your brand&apos;s essence. Our mission is to not
						only meet your branding needs but to exceed them, leaving an indelible digital footprint that captivates and inspires.
					</p>
				</div>

				<div className='grid grid-cols-5 mt-12'>
					<div className='w-full flex items-center justify-start col-span-2'>
						<img src={Desktop1} alt='about us' className='w-11/12' />
					</div>
					<div className='flex flex-col gap-6 col-span-3 pl-18 justify-between '>
						<div className='flex flex-col gap-6 pr-24 '>
							<h1 className='font-bold text-6xl text-gray-900 text-balance '>
								Guiding Brands to Digital Eminence and <span className='font-playfair  text-primary-500 italic'>Beyond</span>{' '}
							</h1>
						</div>

						<div className='w-full flex items-center justify-center'>
							<img src={Desktop2} alt='about us' className='w-full' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
