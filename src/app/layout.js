
// import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Sidenavbar from '@/components/sidebar/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vincent Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    {
    }
    <head />
      <body >
        {/* <Navbar/> */}
        <Sidenavbar/>
       <main className="sm:ml-64">
        {children}
      </main>
      </body>
    </html>
  )
}
