import Logo from '../assets/logo-hitam.png';
import Message from '../assets/footer-1.svg';
import Linkedin from '../assets/footer-2.svg';
import Instagram from '../assets/footer-3.svg';
import Whatsapp from '../assets/footer-4.svg';
import Tiktok from '../assets/footer-5.svg';
import PropTypes from 'prop-types';

const Footer = ({ language }) => {
	Footer.propTypes = {
		language: PropTypes.bool.isRequired,
	};
	return (
		<div className='bg-gray-50 pb-8'>
			<div className='md:hidden flex flex-col justify-center items-center gap-6 p-6'>
				<div className='flex flex-col items-center justify-center gap-y-6 w-64 mt-10'>
					<div className='flex flex-col items-center justify-center gap-4 text-grey-900 font-jakarta text-xl font-semibold'>
						<img src={Logo} alt='logo' className='w-10 h-10' />
						<h3>LS Digital Labs</h3>
					</div>
					<div className='flex flex-col items-center  text-center text-lg text-grey-500 font-jakarta '>
						{language ? <p>Being creative,</p> : <p>Bagian dari</p>}
						{language ? <p>Seek more opportunities</p> : <p>PT. LSA Digital Labs</p>}
					</div>
					<div className='flex items-center gap-4'>
						<a href='#'>
							<img src={Message} alt='Email' className='w-6 h-6' />
						</a>
						<a href='#'>
							<img src={Linkedin} alt='LinkedIn' className='w-6 h-6' />
						</a>
						<a href='#'>
							<img src={Instagram} alt='Instagram' className='w-6 h-6' />
						</a>
						<a href='#'>
							<img src={Whatsapp} alt='WhatsApp' className='w-6 h-6' />
						</a>
						<a href='#'>
							<img src={Tiktok} alt='TikTok' className='w-6 h-6' />
						</a>
					</div>

					<div className='flex flex-col gap-6 text-center text-grey-400 text-lg'>
						<p>© Hak Cipta LS Digital Labs Seluruh Hak Dilindungi</p>
					</div>
				</div>
			</div>

			{/* Untuk tampilan desktop */}
			<div className='hidden md:flex flex-col justify-center items-center px-28  '>
				<div className='flex flex-col justify-center items-center  '>
					<div className='flex flex-col items-center justify-center gap-y-10  mt-10'>
						<div className='flex flex-col items-center justify-center gap-4 text-grey-900 font-jakarta text-3xl font-semibold'>
							<img src={Logo} alt='logo' className='w-16 h-16' />
							<h3>LS Digital Labs</h3>
						</div>
						<div className='flex flex-col items-center  text-center text-xl text-grey-500 font-jakarta '>
							{language ? <p>Being creative,</p> : <p>Bagian dari</p>}
							{language ? <p>Seek more opportunities</p> : <p>PT. LSA Digital Labs</p>}
						</div>
						<div className='flex items-center gap-6'>
							<a href='#'>
								<img src={Message} alt='Email' className='w-8 h-8' />
							</a>
							<a href='#'>
								<img src={Linkedin} alt='LinkedIn' className='w-8 h-8' />
							</a>
							<a href='#'>
								<img src={Instagram} alt='Instagram' className='w-8 h-8' />
							</a>
							<a href='#'>
								<img src={Whatsapp} alt='WhatsApp' className='w-8 h-8' />
							</a>
							<a href='#'>
								<img src={Tiktok} alt='TikTok' className='w-8 h-8' />
							</a>
						</div>

						<div className='flex flex-col gap-6 text-center text-grey-400 text-xl'>
							<p>© Hak Cipta LS Digital Labs Seluruh Hak Dilindungi</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
