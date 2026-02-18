import { Eye, Mail } from "lucide-react";
import { Button } from "./ui/button";
import type { IntroProps } from "@/lib/types";


export default function Intro({projRef, contactRef}: IntroProps) {
  function handleClickedProject(){
    projRef.current?.scrollIntoView({
      behavior: "smooth", 
      block: "start",
    })
  }

  function handleClickedContact(){
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <div className="flex flex-col items-center my-10">
      <p className="w-11/12 text-center">Hi, I'm Kevwe, a Frontend Developer. I build fast, scalable web applications.   </p>
      <div className="w-4/6 flex flex-row justify-between mt-3">
        <Button className="cursor-pointer" size={"sm"} onClick={handleClickedProject}>View Projects <Eye/></Button>
        <Button className="cursor-pointer" size={"sm"} variant={"secondary"} onClick={handleClickedContact}>Get in Touch <Mail/></Button>
      </div>
    </div>
  )
}
