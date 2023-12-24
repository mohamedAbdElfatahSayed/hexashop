import { Inter ,Montserrat} from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar/Navbar'
import Footer from '@/component/Footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
const inter = Inter({ subsets: ['latin'] })
const bodyFont = Montserrat({ 
  subsets: ['latin'] ,
  weight:['400']
})

export const metadata = {
  title: 'Hexa Shop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
                  <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>    

        </ThemeProvider>
      </body>
    </html>
  )
}
