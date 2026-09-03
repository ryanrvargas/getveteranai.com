import { FormEvent, useState } from 'react'
import { ArrowRight, CheckCircle2, Mail, MessageSquareText } from 'lucide-react'
import { createFileRoute } from '@tanstack/react-router'

import { SiteFooter, SiteHeader } from '@/components/site-shell'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact | Veteran AI Solutions' },
      {
        name: 'description',
        content:
          'Contact Veteran AI Solutions about automated lead response, follow-up, and service-business workflow automation.',
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

          <div className="mx-auto grid w-[min(calc(100%-2.5rem),70rem)] gap-12 pt-10 pb-20 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:pt-14 lg:pb-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.035] px-3 py-1.5 text-sm font-semibold text-[#8ef0c7]">
                <MessageSquareText className="size-4" aria-hidden="true" />
                Start a conversation
              </div>

              <h1 className="mt-7 font-display text-[clamp(3.1rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                Tell us where leads are getting lost.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#aebbd0]">
                Share a little about your business, your current lead process, and what you would like to automate. Veteran AI Solutions will follow up by email.
              </p>

              <div className="mt-10 rounded-[1.4rem] border border-white/10 bg-white/[0.035] p-6">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#62d4ff]/10 text-[#62d4ff]">
                    <Mail className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold">Business email coming next</h2>
                    <p className="mt-2 text-sm leading-6 text-[#aebbd0]">
                      We are setting up a direct Veteran AI Solutions business email. Until then, this form is the best way to get in touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 shadow-2xl shadow-black/25 sm:p-8">
              {status === 'success' ? (
                <div className="grid min-h-[31rem] place-items-center text-center">
                  <div className="max-w-md">
                    <CheckCircle2 className="mx-auto size-12 text-[#8ef0c7]" aria-hidden="true" />
                    <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight">Message received.</h2>
                    <p className="mt-3 leading-7 text-[#aebbd0]">
                      Thanks for reaching out. Your message was submitted to Veteran AI Solutions and we will follow up using the email address you provided.
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
                    <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#62d4ff]">Contact Veteran AI Solutions</div>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">What can we help you automate?</h2>
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
                    <p className="absolute h-px w-px -m-px overflow-hidden border-0 p-0 [clip:rect(0_0_0_0)]" aria-hidden="true">
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
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">Business name <span className="font-normal text-[#7f8fa6]">(optional)</span></span>
                      <input
                        name="business"
                        type="text"
                        autoComplete="organization"
                        className="w-full rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                        placeholder="Your business"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#ccd5e4]">Message</span>
                      <textarea
                        required
                        name="message"
                        rows={7}
                        className="w-full resize-y rounded-xl border border-white/12 bg-[#07111f]/70 px-4 py-3.5 text-white outline-none transition placeholder:text-[#65758d] focus:border-[#62d4ff]/65 focus:ring-2 focus:ring-[#62d4ff]/15"
                        placeholder="Tell us how leads come in today, what happens next, and where you think opportunities are being missed."
                      />
                    </label>

                    <p className="text-xs leading-5 text-[#7f8fa6]">
                      This contact form does not enroll you in SMS messaging. Information submitted here is used to respond to your inquiry. See our{' '}
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
                      {status === 'sending' ? 'Sending…' : 'Send message'}
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
