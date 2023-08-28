import Work1 from '../assets/work-1.png';
import Work2 from '../assets/work-2.png';
import Work3 from '../assets/work-3.png';
import Work4 from '../assets/work-4.png';
import Work5 from '../assets/work-5.png';
import Work6 from '../assets/work-6.png';
import Work7 from '../assets/work-7.png';
import Work8 from '../assets/work-8.png';
import Logo from '../assets/logo-white.png';
import { useState } from 'react';

const WorkCard = () => {
	const firstRowImages = [Work1, Work2, Work3, Work4];
	const secondRowImages = [Work5, Work6, Work7, Work8];

	const desktop1 = [Work1, Work4];
	const desktop2 = [Work2, Work3];
	const desktop3 = [Work5, Work8];
	const desktop4 = [Work6, Work7];

	const [hoveredImage, setHoveredImage] = useState(null);

	const handleImageHover = (index) => {
		setHoveredImage(index);
	};

	const handleImageLeave = () => {
		setHoveredImage(null);
	};

	return (
		<div>
			{/* Tampilan desktop */}
			<div className='hidden md:flex flex-row gap-6 md:grid-cols-4'>
				<div className='flex flex-col gap-6'>
					{desktop1.map((image, index) => (
						<div key={index} className={`relative w-full`} onMouseEnter={() => handleImageHover(index)} onMouseLeave={handleImageLeave}>
							<div className={`absolute inset-0 bg-black ${hoveredImage === index ? 'opacity-80' : 'opacity-0'} transition-opacity duration-300`} />
							<img src={image} alt={`work-${index + 1}`} className='w-60' />
							{hoveredImage === index && (
								<div className='absolute inset-0 flex items-center justify-center'>
									<img src={Logo} alt='logo' className='w-10 h-10' />
								</div>
							)}
						</div>
					))}
				</div>
				<div className='flex flex-col gap-6'>
					{desktop2.map((image, index) => (
						<div key={index + 4} className={`relative w-full`} onMouseEnter={() => handleImageHover(index + 4)} onMouseLeave={handleImageLeave}>
							<div className={`absolute inset-0 bg-black ${hoveredImage === index + 4 ? 'opacity-80' : 'opacity-0'} transition-opacity duration-300`} />
							<img src={image} alt={`work-${index + 5}`} className='w-60' />
							{hoveredImage === index + 4 && (
								<div className='absolute inset-0 flex items-center justify-center'>
									<img src={Logo} alt='logo' className='w-10 h-10' />
								</div>
							)}
						</div>
					))}
				</div>

				<div className='flex flex-col gap-6'>
					{desktop3.map((image, index) => (
						<div key={index + 8} className={`relative w-full`} onMouseEnter={() => handleImageHover(index + 8)} onMouseLeave={handleImageLeave}>
							<div className={`absolute inset-0 bg-black ${hoveredImage === index + 8 ? 'opacity-80' : 'opacity-0'} transition-opacity duration-300`} />
							<img src={image} alt={`work-${index + 9}`} className='w-60' />
							{hoveredImage === index + 8 && (
								<div className='absolute inset-0 flex items-center justify-center'>
									<img src={Logo} alt='logo' className='w-10 h-10' />
								</div>
							)}
						</div>
					))}
				</div>
				<div className='flex flex-col gap-6'>
					{desktop4.map((image, index) => (
						<div key={index + 12} className={`relative w-full`} onMouseEnter={() => handleImageHover(index + 12)} onMouseLeave={handleImageLeave}>
							<div className={`absolute inset-0 bg-black ${hoveredImage === index + 12 ? 'opacity-80' : 'opacity-0'} transition-opacity duration-300`} />
							<img src={image} alt={`work-${index + 13}`} className='w-60' />
							{hoveredImage === index + 12 && (
								<div className='absolute inset-0 flex items-center justify-center'>
									<img src={Logo} alt='logo' className='w-10 h-10' />
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Tampilan mobile */}
			<div className='md:hidden flex gap-4'>
				<div className='flex flex-col gap-4'>
					{firstRowImages.map((image, index) => (
						<div key={index} className={`relative w-full`} onMouseEnter={() => handleImageHover(index)} onMouseLeave={handleImageLeave}>
							<div className={`absolute inset-0 bg-black ${hoveredImage === index ? 'opacity-80' : 'opacity-0'} transition-opacity duration-300`} />
							<img src={image} alt={`work-${index + 1}`} className='w-full' />
							{hoveredImage === index && (
								<div className='absolute inset-0 flex items-center justify-center'>
									<img src={Logo} alt='logo' className='w-10 h-10' />
								</div>
							)}
						</div>
					))}
				</div>
				<div className='flex flex-col gap-4'>
					{secondRowImages.map((image, index) => (
						<div key={index} className={`relative w-full`} onMouseEnter={() => handleImageHover(index + 4)} onMouseLeave={handleImageLeave}>
							<div className={`absolute inset-0 bg-black ${hoveredImage === index + 4 ? 'opacity-80' : 'opacity-0'} transition-opacity duration-300`} />
							<img src={image} alt={`work-${index + 5}`} className='w-full' />
							{hoveredImage === index + 4 && (
								<div className='absolute inset-0 flex items-center justify-center'>
									<img src={Logo} alt='logo' className='w-10 h-10' />
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
