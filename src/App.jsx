import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/about'
import Founders from './components/Founders/Founders'
import HowTo from './components/HowTo/HowTo'
import Advantages from './components/Advantages/Advantages'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Founders />
                <HowTo />
                <Advantages />
                <Contact />
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
