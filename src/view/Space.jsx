import { LuArrowUpRight } from 'react-icons/lu';
import SpaceCard from '../component/SpaceCard';
import ScrollAnimation from 'react-animate-on-scroll';
import { ParallaxBanner } from 'react-scroll-parallax';
import BgWhite from '../assets/bg-white.svg';
import PropTypes from 'prop-types';
import { LuArrowRight } from 'react-icons/lu';
const Space = ({ language }) => {
	Space.propTypes = {
		language: PropTypes.bool.isRequired,
	};
	return (
		<ParallaxBanner layers={[{ image: BgWhite, speed: -30 }]} className='bg-white mb-8  '>
			<div className='bg-white pb-8 '>
				<div className='md:hidden'>
					<div className='flex flex-col justify-center items-center gap-6 p-6'>
						<div className='flex z-50  items-center gap-2 text-base text-primary-500 font-jakarta'>
							{language ? <h3>Various Collaborations</h3> : <h3>Berbagai Kolaborasi</h3>}
							<LuArrowUpRight size={'1.5em'} />
						</div>

						<div className='flex flex-col gap-6 z-40 '>
							{language ? (
								<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>
									Legacy{' '}
									<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Space</span>
									</ScrollAnimation>
								</h1>
							) : (
								<h1 className='font-bold text-4xl text-gray-900 text-balance text-center'>
									<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
										<span className='font-playfair  text-primary-500 italic'>Ruang</span>
									</ScrollAnimation>{' '}
									Kolaborasi
								</h1>
							)}
						</div>
						<div className='w-full'>
							<SpaceCard />
						</div>
						<div className='flex items-center justify-center z-40'>
							<button className='bg-primary-500 w-64 h-14 flex text-xl text-white font-jakarta font-bold gap-x-3 mt-10 items-center justify-center rounded-xl'>
								<a href='https://wa.me/+6281326434621' className='flex'>
									{language ? <p>See more</p> : <p>Lihat Lebih Banyak</p>} <LuArrowRight size={'1.5em'} />
								</a>
							</button>
						</div>
						<div className='flex '>
							{language ? (
								<p className='font-jakarta text-[8px] z-40 text-justify'>
									At PT LSA Digital Labs, our founders and key personnel have a rich history of collaborating with various brands in different Industry Sector verticals as well as Agencies. With a
									strong track record of success, our key personnel have contributed to projects for renowned clients.We&apos;re proud to emphasize that all work completed by our Key Personnel during
									previous collaborations remain under their creative copyright, although on a case-to-case basis, the work may have been carried out for other Agencies and Entities. We are happy to
									share due credit with them and their references. We are committed to maintaining a transparent and respectful approach to intellectual property rights, whether it&apos;s on an
									individual basis, collaborative basis or contractual basis. As we embark on this new journey, we carry forward the same dedication to innovation, creativity, and practices that have
									defined our Key Personnel&apos;s previous accomplishments. In the same manner, we employ technology to ensure that internationally accepted views as well as standards on Creative
									Licenses, Copyrights and Intellectual Property Rights are not overlooked in our practices while we gainfully employ UGCs and Individual Creative Contents, on a day-to-day basis. We
									look forward to bringing our expertise and fresh perspectives to every project we undertake.
								</p>
							) : (
								<p className='font-jakarta text-[8px] z-40 text-justify'>
									Di PT LSA Digital Labs, pendiri dan personil kami kaya akan pengalaman yang mana berkolaborasi dengan berbagai merek di berbagai sektor industri vertikal serta Agensi. Dengan track
									record yang kuat keberhasilan, personil utama kami telah berkontribusi untuk proyek untuk klien terkenal. Kami bangga untuk menekankan bahwa semua pekerjaan yang diselesaikan oleh
									Personil Utama kami selama kolaborasi sebelumnya tetap di bawah hak cipta kreatif mereka, meskipun dari kasus ke kasus, pekerjaan mungkin telah dilakukan untuk Badan dan Entitas
									lain. Kami senang untuk berbagi penghargaan dengan mereka dan referensi mereka. Kami berkomitmen untuk menjaga transparan dan pendekatan yang penuh hormat terhadap hak kekayaan
									intelektual, baik itu secara individual, kolaboratif dasar atau dasar kontraktual. Saat kami memulai perjalanan baru ini, kami meneruskan dedikasi yang sama terhadap inovasi,
									kreativitas, dan praktik yang telah menentukan pencapaian Personil Utama kami sebelumnya. Dengan cara yang sama, kami menggunakan teknologi untuk memastikan bahwa pandangan yang
									diterima secara internasional serta standar tentang Lisensi Kreatif, Hak Cipta dan Hak Kekayaan Intelektual tidak diabaikan dalam praktik kami sementara kami menggunakan UGC dan
									Konten Kreatif Individu, sehari-hari. Kami berharap untuk membawa keahlian kami dan perspektif baru untuk setiap proyek yang kami lakukan.
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Untuk tampilan desktop */}
				<div className='hidden md:flex flex-col justify-center items-center px-28 py-16 gap-y-8 '>
					<div className='flex z-40 items-center gap-2 text-xl text-primary-500 font-jakarta'>
						{language ? <h3>Various Collaborations</h3> : <h3>Berbagai Kolaborasi</h3>}
						<LuArrowUpRight size={'1.5em'} />
					</div>
					<div className='flex flex-col gap-6 z-40 px-48'>
						{language ? (
							<h1 className='font-bold text-6xl text-gray-900 text-balance text-center'>
								Legacy{' '}
								<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Space</span>
								</ScrollAnimation>
							</h1>
						) : (
							<h1 className='font-bold text-6xl text-gray-900 text-balance text-center'>
								<ScrollAnimation animateIn='animate__fadeIn' className='inline-block'>
									<span className='font-playfair  text-primary-500 italic'>Ruang</span>
								</ScrollAnimation>{' '}
								Kolaborasi
							</h1>
						)}
					</div>
					<div className='w-full z-40'>
						<SpaceCard />
					</div>
					<div className='flex items-center justify-center z-40'>
						<button className='bg-primary-500 w-64 h-14 flex text-xl text-white font-jakarta font-bold gap-x-3 mt-10 items-center justify-center rounded-xl'>
							<a href='https://wa.me/+6281326434621' className='flex'>
								{language ? <p>See more</p> : <p>Lihat Lebih Banyak</p>} <LuArrowRight size={'1.5em'} />
							</a>
						</button>
					</div>
					<div className='flex '>
						{language ? (
							<p className='font-jakarta text-[8px] z-40 text-justify'>
								At PT LSA Digital Labs, our founders and key personnel have a rich history of collaborating with various brands in different Industry Sector verticals as well as Agencies. With a
								strong track record of success, our key personnel have contributed to projects for renowned clients.We&apos;re proud to emphasize that all work completed by our Key Personnel during
								previous collaborations remain under their creative copyright, although on a case-to-case basis, the work may have been carried out for other Agencies and Entities. We are happy to
								share due credit with them and their references. We are committed to maintaining a transparent and respectful approach to intellectual property rights, whether it&apos;s on an
								individual basis, collaborative basis or contractual basis. As we embark on this new journey, we carry forward the same dedication to innovation, creativity, and practices that have
								defined our Key Personnel&apos;s previous accomplishments. In the same manner, we employ technology to ensure that internationally accepted views as well as standards on Creative
								Licenses, Copyrights and Intellectual Property Rights are not overlooked in our practices while we gainfully employ UGCs and Individual Creative Contents, on a day-to-day basis. We
								look forward to bringing our expertise and fresh perspectives to every project we undertake.
							</p>
						) : (
							<p className='font-jakarta text-[8px] z-40 text-justify'>
								Di PT LSA Digital Labs, pendiri dan personil kami kaya akan pengalaman yang mana berkolaborasi dengan berbagai merek di berbagai sektor industri vertikal serta Agensi. Dengan track
								record yang kuat keberhasilan, personil utama kami telah berkontribusi untuk proyek untuk klien terkenal. Kami bangga untuk menekankan bahwa semua pekerjaan yang diselesaikan oleh
								Personil Utama kami selama kolaborasi sebelumnya tetap di bawah hak cipta kreatif mereka, meskipun dari kasus ke kasus, pekerjaan mungkin telah dilakukan untuk Badan dan Entitas lain.
								Kami senang untuk berbagi penghargaan dengan mereka dan referensi mereka. Kami berkomitmen untuk menjaga transparan dan pendekatan yang penuh hormat terhadap hak kekayaan intelektual,
								baik itu secara individual, kolaboratif dasar atau dasar kontraktual. Saat kami memulai perjalanan baru ini, kami meneruskan dedikasi yang sama terhadap inovasi, kreativitas, dan
								praktik yang telah menentukan pencapaian Personil Utama kami sebelumnya. Dengan cara yang sama, kami menggunakan teknologi untuk memastikan bahwa pandangan yang diterima secara
								internasional serta standar tentang Lisensi Kreatif, Hak Cipta dan Hak Kekayaan Intelektual tidak diabaikan dalam praktik kami sementara kami menggunakan UGC dan Konten Kreatif
								Individu, sehari-hari. Kami berharap untuk membawa keahlian kami dan perspektif baru untuk setiap proyek yang kami lakukan.
							</p>
						)}
					</div>
				</div>
			</div>
		</ParallaxBanner>
	);
};

export default Space;
