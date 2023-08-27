import { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuArrowRight } from 'react-icons/lu';
import Space1 from '../assets/space-1.png';
import Space2 from '../assets/space-2.png';
import Space3 from '../assets/space-3.png';
import '../index.css';

const SpaceCard = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [Space1, Space2, Space3];
	const imageDescriptions = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed',
		'2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed',
		'3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed',
	];

	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePreviousImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className='flex flex-col items-center justify-center gap-y-8'>
			<div className='w-full flex flex-row gap-x-3 mt-4 justify-center items-center'>
				<div className='flex items-center justify-center'>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
						<LuChevronLeft size={'2em'} />
					</button>
				</div>
				<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10 shadow-md'>
					<img src={images[currentImageIndex]} alt={`Space ${currentImageIndex + 1}`} className='w-full' />
					<div className='px-4 flex flex-col gap-4 items-center'>
						<h3 className='font-playfair text-primary-500 italic font-semibold text-xl'>
							Works <span className='text-base'>{currentImageIndex + 1}</span>
						</h3>
						<p className='text-xs text-gray-700 font-semibold'>{imageDescriptions[currentImageIndex]}</p>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
						<LuChevronRight size={'2em'} />
					</button>
				</div>
			</div>
			<button className='bg-primary-500 w-1/2 h-14 flex text-white font-jakarta font-bold gap-x-3 items-center justify-center rounded-xl'>
				See more <LuArrowRight size={'1.5em'} />
			</button>
		</div>
	);
};

export default SpaceCard;
