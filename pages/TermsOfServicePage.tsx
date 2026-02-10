import React from 'react';
import { motion } from 'framer-motion';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfcfb] py-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif text-[#2c2825] mb-4">Terms of Service</h1>
          <p className="text-[#635e5a] mb-12 font-light">Last Updated: February 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-[#2c2825]">
            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">1. Acceptance of Terms</h2>
              <p className="font-light leading-relaxed">
                By accessing and using the AXIWATT website and services ("Services"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our Services. AXIWATT reserves the right to modify these Terms at any time.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">2. Use License</h2>
              <p className="font-light leading-relaxed mb-4">
                AXIWATT grants you a limited, non-exclusive license to use our website for personal, non-commercial purposes. You agree not to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>Reproduce, duplicate, or distribute content without permission</li>
                <li>Attempt to reverse engineer or hack our systems</li>
                <li>Use automated tools to scrape or access our services</li>
                <li>Engage in any illegal or unauthorized activity</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">3. Service Description</h2>
              <p className="font-light leading-relaxed">
                AXIWATT provides luxury solar architecture, energy systems, and consulting services for private estates. Our website serves as an information portal and consultation request platform. Services are provided as-is without warranties of merchantability or fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">4. Consultation Requests</h2>
              <div className="space-y-4 font-light leading-relaxed">
                <div>
                  <h3 className="text-xl font-serif text-[#2c2825] mb-2">4.1 Request Submission</h3>
                  <p>
                    By submitting a consultation request, you confirm that all information provided is accurate and complete. You authorize AXIWATT to contact you using the provided details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#2c2825] mb-2">4.2 Response Timeline</h3>
                  <p>
                    AXIWATT aims to respond to consultation requests within 24 business hours. Actual response times may vary based on request volume and complexity.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">5. Intellectual Property Rights</h2>
              <p className="font-light leading-relaxed mb-4">
                All content on our website, including text, images, designs, and layouts, is the exclusive property of AXIWATT or our licensors and is protected by copyright law. You may not:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>Copy or modify content without explicit permission</li>
                <li>Display content in an external frame or web page</li>
                <li>Use our trademarks, logos, or branding</li>
                <li>Create derivative works based on our content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">6. User Conduct</h2>
              <p className="font-light leading-relaxed mb-4">
                You agree to use our Services responsibly and legally. Prohibited conduct includes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>Harassment, threats, or abusive language</li>
                <li>Spam, phishing, or malicious content</li>
                <li>Unauthorized access to restricted areas</li>
                <li>Interference with service functionality</li>
                <li>Violation of any applicable law or regulation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">7. Confidentiality</h2>
              <p className="font-light leading-relaxed">
                AXIWATT operates with strict confidentiality protocols appropriate for UHNW (Ultra-High Net Worth) clients. All information shared during consultations and business relationships is treated as confidential and is protected by industry-standard security measures.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">8. Limitation of Liability</h2>
              <p className="font-light leading-relaxed mb-4">
                To the maximum extent permitted by law, AXIWATT and its affiliates shall not be liable for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business interruption</li>
                <li>Website downtime or service interruptions</li>
                <li>Third-party actions or content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">9. Disclaimer of Warranties</h2>
              <p className="font-light leading-relaxed">
                Our website and services are provided "as-is" without any warranties, express or implied. AXIWATT does not guarantee that:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light mt-4">
                <li>Services will be uninterrupted or error-free</li>
                <li>Information is accurate, complete, or reliable</li>
                <li>Any defects will be corrected</li>
                <li>Results will meet your expectations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">10. Governing Law</h2>
              <p className="font-light leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Both parties agree to submit to the exclusive jurisdiction of courts in Hyderabad, India.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">11. Dispute Resolution</h2>
              <p className="font-light leading-relaxed mb-4">
                In the event of disputes, both parties agree to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>Attempt good-faith negotiation and resolution</li>
                <li>Pursue mediation before litigation if necessary</li>
                <li>Follow applicable Indian legal procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">12. Termination</h2>
              <p className="font-light leading-relaxed">
                AXIWATT reserves the right to terminate your access to our services at any time, with or without cause, and without prior notice. Termination will not affect any obligations you have incurred prior to termination.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">13. Severability</h2>
              <p className="font-light leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. We will modify the invalid provision to the minimum extent necessary to make it valid.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">14. Contact Information</h2>
              <p className="font-light leading-relaxed">
                For questions or concerns regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 font-light space-y-2">
                <p><strong>Email:</strong> concierge@axiwatt.com</p>
                <p><strong>Address:</strong> Hyderabad, India</p>
              </div>
            </section>

            <div className="pt-12 border-t border-[#e8e4df] text-center text-sm text-[#635e5a] font-light">
              <p>© 2024 AXIWATT. All rights reserved. Private & Confidential.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
