import { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import PropTypes from 'prop-types';
import Service1 from '../assets/service-1.png';
import Service2 from '../assets/service-2.png';
import Service3 from '../assets/service-3.png';
import Service4 from '../assets/service-4.png';
import Service5 from '../assets/service-5.png';
import Service6 from '../assets/service-6.png';
import Service7 from '../assets/service-7.png';
import Service8 from '../assets/service-8.png';
import Service9 from '../assets/service-9.png';
import Service10 from '../assets/service-10.png';

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
		'Social Media Handling',
		'Web, Logo, NFTs, Ads, SEO',
		'Brand Journey',
		'Sentiment Analysis',
		'KOL and Affiliations',
		'User-Generated Content',
		'Artificial Intelligence',
		'Blockchain Integration and Metaverse',
		'Physical Brand Identity',
		'Event Management',
	];
	const imageDescriptions = [
		"In the dynamic realm of social media, LS Digital Labs pioneers your brand's symphony across platforms like Instagram, Facebook, YouTube, Twitter, TikTok, and beyond. Our holistic Social Media Management marries creativity, AI insights, and seamless integration. We craft captivating content, engage authentically, optimize ads, and ride trends. AI augments strategies, while offline-online synergy maximizes brand resonance. Guided by innovation, we orchestrate your brand's resonating melody, leaving a mark across dimensions.",
		"LS Digital Labs crafts captivating digital experiences that etch your brand's identity in the online world. Our experts excel in web creation, logo design, NFTs, digital ads, and SEO. From user-centric websites to artful logos, NFT treasures to laser-focused campaigns, we amplify your digital narrative with finesse and strategic brilliance.",
		"Unveiling the Brand Journey: From Conception to Impactful Legacy. The 'Brand Journey' encompasses a brand's evolution from inception to legacy. It starts with defining values and progresses through identity creation, product development, growth, and adaptation. Customer engagement, consistency, and navigating challenges play vital roles. This holistic path leads to lasting connections, trust, and a lasting impact on society.",
		'Sentiment Analysis Mastery: Shaping Strategies with Emotion Insights. At LS Digital Labs, we harness Sentiment Analysis to decode customer emotions and opinions, steering strategies towards brand success. Using advanced NLP and machine learning, we analyze text data from various sources, revealing how customers truly feel about your offerings. Our approach includes data collection, contextual analysis, and trend identification, all to empower you with profound insights for enhancing customer experiences, content strategies, crisis management, and more. With LS Digital Labs, your strategies are guided by emotional intelligence, fostering lasting success.',
		"Influencer Power Unleashed: LS Digital Labs' Strategic Collaborations. LS Digital Labs transforms brand visibility through influencer collaborations and affiliations. We identify KOLs aligned with your values, fostering authentic connections that yield engaging content and elevated brand loyalty. Our AI-driven approach employs advanced algorithms to sift through potential partners, ensuring precision and relevance. Data-driven insights fuel impactful partnerships, expanding reach, engagement, and conversions. LS Digital Labs redefines collaboration with data-backed finesse, paving the way for strategic digital growth.",
		'Elevating Brands with User-Generated Content (UGC) Dynamics. At LS Digital Labs, UGC is harnessed to forge authentic connections. From brand advocacy and curated campaigns to product showcases and influencer collaborations, our expertise amplifies brand influence. We strategically deploy UGC across platforms, enriching social media, client channels, sales funnels, and omni-channel narratives. Through data-driven insights and tailored content, LS Digital Labs transforms UGC into a powerful storytelling tool that resonates widely.',
		"AI Integration: Powering Precision and Success at LS Digital Labs. AI is a cornerstone of LS Digital Labs' modern brand management. By leveraging AI-driven insights, we decode audience preferences, personalize experiences, analyze real-time data, and predict trends. From influencer matching to sentiment analysis, AI optimizes strategies. We use AI-powered chatbots, predictive analytics, content generation, and more to elevate every aspect of your brand journey. At LS Digital Labs, AI isn't about replacing creativity, but enhancing it for unparalleled results.",
		"Revolutionizing Brand Engagement: Blockchain and Metaverse Fusion. LS Digital Labs pioneers the fusion of blockchain and the metaverse, reshaping brand-consumer dynamics. Blockchain ensures data security, transparency, and tokenized loyalty programs. Content creators and influencers receive fair rewards via smart contracts. In the metaverse, immersive experiences and virtual commerce redefine engagement. This journey signifies LS Digital Labs' commitment to innovation, trust, and authentic brand interactions.",
		"Transcending Boundaries: LS Digital Labs' Brand Identity Mastery. Navigate the convergence of digital and physical realms with LS Digital Labs. Crafting immersive first impressions, captivating packaging, and tactile marketing tools, we orchestrate a synchronized symphony of brand identity that resonates. From stationery to billboards, we transform pixels into tangible narratives that leave lasting imprints on every touchpoint",
		"Elevating Real-World Brand Journeys: LS Digital Labs' Event Mastery. Dive into seamless Event Management with LS Digital Labs. Replicating digital success in the physical world, we craft immersive brand experiences that resonate. From strategic content curation to flawless logistics, our holistic approach ensures unforgettable moments that bring your brand's narrative to life, leaving indelible impressions on your audience.",
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
