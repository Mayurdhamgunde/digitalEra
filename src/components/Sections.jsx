import { useEffect, useState } from 'react'
import { author } from '../data/books'
export function Library({ books, onRead, Card }) {
  return (
    <section id="books" className="scroll-mt-16 border-t border-[#d9b867]/50 bg-[#f6ecd2]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="font-head text-3xl text-[#6b2d0a]">ग्रंथालय · Digital Library</h2>
        <p className="mt-2 text-lg">Choose a book and read it here in your browser.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {books.map((b) => (
            <div key={b.id} className="flex w-full min-[460px]:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"><Card book={b} onRead={onRead} /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
export function Recognition() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const k = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [open])
  return (
    <section id="recognition" className="scroll-mt-16">
      <div className="mx-auto max-w-3xl px-4 py-14 text-center md:py-20">
        <h2 className="font-head text-3xl text-[#6b2d0a]">सन्मान व गौरव · Achievements &amp; Recognition</h2>
        <figure className="mt-8">
          <button onClick={() => setOpen(true)} aria-label="Enlarge the newspaper clipping" className="mx-auto block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c2570c]">
            <img src="/images/award.jpeg" alt="Newspaper clipping with a photograph of four men holding copies of a book at a book release event, with a Marathi report beneath it" loading="lazy" className="mx-auto w-full max-w-sm rounded-xl border-4 border-[#e5cf9a] object-cover" />
          </button>
          <p className="mt-3 text-sm text-[#8b6a2b]">Tap the picture to enlarge and read the report.</p>
          <figcaption className="mx-auto mt-3 max-w-xl text-base text-[#5a3a22]">A newspaper report (Lokmat) on the release of the book “विठ्ठल मुखे म्हणा, विठ्ठल मुखे म्हणा” by Ghaldev Jadhav, Solapur.</figcaption>
        </figure>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">More recognition and memories can be added here by the family.</p>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Newspaper clipping, enlarged" className="fixed inset-0 z-50 overflow-auto bg-[#2b1a0e]/90">
          <button onClick={() => setOpen(false)} className="fixed right-3 top-3 z-10 min-h-11 rounded-full bg-[#fbf5e6] px-5 text-base font-medium text-[#6b2d0a]">✕ Close</button>
          <img src="/images/award.jpeg" alt="Newspaper clipping, enlarged" className="mx-auto w-[190%] max-w-none sm:w-full sm:max-w-3xl" />
        </div>
      )}
    </section>
  )
}
export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-[#d9b867]/50 bg-[#f6ecd2]">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-4 py-14 md:grid-cols-[18rem_1fr] md:py-20">
        <img src="/images/author-portrait.jpg" alt={`Portrait of ${author.english}`} loading="lazy" className="mx-auto aspect-[4/5] w-56 rounded-2xl border-4 border-[#e5cf9a] object-cover object-top md:w-full" />
        <div>
          <h2 className="font-head text-3xl text-[#6b2d0a]">{author.marathi}</h2>
          <p className="font-latin mt-1 text-2xl text-[#8b6a2b]">{author.english}</p>
          <div className="mt-5 space-y-4 text-lg leading-relaxed">{author.bio.map((p, i) => <p key={i}>{p}</p>)}</div>
        </div>
      </div>
    </section>
  )
}
export function Footer() {
  return (
    <footer className="border-t border-[#c9a24a] bg-[#6b2d0a] px-4 py-10 text-center text-[#fbe9b8]">
      <p className="font-head text-2xl">{author.marathi}</p>
      <p className="mx-auto mt-3 max-w-xl text-base">Preserving literature and knowledge for future generations.</p>
    </footer>
  )
}
