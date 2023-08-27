import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import Service1 from '../assets/service-1.png';
import Service2 from '../assets/service-2.png';
import { useState } from 'react';

const ServiceCard = ({ image, description }) => {
	return (
		<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10'>
			<div className='h-[450px] overflow-hidden flex flex-col gap-y-4 hover:scroll to bottom'>
				<img src={image} alt={`Service`} className='w-full' />
				<div className='px-4 flex flex-col gap-4 '>
					<h3 className='font-playfair text-primary-500 italic font-semibold text-xl'>Service</h3>
					<p className='text-xs text-gray-700 font-semibold'>{description}</p>
				</div>
			</div>
		</div>
	);
};

const ServiceCardCarousel = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [Service1, Service2];
	const imageDescriptions = ['...', '...'];

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
				<ServiceCard image={images[currentImageIndex]} description={imageDescriptions[currentImageIndex]} />
				<ServiceCard image={images[(currentImageIndex + 1) % images.length]} description={imageDescriptions[(currentImageIndex + 1) % images.length]} />
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
					<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10'>
						<div className='h-[450px] overflow-hidden flex flex-col gap-y-4 hover:scroll to bottom'>
							<img src={images[currentImageIndex]} alt={`Space ${currentImageIndex + 1}`} className='w-full' />
							<div className='px-4 flex flex-col gap-4 '>
								<h3 className='font-playfair text-primary-500 italic font-semibold text-xl'>
									Services <span className='text-base'>{currentImageIndex + 1}</span>
								</h3>
								<p className='text-xs text-gray-700 font-semibold'>{imageDescriptions[currentImageIndex]}</p>
							</div>
						</div>
					</div>
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
