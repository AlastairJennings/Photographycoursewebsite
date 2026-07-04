import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

export function Terms() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Terms and Conditions - The Photo Course</title>
        <meta name="description" content="Terms and Conditions for The Photo Course. Read our terms of use, course enrollment policies, and user responsibilities." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50" style={{ minHeight: '300px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-4" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className="border-t border-gray-200">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to The Photo Course. These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with thephotocourse.com website (the "Service") operated by Curvemedia Studios Ltd ("us", "we", or "our").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Please read these Terms and Conditions carefully before using our Service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                1. Company Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Photo Course is operated by Curvemedia Studios Ltd, a company registered in England and Wales.
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Company Registration Number:</strong> 12953093</li>
                <li><strong>Registered Office:</strong> 4 Beau Street, Bath, England, BA1 1QY</li>
                <li><strong>Email:</strong> ali@curvemedia.uk</li>
                <li><strong>Website:</strong> https://thephotocourse.com</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                2. Use of Our Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                When using our Service, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Not share your account access with others</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to interfere with the proper working of the Service</li>
                <li>Not use the Service to transmit viruses or malicious code</li>
                <li>Not engage in any form of automated data collection or scraping</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for all activity that occurs under your account. You must notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                3. Course Enrollment and Access
              </h2>
              
              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">3.1 Course Access</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon enrollment in a course, you will receive access to the course materials for the duration specified at the time of purchase. Course access is granted for personal, non-commercial use only.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">3.2 Course Materials</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Course materials may include video lessons, downloadable resources, fact sheets, and other educational content. We reserve the right to update, modify, or remove course content at any time without prior notice.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">3.3 Technical Requirements</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for ensuring you have the necessary equipment, internet connection, and software to access the courses. We are not responsible for technical issues on your end that prevent access to the Service.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                4. Intellectual Property Rights
              </h2>
              
              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">4.1 Our Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Curvemedia Studios Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of the United Kingdom and foreign countries.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">4.2 Restrictions</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may not, without our express written permission:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Copy, reproduce, or distribute course materials</li>
                <li>Share your login credentials with others</li>
                <li>Record, screenshot, or capture course videos</li>
                <li>Modify, adapt, or create derivative works from our content</li>
                <li>Use our content for commercial purposes</li>
                <li>Remove or alter any copyright notices or watermarks</li>
              </ul>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">4.3 Enforcement</h3>
              <p className="text-gray-700 leading-relaxed">
                We take intellectual property rights seriously. Violation of these terms may result in immediate termination of your account and legal action.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                5. Payment and Pricing
              </h2>
              
              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">5.1 Pricing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Course prices are displayed in British Pounds (GBP) and include VAT where applicable. We reserve the right to change our pricing at any time. Price changes will not affect existing enrollments.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">5.2 Payment Processing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All payments are processed securely through third-party payment providers. We do not store your credit card information. By providing payment information, you represent that you are authorized to use the payment method provided.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">5.3 Failed Payments</h3>
              <p className="text-gray-700 leading-relaxed">
                If a payment fails, we may suspend your access to paid content until payment is received. You are responsible for any fees charged by your bank or payment provider.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                6. Refund Policy
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a 14-day money-back guarantee on all course purchases. To request a refund, you must contact us within 14 days of your purchase date. Refunds will be processed within 5-10 business days.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Refunds may be denied if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>You have completed more than 50% of the course content</li>
                <li>You have violated these Terms and Conditions</li>
                <li>You have previously received a refund for the same course</li>
                <li>The request is made after the 14-day period</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Special promotional offers and discounted courses may have different refund terms, which will be clearly stated at the time of purchase.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                7. User Content and Conduct
              </h2>
              
              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">7.1 User-Generated Content</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you post comments, questions, or other content on our Service, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display that content in connection with the Service.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">7.2 Prohibited Content</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You agree not to post content that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Is illegal, harmful, or offensive</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains viruses or malicious code</li>
                <li>Is spam or promotional content</li>
                <li>Harasses or threatens others</li>
                <li>Contains personal information of others</li>
              </ul>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">7.3 Moderation</h3>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to remove any content that violates these Terms or that we deem inappropriate, without prior notice.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                8. Disclaimers and Limitation of Liability
              </h2>
              
              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">8.1 Educational Purposes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The courses and content provided through the Service are for educational and informational purposes only. While we strive to provide accurate and up-to-date information, we make no guarantees about the results you may achieve.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">8.2 "As Is" Basis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">8.3 No Guarantee of Uninterrupted Service</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not guarantee that the Service will be uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">8.4 Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Curvemedia Studios Ltd, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, resulting from your use of or inability to use the Service. Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                9. Links to Other Websites
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service may contain links to third-party websites or services that are not owned or controlled by Curvemedia Studios Ltd.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such websites or services.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                10. Termination
              </h2>
              
              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">10.1 Termination by Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason whatsoever, including but not limited to if you breach the Terms.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">10.2 Termination by You</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will immediately cease.
              </p>

              <h3 className="text-xl tracking-tight text-gray-900 mb-3 mt-6">10.3 Effect of Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                All provisions of the Terms which by their nature should survive termination shall survive termination, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                11. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Curvemedia Studios Ltd and its licensee and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of the Service, or your violation of these Terms.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                12. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                13. Changes to These Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                14. Severability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                15. Entire Agreement
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
              </p>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                16. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>By email:</strong> ali@curvemedia.uk</li>
                <li><strong>By post:</strong> 4 Beau Street, Bath, England, BA1 1QY</li>
                <li><strong>Via our contact form:</strong> <Link to="/contact" className="text-violet-600 hover:text-violet-700 underline">Contact Page</Link></li>
              </ul>
            </div>

            {/* Privacy Policy Reference */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Privacy Notice:</strong> Your privacy is important to us. Please review our{' '}
                <Link to="/privacy-policy" className="text-violet-600 hover:text-violet-700 underline">
                  Privacy Policy
                </Link>
                {' '}to understand how we collect, use, and protect your personal information.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
