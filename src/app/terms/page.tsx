import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Babcock Ranch Homeowner Guide",
  description: "Terms and conditions for using the Babcock Ranch Homeowner Guide website and services.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-800 to-stone-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
              Welcome to Babcock Ranch Homeowner Guide. By accessing or using our website, you agree 
              to be bound by these Terms of Service. Please read them carefully before using our services.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using the Babcock Ranch Homeowner Guide website (the "Service"), you 
              agree to be bound by these Terms of Service. If you do not agree to all the terms and 
              conditions, you may not access or use the Service.
            </p>

            <h2>Description of Service</h2>
            <p>
              Babcock Ranch Homeowner Guide provides information, resources, and connections related 
              to homeownership in the Babcock Ranch, Florida area. Our services include:
            </p>
            <ul>
              <li>Articles and guides for homeowners</li>
              <li>Vendor directory and recommendations</li>
              <li>Service request facilitation</li>
              <li>Community information and resources</li>
              <li>Newsletter and email communications</li>
            </ul>

            <h2>Use of the Service</h2>
            <h3>Eligibility</h3>
            <p>
              You must be at least 18 years old to use our Service. By using the Service, you represent 
              and warrant that you meet this requirement.
            </p>

            <h3>User Conduct</h3>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use the Service for any illegal purpose or in violation of any laws</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the Service</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Use the Service to send unsolicited communications (spam)</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on the Service, including text, graphics, logos, images, and software, is 
              the property of Babcock Ranch Homeowner Guide or its content suppliers and is protected 
              by United States and international copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works from, publicly display, 
              or otherwise use our content without our prior written permission, except for personal, 
              non-commercial use.
            </p>

            <h2>Vendor Directory and Recommendations</h2>
            <h3>Disclaimer</h3>
            <p>
              The vendor directory and recommendations provided on our Service are for informational 
              purposes only. We do not endorse, guarantee, or warrant the services of any vendor listed 
              on our site.
            </p>

            <h3>Due Diligence</h3>
            <p>
              You are solely responsible for conducting your own research and due diligence before 
              hiring any service provider. We strongly recommend:
            </p>
            <ul>
              <li>Verifying licenses, insurance, and certifications</li>
              <li>Checking references and reviews</li>
              <li>Obtaining multiple quotes</li>
              <li>Reviewing contracts carefully before signing</li>
            </ul>

            <h3>No Liability</h3>
            <p>
              Babcock Ranch Homeowner Guide is not responsible for any disputes, damages, or losses 
              arising from your interactions with vendors found through our Service.
            </p>

            <h2>User Content</h2>
            <p>
              If you submit content to our Service (such as reviews, comments, or feedback), you 
              grant us a non-exclusive, royalty-free, perpetual, irrevocable right to use, reproduce, 
              modify, adapt, publish, translate, and distribute such content in any media.
            </p>
            <p>
              You represent and warrant that:
            </p>
            <ul>
              <li>You own or have the right to submit the content</li>
              <li>The content is accurate and not misleading</li>
              <li>The content does not violate any third-party rights</li>
              <li>The content does not contain false or defamatory information</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL 
              WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
              <li>Accuracy, reliability, or completeness of content</li>
              <li>Uninterrupted or error-free service</li>
              <li>Security or freedom from viruses</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BABCOCK RANCH HOMEOWNER GUIDE AND ITS OFFICERS, 
              DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO 
              LOSS OF PROFITS, DATA, OR USE, ARISING FROM YOUR USE OF THE SERVICE.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Babcock Ranch Homeowner Guide and 
              its officers, directors, employees, and agents from any claims, damages, losses, 
              liabilities, and expenses (including attorneys' fees) arising from your use of the 
              Service or your violation of these Terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation if you 
              breach these Terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of Florida, without regard to its conflict of law provisions. You agree to 
              submit to the personal and exclusive jurisdiction of the courts located within 
              Charlotte County, Florida.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision 
              is material, we will provide at least 30 days' notice prior to any new terms taking 
              effect. Your continued use of the Service after any changes constitutes acceptance 
              of the new Terms.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Babcock Ranch Homeowner Guide</strong><br />
              Email: contact@babcockranchhomeownerguide.com<br />
              Website: https://babcockranchhomeownerguide.com/contact
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable, such provision 
              shall be struck and the remaining provisions shall be enforced to the fullest extent 
              under law.
            </p>

            <h2>Entire Agreement</h2>
            <p>
              These Terms constitute the entire agreement between you and Babcock Ranch Homeowner 
              Guide regarding the use of the Service, superseding any prior agreements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
