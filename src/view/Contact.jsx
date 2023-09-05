import { LuArrowUpRight, LuArrowRight } from 'react-icons/lu';
import ContactImg from '../assets/contact.png';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = ({ language }) => {
	const form = useRef();
	const [formData, setFormData] = useState({
		user_name: '',
		user_email: '',
		subject: '',
		message: '',
	});

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_kz410ss', 'template_ns306g9', form.current, '8Cgjv2UaZR905nki0').then(
			(result) => {
				console.log(result.text);
				setFormData({
					user_name: '',
					user_email: '',
					subject: '',
					message: '',
				});
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
	Contact.propTypes = {
		language: PropTypes.bool.isRequired,
	};

	return (
		<div id='contact' className='bg-white pb-8 '>
			<div className='md:hidden flex flex-col justify-center items-center gap-6 p-6'>
				<div className='flex items-center jus gap-2 text-base text-primary-500 font-jakarta justify-center w-full'>
					{language ? <h3>Contact Us</h3> : <h3>Hubungi Kami</h3>}

					<LuArrowUpRight size={'1.5em'} />
				</div>

				<div className='flex flex-col gap-6'>
					{language ? (
						<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>
							Let&apos;s Create Digital Magic{' '}
							<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
								<span className='font-playfair  text-primary-500 italic'>Together</span>
							</ScrollAnimation>{' '}
						</h1>
					) : (
						<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>Mari kita gapai kesuksesan bersama</h1>
					)}
				</div>

				<div className='w-full'>
					<img src={ContactImg} alt='contact us' className='w-full' />
				</div>

				<form className='flex flex-col w-full gap-y-3 ' ref={form} onSubmit={sendEmail}>
					<div className='flex flex-col gap-y-1 '>
						{language ? <p className='font-semibold text-base text-gray-900 text-balance text-start'>Name</p> : <p className='font-semibold text-base text-gray-900 text-balance text-start'>Nama</p>}
						{language ? (
							<input
								className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
								placeholder='Your Name'
								type='text'
								name='user_name'
								value={formData.user_name}
								onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
							/>
						) : (
							<input
								className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
								placeholder='Nama Anda'
								type='text'
								name='user_name'
								value={formData.user_name}
								onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
							/>
						)}
					</div>
					<div className='flex flex-col gap-y-1 '>
						{language ? <p className='font-semibold text-base text-gray-900 text-balance text-start'>Email</p> : <p className='font-semibold text-base text-gray-900 text-balance text-start'>Email</p>}
						{language ? (
							<input
								className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
								placeholder='Type your email'
								type='email'
								name='user_email'
								value={formData.user_email}
								onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
							/>
						) : (
							<input
								className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
								placeholder='Masukkan email anda'
								type='email'
								name='user_email'
								value={formData.user_email}
								onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
							/>
						)}
					</div>
					<div className='flex flex-col gap-y-1 '>
						{language ? (
							<p className='font-semibold text-base text-gray-900 text-balance text-start'>Subject</p>
						) : (
							<p className='font-semibold text-base text-gray-900 text-balance text-start'>Subjek</p>
						)}
						{language ? (
							<input
								className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
								placeholder='Email subject'
								type='text'
								name='subject'
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
							/>
						) : (
							<input
								className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
								placeholder='Subjek email'
								type='text'
								name='subject'
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
							/>
						)}
					</div>
					<div className='flex flex-col gap-y-1 '>
						{language ? (
							<p className='font-semibold text-base text-gray-900 text-balance text-start'>Message</p>
						) : (
							<p className='font-semibold text-base text-gray-900 text-balance text-start'>Pesan</p>
						)}
						{language ? (
							<textarea
								className='w-full h-28 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
								placeholder='Type your message'
								name='message'
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							></textarea>
						) : (
							<textarea
								className='w-full h-28 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
								placeholder='Tulis pesan anda'
								name='message'
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
							></textarea>
						)}
					</div>

					<button type='submit' className='bg-primary-500 w-1/2 h-14 mt-4 flex text-white font-jakarta font-bold gap-x-3 items-center justify-center rounded-xl self-end'>
						{language ? <p>Work with us</p> : <p>Hubungi Kami</p>}

						<LuArrowRight size={'1.5em'} />
					</button>
				</form>
			</div>

			{/* Untuk tampilan desktop */}
			<div className='hidden md:flex flex-col justify-center px-28 py-16 gap-y-16 '>
				<div className='flex flex-col gap-y-6'>
					<div className='flex items-center jus gap-2 text-xl text-primary-500 font-jakarta justify-center w-full'>
						{language ? <h3>Contact Us</h3> : <h3>Hubungi Kami</h3>}
						<LuArrowUpRight size={'1.5em'} />
					</div>

					<div className='flex flex-col gap-6 px-64'>
						{language ? (
							<h1 className='font-bold text-6xl text-gray-900 text-balance text-center'>
								Let&apos;s Create Digital Magic{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Together</span>
								</ScrollAnimation>{' '}
							</h1>
						) : (
							<h1 className='font-bold text-6xl text-gray-900 text-balance text-center'>Mari kita gapai kesuksesan bersama</h1>
						)}
					</div>
				</div>

				<div className='hidden md:flex flex-row justify-center items-center gap-x-14 p-6'>
					<div className='w-full'>
						<img src={ContactImg} alt='contact us' className='w-full' />
					</div>

					<form className='flex flex-col w-full gap-y-3 ' ref={form} onSubmit={sendEmail}>
						<div className='flex flex-col gap-y-1 '>
							{language ? <p className='font-semibold text-base text-gray-900 text-balance text-start'>Name</p> : <p className='font-semibold text-base text-gray-900 text-balance text-start'>Nama</p>}
							{language ? (
								<input
									className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
									placeholder='Your Name'
									type='text'
									name='user_name'
									value={formData.user_name}
									onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
								/>
							) : (
								<input
									className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
									placeholder='Nama Anda'
									type='text'
									name='user_name'
									value={formData.user_name}
									onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
								/>
							)}
						</div>
						<div className='flex flex-col gap-y-1 '>
							{language ? (
								<p className='font-semibold text-base text-gray-900 text-balance text-start'>Email</p>
							) : (
								<p className='font-semibold text-base text-gray-900 text-balance text-start'>Email</p>
							)}
							{language ? (
								<input
									className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
									placeholder='Type your email'
									type='email'
									name='user_email'
									value={formData.user_email}
									onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
								/>
							) : (
								<input
									className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
									placeholder='Masukkan email anda'
									type='email'
									name='user_email'
									value={formData.user_email}
									onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
								/>
							)}
						</div>
						<div className='flex flex-col gap-y-1 '>
							{language ? (
								<p className='font-semibold text-base text-gray-900 text-balance text-start'>Subject</p>
							) : (
								<p className='font-semibold text-base text-gray-900 text-balance text-start'>Subjek</p>
							)}
							{language ? (
								<input
									className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
									placeholder='Email subject'
									type='text'
									name='subject'
									value={formData.subject}
									onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								/>
							) : (
								<input
									className='w-full h-8 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm '
									placeholder='Subjek email'
									type='text'
									name='subject'
									value={formData.subject}
									onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								/>
							)}
						</div>

						<div className='flex flex-col gap-y-1 '>
							{language ? (
								<p className='font-semibold text-base text-gray-900 text-balance text-start'>Message</p>
							) : (
								<p className='font-semibold text-base text-gray-900 text-balance text-start'>Pesan</p>
							)}
							{language ? (
								<textarea
									className='w-full h-28 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
									placeholder='Type your message'
									name='message'
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								></textarea>
							) : (
								<textarea
									className='w-full h-28 border-2 rounded-xl p-5 placeholder:font-jakarta placeholder:text-sm'
									placeholder='Tulis pesan anda'
									name='message'
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								></textarea>
							)}
						</div>

						<button type='submit' className='bg-primary-500 w-1/2 h-14 mt-4 flex text-white font-jakarta font-bold gap-x-3 items-center justify-center rounded-xl self-end'>
							{language ? <p>Work with us</p> : <p>Hubungi Kami</p>}
							<LuArrowRight size={'1.5em'} />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
