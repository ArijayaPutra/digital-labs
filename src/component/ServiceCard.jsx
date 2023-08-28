import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import PropTypes from 'prop-types';
import Service1 from '../assets/service-1.png';
import Service2 from '../assets/service-2.png';

const ServiceCard = ({ image, description, currentIndex }) => {
	return (
		<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl relative pb-4 '>
			<div className='h-[450px] overflow-hidden flex flex-col gap-y-4 hover:scroll to bottom '>
				<div className='hover:-translate-y-1/3 transition-transform ease-in-out cursor-pointer pb-32 '>
					<img src={image} alt={`Service`} className='w-full' />
					<div className='px-4 flex flex-col gap-2  '>
						<h3 className='font-playfair text-primary-500 italic font-semibold text-xl md:text-2xl md:mt-2'>
							Service <span className='text-lg'>{currentIndex + 1}</span>
						</h3>
						<p className='text-xs md:text-base text-gray-700 font-semibold'>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	currentIndex: PropTypes.number.isRequired,
};

const ServiceCardCarousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [Service1, Service2];
	const imageDescriptions = [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, quam at lacinia hendrerit, diam velit luctus libero, in aliquet ex tellus at sem. Vivamus auctor gravida nulla, id fermentum justo ultricies id. Curabitur vel libero eu ligula tincidunt feugiat. Sed eu semper nunc',
		'2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam, quam at lacinia hendrerit, diam velit luctus libero, in aliquet ex tellus at sem. Vivamus auctor gravida nulla, id fermentum justo ultricies id. Curabitur vel libero eu ligula tincidunt feugiat. Sed eu semper nunc',
	];

	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePreviousImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className='w-full mt-4'>
			{/* Tampilan desktop */}
			<div className='hidden md:flex flex-row gap-x-3 justify-center items-center'>
				<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
					<LuChevronLeft size={'2em'} />
				</button>
				<ServiceCard image={images[currentImageIndex]} description={imageDescriptions[currentImageIndex]} currentIndex={currentImageIndex} />
				<ServiceCard
					image={images[(currentImageIndex + 1) % images.length]}
					description={imageDescriptions[(currentImageIndex + 1) % images.length]}
					currentIndex={(currentImageIndex + 1) % images.length}
				/>
				<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
					<LuChevronRight size={'2em'} />
				</button>
			</div>

			{/* Tampilan mobile */}
			<div className='md:hidden'>
				<div className='w-full flex flex-row gap-x-3 mt-4 justify-center items-center '>
					<div className='flex items-center justify-center'>
						<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
							<LuChevronLeft size={'2em'} />
						</button>
					</div>
					<ServiceCard image={images[currentImageIndex]} description={imageDescriptions[currentImageIndex]} currentIndex={currentImageIndex} />
					<div className='flex items-center justify-center'>
						<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
							<LuChevronRight size={'2em'} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCardCarousel;
