import { author } from '../data/books'
export function Library({ books, onRead, Card }) {
  return (
    <section id="books" className="scroll-mt-20 lg:scroll-mt-[6vw] border-t border-[#d9b867]/50 bg-[#f6ecd2]">
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
export { default as Recognition } from './Recognition'
export { About, Footer } from './About'
