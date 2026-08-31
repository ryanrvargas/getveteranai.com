import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '@/components/legal-page'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Veteran AI Solutions' },
      {
        name: 'description',
        content: 'Privacy Policy for Veteran AI Solutions, including SMS and mobile information practices.',
      },
    ],
  }),
  component: Privacy,
})

function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="August 23, 2026">
      <p>Veteran AI Solutions (&quot;Veteran AI Solutions,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains what information we may collect, how we use it, and the choices available to you when you interact with our website, forms, services, and messaging programs.</p>

      <h2>1. Information we collect</h2>
      <p>Depending on how you interact with us, we may collect information you voluntarily provide, such as your name, phone number, email address, service address, business information, appointment information, and details you include in a service request or inquiry.</p>
      <p>We may also collect limited technical information necessary to operate and secure our website and services, such as browser, device, log, and usage information.</p>

      <h2>2. How we use information</h2>
      <p>We may use information to respond to inquiries, provide requested services, send service-related communications, facilitate scheduling, operate and improve our workflows, maintain records, prevent misuse, and comply with applicable obligations.</p>

      <h2>3. SMS and mobile information</h2>
      <div className="notice"><strong>Mobile opt-in information and consent are not sold or shared with third parties or affiliates for their own marketing or promotional purposes.</strong></div>
      <p>If you explicitly opt in to receive SMS messages from Veteran AI Solutions, we may send messages relating to your inquiry, requested service, scheduling, appointment information, and limited follow-up concerning that request.</p>
      <ul>
        <li>Message frequency varies.</li>
        <li>Message and data rates may apply.</li>
        <li>Reply STOP to unsubscribe.</li>
        <li>Reply HELP for help.</li>
      </ul>
      <p>Your decision to consent to SMS messages is voluntary. Where applicable, you may still complete the primary form or request without consenting to receive SMS messages.</p>

      <h2>4. Service providers</h2>
      <p>We may use service providers that support functions such as website hosting, workflow automation, messaging, email, scheduling, data storage, and related business operations. These providers may process information on our behalf as needed to provide their services. We do not authorize service providers to use mobile opt-in information for their own marketing or promotional purposes.</p>

      <h2>5. Sharing of information</h2>
      <p>We may share information when reasonably necessary to operate our services, comply with law, protect rights or safety, or complete a transaction involving our business. We do not sell your mobile number or SMS consent, and we do not share mobile opt-in data with third parties or affiliates for their own marketing or promotional purposes.</p>

      <h2>6. Data retention and security</h2>
      <p>We retain information for as long as reasonably necessary for the purposes described in this policy, subject to operational, legal, and recordkeeping needs. We use reasonable administrative and technical measures intended to protect information, but no system can be guaranteed to be completely secure.</p>

      <h2>7. Your choices</h2>
      <p>You may opt out of SMS messages at any time by replying STOP. You may request help by replying HELP. You may also choose not to provide optional information, although this may limit our ability to fulfill a request.</p>

      <h2>8. Children&apos;s privacy</h2>
      <p>Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised &quot;Last updated&quot; date.</p>

      <h2>10. Contact</h2>
      <p>If you have questions about this Privacy Policy, please contact Veteran AI Solutions through the contact method made available on our website or service form.</p>
    </LegalPage>
  )
}
