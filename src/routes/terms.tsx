import { createFileRoute } from '@tanstack/react-router'

import { LegalPage } from '@/components/legal-page'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms & Conditions | Veteran AI Solutions' },
      {
        name: 'description',
        content: 'Terms and Conditions for Veteran AI Solutions, including SMS messaging terms.',
      },
    ],
  }),
  component: Terms,
})

function Terms() {
  return (
    <LegalPage title="Terms & Conditions" updated="September 2, 2026">
      <p>These Terms & Conditions govern your use of the Veteran AI Solutions website, forms, services, and messaging programs. By using our website or submitting a request, you agree to these Terms to the extent applicable to your use.</p>

      <h2>1. Services</h2>
      <p>Veteran AI Solutions provides and develops workflow automation and lead-response solutions for service businesses. Features, demonstrations, and service availability may change as our offerings evolve.</p>

      <h2>2. Information you provide</h2>
      <p>You agree to provide information that is accurate to the best of your knowledge and to avoid submitting unlawful, misleading, or harmful content through our website or forms.</p>

      <h2>3. SMS messaging terms</h2>
      <p>If you explicitly opt in to receive SMS messages from Veteran AI Solutions, you may receive messages related to an inquiry or service request you submitted, including confirmation messages, scheduling information, appointment-related communications, and limited follow-up messages concerning that request.</p>
      <ul>
        <li>Message frequency varies.</li>
        <li>Message and data rates may apply.</li>
        <li>Reply STOP to cancel or unsubscribe from SMS messages.</li>
        <li>Reply HELP for help.</li>
        <li>Consent to receive SMS messages is not a condition of purchase.</li>
        <li>Carriers are not liable for delayed or undelivered messages.</li>
      </ul>
      <p>After you opt out, you may receive a final confirmation message. You may opt in again through an available consent method.</p>

      <h2>4. Automated communications</h2>
      <p>Some communications may be generated, routed, or scheduled through automated systems. Automated messages are intended to assist with response and scheduling workflows and should not be interpreted as a professional diagnosis, emergency-service guarantee, or promise of a specific arrival time.</p>

      <h2>5. Third-party services</h2>
      <p>Our services may interact with third-party platforms for messaging, email, scheduling, automation, hosting, or similar functions. Your use of those services may also be subject to their respective terms and policies.</p>

      <h2>6. Availability and changes</h2>
      <p>We may modify, suspend, or discontinue website features or services at any time. We do not guarantee uninterrupted or error-free availability.</p>

      <h2>7. Disclaimer</h2>
      <p>To the extent permitted by applicable law, the website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. Veteran AI Solutions does not guarantee a particular business outcome, number of leads, appointments, conversions, or revenue.</p>

      <h2>8. Limitation of liability</h2>
      <p>To the extent permitted by applicable law, Veteran AI Solutions will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the website or services.</p>

      <h2>9. Privacy</h2>
      <p>Please review our <a href="/privacy/">Privacy Policy</a> for information about our data and mobile messaging practices.</p>

      <h2>10. Changes to these terms</h2>
      <p>We may update these Terms from time to time. Updated Terms will be posted on this page with a revised &quot;Last updated&quot; date.</p>

      <h2>11. Contact </h2>
      <p>If you have questions about these Terms, please contact Veteran AI Solutions through the contact method made available on our website or service form.</p>
    </LegalPage>
  )
}
