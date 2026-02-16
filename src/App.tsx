import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
  return (
    <div className="h-screen flex flex-col justify-around items-center overflow-y-auto">
      <Header/>
      <Intro/>
      {/* <About/> */}
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
