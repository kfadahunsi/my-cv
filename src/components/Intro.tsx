import { Eye, Mail } from "lucide-react";
import { Button } from "./ui/button";


export default function Intro() {
  return (
    <div className="flex flex-col items-center">
        <p className="w-11/12 ali">Early-career developer with hands-on experience in Python, data science, and front-end. 
          Passionate about solving problems and learning by doing</p>
      <div className="w-4/6 flex flex-row justify-between mt-3">
        <Button size={"sm"}>View Projects <Eye/></Button>
        <Button size={"sm"} variant={"secondary"}>Get in Touch <Mail/></Button>
      </div>
    </div>
  )
}
