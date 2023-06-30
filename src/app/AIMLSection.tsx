import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import Robot from './Robot';
import ProjectCardList from './ProjectCard';

const AIMLItems = [
	{
		link: "",
		title: "Bill.com Receipt Challenge",
		doneFor: "Rice Datathon",
		timePeriod: [2023],
		extract: "",
		skills: ["php", "python"],
		image: "/thumbnails/bill.png",
	},
	{
		link: "",
		title: "Loan Default Prediction",
		doneFor: "SA Home Loans",
		timePeriod: [2020],
		extract: "I improved payment-method opt-out prediction for government worker home loan applicants in South Africa by analyzing data from 20,000 applicants with a veriety of models.",
		skills: ["php", "python"],
		image: "/thumbnails/sahl.jpg",
	},
	{
		link: "",
		title: "IPEDS Data Exploration",
		doneFor: "Personal",
		timePeriod: [2023],
		extract: "Discussions about college endowments prompted me to examine Rice’s priorities with spending its funds compared to its peers and the relation to U.S. News college rankings using scripts to collate and compare features from the IPEDS dataset.",
		skills: ["php", "python"],
		image: "/thumbnails/ipeds.png",
	},
	{
		link: "",
		title: "Rice Course Utilities",
		doneFor: "Personal",
		timePeriod: [2022],
		extract: "Frustrated by Rice’s slow and simple course catalog, I wrote a scraper, 2 powerful course browsers, and a tool to export course information from Rice’s platform to your calendar.",
		skills: ["php", "python"],
		image: "/thumbnails/courseutils.png",
	},
]

export default function AIMLSection() {

	let size = 30;
	let intensity = 1;
	let [positionX, positionY, positionZ] = [2, 10, 7];

	return (
		<section id="ai" className='project-section md:px-10'>
			<div className='max-w-5xl mx-auto'>
				<div id="robot-container" className='section-header-3d transition-hidden'>
					<Canvas camera={{ fov: 20, near: 0.1, far: 1000, position: [0, 0, 20] }}>
						<Suspense fallback={null}>
							<Robot scale={.75} position={[0, -2.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
							<rectAreaLight
								width={size}
								height={size}
								color="#9ca3af"
								intensity={intensity}
								position={[-positionX, positionY, positionZ]}
								castShadow
							/>
							<rectAreaLight
								width={size}
								height={size}
								color="#60a5fa"
								intensity={intensity}
								position={[positionX, positionY, positionZ]}
								castShadow
							/>
						</Suspense>
					</Canvas>
				</div>
				<div id='electronics-text'>
					<h2 className='text-6xl font-semibold mb-3 text-gray-50'>AI/ML/Data</h2>
					<h3 className='font-semibold mb-3 text-gray-50'>Parsers, pandas, and PyTorch</h3>
				</div>
			</div>
			<div className='project-set'>
				<ProjectCardList projectList={AIMLItems} seed={6} />
			</div>
		</section>
	);
}