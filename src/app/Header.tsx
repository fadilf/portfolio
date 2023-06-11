'use client'
import { useEffect, useState, useRef } from 'react';
import clsx, { ClassArray, ClassDictionary } from 'clsx';
import Typed from 'typed.js';
import Link from 'next/link';

export default function Header() {

	// let imgClasses: string[] = [];
	let imgElem = useRef<HTMLDivElement>(null);
	let veilElem = useRef<HTMLDivElement>(null);
	let stylingsElem = useRef(null);
	let stylingParent = useRef<HTMLDivElement>(null);
	let interval = 10;

	const stylingsArr = [
`background-color: #27272a;`,
`\theight: 20rem;
\twidth: 28rem;`,
`\tborder-radius: 0.75rem;`,
`\tbox-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
\t            0 2px 4px -2px rgb(0 0 0 / 0.1);`,
`\ttransform: rotate(3deg);`,
`\tbackground: center / cover url('/<span id="gallery-files" class="font-bold text-gray-500"></span>');` 
	];
	let stylingsArrRepacked: string[] = [];

	for (let i = 0; i < stylingsArr.length; i++) {
		stylingsArrRepacked.push(stylingsArr.slice(0, i + 1).join('\n'));
	}
	useEffect(() => {
		const typed = new Typed(stylingsElem.current, {
			strings: stylingsArrRepacked,
			typeSpeed: interval,
			onStringTyped: (arrayPos, self) => {
				if(imgElem.current != null) {
					switch (arrayPos) {
						case 1:
							imgElem.current.style.height = "20rem";
							imgElem.current.style.width = "28rem";
							if (veilElem.current != null) {
								veilElem.current.style.marginLeft = "5rem";
							}
							document.querySelectorAll<HTMLElement>('.veil-bg').forEach((elem) => {
								elem.style.width = "28rem";
							});
							document.querySelectorAll<HTMLElement>('.dotted-bg').forEach((elem) => {
								elem.style.animation = "900ms ease-in-out 300ms 1 normal forwards running search";
								elem.style.width = "28rem";
							});
							break;
						case 2:
							imgElem.current.style.borderRadius = "0.75rem";
							break;
						case 3:
							if (veilElem.current != null)
								veilElem.current.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
							break;
						case 4:
							if (veilElem.current != null)
								veilElem.current.style.transform = "rotate(3deg)";
								document.querySelectorAll<HTMLElement>('.dotted-bg').forEach((elem) => {
									elem.style.transform = "rotate(-6deg) scale(2)";
								});
							imgElem.current.style.backgroundImage = "url('/a_decade_of_experience.jpg')";
							break;
						case 5:
							setTimeout(function(){
								if (stylingParent.current != null) {
									let cursor = stylingParent.current.querySelector<HTMLElement>('.typed-cursor');
									if (cursor != null) {
										cursor.style.display = "none";
									}
								}
								startGallery();
							}, 500);
							break;
					}
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
					if (imgElem.current != null) {
						switch (arrayPos) {
							case 0:
								imgElem.current.style.backgroundImage = "url('/a_decade_of_experience.jpg')";
								break;
							case 1:
								imgElem.current.style.backgroundImage = "url('/pre_grad.jpg')";
								break;
							case 2:
								imgElem.current.style.backgroundImage = "url('/rice_class_of_2023.jpg')";
								break;
						}
						imgElem.current.style.opacity = "1";
					}
					setTimeout(function(){
						if (imgElem.current != null) {
							imgElem.current.style.opacity = "0";
						}
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
			<div className='flex justify-center items-center'>
				<div ref={stylingParent} className='max-w-xl text-center relative z-10'>
					<h1 className='text-7xl font-semibold text-gray-50'>Hi, I'm Fadil!</h1>
					<p className='my-5'>
						Developer of things that are novel and practical, physical and digital, at every level of abstraction. Currently working at DMC Inc.
					</p>
					<p>
						You can see my projects below and check out my <Link className='font-semibold' href="">CV</Link>, <Link className='font-semibold' href="https://github.com/fadilf/">GitHub</Link>, and <Link className='font-semibold' href="">LinkedIn</Link>.
					</p>
					<div className={clsx(
						'inline-block bg-gray-900 min-w-[32rem] align-top',
						'm-3 px-4 py-3 border-2 border-gray-800 rounded-md',
						'text-left text-xs text-gray-600 font-mono whitespace-pre-wrap')
					}>
						<div>{`#header-image {`}</div>
						<div>    <span ref={stylingsElem}></span></div>
						<div>{'}'}</div>
					</div>
				</div>
				<div>
					<div className='duration-300' ref={veilElem}>
						<div className='dotted-bg bg-[url("/dotted.svg")] h-80 w-0 duration-300 -mb-80 relative scale-150 -rotate-3 shadow-[inset_#030712_0_0_4rem_4rem] -z-10 bg-[length:5rem]'></div>
						<div className='veil-bg bg-gray-900 rounded-xl h-80 w-0 duration-300 -mb-80'></div>
						<div ref={imgElem} className='duration-300 h-0 w-0 bg-center bg-cover opacity-0'></div>
					</div>
				</div>
			</div>
			<style>{`.typed-cursor.typed-cursor--blink{margin:0 -3.5px}`}</style>
        </header>
	)
}