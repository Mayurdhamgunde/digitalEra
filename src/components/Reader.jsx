import { useEffect } from 'react'
export default function Reader({ book, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [onClose])
  const b = 'inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium'
  return (
    <div role="dialog" aria-modal="true" aria-label={`Reading ${book.title}`} className="fixed inset-0 z-50 flex flex-col bg-[#fbf5e6]">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#d9b867] px-3 py-2">
        <button onClick={onClose} className={`${b} bg-[#6b2d0a] text-white`}>← Back</button>
        <p className="font-head min-w-0 flex-1 truncate text-base text-[#6b2d0a]">{book.title}</p>
        <a href={book.pdf} target="_blank" rel="noreferrer" className={`${b} border border-[#c2570c] text-[#8a3b0c]`}>Open full screen</a>
        <a href={book.pdf} download className={`${b} bg-[#c2570c] text-white`}>Download</a>
      </div>
      <iframe title={book.title} src={book.pdf} className="w-full flex-1 bg-white" />
      <p className="px-3 py-2 text-center text-sm text-[#8b6a2b]">If the book does not show on your phone, tap “Open full screen” or “Download”.</p>
    </div>
  )
}
