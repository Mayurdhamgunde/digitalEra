export default function BookCard({ book, onRead }) {
  const ready = Boolean(book.pdf)
  const btn = 'inline-flex min-h-12 flex-1 items-center justify-center rounded-full px-4 text-base font-medium'
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-[#d9b867]/70 bg-[#fffdf6]">
      {/* placeholder cover: replace with a real cover image later */}
      <div className="grid aspect-[16/10] place-items-center bg-gradient-to-br from-[#c2570c] to-[#6b2d0a] p-3">
        <div className="grid h-full w-full place-items-center border border-[#e9cf86] p-3 text-center text-[#fbe9b8]">
          <div>
            <p aria-hidden="true" className="font-head text-4xl">ॐ</p>
            <h3 className="font-head mt-2 text-xl leading-snug">{book.title}</h3>
            {book.description && <p className="mt-1 text-sm text-[#f3d98f]">{book.description}</p>}
          </div>
        </div>
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
