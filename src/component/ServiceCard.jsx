import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Service1 from '../assets/service-1.png';

const ServiceCard = () => {
	return (
		<div className='w-full flex flex-row gap-x-3 mt-4 justify-center items-center '>
			<div className='flex items-center justify-center'>
				<button className='bg-white aspect-square rounded-full text-primary-500'>
					<LuChevronLeft size={'2em'} />
				</button>
			</div>
			<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10'>
				<img src={Service1} alt='about us' className='w-full' />
				<div className='px-4 flex flex-col gap-4'>
					<h3 className='font-playfair text-primary-500 italic font-semibold text-xl'>
						Services <span className='text-base'>1</span>
					</h3>
					<p className='text-xs text-gray-700 font-semibold'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
						ut interdum tellus elit sed{' '}
					</p>
				</div>
			</div>
			<div className='flex items-center justify-center'>
				<button className='bg-white aspect-square rounded-full text-primary-500'>
					<LuChevronRight size={'2em'} />
				</button>
			</div>
		</div>
	);
};

export default ServiceCard;
