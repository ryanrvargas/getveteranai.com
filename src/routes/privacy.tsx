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
    <LegalPage title="Privacy Policy" updated="September 3, 2026">
      <p>Veteran AI Solutions ("Veteran AI Solutions") respects your privacy. This Privacy Policy explains what information we may collect, how we use it, and the choices available to you when you interact with our website, forms, services, and messaging programs.</p>

      <h2>1. Information we collect</h2>
      <p>Depending on how you interact with us, we may collect information you voluntarily provide, such as your name, phone number, email address, service address, business information, appointment information, and details you include in a service request or inquiry.</p>
      <p>We may also collect limited technical information necessary to operate and secure our website and services, such as browser, device, log, and usage information.</p>

      <h2>2. How we use information</h2>
      <p>We may use information to respond to inquiries, provide requested services, send service-related communications, facilitate scheduling, operate and improve our workflows, maintain records, prevent misuse, and comply with applicable obligations.</p>

      <h2>3. SMS Messaging and Mobile Information</h2>
      <p>If you opt in to receive SMS messages from Veteran AI Solutions, we may use your mobile phone number and messaging consent information to send messages regarding service requests, scheduling, appointment information, service updates, and limited follow-up.</p>
      <p>Message frequency varies. Message and data rates may apply. You may reply STOP at any time to unsubscribe from SMS messages. Reply HELP for assistance.</p>
      <p>Veteran AI Solutions does not share, sell, rent, or provide your mobile phone number, SMS opt-in information, or messaging consent data to third parties or affiliates for marketing or promotional purposes.</p>
      <p>We may use service providers solely as necessary to operate and deliver our messaging services. Such service providers are not permitted to use your mobile information or messaging consent for their own marketing or promotional purposes.</p>
      <p>Consent to receive SMS messages is voluntary and is not a condition of purchase.</p>

      <h2>4. Service providers</h2>
      <p>We may use service providers that support functions such as website hosting, workflow automation, messaging, email, scheduling, data storage, and related business operations. These providers may process information on our behalf as needed to provide their services. Service providers do not receive mobile phone numbers or SMS opt-in information for their own marketing or promotional purposes, as detailed in Section 3.</p>

      <h2>5. Sharing of information</h2>
      <p>We may share information when reasonably necessary to operate our services, comply with law, protect rights or safety, or complete a transaction involving our business. However, mobile phone numbers, SMS opt-in information, and messaging consent are not shared with third parties or affiliates for marketing or promotional purposes, as detailed in Section 3.</p>

      <h2>6. Data retention and security</h2>
      <p>We retain information for as long as reasonably necessary for the purposes described in this policy, subject to operational, legal, and recordkeeping needs. We use reasonable administrative and technical measures intended to protect information, but no system can be guaranteed to be completely secure.</p>

      <h2>7. Your choices</h2>
      <p>You may opt out of SMS messages at any time by replying STOP. You may request help by replying HELP. You may also choose not to provide optional information, although this may limit our ability to fulfill a request.</p>

      <h2>8. Children's privacy</h2>
      <p>Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>

      <h2>9. Changes to this policy</h2>
      <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date.</p>

      <h2>10. Contact</h2>
      <p>If you have questions about this Privacy Policy, please contact Veteran AI Solutions through the contact method made available on our website or service form.</p>
    </LegalPage>
  )
}
