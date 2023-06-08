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
			<body className={clsx(inter.className, 'bg-gray-950','text-gray-200')}>
				<NavBar />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
