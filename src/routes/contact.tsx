import { FormEvent, useState } from 'react'
import { ArrowRight, CheckCircle2, PhoneCall, Sparkles, Workflow } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter, SiteHeader } from '@/components/site-shell'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | Veteran AI Solutions' },
      {
        name: 'description',
        content:
          'Talk with Veteran AI Solutions about AI receptionists, missed-call lead capture, follow-up, scheduling, and custom business automation.',
      },
    ],
  }),
  component: Contact,
})

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const formData = new FormData(form)
    const body = new URLSearchParams()

    formData.forEach((value, key) => {
      body.append(key, String(value))
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#07111f] text-[#f5f7fb]">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/8">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div className="absolute -right-52 -top-64 size-[42rem] rounded-full bg-[#62d4ff]/12 blur-[115px]" />
            <div className="absolute -left-52 top-56 size-[34rem] rounded-full bg-[#8ef0c7]/8 blur-[110px]" />
          </div>

          <div className="mx-auto grid w-[min(calc(100%-2.5rem),70rem)] gap-12 pb-20 pt-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:pb-28 lg:pt-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-sm font-semibold text-[#8ef0c7]">
                <Sparkles className="size-4" aria-hidden="true" />
                Tell us what is slowing you down
              </div>

              <h1 className="mt-7 font-display text-[clamp(3.1rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                Where are calls, leads, or repetitive work getting stuck?
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#aebbd0]">
                You do not need to know exactly what automation you need. Tell us how your business handles calls and leads today, where the process breaks down, or what your team keeps doing manually.
              </p>

              <div className="mt-10 grid gap-3">
                <div className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-5">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#62d4ff]/10 text-[#62d4ff]">
                    <PhoneCall className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-semibold">Missing calls or leads?</h2>
                    <p className="mt-1 text-sm leading-6 text-[#aebbd0]">
                      We can look at AI receptionist, lead capture, follow-up, scheduling, and handoff options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-5">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#8ef0c7]/10 text-[#8ef0c7]">
                    <Workflow className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-semibold">Too much manual work?</h2>
                    <p className="mt-1 text-sm leading-6 text-[#aebbd0]">
                      Show us the repetitive process. We will tell you whether it is a good candidate for automation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-l-2 border-[#8ef0c7]/40 pl-5">
                <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#8ef0c7]">What happens next</div>
                <p className="mt-2 text-sm leading-6 text-[#aebbd0]">
                  We will review what you send, identify the highest-value opportunity, and follow up to discuss whether there is a practical solution worth building.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-black/25 sm:p-8">
              {status === 'success' ? (
                <div className="grid min-h-[36rem] place-items-center text-center">
                  <div className="max-w-md">
                    <CheckCircle2 className="mx-auto size-12 text-[#8ef0c7]" aria-hidden="true" />
                    <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight">Got it.</h2>
                    <p className="mt-3 leading-7 text-[#aebbd0]">
                      Your information was sent to Veteran AI Solutions. We will review your current process and follow up using the contact information you provided.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-7 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 font-semibold transition hover:border-white/25 hover:bg-white/[0.07]"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#62d4ff]">Start a conversation</div>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">Tell us about your business.</h2>
                    <p className="mt-3 text-sm leading-6 text-[#aebbd0]">
                      A few details are enough. We are looking for the problem first, not trying to force every business into the same system.
                    </p>
                  </div>

                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="absolute -m-px h-px w-px overflow-hidden border-0 p-0 [clip:rect(0_0_0_0)]" aria-hidden="true">
                      <label>
                        Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                      </label>
                    </p>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">Name</span>
                        <input
                          required
                          name="name"
                          type="text"
                          autoComplete="name"
                          className="w-full rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">Business name</span>
                        <input
                          required
                          name="business"
                          type="text"
                          autoComplete="organization"
                          className="w-full rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                          placeholder="Your business"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">Email</span>
                        <input
                          required
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="w-full rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                          placeholder="you@business.com"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">
                          Phone <span className="font-normal text-[#7f8fa6]">(optional)</span>
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          className="w-full rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                          placeholder="Best number to reach you"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">What are you most interested in?</span>
                      <select
                        required
                        name="interest"
                        defaultValue=""
                        className="w-full rounded-xl border border-white/12 bg-[#07111f] px-4 py-3.5 text-white outline-none transition focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                      >
                        <option value="" disabled>Select one</option>
                        <option value="AI receptionist / missed calls">AI receptionist / missed calls</option>
                        <option value="Lead capture and follow-up">Lead capture and follow-up</option>
                        <option value="Scheduling / appointment automation">Scheduling / appointment automation</option>
                        <option value="Custom workflow automation">Custom workflow automation</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">What is happening today?</span>
                      <textarea
                        required
                        name="message"
                        rows={6}
                        className="w-full resize-y rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                        placeholder="Example: We miss calls while our team is working, customers leave voicemails, and someone has to call everyone back later. I want a better way to capture those leads."
                      />
                    </label>

                    <p className="text-xs leading-5 text-[#7f8fa6]">
                      This form does not enroll you in SMS marketing. If you provide a phone number, it may be used to respond directly to this inquiry. See our{' '}
                      <a href="/privacy/" className="font-semibold text-[#a9e8f5] underline-offset-4 hover:underline">Privacy Policy</a>.
                    </p>

                    {status === 'error' && (
                      <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/8 px-4 py-3 text-sm text-red-200">
                        Your message could not be submitted. Please try again.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#62d4ff] to-[#8ef0c7] px-5 py-3.5 font-bold text-[#03101b] shadow-[0_16px_50px_rgba(98,212,255,0.14)] transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-65"
                    >
                      {status === 'sending' ? 'Sending…' : 'Tell us about your workflow'}
                      {status !== 'sending' && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
