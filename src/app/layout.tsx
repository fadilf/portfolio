import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
// 	title: 'Create Next App',
// 	description: 'Generated by create next app',
// }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, 'bg-zinc-900 text-zinc-50')}>
				<NavBar />
				<main className='pt-14'>
					{children}
				</main>
			</body>
		</html>
	)
}
