import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import LCD from './LCD'
import ProjectCardList from './ProjectCard';

const electronicsItems = [
	{
		link: "",
		title: "Silent Comms Device",
		doneFor: "Senior Design Project",
		timePeriod: [2022, 2023],
		extract: "Developed non-verbal, non-visual communication medium with silent switches, bone conduction, and haptic motors.",
		skills: ["ESP32", "LoRa", "EasyEDA", "PHP", "Python"],
		image: "/thumbnails/speakeasy.jpg",
	},
	{
		link: "",
		title: "IoT WFH Desk",
		doneFor: "Inner Space Interior Design",
		timePeriod: [2020],
		extract: "Conceptualized smart desk with adjustable height and lighting. Created prototype guts, companion app, management dashboard, and telemetry data processing pipeline.",
		skills: ["RPi", "Arduino", "AWS", "PHP", "Python"],
		image: "/thumbnails/hornbill.jpg",
	},
	{
		link: "",
		title: "Trashberry",
		doneFor: "Personal",
		timePeriod: [2016, 2022],
		extract: "Litter at natural attractions across India and an episode of 99PI inspired me to work on a reverse-vending machine which tracks and sorts waste using NFC.",
		skills: ["RPi", "Arduino", "PHP", "RobotC", "Python"],
		image: "/thumbnails/trashberry.jpg",
	},
	{
		link: "",
		title: "Space Mission Escape Room",
		doneFor: "Rice Escape Club",
		timePeriod: [2021, 2022],
		extract: "Oversaw several puzzles as Chief Electrical Engineer. ",
		skills: [],
		image: "/thumbnails/space.jpg",
	},
	{
		link: "",
		title: "Steam Tunnel Escape Room",
		doneFor: "Rice Escape Club",
		timePeriod: [2019, 2020],
		extract: "",
		skills: [],
		image: "/thumbnails/steam.jpg",
	},
	{
		link: "",
		title: "LED Visualizer",
		doneFor: "ELEC 327",
		timePeriod: [2022],
		extract: "",
		skills: [],
		image: "/thumbnails/visualizer.jpg",
	},
]

export default function ElectronicsSection() {
	
	let size = 20;
	let intensity = 6;
	let [positionX, positionY, positionZ] = [2, 10, 7];

	return (
		<section id="electronics" className='project-section md:px-10'>
			<div className='max-w-5xl mx-auto'>
				<div id="lcd-container" className='section-header-3d transition-hidden'>
					<Canvas camera={{ fov: 27, near: 0.1, far: 1000, position: [0, 0, 20] }}>
						<Suspense fallback={null}>
							<LCD scale={0.2} rotation={[0, -Math.PI / 2, 0]} />
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
					<h2 className='text-6xl font-semibold mb-3 text-gray-50'>Electronics</h2>
					<h3 className='font-semibold mb-3 text-gray-50'>Systems, signals, and solder</h3>
				</div>
			</div>
			<div className='project-set'>
				<ProjectCardList projectList={electronicsItems} seed={1} />
			</div>
		</section>
	);
}