import { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuArrowRight } from 'react-icons/lu';
import Space1 from '../assets/space-1.png';
import Space2 from '../assets/space-2.png';
import Space3 from '../assets/space-3.png';
import '../index.css';
import PropTypes from 'prop-types';

const ServiceCard = ({ image, description, currentIndex }) => {
	return (
		<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10 shadow-md'>
			<img src={image} alt={`Space`} className='w-full' />
			<div className='px-4 flex flex-col gap-4 items-center'>
				<h3 className='font-playfair text-primary-500 italic font-semibold text-xl md:text-2xl'>
					Works <span className='text-lg'>{currentIndex + 1}</span>
				</h3>
				<p className='text-xs md:text-base text-gray-700 font-semibold'>{description}</p>
			</div>
		</div>
	);
};

const SpaceCard = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [Space1, Space2, Space3];
	const imageDescriptions = [
		'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
	];

	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePreviousImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};
	ServiceCard.propTypes = {
		image: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		currentIndex: PropTypes.number.isRequired,
	};
	return (
		<div>
			<div className='hidden md:flex flex-col items-center justify-center gap-y-8'>
				<div className='w-full flex flex-row gap-x-12 mt-4 justify-center items-center'>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
						<LuChevronLeft size={'2em'} />
					</button>
					<ServiceCard image={images[currentImageIndex]} description={imageDescriptions[currentImageIndex]} currentIndex={currentImageIndex} />
					<ServiceCard
						image={images[(currentImageIndex + 1) % images.length]}
						description={imageDescriptions[(currentImageIndex + 1) % images.length]}
						currentIndex={(currentImageIndex + 1) % images.length}
					/>
					<ServiceCard
						image={images[(currentImageIndex + 2) % images.length]}
						description={imageDescriptions[(currentImageIndex + 2) % images.length]}
						currentIndex={(currentImageIndex + 2) % images.length}
					/>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
						<LuChevronRight size={'2em'} />
					</button>
				</div>
				<button className='bg-primary-500 w-52 h-14 flex text-xl text-white font-jakarta font-bold gap-x-3 mt-10 items-center justify-center rounded-xl'>
					See more <LuArrowRight size={'1.5em'} />
				</button>
			</div>

			{/* Tambilan mobile */}
			<div className='md:hidden'>
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
			</div>
		</div>
	);
};

export default SpaceCard;
