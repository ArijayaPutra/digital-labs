import { LuArrowUpRight } from 'react-icons/lu';
import WorkCard from '../component/WorkCard';

const Works = () => {
	return (
		<div className='bg-gray-50 pb-8'>
			<div className='flex flex-col justify-center items-center gap-6 p-6'>
				<div className='flex items-center gap-2 text-base text-primary-500 font-jakarta'>
					<h3>Our Works</h3>
					<LuArrowUpRight size={'1.5em'} />
				</div>

				<div className='flex flex-col gap-6'>
					<h1 className='font-bold text-4xl text-gray-900 text-center'>
						Our Visual <span className='font-playfair text-primary-500 italic'>Odyssey</span>
					</h1>

					<div className='w-full'>
						<WorkCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Works;
