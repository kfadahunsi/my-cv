import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu } from 'lucide-react';


export default function Header() {
  function handleMenu(){
    alert("Menu button clicked")
  }

  return (
    <header className="flex flex-row justify-between mt-1.5 border-2 border-black w-full">
      <div className="flex flex-row items-center">
        <Avatar className="ml-1.5" size="lg">
          <AvatarImage src="kev corporate.png" alt="kevwe profile"/>
          <AvatarFallback>KF</AvatarFallback>
        </Avatar>
        <h1 className="ml-3">Kevwe Fadahunsi</h1>
      </div>
      <div className="flex flex-row items-center">
        <Menu className="mr-3" onClick={handleMenu}/>
      </div>
    </header>
  )
}
