import ButtonGradient from "./assets/svg/ButtonGradient"
import Header from "./components/Header"
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      {/* We have defined padding top because the header is fixed and we don't want it to overlap with the content */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
