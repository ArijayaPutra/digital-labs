import logoWhite from '../assets/logo-white.png';
import { LuAlignJustify } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import '../index.css';

const Navbar = () => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const handleHover = (index) => {
		setHoveredItem(index);
	};

	return (
		<>
			<div className='flex justify-between items-center h-16 bg-gray-800 md:hidden'>
				<div className='absolute top-8 left-1/2 transform -translate-x-1/2'>
					<img src={logoWhite} alt='logo' className='h-10' />
				</div>
				<div className='cursor-pointer top-10 right-8 absolute'>
					<LuAlignJustify size={'1.5em'} onClick={toggleMenu} />
				</div>
				<div className={`menu-container ${menuOpen ? 'open' : ''} pb-6 pt-8`}>
					<ul className='py-2 font-jakarta text-base '>
						<li className='px-4 py-2'>
							<a href='#about'>About Us</a>
						</li>
						<li className='px-4 py-2'>
							<a href='#service'>Services</a>
						</li>
						<li className='px-4 py-2'>
							<a href='#work'>Our Works</a>
						</li>
						<li className='px-4 py-2'>
							<a href='#contact'>Contacts</a>
						</li>
					</ul>
					<IoClose size={'1.5em'} onClick={toggleMenu} className='absolute top-10 right-8' />
				</div>
			</div>

			<div className='hidden md:flex flex-row items-center justify-center '>
				<ul className='py-2 font-jakarta text-base flex gap-x-16 absolute top-8 left-1/2 transform -translate-x-1/2'>
					<li
						className={`px-4 py-2 cursor-pointer ${hoveredItem !== null && hoveredItem !== 0 ? 'opacity-50' : ''} ${hoveredItem === 0 ? 'opacity-100' : ''}`}
						onMouseEnter={() => handleHover(0)}
						onMouseLeave={() => handleHover(null)}
					>
						<a href='#home'>Home</a>
					</li>
					<li
						className={`px-4 py-2 cursor-pointer ${hoveredItem !== null && hoveredItem !== 1 ? 'opacity-50' : ''} ${hoveredItem === 1 ? 'opacity-100' : ''}`}
						onMouseEnter={() => handleHover(1)}
						onMouseLeave={() => handleHover(null)}
					>
						<a href='#about'>About Us</a>
					</li>
					<img src={logoWhite} alt='logo' className='h-10 cursor-pointer' />
					<li
						className={`px-4 py-2 cursor-pointer ${hoveredItem !== null && hoveredItem !== 2 ? 'opacity-50' : ''} ${hoveredItem === 2 ? 'opacity-100' : ''}`}
						onMouseEnter={() => handleHover(2)}
						onMouseLeave={() => handleHover(null)}
					>
						<a href='#contact'>Contacts</a>
					</li>
					<li
						className={`px-4 py-2 cursor-pointer ${hoveredItem !== null && hoveredItem !== 3 ? 'opacity-50' : ''} ${hoveredItem === 3 ? 'opacity-100' : ''}`}
						onMouseEnter={() => handleHover(3)}
						onMouseLeave={() => handleHover(null)}
					>
						<a href='#service'>Services</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
