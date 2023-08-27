import logoWhite from '../assets/logo-white.png';
import { LuAlignJustify } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import '../index.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
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
						<li className='px-4 py-2'>About Us</li>
						<li className='px-4 py-2'>Services</li>
						<li className='px-4 py-2'>Our Works</li>
						<li className='px-4 py-2'>Contacts</li>
					</ul>
					<IoClose size={'1.5em'} onClick={toggleMenu} className='absolute top-10 right-8' />
				</div>
			</div>

			<div className='hidden md:flex flex-row items-center justify-center '>
				<ul className='py-2 font-jakarta text-base flex gap-x-16 absolute top-8 left-1/2 transform -translate-x-1/2'>
					<li className='px-4 py-2 hover:underline cursor-pointer'>Home</li>
					<li className='px-4 py-2 hover:underline cursor-pointer'>About Us</li>
					<img src={logoWhite} alt='logo' className='h-10 cursor-pointer' />
					<li className='px-4 py-2 hover:underline cursor-pointer'>Contacts</li>
					<li className='px-4 py-2 hover:underline cursor-pointer'>Services</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
