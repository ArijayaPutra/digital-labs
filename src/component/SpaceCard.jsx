import { LuChevronLeft, LuChevronRight, LuArrowRight } from 'react-icons/lu';
import PropTypes from 'prop-types';
import useEmblaCarousel from 'embla-carousel-react';
import Space1 from '../assets/space-1.png';
import Space2 from '../assets/space-2.png';
import Space3 from '../assets/space-3.png';
import Space4 from '../assets/space-1.png';
import Space5 from '../assets/space-2.png';
import Space6 from '../assets/space-3.png';
import '../index.css';
import { useEffect, useRef } from 'react';

const ServiceCard = ({ image, description, currentIndex }) => {
	return (
		<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10 shadow-md '>
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

ServiceCard.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	currentIndex: PropTypes.number.isRequired,
};

const ServiceCardMobile = ({ image, description, currentIndex }) => {
	return (
		<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl pb-10 shadow-md'>
			<img src={image} alt={`Space `} className='w-full' />
			<div className='px-4 flex flex-col gap-4 items-center'>
				<h3 className='font-playfair text-primary-500 italic font-semibold text-xl'>
					Works <span className='text-base'>{currentIndex + 1}</span>
				</h3>
				<p className='text-xs text-gray-700 font-semibold'>{description}</p>
			</div>
		</div>
	);
};

ServiceCardMobile.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	currentIndex: PropTypes.number.isRequired,
};

const SpaceCard = () => {
	const images = [Space1, Space2, Space3, Space4, Space5, Space6];
	const imageDescriptions = [
		'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
		'6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus...',
	];

	const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel();
	const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel();

	const desktopIntervalRef = useRef(null);
	const mobileIntervalRef = useRef(null);

	const handleNextImage = (emblaApi) => {
		if (emblaApi.canScrollNext()) {
			emblaApi.scrollNext();
		} else {
			emblaApi.scrollTo(0);
		}
	};

	const handlePreviousImage = (emblaApi) => {
		emblaApi.scrollPrev();
	};
	const clearIntervals = () => {
		clearInterval(desktopIntervalRef.current);
		clearInterval(mobileIntervalRef.current);
	};
	useEffect(() => {
		desktopIntervalRef.current = setInterval(() => {
			handleNextImage(emblaApiDesktop);
		}, 3000);

		mobileIntervalRef.current = setInterval(() => {
			handleNextImage(emblaApiMobile);
		}, 1500);

		return () => {
			clearIntervals();
		};
	}, [emblaApiDesktop, emblaApiMobile]);

	return (
		<div>
			<div className='hidden md:flex flex-col items-center justify-center gap-y-8'>
				<div className='w-full flex flex-row gap-x-12 mt-4 justify-center items-center'>
					<button className='bg-white aspect-square rounded-full text-primary-500 z-40' onClick={() => handlePreviousImage(emblaApiDesktop)}>
						<LuChevronLeft size={'2em'} />
					</button>
					<div className='embla overflow-hidden p-8' ref={emblaRefDesktop}>
						<div className='embla__container flex'>
							{images.map((image, index) => (
								<div className='embla__slide' key={index}>
									<ServiceCard image={image} description={imageDescriptions[index]} currentIndex={index} />
								</div>
							))}
						</div>
					</div>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={() => handleNextImage(emblaApiDesktop)}>
						<LuChevronRight size={'2em'} />
					</button>
				</div>
				<button className='bg-primary-500 w-52 h-14 flex text-xl text-white font-jakarta font-bold gap-x-3 mt-10 items-center justify-center rounded-xl'>
					<a href='#contact' className='flex'>
						See more <LuArrowRight size={'1.5em'} />
					</a>
				</button>
			</div>

			<div className='md:hidden'>
				<div className='flex flex-col items-center justify-center gap-y-8'>
					<div className='w-full flex flex-row gap-x-3 mt-4 justify-center items-center'>
						<div className='flex items-center justify-center z-40'>
							<button className='bg-white aspect-square rounded-full text-primary-500' onClick={() => handlePreviousImage(emblaApiMobile)}>
								<LuChevronLeft size={'2em'} />
							</button>
						</div>

						<div className='embla overflow-hidden py-8 ' ref={emblaRefMobile}>
							<div className='embla__container flex '>
								{images.map((image, index) => (
									<div className='embla__slide__mobile' key={index}>
										<ServiceCardMobile image={image} description={imageDescriptions[index]} currentIndex={index} />
									</div>
								))}
							</div>
						</div>
						<div className='flex items-center justify-center z-40'>
							<button className='bg-white aspect-square rounded-full text-primary-500' onClick={() => handleNextImage(emblaApiMobile)}>
								<LuChevronRight size={'2em'} />
							</button>
						</div>
					</div>
					<button className='bg-primary-500 w-1/2 z-40 h-14 flex text-white font-jakarta font-bold gap-x-3 items-center justify-center rounded-xl'>
						<a href='#contact' className='flex'>
							See more <LuArrowRight size={'1.5em'} />
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SpaceCard;
