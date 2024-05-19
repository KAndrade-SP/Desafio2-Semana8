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

function App() {

  return (
    <>
      <SignedOut>
        <SignInButton />
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
            path="/*"
            element={<Error404/>}
          />
        </Routes>

        <Footer/>
      </SignedIn>
    </>
  )
}

export default App
