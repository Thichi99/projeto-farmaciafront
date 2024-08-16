import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navBar/Navbar'
import Home from './pages/home/Home'
import ListCategories from './components/categories/listCategories/ListCategories'
import FormCategories from './components/categories/formCategories/FormCategories'
import DeletarCategories from './components/categories/deletarCategories/DeletarCategories'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/categories" element={<ListCategories />}></Route>
              <Route path="/createCategory" element={<FormCategories />}></Route>
              <Route path="/editCategory/:id" element={<FormCategories />}></Route>
              <Route path="/deleteCategory/:id" element={<DeletarCategories />}></Route>
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
