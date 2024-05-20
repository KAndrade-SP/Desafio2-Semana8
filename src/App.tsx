import { Routes, Route } from "react-router-dom"

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"

import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage/HomePage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import PlantsFormPage from "./pages/PlantsFormPage/PlantsFormPage"
import Error404 from "./pages/Error404/Error404"
import Footer from "./components/Footer"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ListaProdutos from "./pages/ProductsPage/ListaProdutos"
import DetalheProduto from "./pages/ProductsPage/DetalheProduto"

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <SignedOut>
        <SignInButton>
          <div className="flex justify-center items-center">
            <button className="h-14 w-40 bg-lunargreen text-almwhite font-inter-semibold my-6 lg:my-5 hover:bg-avacado transition-all">Sign in with clerk</button>
          </div>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={<HomePage/>}
          />
          <Route
            path="/register"
            element={<PlantsFormPage/>}
          />
          <Route
            path="/products"
            element={<ProductsPage/>}
          />
          <Route 
            path="/product/:id"
            element={
              <DetalheProduto />
            }
          />
          <Route
            path="/about-us"
            element={ 
              //<AboutUsPage/>
              <ListaProdutos />
            }
          />
          <Route
            path="*"
            element={<Error404/>}
          />
        </Routes>
        <Footer/>
        <ToastContainer />
      </SignedIn>
    </>
  )
}

export default App
