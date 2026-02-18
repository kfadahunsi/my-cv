import type { ProjectProps } from "@/lib/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const siteInfo = [
  {
    title: "Website 1",
    link: "website1.com",
    description: "Nunc dictum mattis tincidunt. Maecenas venenatis nisi sit amet venenatis tristique. Donec quis laoreet ipsum, vel tempus dolor.",
    image: "landscape-placeholder.svg",
  },
  {
    title: "Website 2",
    link: "website2.com",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada nunc sit amet urna blandit lacinia.",
    image: "landscape-placeholder.svg",
  },
  {
    title: "Website 3",
    link: "website3.com",
    description: "Quisque ac blandit nibh. Sed ut gravida nunc, non molestie lectus. Pellentesque at sem nulla.",
    image: "landscape-placeholder.svg",
  },
]
export default function Projects({projRef}: ProjectProps) {
  return (
    <div className="w-11/12 flex flex-col justify-center mb-10" ref={projRef}>
      <h2>Projects</h2>
      {siteInfo.map((site)=>(
        <Card key={site.title} className="mb-1.5">
          <CardHeader>
            <CardTitle>{site.title}</CardTitle>
            <CardDescription>{site.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img className="w-12" src={site.image}/>
            <a className="cursor-pointer" href={site.link}>Visit {site.title}</a>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
