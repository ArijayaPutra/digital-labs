import { LuArrowUpRight } from 'react-icons/lu';
import ServiceCard from '../component/ServiceCard.jsx';
const Services = () => {
	return (
		<div className='bg-grey-50 pb-8'>
			<div className='md:hidden'>
				<div className='flex flex-col justify-center gap-6 p-6'>
					<div className='flex items-center gap-2 text-base text-primary-500 font-jakarta'>
						<h3>What we do</h3>
						<LuArrowUpRight size={'1.5em'} />
					</div>

					<div className='flex flex-col gap-6'>
						<h1 className='font-bold text-4xl text-gray-900 text-balance'>
							Our Services Redefine Digital Brand <span className='font-playfair  text-primary-500 italic'>Engagement</span>
						</h1>
						<p className='text-xs text-gray-700 font-semibold'>
							At LS Digital Labs, We are pioneers of reinventing brand engagement for the digital age. With an unyielding commitment to innovation and creativity, we breathe new life into every
							digital interaction, transforming mundane moments into captivating experiences.
						</p>
						<div className='w-full'>
							<ServiceCard />
						</div>
					</div>
				</div>
			</div>

			{/* Untuk tampilan desktop */}
			<div className='hidden md:grid grid-cols-2  justify-center p-28 gap-y-8 '>
				<div>
					<div className='flex items-center gap-2 text-base text-primary-500 font-jakarta'>
						<h3>What we do</h3>
						<LuArrowUpRight size={'1.5em'} />
					</div>
					<div className='flex flex-col gap-6'>
						<h1 className='font-bold text-4xl text-gray-900 text-balance'>
							Our Services Redefine Digital Brand <span className='font-playfair  text-primary-500 italic'>Engagement</span>
						</h1>
						<p className='text-xs text-gray-700 font-semibold'>
							At LS Digital Labs, We are pioneers of reinventing brand engagement for the digital age. With an unyielding commitment to innovation and creativity, we breathe new life into every
							digital interaction, transforming mundane moments into captivating experiences.
						</p>
					</div>
				</div>

				<div>
					<div className='w-full'>
						<ServiceCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
