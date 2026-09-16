import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

const CALENDLY_SERVICE_URL = 'https://calendly.com/veteranaisolutions/service'

export const Route = createFileRoute('/book')({
  validateSearch: (search: Record<string, unknown>) => ({
    c: typeof search.c === 'string' ? search.c.trim() : '',
  }),
  head: () => ({
    meta: [
      { title: 'Schedule Service | Veteran AI Solutions' },
      {
        name: 'description',
        content: 'Continue to the service scheduling page.',
      },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: BookRedirect,
})

function BookRedirect() {
  const { c } = Route.useSearch()

  useEffect(() => {
    const target = new URL(CALENDLY_SERVICE_URL)
    target.searchParams.set('utm_source', 'veteran_ai')
    target.searchParams.set('utm_medium', 'sms')
    target.searchParams.set('utm_campaign', 'hvac_voice_lead')

    if (c) {
      target.searchParams.set('utm_content', c)
    }

    window.location.replace(target.toString())
  }, [c])

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#07111f] px-6 text-center text-[#f5f7fb]">
      <div>
        <h1 className="text-2xl font-semibold">Opening scheduling…</h1>
        <p className="mt-3 text-white/70">You’ll be redirected to choose a service time.</p>
      </div>
    </main>
  )
}
