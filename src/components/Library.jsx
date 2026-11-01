import { useMemo, useState } from 'react'
import BookCard from './BookCard'
import { BooksQuill, HeadingFlourish, Landscape, OpenBook, SearchIcon } from './Ornaments'

/** A search box appears automatically once the library has more books than this. */
const SEARCH_AFTER = 8

/*
 * The library is data-driven: it renders one card per entry in `books` (src/data/books.js).
 * - Cards wrap into as many columns as fit the screen; a short last row stays centred.
 * - The decoration (paper background, heading art, hills) is anchored to the section's own
 *   edges and never to individual cards, so the section grows or shrinks freely with the list.
 */
export default function Library({ books, onRead }) {
  const [query, setQuery] = useState('')
  const searchable = books.length > SEARCH_AFTER

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!searchable || !q) return books
    return books.filter((b) => `${b.title} ${b.description ?? ''}`.toLowerCase().includes(q))
  }, [books, query, searchable])

  return (
    <section
      id="books"
      aria-labelledby="library-title"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-[#d9b867]/50 bg-[#f7edd5] lg:scroll-mt-[6vw]"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 70% 40% at 50% 0%, #fff8e6 0%, rgba(255,248,230,0) 70%), linear-gradient(180deg, #f9f0da 0%, #f5e6c3 100%)',
      }}
    >
      {/* Background hills: pinned to the bottom corners of the section (and faded toward the middle), whatever its height */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex h-48 items-end justify-between opacity-[.25] sm:h-64">
        <div className="h-full w-1/2 max-w-[28rem] [mask-image:linear-gradient(to_right,#000_55%,transparent)]">
          <Landscape className="h-full w-full" />
        </div>
        <div className="h-full w-1/2 max-w-[28rem] [mask-image:linear-gradient(to_left,#000_55%,transparent)]">
          <Landscape className="h-full w-full" flip />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 md:pt-16">
        {/* Heading art sits in the top corners of the section content */}
        <BooksQuill className="pointer-events-none absolute left-6 top-8 hidden w-44 opacity-80 lg:block xl:left-10 xl:w-60" />
        <OpenBook className="pointer-events-none absolute right-6 top-8 hidden w-48 opacity-80 lg:block xl:right-10 xl:w-64" />

        <header className="relative mx-auto max-w-2xl text-center">
          <HeadingFlourish className="mx-auto mb-2 h-6 w-64 max-w-full" />
          <h2 id="library-title" className="text-3xl leading-tight text-[#5a1f08] sm:text-4xl">
            <span className="font-head font-bold">ग्रंथालय</span>
            <span className="font-latin font-semibold"> · Digital Library</span>
          </h2>
          <HeadingFlourish className="mx-auto mt-2 h-6 w-64 max-w-full -scale-y-100" />
          <p className="mt-3 text-lg text-[#4a2814]">Choose a book and read it here in your browser.</p>
        </header>

        {searchable && (
          <div className="mx-auto mt-8 max-w-md">
            <label className="flex min-h-12 items-center gap-2 rounded-full border-2 border-[#d9a54a] bg-[#fffdf6] px-4 text-[#8a5a2b] shadow-[0_2px_8px_rgba(120,70,10,.12)] focus-within:border-[#c2570c]">
              <SearchIcon />
              <span className="sr-only">Search books</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books · पुस्तक शोधा"
                className="min-w-0 flex-1 bg-transparent text-base text-[#3b2a1e] outline-none placeholder:text-[#a58557]"
              />
            </label>
            <p aria-live="polite" className="mt-2 text-center text-sm text-[#8b6a2b]">
              {query.trim() ? `Showing ${shown.length} of ${books.length} books` : `${books.length} books`}
            </p>
          </div>
        )}

        {shown.length > 0 ? (
          <ul className="mt-10 flex flex-wrap justify-center gap-6 md:gap-7">
            {shown.map((book) => (
              <li key={book.id} className="flex min-w-0 max-w-full flex-[0_1_22rem]">
                <BookCard book={book} onRead={onRead} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-center text-lg text-[#6b3a1a]">
            {books.length === 0 ? 'Books will be added here soon.' : 'No book matches your search.'}
          </p>
        )}
      </div>
    </section>
  )
}
