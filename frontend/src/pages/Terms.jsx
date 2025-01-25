import React from 'react'

const Terms = () => {
  return (
    <div className="bg-[#181824] min-h-screen text-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
            <p className="mb-4">NextEra provides digital solutions including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Video Editing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use our services in compliance with applicable laws</li>
              <li>Not engage in any unauthorized or illegal activities</li>
              <li>Not infringe on intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p>All content, designs, code, and materials on our services are owned by NextEra and protected by intellectual property laws. You may not use, reproduce, or distribute our content without explicit permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
            <p className="mb-4">For paid services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments are due as specified in the service agreement</li>
              <li>All fees are non-refundable unless stated otherwise</li>
              <li>We reserve the right to modify our pricing with notice</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p>NextEra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
            <p>We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including breach of Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any changes by updating the date at the bottom of this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
            <p>For any questions about these Terms of Service, please contact us at:</p>
            <div className="mt-4">
              <p>Email: contact@nextera.com</p>
              <p>Phone: +8801309011154</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
          </section>

          <section>
            <p className="mt-8">Last Updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Terms 