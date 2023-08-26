import { LuArrowUpRight } from 'react-icons/lu';
import SpaceCard from '../component/SpaceCard';
const Space = () => {
	return (
		<div className='bg-white pb-8 '>
			<div className='flex flex-col justify-center items-center gap-6 p-6'>
				<div className='flex items-center gap-2 text-base text-primary-500 font-jakarta'>
					<h3>Our Space</h3>
					<LuArrowUpRight size={'1.5em'} />
				</div>

				<div className='flex flex-col gap-6'>
					<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>
						Witness Our <span className='font-playfair  text-primary-500 italic'>Legacy </span>
						In Every Click
					</h1>

					<div className='w-full'>
						<SpaceCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Space;
