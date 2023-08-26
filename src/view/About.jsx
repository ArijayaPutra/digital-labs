import { LuArrowUpRight } from 'react-icons/lu';
import About1 from '../assets/about-1.png';
import About2 from '../assets/about-2.png';

const AboutUs = () => {
	return (
		<div className='bg-white mb-8 '>
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
						only meet your branding needs but to exceed them, leaving an indelible digital footprint that captivates and inspires.
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
	);
};

export default AboutUs;
