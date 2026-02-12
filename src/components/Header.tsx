import Intro from "./Intro";
//import "../../public/kev corporate.png" 

export default function Header() {
  return (
    <header>
        <h1>Kevwe Fadahunsi Portfolio</h1>
        <img className="h-36" src="../../public/kev corporate.png" alt="kevwe profile"/>
        <Intro/>
    </header>
  )
}
