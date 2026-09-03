import { Menu } from 'lucide-react'

export function SiteHeader({ home = false }: { home?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/82 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[4.5rem] w-[min(calc(100%-2.5rem),70rem)] items-center justify-between gap-5">
        <a
          href="/"
          className="flex items-center gap-3 rounded-lg font-display font-semibold tracking-[-0.02em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#62d4ff]"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-[#62d4ff] to-[#8ef0c7] font-sans text-lg font-black text-[#03101b] shadow-[0_8px_30px_rgba(98,212,255,0.15)]">
            V
          </span>
          <span className="hidden sm:inline">Veteran AI Solutions</span>
          <span className="sm:hidden">Veteran AI</span>
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-3 text-xs font-semibold text-[#aebbd0] sm:gap-7 sm:text-sm">
          {home && (
            <a className="hidden transition hover:text-white md:block" href="#how">
              How it works
            </a>
          )}
          <a className="transition hover:text-white" href="/contact/">Contact</a>
          <a className="hidden transition hover:text-white sm:block" href="/privacy/">Privacy</a>
          <a className="hidden transition hover:text-white sm:block" href="/terms/">Terms</a>
          <Menu className="hidden size-4" aria-hidden="true" />
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-[#aebbd0]">
      <div className="mx-auto flex w-[min(calc(100%-2.5rem),70rem)] flex-wrap items-center justify-between gap-5">
        <div>© 2026 Veteran AI Solutions</div>
        <div className="flex flex-wrap gap-5">
          <a className="underline-offset-4 transition hover:text-white hover:underline" href="/contact/">Contact</a>
          <a className="underline-offset-4 transition hover:text-white hover:underline" href="/privacy/">Privacy Policy</a>
          <a className="underline-offset-4 transition hover:text-white hover:underline" href="/terms/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
