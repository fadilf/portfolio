'use client'
import { useEffect, useState, useRef } from 'react';
import clsx, { ClassArray, ClassDictionary } from 'clsx';
import Typed from 'typed.js';
import Link from 'next/link';

export default function Header() {

	let nameElem = useRef<HTMLSpanElement>(null);
	let imgElem = useRef<HTMLDivElement>(null);
	let imgContainer = useRef<HTMLDivElement>(null);
	let veilElem = useRef<HTMLDivElement>(null);
	let dottedBg = useRef<HTMLDivElement>(null);
	let stylingsElem = useRef(null);
	let stylingParent = useRef<HTMLDivElement>(null);
	let interval = 5;

	const stylingsArr = [
`background-color: #27272a;`,
`\theight: 20rem;
\twidth: 28rem;`,
`\tborder-radius: 0.75rem;`,
`\ttransform: rotate(3deg);`,
`\tbackground: center / cover url('/<span id="gallery-files" class="font-bold text-gray-500"></span>');` 
	];
	let stylingsArrRepacked: string[] = [];

	for (let i = 0; i < stylingsArr.length; i++) {
		stylingsArrRepacked.push(stylingsArr.slice(0, i + 1).join('\n'));
	}
	useEffect(() => {
		nameElem.current!.style.backgroundPositionY = "-35.1rem";
		setTimeout(function(){
		}, 1000);
		const typed = new Typed(stylingsElem.current, {
			strings: stylingsArrRepacked,
			typeSpeed: interval,
			startDelay: 1700,
			onStringTyped: (arrayPos, self) => {
				switch (arrayPos) {
					case 1:
						imgElem.current!.style.height = "20rem";
						imgElem.current!.style.width = "28rem";
						imgContainer.current!.style.marginLeft = "5rem";
						veilElem.current!.style.width = "28rem";
						dottedBg.current!.style.animation = "1400ms ease-in-out 300ms 1 normal forwards running search, 2000ms ease-in-out 0s infinite alternate none running blurcycle";
						dottedBg.current!.style.width = "28rem";
						dottedBg.current!.style.background = "url('/dotted.svg'), radial-gradient(#2e2f1a, #030712)";
						dottedBg.current!.style.backgroundSize = "4.5rem, auto";
						break;
					case 2:
						imgElem.current!.style.borderRadius = "0.75rem";
						veilElem.current!.style.borderRadius = "0.75rem";
						imgContainer.current!.style.borderRadius = "0.75rem";
						break;
					case 3:
						imgContainer.current!.style.transform = "rotate(3deg)";
						dottedBg.current!.style.transform = "rotate(-6deg) scale(2)";
						imgElem.current!.style.backgroundImage = "url('/a_decade_of_experience.jpg')";
						break;
					case 4:
						setTimeout(function(){
							stylingParent.current!.querySelector<HTMLElement>('.typed-cursor')!.style.display = "none";
							startGallery();
						}, 500);
						break;
					}
			},
		});

		function startGallery() {
			const galleryType = new Typed('#gallery-files', {
				strings: [
					'^300experienced.jpg',
					'^300pre_grad.jpg',
					'^300class_of_2023.jpg',
				],
				typeSpeed: interval,
				loop: true,
				backDelay: 5000,
				backSpeed: 10,
				onStringTyped: (arrayPos, self) => {
					switch (arrayPos) {
						case 0:
							imgElem.current!.style.backgroundImage = "url('/a_decade_of_experience.jpg')";
							break;
						case 1:
							imgElem.current!.style.backgroundImage = "url('/pre_grad.jpg')";
							break;
						case 2:
							imgElem.current!.style.backgroundImage = "url('/rice_class_of_2023.jpg')";
							break;
					}
					imgElem.current!.style.opacity = "1";
					setTimeout(function(){
						imgElem.current!.style.opacity = "0";
					}, 5500)
					
					
				}
			});
		}
		return () => {
			typed.destroy();
		};
	}, []);

	return (
        <header id='about' className='flex min-h-screen min-h-[100svh] align-middle justify-center'>
			<div id="header-flex" className='flex justify-center items-center'>
				<div id="header-text" ref={stylingParent} className='max-w-xl relative z-10'>
					<h1 className='text-7xl font-semibold text-gray-50 tracking-tight'>Hi, I'm<span ref={nameElem} className={clsx(
						'inline-block', 'w-[22rem]', 'h-16', 'bg-cover', 'bg-[url(/name.svg)]', 'duration-[2000ms]', 'bg-[0_-1.35rem]', 'align-top', 'ml-[-0.45rem]'
					)}></span></h1>
					<div className='mt-1 mb-5'>
						<p className='my-1'>
							Developer of things that are novel and practical, physical and digital, at every level of abstraction. Currently working at DMC Inc.
						</p>
						<p className='my-1'>
							You can see my projects below and check out my <Link className='font-semibold' href="">CV</Link>, <Link target="_blank" className='font-semibold' href="https://github.com/fadilf/">GitHub</Link>, and <Link target="_blank" className='font-semibold' href="https://www.linkedin.com/in/fadileledath/">LinkedIn</Link>.
						</p>
					</div>
					<div id="code-block" className={clsx(
						'inline-block bg-gray-900 min-w-[32rem] align-top',
						'mt-4 px-4 py-3 border-2 border-gray-800 rounded-md',
						'text-left text-xs text-gray-600 font-mono whitespace-pre-wrap')
					}>
						<div>{`#header-image {`}</div>
						<div>    <span ref={stylingsElem}></span></div>
						<div>{'}'}</div>
					</div>
				</div>
				<div id="header-image">
					<div className='duration-300' ref={imgContainer}>
						<div ref={dottedBg} className='h-80 w-0 duration-300 -mb-80 relative scale-[2] -rotate-3 shadow-[inset_#030712_0_0_4rem_10rem] -z-10'></div>
						<div ref={veilElem} className='bg-gray-900 h-80 w-0 duration-300 -mb-80'></div>
						<div ref={imgElem} className='duration-300 h-0 w-0 bg-center bg-cover opacity-0'></div>
					</div>
				</div>
			</div>
			<style>{`.typed-cursor.typed-cursor--blink{margin:0 -3.5px}`}</style>
        </header>
	)
}