import { ArrowRight, CalendarCheck, MessageSquareText, Radar, Send } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter, SiteHeader } from '@/components/site-shell'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Veteran AI Solutions | Automated Lead Response & Follow-Up' },
      {
        name: 'description',
        content:
          'Veteran AI Solutions builds automated lead-response and follow-up systems for service businesses.',
      },
    ],
  }),
  component: Home,
})

const steps = [
  {
    number: '01',
    title: 'Capture',
    description: 'A customer submits a service request or lead form.',
    icon: Radar,
  },
  {
    number: '02',
    title: 'Respond',
    description: 'The customer receives a timely confirmation and a clear next step.',
    icon: Send,
  },
  {
    number: '03',
    title: 'Follow up',
    description:
      'Limited follow-up messages can be sent when the lead has not yet responded or booked.',
    icon: MessageSquareText,
  },
  {
    number: '04',
    title: 'Book',
    description:
      'The customer can be directed toward an appointment or another business-approved action.',
    icon: CalendarCheck,
  },
]

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#07111f] text-[#f5f7fb]">
      <SiteHeader home />
      <main>
        <section className="relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -right-40 -top-56 size-[42rem] rounded-full bg-[#62d4ff]/12 blur-[110px]" />
            <div className="absolute -left-52 top-72 size-[34rem] rounded-full bg-[#8ef0c7]/8 blur-[110px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
          </div>

          <div className="mx-auto grid w-[min(calc(100%-2.5rem),70rem)] gap-16 pb-20 pt-24 lg:grid-cols-[minmax(0,1fr)_17rem] lg:pb-28 lg:pt-32">
            <div className="max-w-4xl">
              <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-sm font-semibold tracking-wide text-[#8ef0c7]">
                <span className="size-1.5 rounded-full bg-[#8ef0c7] shadow-[0_0_0_5px_rgba(142,240,199,0.1)]" />
                Automated lead response for service businesses
              </div>
              <h1 className="animate-rise mt-7 max-w-5xl font-display text-[clamp(3.4rem,8.4vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] [animation-delay:90ms]">
                Respond faster.
                <span className="block bg-gradient-to-r from-[#f5f7fb] via-[#a9e8f5] to-[#8ef0c7] bg-clip-text text-transparent">
                  Miss fewer opportunities.
                </span>
              </h1>
              <p className="animate-rise mt-8 max-w-2xl text-lg leading-8 text-[#aebbd0] [animation-delay:180ms] sm:text-xl">
                Veteran AI Solutions builds practical lead-response systems that acknowledge new inquiries, organize lead information, offer scheduling, and follow up when a prospect has not yet responded.
              </p>
              <div className="animate-rise mt-10 flex flex-wrap gap-3 [animation-delay:270ms]">
                <a
                  href="#how"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#62d4ff] to-[#8ef0c7] px-5 py-3.5 font-bold text-[#03101b] shadow-[0_16px_50px_rgba(98,212,255,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(98,212,255,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8ef0c7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
                >
                  See how it works
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href="/privacy/"
                  className="inline-flex items-center rounded-xl border border-white/12 bg-white/[0.035] px-5 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#62d4ff]"
                >
                  Privacy & SMS policy
                </a>
              </div>
            </div>

            <div className="animate-rise hidden self-end pb-2 [animation-delay:340ms] lg:block" aria-hidden="true">
              <div className="relative aspect-[4/5] rounded-[2rem] border border-white/10 bg-white/[0.025] p-4 shadow-2xl shadow-black/30">
                <div className="absolute inset-4 rounded-[1.35rem] border border-white/8 bg-[#0c1a2d] p-5">
                  <div className="flex items-center gap-2 border-b border-white/8 pb-4">
                    <span className="size-2 rounded-full bg-[#8ef0c7]" />
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#aebbd0]">Workflow active</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {['New inquiry captured', 'Reply sent in seconds', 'Scheduling link shared'].map((label, index) => (
                      <div key={label} className="rounded-xl border border-white/8 bg-white/[0.035] p-3">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[0.65rem] font-bold text-[#62d4ff]">0{index + 1}</span>
                          <span className="size-1.5 rounded-full bg-[#8ef0c7]" />
                        </div>
                        <div className="text-xs font-semibold text-[#ccd5e4]">{label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 h-1.5 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#62d4ff] to-[#8ef0c7]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="relative border-t border-white/8 py-20 sm:py-28">
          <div className="mx-auto w-[min(calc(100%-2.5rem),70rem)]">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <h2 className="font-display text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
                A simpler path from inquiry to appointment.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-[#aebbd0] lg:justify-self-end">
                The system is designed around a straightforward customer experience rather than unnecessary complexity.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <article
                    key={step.number}
                    className={`group relative min-h-64 overflow-hidden rounded-[1.4rem] border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#62d4ff]/35 ${index % 2 === 1 ? 'lg:translate-y-8 lg:hover:translate-y-7' : ''}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-extrabold tracking-[0.16em] text-[#62d4ff]">{step.number}</span>
                      <Icon className="size-5 text-[#8ef0c7] transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <div className="mt-20">
                      <h3 className="font-display text-2xl font-semibold tracking-tight">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#aebbd0]">{step.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>

            <div className="mt-20 grid gap-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(120deg,rgba(98,212,255,0.1),rgba(142,240,199,0.055))] p-7 sm:p-10 md:grid-cols-[0.72fr_1fr] md:items-center lg:mt-28">
              <div className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                Built first for home-service workflows.
              </div>
              <p className="text-lg leading-8 text-[#ccd5e4]">
                Our initial prototype focuses on HVAC lead response, with a modular approach that can later be adapted for other service businesses.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
