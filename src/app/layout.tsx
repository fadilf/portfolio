import './globals.css'
import { Inter, IBM_Plex_Sans } from 'next/font/google'
import NavBar from './NavBar'
import clsx from 'clsx'

// const inter = Inter({ subsets: ['latin'] })
const ibmPlex = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['100', '400', '500', '600', '700']
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={clsx(ibmPlex.className, 'bg-gray-950','text-gray-300', 'font-normal', 'overflow-x-hidden')}>
				<NavBar />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
