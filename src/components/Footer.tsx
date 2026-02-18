
export default function Footer() {

  const date = new Date()

  return (
    <footer className="flex flex-col items-center text-xs">
        <p>© {date.getFullYear()} Kevwe Fadahunsi</p>
        <p>Built using React, TailwindCSS, Motion and shadcn</p>
    </footer>
  )
}
