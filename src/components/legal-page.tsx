import { SiteFooter, SiteHeader } from '@/components/site-shell'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#f5f7fb]">
      <SiteHeader />
      <main className="relative isolate py-16 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[32rem] rounded-full bg-[#62d4ff]/8 blur-[120px]" aria-hidden="true" />
        <article className="legal-content mx-auto w-[min(calc(100%-2.5rem),53.75rem)]">
          <div className="inline-flex rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-sm font-semibold tracking-wide text-[#8ef0c7]">
            Legal
          </div>
          <h1 className="mt-6 font-display text-[clamp(3rem,7vw,5.25rem)] font-semibold leading-none tracking-[-0.055em]">{title}</h1>
          <p className="!mt-4 text-sm !text-[#aebbd0]">Last updated: {updated}</p>
          <div className="mt-12">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
