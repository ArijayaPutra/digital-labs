import { LuArrowUpRight, LuArrowRight } from 'react-icons/lu';
import ContactImg from '../assets/contact.png';

const Contact = () => {
	return (
		<div className='bg-white pb-8 '>
			<div className='flex flex-col justify-center items-center gap-6 p-6'>
				<div className='flex items-center jus gap-2 text-base text-primary-500 font-jakarta justify-center w-full'>
					<h3>Contact Us</h3>
					<LuArrowUpRight size={'1.5em'} />
				</div>

				<div className='flex flex-col gap-6'>
					<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>
						Let&apos;s Create Digital Magic <span className='font-playfair text-primary-500 italic'>Together</span>
					</h1>
				</div>

				<div className='w-full'>
					<img src={ContactImg} alt='contact us' className='w-full' />
				</div>

				<div className='flex flex-col w-full gap-y-3 '>
					<div className='flex flex-col gap-y-1 '>
						<p className='font-semibold text-base text-gray-900 text-balance text-start'>Name</p>
						<input className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm' placeholder='Your Name' />
					</div>
					<div className='flex flex-col gap-y-1 '>
						<p className='font-semibold text-base text-gray-900 text-balance text-start'>Email</p>
						<input className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm ' placeholder='Type your email' />
					</div>
					<div className='flex flex-col gap-y-1 '>
						<p className='font-semibold text-base text-gray-900 text-balance text-start'>Message</p>
						<textarea className='w-full h-28 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm' placeholder='Type your message'></textarea>
					</div>

					<button className='bg-primary-500 w-1/2 h-14 mt-4 flex text-white font-jakarta font-bold gap-x-3 items-center justify-center rounded-xl self-end'>
						Work with us
						<LuArrowRight size={'1.5em'} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
