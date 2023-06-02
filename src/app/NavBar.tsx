'use client'
import { useState } from 'react';
import Link from 'next/link';
import { BsFillPersonFill, BsFillMotherboardFill, BsFillChatLeftTextFill, BsRobot } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCodeSlashSharp } from "react-icons/io5";

export default function NavBar() {
	const [navMobileOpen, setNavMobileOpen] = useState(false);

	return (
		<nav className='fixed top-0 left-0 w-screen flex justify-between h-20'>
			<Link href='#' className='px-7 h-20 text-2xl font-medium leading-[5rem]'>
				<div className='inline-block align-middle'>
					Fadil Eledath
				</div>
			</Link>
			<button onClick={()=>setNavMobileOpen(!navMobileOpen)} type="button" className="inline-flex items-center px-3 h-20 sm:hidden duration-200 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700">
				<span className="sr-only">Open main menu</span>
				<GiHamburgerMenu className='text-xl' />
			</button>
			<ul className={`list-none sm:block max-sm:fixed max-sm: ${navMobileOpen ? 'right-0' : '-right-full'} max-sm:top-20 max-sm:h-screen max-sm:bg-slate-200 duration-300`}>
				<NavItem label="" link="#about" icon={<BsFillPersonFill />} />
				<NavItem label="" link="#contact" icon={<BsFillChatLeftTextFill />} />
				<NavItem label="" link="#electronics" icon={<BsFillMotherboardFill />} />
				<NavItem label="" link="#ai" icon={<BsRobot />} />
				<NavItem label="" link="#software" icon={<IoCodeSlashSharp />} />
			</ul>
		</nav>
	)
}

function NavItem (
	{
		label,
		link,
		icon,
	}: {
		label: string;
		link: string;
		icon: any;
	}) {
	return (
		<Link href={link} className='mx-1'>
			<li className={`text-lg sm:inline-block px-6 h-20 leading-[5rem] text-zinc-300 hover:text-zinc-50 duration-200`}>
				<span className='inline-block relative top-0.5 pr-1'>{icon}</span>
				<span>{label}</span>
			</li>
		</Link>
	)
}