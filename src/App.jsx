import { Routes, Route } from 'react-router-dom'
import ButtonGradient from "./assets/svg/ButtonGradient"

// Components
import Header from "./components/Header"
import Footer from "./components/Footer"

// Pages
import MainPage from "./pages/MainPage"

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        {/* Only change page content - leave header and footer intact for all routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<MainPage />} />
        </Routes>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
