import Work1 from '../assets/work/Acaii.mp4';
import Work2 from '../assets/work/Luxius.jpg';
import Work3 from '../assets/work/Luxius.mp4';
import Work4 from '../assets/work/Bridges-Eyewear.jpg';
import Work5 from '../assets/work/Leka.mp4';
import Work6 from '../assets/work/Sandy-Collection.jpg';
import Work8 from '../assets/work/Yande-Oil.png';
import Work7 from '../assets/work/Kip-Beauty.mp4';
import Work9 from '../assets/work/Loccitane.mp4';
import Work10 from '../assets/work/Maybeline.mp4';
import Work11 from '../assets/work/OMG-Live.jpeg';
import Work12 from '../assets/work/Tavi.mp4';
import Work13 from '../assets/work/Teh-Kotak-1.mp4';
import Work14 from '../assets/work/Teh-Kotak-2.mp4';
import Work15 from '../assets/work/Traveloka.mp4';
import Work16 from '../assets/work/Sandy-Collection.mp4';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import { useState } from 'react';
import ReactPlayer from 'react-player/es6';
import useEmblaCarousel from 'embla-carousel-react';
const WorkCard = () => {
	const [hoveredImage, setHoveredImage] = useState(null);
	const OPTIONS = { dragFree: true, containScroll: 'trimSnaps' };
	const [emblas, embla] = useEmblaCarousel(OPTIONS);
	const [emblasMobile, emblaMobile] = useEmblaCarousel(OPTIONS);
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeSlideMobile, setActiveSlideMobile] = useState(0);

	const handleNextImageMobile = () => {
		if (emblaMobile && emblaMobile.scrollTo) {
			const totalSlides = slideMobile.length;

			const currentIndex = emblaMobile.selectedScrollSnap();

			const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

			emblaMobile.scrollTo(nextIndex);
			setActiveSlideMobile(nextIndex);
		}
	};

	const handlePreviousImageMobile = () => {
		if (emblaMobile && emblaMobile.scrollTo) {
			const totalSlides = slideMobile.length;

			const currentIndex = emblaMobile.selectedScrollSnap();

			const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;

			emblaMobile.scrollTo(prevIndex);
			setActiveSlideMobile(prevIndex);
		}
	};

	const handleNextImage = () => {
		if (embla && embla.scrollTo) {
			const totalSlides = slides.length;

			const currentIndex = embla.selectedScrollSnap();

			const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;

			embla.scrollTo(nextIndex);
			setActiveSlide(nextIndex);
		}
	};

	const handlePreviousImage = () => {
		if (embla && embla.scrollTo) {
			const totalSlides = slides.length;

			const currentIndex = embla.selectedScrollSnap();

			const prevIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;

			embla.scrollTo(prevIndex);
			setActiveSlide(prevIndex);
		}
	};

	const handleImageHover = (index) => {
		setHoveredImage(index);
	};

	const handleImageLeave = () => {
		setHoveredImage(null);
	};

	const slides = [
		{
			id: 1,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work1} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
					<div className='flex flex-col justify-between w-full h-full '>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work2} alt='Work2' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl font-jakarta'>Luxius</p>
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work4} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<div className='overlay'>
										<p className='text-white text-5xl text-center font-jakarta'>Bridges Eyewear</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work3} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
					<div className='flex flex-col justify-between w-full h-full '>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work6} alt='Work2' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>Sandy Collection</p>
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work8} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>Yande Oil</p>
								</div>
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			id: 3,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work5} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
					<div className=''>
						<ReactPlayer url={Work7} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 4,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work9} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
					<div className=''>
						<ReactPlayer url={Work10} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 5,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className='flex flex-col justify-center w-full h-full bg-red-400 '>
						<div className='image-container-potrait' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work11} alt='Work11' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>OMG Live</p>
								</div>
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			id: 6,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work12} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
					<div className=''>
						<ReactPlayer url={Work13} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 7,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work14} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
					<div className=''>
						<ReactPlayer url={Work15} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 8,
			content: (
				<div className='embla__slide gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work16} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
	];

	const slideMobile = [
		{
			id: 1,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work1} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className='flex flex-col justify-between w-full h-full '>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work2} alt='Work2' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl font-jakarta'>Luxius</p>
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work4} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>Bridges Eyewear</p>
								</div>
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			id: 3,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work3} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 4,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className='flex flex-col justify-between w-full h-full '>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work6} alt='Work2' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>Sandy Collection</p>
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work8} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>Yande Oil</p>
								</div>
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			id: 5,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work5} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 6,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work7} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 7,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work9} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 8,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work10} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 9,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className='flex flex-col justify-center w-full h-full bg-red-400 '>
						<div className='image-container-potrait' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work11} alt='Work11' />
							{hoveredImage && (
								<div className='overlay'>
									<p className='text-white text-5xl text-center font-jakarta'>OMG Live</p>
								</div>
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			id: 10,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work12} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 11,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work13} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 12,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work14} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 13,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work15} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 14,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work16} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
	];

	return (
		<div>
			{/* Tampilan desktop */}
			<div className='hidden md:flex flex-row items-center justify-center gap-6  overflow-hidden'>
				<div className='flex items-center justify-center z-50'>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
						<LuChevronLeft size={'2em'} />
					</button>
				</div>
				<div className='embla overflow-hidden w-[82%]' ref={emblas}>
					<div className='flex-row gap-6 embla__container flex'>
						{' '}
						{slides.map((slide, index) => (
							<div key={index} className={`embla__slide gap-6 justify-center  ${activeSlide === index ? 'active-slide' : ''}`}>
								{slide.content}
							</div>
						))}
					</div>
				</div>
				<div className='flex items-center justify-center z-50'>
					<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
						<LuChevronRight size={'2em'} />
					</button>
				</div>
			</div>

			{/* Tampilan mobile */}
			<div className='md:hidden'>
				<div className='flex gap-4 items-center justify-center '>
					<div className='flex items-center justify-center z-50'>
						<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImageMobile}>
							<LuChevronLeft size={'2em'} />
						</button>
					</div>
					<div className='embla overflow-hidden w-[90%]' ref={emblasMobile}>
						<div className=' gap-6 embla__container flex'>
							{' '}
							{slideMobile.map((slide, index) => (
								<div key={index} className={`embla__slide__mobile gap-6 justify-center  ${activeSlideMobile === index ? 'active-slide' : ''}`}>
									{slide.content}
								</div>
							))}
						</div>
					</div>
					<div className='flex items-center justify-center z-50'>
						<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImageMobile}>
							<LuChevronRight size={'2em'} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
