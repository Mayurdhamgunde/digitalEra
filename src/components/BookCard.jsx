export default function BookCard({ book, onRead }) {
  const ready = Boolean(book.pdf)
  const btn = 'inline-flex min-h-12 flex-1 items-center justify-center rounded-full px-4 text-base font-medium'
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-[#d9b867]/70 bg-[#fffdf6]">
      <img
        src={book.cover}
        alt={`Cover of ${book.title}`}
        loading="lazy"
        className="aspect-[4/3] w-full bg-[#f1dfb5] object-cover"
      />
      <div className="px-4 pt-4 text-center">
        <h3 className="font-head text-xl leading-snug text-[#6b2d0a]">{book.title}</h3>
        {book.description && <p className="font-latin mt-0.5 text-lg font-medium text-[#8a5a2b]">{book.description}</p>}
      </div>
      <div className="mt-auto flex flex-col gap-2 p-4 sm:flex-row">
        {ready ? (<>
          <button onClick={() => onRead(book)} className={`${btn} bg-[#c2570c] text-white hover:bg-[#a34609]`}>Read Online</button>
          <a href={book.pdf} download className={`${btn} border border-[#c2570c] text-[#8a3b0c] hover:bg-[#fbeccc]`}>Download PDF</a>
        </>) : (
          <span className={`${btn} border border-dashed border-[#c9a24a] text-[#8b6a2b]`}>PDF coming soon</span>
        )}
      </div>
    </article>
  )
}
