import React from 'react';
import { motion } from 'framer-motion';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfcfb] py-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif text-[#2c2825] mb-4">Privacy Policy</h1>
          <p className="text-[#635e5a] mb-12 font-light">Last Updated: February 2026</p>

          <div className="prose prose-lg max-w-none space-y-8 text-[#2c2825]">
            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">1. Introduction</h2>
              <p className="font-light leading-relaxed">
                AXIWATT ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">2. Information We Collect</h2>
              <div className="space-y-4 font-light leading-relaxed">
                <div>
                  <h3 className="text-xl font-serif text-[#2c2825] mb-2">2.1 Information You Provide Directly</h3>
                  <p>
                    When you request a consultation, contact us, or use our services, we may collect:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                    <li>Full name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Estate location and property details</li>
                    <li>Objectives and project requirements</li>
                    <li>Any other information you voluntarily provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif text-[#2c2825] mb-2">2.2 Automatically Collected Information</h3>
                  <p>
                    We automatically collect certain information about your device when you access our website, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent</li>
                    <li>Referral sources and user interactions</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">3. How We Use Your Information</h2>
              <p className="font-light leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your consultation requests and inquiries</li>
                <li>To communicate updates and important information</li>
                <li>To comply with legal obligations and regulations</li>
                <li>To analyze website usage and improve user experience</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">4. Data Sharing and Disclosure</h2>
              <p className="font-light leading-relaxed">
                We do not sell, trade, or rent your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light mt-4">
                <li>With our trusted service providers who assist in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
                <li>In connection with business transfers or acquisitions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">5. Data Security</h2>
              <p className="font-light leading-relaxed">
                AXIWATT operates with enterprise-grade security measures and UHNW-grade confidentiality protocols. We implement industry-standard encryption, secure databases, and access controls to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">6. Your Privacy Rights</h2>
              <p className="font-light leading-relaxed mb-4">
                Depending on your location, you may have rights including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-light">
                <li>Right to access your personal data</li>
                <li>Right to request correction of inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt-out of marketing communications</li>
                <li>Right to data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">7. Cookies and Tracking</h2>
              <p className="font-light leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. We use cookies to remember your preferences and improve site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">8. Third-Party Links</h2>
              <p className="font-light leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">9. Children's Privacy</h2>
              <p className="font-light leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">10. Policy Updates</h2>
              <p className="font-light leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif text-[#2c2825] mb-4">11. Contact Us</h2>
              <p className="font-light leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 font-light space-y-2">
                <p><strong>Email:</strong> concierge@axiwatt.com</p>
                <p><strong>Address:</strong> Hyderabad, India</p>
                <p><strong>Response Time:</strong> We will respond to your inquiry within 30 days</p>
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
