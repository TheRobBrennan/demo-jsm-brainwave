import Section from "../components/Section"

const DemoPage = () => {
  return (<Section
    className="pt-[6rem] -mt-[6rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
  >
    <div className="container relative z-1 max-w-[62rem] mx-auto text-center align-top">
      Demo Page Content
    </div>
  </Section>
  )
}

export default DemoPage