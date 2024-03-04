import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header"
import Hero from './components/Hero'
import Benefits from "./components/Benefits"
import Collaboration from "./components/Collaboration"
import Services from "./components/Services"

const App = () => {
  return (
    <>
      {/* We have defined padding top because the header is fixed and we don't want it to overlap with the content */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
