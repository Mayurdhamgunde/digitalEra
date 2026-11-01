import { author } from '../data/books'

const Flourish = ({ className }) => (
  <svg aria-hidden="true" viewBox="0 0 80 80" className={`absolute h-14 w-14 text-[#b9651a] md:h-20 md:w-20 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M6 74V28C6 16 16 6 28 6h46" /><path d="M14 66V30c0-9 7-16 16-16h36" opacity=".5" />
    <path d="M28 6c-8 0-12 6-8 11s11 4 11-2-6-8-9-4" /><circle cx="12" cy="12" r="2.2" fill="currentColor" />
  </svg>
)
const Divider = ({ className = '' }) => (
  <div aria-hidden="true" className={`flex items-center justify-center gap-2 text-[#c2570c] ${className}`}>
    <span className="h-px w-16 bg-current/60 md:w-24" /><svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor"><path d="M10 0l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" /></svg><span className="h-px w-16 bg-current/60 md:w-24" />
  </div>
)
const Laurel = ({ flip }) => (
  <svg aria-hidden="true" viewBox="0 0 40 40" className={`hidden h-10 w-10 text-[#c9a24a] sm:block ${flip ? '-scale-x-100' : ''}`} fill="currentColor">
    <path d="M8 34C8 22 14 12 24 6c1 12-3 22-16 28zM4 24c0-6 3-10 8-13 1 6-1 10-8 13zM16 36c10-2 16-8 20-16-10 0-17 5-20 16z" opacity=".85" />
  </svg>
)
const Landscape = () => (
  <svg aria-hidden="true" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-32 w-full text-[#8a6a3b] opacity-40 md:h-52">
    <path fill="currentColor" opacity=".35" d="M0 200v-45c140-30 260-20 380-45s220-40 330-30 200 30 320 28 120-12 170 8v84z" />
    <path fill="currentColor" opacity=".5" d="M0 200v-30c120-10 240-4 360 6s300 10 460 0 260-6 380 8v16z" />
    <g fill="currentColor" opacity=".9">
      <path d="M58 40v22l24-6z" /><rect x="57" y="40" width="2" height="112" />
      <path d="M58 152l-26 0 6-20h40zM46 132h24l-4-18H50zM50 114h16l-3-16H53zM54 98h8l-2-18h-4z" />
      <rect x="20" y="152" width="110" height="26" /><path d="M130 152h70l-8-18h-54zM200 152l20 26h-90z" opacity=".8" />
    </g>
  </svg>
)
const Mandala = () => (
  <svg aria-hidden="true" viewBox="-100 -100 200 200" className="absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 text-[#b9812a] opacity-50" fill="none" stroke="currentColor" strokeWidth=".8">
    {Array.from({ length: 16 }, (_, i) => <path key={i} d="M0 -96c10 14 10 30 0 46c-10-16-10-32 0-46z" transform={`rotate(${i * 22.5})`} />)}
    {Array.from({ length: 12 }, (_, i) => <path key={i} d="M0 -62c6 8 6 18 0 28c-6-10-6-20 0-28z" transform={`rotate(${i * 30 + 15})`} />)}
    <circle r="30" /><circle r="98" strokeDasharray="2 3" />
  </svg>
)
const BookVisual = () => (
  <div aria-hidden="true" className="relative mx-auto w-56 sm:w-64 md:w-80">
    <Mandala />
    <div className="relative rotate-[5deg]">
      <div className="absolute -right-2 bottom-1 top-2 w-3 rounded-r-sm bg-gradient-to-r from-[#eadbb4] to-[#cdb783]" />
      <div className="relative flex aspect-[3/4] overflow-hidden rounded-r-md rounded-l-lg bg-gradient-to-br from-[#a14f24] via-[#8a3b14] to-[#5f240c] shadow-[10px_14px_24px_rgba(80,40,10,.45)]">
        <div className="flex w-[12%] flex-col justify-around bg-gradient-to-r from-[#4f1e0a] to-[#7a3416]">
          {[0, 1, 2, 3].map((i) => <span key={i} className="h-2 bg-[#c9a24a]/50" />)}
        </div>
        <div className="m-3 grid flex-1 place-items-center rounded-[1.5rem_1.5rem_.5rem_.5rem] border-2 border-[#d9b25a] p-2">
          <div className="grid h-full w-full place-items-center rounded-[1.2rem_1.2rem_.3rem_.3rem] border border-[#d9b25a]/60 text-center text-[#f0cf7a]">
            <div>
              <p className="font-head text-6xl drop-shadow md:text-7xl">ॐ</p>
              <Divider className="my-3 scale-75 text-[#d9b25a]" />
              <p className="font-head text-xl leading-loose md:text-2xl">विठ्ठल विठ्ठल<br />विठ्ठल विठ्ठल</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg viewBox="0 0 120 80" className="absolute -bottom-6 -right-6 h-20 w-28 md:-right-10 md:h-24 md:w-36">
      <ellipse cx="40" cy="48" rx="34" ry="14" fill="#5f8a3a" transform="rotate(-25 40 48)" /><ellipse cx="78" cy="40" rx="30" ry="12" fill="#6fa044" transform="rotate(20 78 40)" />
      <ellipse cx="60" cy="58" rx="28" ry="10" fill="#4d7a30" transform="rotate(-5 60 58)" />
      {[[18, 30], [26, 24], [32, 32], [24, 36]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill="#fffaf0" />)}
    </svg>
  </div>
)

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[calc(100vh-64px)] w-full items-center justify-center scroll-mt-16 overflow-hidden bg-[radial-gradient(ellipse_at_40%_35%,#fff7de,#f5e3b8_65%,#e6cd96)]">
      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[.28] mix-blend-multiply">
        <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="3" /><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .38  0 0 0 0 .2  0 0 0 .55 0" /></filter>
        <rect width="100%" height="100%" filter="url(#paper)" />
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute inset-2 border border-[#c9a24a]/60 md:inset-3" />
      <Flourish className="left-2 top-2 md:left-3 md:top-3" /><Flourish className="right-2 top-2 -scale-x-100 md:right-3 md:top-3" />
      <Flourish className="bottom-2 left-2 -scale-y-100 md:bottom-3 md:left-3" /><Flourish className="bottom-2 right-2 scale-[-1] md:bottom-3 md:right-3" />
      <Landscape />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-8 pb-20 md:grid-cols-[1.2fr_.8fr] md:gap-12 md:py-12 md:pb-24">
        <div className="text-center">
          <p className="font-head flex items-center justify-center gap-3 text-lg font-medium text-[#c2570c] md:text-xl">॥ श्री ॥</p>
          <h1 className="font-head mt-2 text-3xl font-bold leading-snug text-[#5f240c] [text-shadow:0_1px_0_#fff3cf] sm:text-4xl lg:text-5xl">
            {author.marathi}
          </h1>
          <svg aria-hidden="true" viewBox="0 0 300 12" className="mx-auto mt-1 h-2.5 w-56 text-[#c2570c] sm:w-64"><path d="M4 8C60 2 150 4 296 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" /></svg>
          <p className="font-latin mt-2 text-2xl font-semibold text-[#6b2d0a] sm:text-3xl">{author.english}</p>
          <Divider className="my-3" />
          <p className="font-latin mx-auto mt-3 max-w-lg text-base font-medium leading-relaxed text-[#4a2c1a] sm:text-lg">
            This digital library preserves the literary and spiritual writings of {author.english}, and shares them freely so that readers today and in the future can read them online.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Laurel />
            <a href="#books" className="inline-flex min-h-11 items-center gap-2.5 rounded-full border-2 border-[#d9b25a] bg-gradient-to-b from-[#d6671a] to-[#a34609] px-7 py-2.5 text-lg font-medium text-white shadow-[0_4px_14px_rgba(160,70,9,.4)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c2570c]">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 6c-2-1.5-5-2-9-2v14c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2zM12 6v14" /></svg>
              Explore Books
            </a>
            <Laurel flip />
          </div>
        </div>
        <BookVisual />
      </div>
    </section>
  )
}

