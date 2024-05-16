import { Routes, Route } from "react-router-dom"

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"

import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage/HomePage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import Error404 from "./pages/Error404/Error404"
import ProductsPage from "./pages/ProductsPage/ProductsPage"

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
            element={<RegisterPage/>}
          />
          <Route
            path="/error404"
            element={<Error404/>}
          />
          <Route
            path="/about-us"
            element={ 
              <AboutUsPage/>
            }
          />
          <Route 
            path="/products"
            element={<ProductsPage/>}
          />
        </Routes>
      </SignedIn>
    </>
  )
}

export default App
