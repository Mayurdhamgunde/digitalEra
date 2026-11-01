import { useState } from 'react'
import { author } from '../data/books'
const links = [['#home', 'मुख्यपृष्ठ · Home'], ['#books', 'ग्रंथ · Books'], ['#recognition', 'सन्मान · Recognition'], ['#about', 'परिचय · About']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9b867]/50 bg-[#fbf5e6]/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-head flex items-center gap-2 text-lg leading-tight text-[#8a3b0c] sm:text-xl"><svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 shrink-0 text-[#c2570c]" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 6c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14" /></svg>{author.marathi}</a>
        <button aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-md border border-[#d9b867] text-2xl text-[#8a3b0c] md:hidden">{open ? '✕' : '☰'}</button>
        <ul id="menu" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col border-b border-[#d9b867]/50 bg-[#fbf5e6] px-4 pb-3 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
          {links.map(([h, t]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-base text-[#5a3a22] hover:text-[#c2570c] md:py-1">{t}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
