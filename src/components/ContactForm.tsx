import {Card, CardContent, CardTitle,} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Send } from "lucide-react"
import {useFormik} from "formik"
import type { FormError } from "@/lib/types"

export default function ContactForm() {
  

  const formik = useFormik({
    initialValues:{
      name: "",
      email: "", 
      subject: "",
      message: "",
    },
    onSubmit: (values)=>{
      console.log("Form values: ", values)
    },
    validate: (values)=>{
      const errors:Partial<FormError> = {}

      if(!values.name){
        errors.name = "Required"
      }
      if(!values.email){
        errors.email = "Required"
      }
      else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email.trim())){
        errors.email = "Invalid email format"
      }
      
      if(!values.subject){
        errors.subject = "Required"
      }
      if(!values.message){ 
        errors.message = "Required"
      }
      return errors
    },
  })

 
  console.log("Errors: ", formik.errors)
  return (
    <div className="w-11/12 my-10">
      <Card>
        <CardTitle className="text-center">Send a Message</CardTitle>
        <CardContent>
          <form className="flex flex-col gap-2" onSubmit={formik.handleSubmit}>
            <Input name="name" type="text" placeholder="Name" value={formik.values.name} onChange={formik.handleChange}/>
            {formik.errors.name && <p className="text-red-600">{formik.errors.name}</p>}
            <Input name="email" type="email" placeholder="E-mail Address" value={formik.values.email} onChange={formik.handleChange}/>
            {formik.errors.email && <p className="text-red-600">{formik.errors.email}</p>}
            <Input name="subject" type="text" placeholder="Subject" value={formik.values.subject} onChange={formik.handleChange}/>
            {formik.errors.subject && <p className="text-red-600">{formik.errors.subject}</p>}
            <Textarea name="message" placeholder="Enter your message here" value={formik.values.message} onChange={formik.handleChange}/>
            {formik.errors.message && <p className="text-red-600">{formik.errors.message}</p>}
            <Button type="submit">Send <Send/></Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
