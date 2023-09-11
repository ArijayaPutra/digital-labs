import Work1 from '../assets/space/Fara-1.mp4';
import Work2 from '../assets/space/Miryeo-1.jpg';
import Work3 from '../assets/space/Fara-2.mp4';
import Work4 from '../assets/space/Miryeo-2.jpg';
import Work5 from '../assets/space/Madame-Chang.mp4';
import Work6 from '../assets/space/Miryeo-3.jpg';
import Work8 from '../assets/space/Madame-Chang.jpg';
import Work7 from '../assets/space/Barby-Bakery.mp4';
import Work9 from '../assets/space/Better-than-raw.mp4';

import Work11 from '../assets/space/Jhony-Bride.mp4';
import Work12 from '../assets/space/Optik-JMTOP.mp4';
import Work13 from '../assets/space/Sandy-Collection.mp4';
import Work14 from '../assets/space/Seolmi.mp4';
import Work15 from '../assets/space/Waroeng-Ipang.mp4';
import Work16 from '../assets/space/Yoogu-Bar.mp4';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import Logo from '../assets/logo-white.png';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import useEmblaCarousel from 'embla-carousel-react';
const SpaceCard = () => {
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
									<img src={Logo} alt='logo' />
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work4} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<img src={Logo} alt='logo' />
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
									<img src={Logo} alt='logo' />
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work8} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<img src={Logo} alt='logo' />
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
					<div className='w-full h-full'>
						<ReactPlayer url='https://youtube.com/shorts/5JHuDPUzXqU?si=6AdD_n8cRPnb2kxZ' width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 5,
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
			id: 6,
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
			id: 7,
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
									<img src={Logo} alt='logo' />
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work4} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<img src={Logo} alt='logo' />
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
									<img src={Logo} alt='logo' />
								</div>
							)}
						</div>
						<div className='image-container' onMouseEnter={handleImageHover} onMouseLeave={handleImageLeave}>
							<img src={Work8} alt='Work4' />
							{hoveredImage && (
								<div className='overlay'>
									<img src={Logo} alt='logo' />
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
						<ReactPlayer url='https://youtube.com/shorts/5JHuDPUzXqU?si=6AdD_n8cRPnb2kxZ' width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
					</div>
				</div>
			),
		},
		{
			id: 9,
			content: (
				<div className='embla__slide__mobile gap-6 justify-center items-center '>
					<div className=''>
						<ReactPlayer url={Work11} width='360px' height='100%' controls={true} playing={false}></ReactPlayer>
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
				<div className='flex items-center justify-center'>
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
				<div className='flex items-center justify-center'>
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

export default SpaceCard;
