import { Badge } from "./ui/badge"
import { Card, CardContent, CardTitle } from "./ui/card"

export default function Skills() {
  const skills = ["HTML", "CSS", "Javascript", "TypeScript", "React", "TailwindCSS", "shadcn", "Git", "GitHub", "Python", "sklearn", "pandas",]
  return (
    <div className="w-11/12 mb-10">
      <Card>
        <CardTitle className="ml-3">Skills</CardTitle>
        <CardContent className="flex flex-wrap gap-2">
          {skills.map((skill)=>(<Badge key={skill} variant={"secondary"}>{skill}</Badge>))}
        </CardContent>
      </Card>
    </div>
  )
}
