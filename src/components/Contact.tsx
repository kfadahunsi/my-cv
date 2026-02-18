import { Mail, Link } from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";
import type { ContactProps } from "@/lib/types";

const contactInfo = [
    {
        method: "Email",
        link: "kfadahunsi@gmail.com",
        icon: <Mail/>,

    },
    {
        method: "LinkedIn",
        link: "linkedin.com/in/kfadahunsi",
        icon: <Link/>,

    },
    {
        method: "GitHub",
        link: "https://github.com/kfadahunsi",
        icon: <Link/>,

    },
]

export default function Contact({contactRef}: ContactProps) {
  return (
    <div className="w-11/12" ref={contactRef}>
        <h2>Get in Touch</h2>
        <Card>
            <CardTitle className="text-center">
                <h3>Contact information</h3>
            </CardTitle>
            <CardContent>
               {contactInfo.map((info)=>(
                <div key={info.method} className="flex items-center gap-4 mb-1.5">
                    {info.icon}
                    <a href={info.link} target="_blank">{info.link}</a>
                </div>
               ))} 
            </CardContent>
        </Card>
    </div>
  )
}
