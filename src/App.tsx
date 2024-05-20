import { Routes, Route } from "react-router-dom"

import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"

import Navbar from './components/Navbar'
import { HomePage } from "./pages/HomePage"
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage"
import PlantsFormPage from "./pages/PlantsFormPage/PlantsFormPage"
import Error404 from "./pages/Error404/Error404"
import Footer from "./components/Footer"
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
            element={<PlantsFormPage/>}
          />
          <Route
            path="/error404"
            element={<Error404/>}
          />
          <Route
            path="/product/:id"
            element={<ProductsPage/>}
          />
          <Route
            path="/about-us"
            element={ 
              <AboutUsPage/>
            }
          />
        </Routes>

        <Footer />
      </SignedIn>
    </>
  )
}

export default App
