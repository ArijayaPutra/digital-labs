import { useState, useEffect } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import PropTypes from 'prop-types';
import Service1 from '../assets/service-1.jpg';
import Service2 from '../assets/service-2.jpg';
import Service3 from '../assets/service-3.jpg';
import Service4 from '../assets/service-4.jpg';
import Service5 from '../assets/service-5.jpg';
import Service6 from '../assets/service-6.jpg';
import Service7 from '../assets/service-7.jpg';
import Service8 from '../assets/service-8.jpg';
import Service9 from '../assets/service-9.jpg';
import Service10 from '../assets/service-10.jpg';

const ServiceCard = ({ image, description, title, language, judul, deskripsi }) => {
	return (
		<div className='h-full w-full bg-white p-2 flex flex-col gap-y-4 rounded-xl relative pb-4 '>
			<div className='h-[550px] overflow-hidden flex flex-col gap-y-4 hover:scroll to bottom '>
				<div className='hover:-translate-y-1/3 transition-transform ease-in-out duration-500 cursor-pointer pb-32 '>
					<img src={image} alt={`Service`} className='w-full' />
					{language ? (
						<div className='px-4 flex flex-col gap-2  '>
							<h3 className='font-playfair text-primary-500 italic font-semibold text-xl md:text-2xl mt-2 md:mt-2'>{title}</h3>
							<p className='text-md md:text-base text-gray-700 font-semibold'>{description}</p>
						</div>
					) : (
						<div className='px-4 flex flex-col gap-2  '>
							<h3 className='font-playfair text-primary-500 italic font-semibold text-xl md:text-2xl mt-2 md:mt-2'> {judul}</h3>
							<p className='text-md md:text-base text-gray-700 font-semibold'>{deskripsi}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	currentIndex: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	language: PropTypes.bool.isRequired,
	judul: PropTypes.string.isRequired,
	deskripsi: PropTypes.string.isRequired,
};

const ServiceCardCarousel = ({ language }) => {
	ServiceCardCarousel.propTypes = {
		language: PropTypes.bool.isRequired,
	};
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images = [Service1, Service2, Service3, Service4, Service5, Service6, Service7, Service8, Service9, Service10];
	const titles = [
		'Social Media',
		'Website, Digital Advertising & SEO',
		'Brand Identity & Journey',
		'Sentiment Analysis',
		'KOL & Affiliations',
		'UGC (User-Generated Content)',
		'Talent Management',
		'A.I, Blockchain Integration & Metaverse',
		'Brand Visualization',
		'Event Management',
	];
	const imageDescriptions = [
		'We manage and enhance your social media presence, utilizing strategic content, engagement, and analytics to drive brand awareness and customer engagement',
		'We create impactful websites, manage effective digital ad campaigns, and optimize your online presence through SEO strategies, driving traffic and conversions.',
		"We craft and guide your brand's unique story and identity, ensuring a compelling and consistent message across all touchpoints, fostering a deep connection with your audience.",
		'Through advanced analytics, we monitor and understand audience sentiment towards your brand, enabling responsive strategies that nurture positive perceptions.',
		"Leveraging Key Opinion Leaders (KOLs) and strategic affiliations, we broaden your brand's reach, credibility, and influence within your target communities, maximizing commercial conversions.",
		'We encourage and curate user-generated content that showcases genuine customer experiences, building trust and a sense of community around your brand.',
		'We identify and manage talents that align with your brand values, enabling you to collaborate with visible figures in the digital space who can authentically amplify your message.',
		'Embracing the future, we integrate AI, explore metaverse opportunities, and leverage blockchain technology to enhance customer experiences and operational efficiency.',
		'Our creative team brings your brand to life through captivating visuals encompassing logos, designs, and imagery that resonate with your target market.',
		"From concept to execution, we curate memorable events that align with your brand's essence, fostering meaningful interactions and memorable experiences.",
	];
	const juduls = [
		'Media Sosial',
		'Website, Digital Advertising & SEO',
		'Identitas Brand',
		'Analisis Sentimen Pasar',
		'KOL & Affiliations',
		'UGC (User-Generated Content)',
		'Manajemen Talent',
		'A.I, Blockchain Integration & Metaverse',
		'Visualisasi Brand',
		'Manajemen Acara',
	];
	const deskripsis = [
		'Melalui strategi media sosial yang sesuai dengan Brand Anda, kami mampu mengelola dan meningkatkan interaksi media sosial Anda, menggunakan konten strategis, dan analisis untuk meningkatkan kesadaran merek hingga loyalitas pelanggan.',
		'Kami membuat situs web yang berdampak, mengelola kampanye iklan digital yang efektif, dan mengoptimalkan kehadiran online Brand Anda melalui strategi SEO untuk meningkatkan lalu lintas dan konversi.',
		'Kami sadar bahwa setiap brand memiliki cerita unik tersendiri, maka kami dengan senang hati ingin menjadi bagian dalam proses pembentukan cerita dan identitas Brand Anda, memastikan setiap pesan bermakna dan konsisten di semua sudut, membangun hubungan yang mendalam dengan audiens Anda.',
		'Melalui analisis lanjutan, kami memantau dan memahami sentimen audiens terhadap Brand Anda, memungkinkan strategi responsif yang menumbuhkan persepsi positif',
		'Dengan memanfaatkan Key Opinion Leader (KOL) dan afiliasi strategis, kami memperluas jangkauan, kredibilitas, dan pengaruh Brand Anda dalam komunitas target Anda untuk memaksimalkan konversi komersial.',
		'Kami mendorong dan mengkurasi konten yang dihasilkan oleh pengguna yang menampilkan pengalaman pelanggan yang loyal dan membangun kepercayaan pada Brand Anda.',
		'Kami mengidentifikasi dan mengelola berbagai talenta berbakat yang sejalan dengan nilai-nilai Brand Anda, memungkinkan Anda berkolaborasi dengan tokoh di ruang digital yang otentik dan memperkuat pesan Brand Anda.',
		'Merangkul masa depan, kami mengintegrasikan A.I, mengeksplor peluang metaverse, dan memanfaatkan teknologi blockchain untuk meningkatkan pengalaman pelanggan dan efisiensi operasional',
		'Tim kreatif kami menghidupkan Brand Anda melalui visual yang menarik dan menggambarkan pesan Brand Anda, mulai dari logo, desain, hingga gambar yang resonan dengan pasar target Anda.',
		'Dari konsep hingga pelaksanaan, kami merancang acara berkesan yang sejalan dengan inti Brand Anda, memfasilitasi interaksi yang berarti dan pengalaman yang tak terlupakan.',
	];

	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePreviousImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};
	useEffect(() => {
		images.forEach((imageSrc) => {
			const img = new Image();
			img.src = imageSrc;
		});
	}, []);
	return (
		<div className='w-full mt-4'>
			{/* Tampilan desktop */}
			<div className='hidden md:flex flex-row gap-x-3 justify-center items-center'>
				<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
					<LuChevronLeft size={'2em'} />
				</button>
				<ServiceCard
					image={images[currentImageIndex]}
					description={imageDescriptions[currentImageIndex]}
					deskripsi={deskripsis[currentImageIndex]}
					currentIndex={currentImageIndex}
					title={titles[currentImageIndex]}
					judul={juduls[currentImageIndex]}
					language={language}
				/>
				<ServiceCard
					image={images[(currentImageIndex + 1) % images.length]}
					description={imageDescriptions[(currentImageIndex + 1) % images.length]}
					deskripsi={deskripsis[(currentImageIndex + 1) % images.length]}
					currentIndex={(currentImageIndex + 1) % images.length}
					title={titles[(currentImageIndex + 1) % images.length]}
					judul={juduls[(currentImageIndex + 1) % images.length]}
					language={language}
				/>
				<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
					<LuChevronRight size={'2em'} />
				</button>
			</div>

			{/* Tampilan mobile */}
			<div className='md:hidden'>
				<div className='w-full flex flex-row gap-x-3 mt-4 justify-center items-center '>
					<div className='flex items-center justify-center'>
						<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handlePreviousImage}>
							<LuChevronLeft size={'2em'} />
						</button>
					</div>
					<ServiceCard
						image={images[currentImageIndex]}
						currentIndex={currentImageIndex}
						title={titles[currentImageIndex]}
						description={imageDescriptions[currentImageIndex]}
						judul={juduls[currentImageIndex]}
						deskripsi={deskripsis[currentImageIndex]}
						language={language}
					/>
					<div className='flex items-center justify-center'>
						<button className='bg-white aspect-square rounded-full text-primary-500' onClick={handleNextImage}>
							<LuChevronRight size={'2em'} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCardCarousel;
