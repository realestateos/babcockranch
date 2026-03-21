import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Babcock Ranch Homeowner Guide",
  description: "Our privacy policy explains how we collect, use, and protect your information when you use the Babcock Ranch Homeowner Guide website.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-emerald-100/90">
            Last updated: March 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none prose-headings:text-stone-800 prose-p:text-stone-600">
            <p>
              Babcock Ranch Homeowner Guide ("we," "us," or "our") respects your privacy and is committed 
              to protecting your personal information. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request services or information</li>
              <li>Download resources (such as checklists)</li>
              <li>Contact us with inquiries</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, home address, 
              and any other information you choose to provide.
            </p>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about 
              your device and usage patterns, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>Device information</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you newsletters and updates (with your consent)</li>
              <li>Improve our website and user experience</li>
              <li>Analyze usage patterns and trends</li>
              <li>Protect against fraudulent or unauthorized activity</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>How We Share Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may 
              share your information in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party 
              service providers who assist us in operating our website and conducting our business 
              (e.g., email service providers, analytics services).</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to 
              do so by law or in response to valid legal requests.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or 
              sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>With Your Consent:</strong> We may share your information with third parties 
              when you explicitly consent to such sharing.</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience, 
              analyze website traffic, and understand where our visitors are coming from. You can 
              control cookies through your browser settings.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet or electronic storage is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, 
              including:
            </p>
            <ul>
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to or restrict certain processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review the 
              privacy policies of any websites you visit.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this 
              page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Babcock Ranch Homeowner Guide</strong><br />
              Email: privacy@babcockranchhomeownerguide.com<br />
              Website: https://babcockranchhomeownerguide.com/contact
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
