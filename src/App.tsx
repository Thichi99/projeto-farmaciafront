import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navBar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='min-h-[80vh]'>

        <Navbar />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
