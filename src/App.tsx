import { Routes, Route } from "react-router-dom"

import './App.css'

import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={<HomePage/>}
        />
        <Route
          path="/register"
          element={<RegisterPage/>}
        />
        <Route
          path="/products"
          element={<ProductsPage/>}
        />
        <Route
          path="/about-us"
          element={ 
            <AboutUsPage/>
          }
        />
      </Routes>
    </>
  )
}

export default App
