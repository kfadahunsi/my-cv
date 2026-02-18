//import About from "./components/About"
import { useRef } from "react"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ContactForm from "./components/ContactForm"


function App() {
  const projectRef = useRef<null|HTMLDivElement>(null)
  const contactRef = useRef<null|HTMLDivElement>(null)

  return (
    <div className="h-screen flex flex-col justify-around items-center overflow-y-auto pt-1">
      <Header/>
      <Intro projRef={projectRef} contactRef={contactRef}/>
      {/* <About/> */}
      <Skills/>
      <Projects projRef={projectRef}/>
      <Contact contactRef={contactRef}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
