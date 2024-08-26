import '@styles/global.css';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
// import Provider from '@components/Provider';

export const metadata = {
    title: "Car Rental Webpage",
    description: 'Rent a car anywhere  in Saudi'
}

// this layout will be wrapped around everything

const RootLayout = ({children}) => { 
  return (
    <html lang="en">
        <body>
          <header>
            <Navbar/>
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
        </body>
    </html>
  )
}

export default RootLayout;