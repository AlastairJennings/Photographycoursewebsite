import { Helmet } from 'react-helmet-async';

export function PrivacyPolicy() {
  return (
    <section className="bg-white">
      <Helmet>
        <title>Privacy Policy - The Photo Course</title>
        <meta name="description" content="Privacy Policy for The Photo Course. Learn how Curvemedia Studios Ltd collects, uses, and protects your personal data." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50" style={{ minHeight: '300px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-4" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="border-t border-gray-200">
        <div className="max-w-[900px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed mb-4">
                Curvemedia Studios Ltd understands that your privacy is important to you and that you care about how your personal data is used. We respect and value the privacy of everyone who visits this website, https://thephotocourse.com ("Our Site") and will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations and your rights under the law.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully and ensure that you understand it. Your acceptance of this Privacy Policy is requested by using or registering an account on Our Site.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                1. Definitions and Interpretation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                In this Policy the following terms shall have the following meanings:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Account</strong> means an account required to access and/or use certain areas and features of Our Site;</li>
                <li><strong>Cookie</strong> means a small text file placed on your computer or device by Our Site when you visit certain parts of Our Site and/or when you use certain features of Our Site;</li>
                <li><strong>Data Protection Legislation</strong> means the UK GDPR and the Data Protection Act 2018.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                2. Information About Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Site is owned and operated by Curvemedia Studios Ltd, a private limited company registered in England and Wales under company number 12953093.
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Registered office address:</strong> 4 Beau Street, Bath, England, BA1 1QY</li>
                <li><strong>Main trading address:</strong> 4 Beau Street, Bath, England, BA1 1QY</li>
                <li><strong>Data Protection Officer:</strong> ali@curvemedia.uk</li>
                <li><strong>Email address:</strong> ali@curvemedia.uk</li>
                <li><strong>Postal address:</strong> 4 Beau Street, Bath, England, BA1 1QY</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                3. What Does This Policy Cover?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy applies only to your use of Our Site. Our Site may contain links to other websites. We have no control over how your data is collected, stored, or used by other websites and we advise you to check the privacy policies of any such websites before providing any data to them.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                4. What Is Personal Data?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Personal data is defined by the Data Protection Legislation as "any information relating to an identifiable person who can be directly or indirectly identified in particular by reference to an identifier".
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                5. What Are Your Rights?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Under the Data Protection Legislation, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Be informed about our collection and use of your personal data.</li>
                <li>Access the personal data we hold about you.</li>
                <li>Have your personal data corrected if it is inaccurate or incomplete.</li>
                <li>Request deletion of your personal data ('right to be forgotten').</li>
                <li>Restrict processing of your personal data.</li>
                <li>Object to our use of your personal data for certain purposes.</li>
                <li>Withdraw consent where we rely on it.</li>
                <li>Data portability.</li>
                <li>Rights relating to automated decision-making and profiling (we do not carry out profiling).</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For more information on how to exercise these rights, see Section 15 below.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                6. What Data Do We Collect and How?
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Data Collected</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">How We Collect the Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Identity information (e.g. name)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">When you register an Account</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Contact information (e.g. email address)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">When you sign up for newsletters or contact us</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Technical information (e.g. IP address)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Automatically via Cookies and server logs</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Profile information (e.g. preferences)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">When you update your Account settings</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Usage data (e.g. pages visited)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Automatically via Cookies</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                7. How Do We Use Your Personal Data?
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Data Used</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Registering and managing your Account</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Identity, contact</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Performance of contract</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Personalising your experience</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Profile, usage</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Legitimate interests (improvement)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Administering our Site and business</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Identity, contact, technical</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Legitimate interests</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Supplying services to you</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Identity, contact, payment</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Performance of contract</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Communicating with you</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Contact</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Consent or legitimate interests</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Marketing (with consent)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Contact, preferences</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Consent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                With your permission, we may also use your data for marketing by email. You may opt out at any time by clicking the unsubscribe link in our emails.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                8. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We will not keep your personal data for longer than is necessary. Typical retention periods are:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Account information: while your Account is active + 2 years</li>
                <li>Transaction records: 6 years (for tax compliance)</li>
                <li>Marketing consents: until withdrawn</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                9. Data Storage and Transfer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All data is stored securely on servers located within the UK. We take technical and organisational measures to protect your data, including encryption, access controls, and regular security reviews.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                10. Sharing Your Data
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We do not share your personal data with third parties except:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Service providers (e.g. payment processors, hosting) under contract to keep data secure.</li>
                <li>Legal obligations (e.g. court order, regulatory requirement).</li>
                <li>Business transfers (e.g. sale of company assets).</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                11. Your Controls
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You can manage your data via your Account settings or by contacting us. To restrict marketing emails, click "unsubscribe" in any marketing communication from us.
              </p>
            </div>

            {/* Section 12 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                12. Withholding Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You may access certain areas of Our Site without providing personal data, but some features (e.g. Account) will require it.
              </p>
            </div>

            {/* Section 13 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                13. Accessing Your Data
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To request a copy of the personal data we hold about you (a subject access request), please write to us at ali@curvemedia.uk or by post to 4 Beau Street, Bath, England, BA1 1QY. We will respond within one month (or up to three months for complex requests).
              </p>
            </div>

            {/* Section 14 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                14. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site uses first-party and third-party Cookies to improve your experience and for analytics. You can manage Cookie preferences via the banner on first visit or your browser settings. For full details, please see our separate Cookie Policy.
              </p>
            </div>

            {/* Section 15 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                15. Contact Us
              </h2>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>Email:</strong> ali@curvemedia.uk</li>
                <li><strong>Postal address:</strong> 4 Beau Street, Bath, England, BA1 1QY</li>
              </ul>
            </div>

            {/* Section 16 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                16. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time (for example, if the law changes). Any changes will be posted on Our Site, and you will be deemed to have accepted them on your first use thereafter.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This Privacy Policy was last updated on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}.
              </p>
            </div>

            {/* Section 17 */}
            <div className="mb-12">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                17. Attribution
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy has been created using a template from Simply-Docs (www.simply-docs.co.uk).
              </p>
            </div>

            {/* Mediavine Section */}
            <div className="mb-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h2 
                className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
                style={{ fontFamily: 'Roslindale, Georgia, serif' }}
              >
                Mediavine Programmatic Advertising (Ver 1.1)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Website works with Mediavine to manage third-party interest-based advertising appearing on the Website. Mediavine serves content and advertisements when you visit the Website, which may use first and third-party cookies. A cookie is a small text file which is sent to your computer or mobile device (referred to in this policy as a "device") by the web server so that a website can remember some information about your browsing activity on the Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                First party cookies are created by the website that you are visiting. A third-party cookie is frequently used in behavioral advertising and analytics and is created by a domain other than the website you are visiting. Third-party cookies, tags, pixels, beacons and other similar technologies (collectively, "Tags") may be placed on the Website to monitor interaction with advertising content and to target and optimize advertising. Each internet browser has functionality so that you can block both first and third-party cookies and clear your browser's cache. The "help" feature of the menu bar on most browsers will tell you how to stop accepting new cookies, how to receive notification of new cookies, how to disable existing cookies and how to clear your browser's cache. For more information about cookies and how to disable them, you can consult the information at All About Cookies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Without cookies you may not be able to take full advantage of the Website content and features. Please note that rejecting cookies does not mean that you will no longer see ads when you visit our Site. In the event you opt-out, you will still see non-personalized advertisements on the Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                The Website collects the following data using a cookie when serving personalized ads:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>IP Address</li>
                <li>Operating System type</li>
                <li>Operating System version</li>
                <li>Device Type</li>
                <li>Language of the website</li>
                <li>Web browser type</li>
                <li>Email (in hashed form)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mediavine Partners (companies listed below with whom Mediavine shares data) may also use this data to link to other end user information the partner has independently collected to deliver targeted advertisements. Mediavine Partners may also separately collect data about end users from other sources, such as advertising IDs or pixels, and link that data to data collected from Mediavine publishers in order to provide interest-based advertising across your online experience, including devices, browsers and apps. This data includes usage data, cookie information, device information, information about interactions between users and advertisements and websites, geolocation data, traffic data, and information about a visitor's referral source to a particular website. Mediavine Partners may also create unique IDs to create audience segments, which are used to provide targeted advertising.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you would like more information about this practice and to know your choices to opt-in or opt-out of this data collection, please visit <a href="https://www.networkadvertising.org/managing/opt_out.asp" className="text-violet-600 hover:text-violet-700 underline" target="_blank" rel="noopener noreferrer">National Advertising Initiative opt out page</a>. You may also visit <a href="https://www.aboutads.info/" className="text-violet-600 hover:text-violet-700 underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance website</a> and <a href="https://www.networkadvertising.org/" className="text-violet-600 hover:text-violet-700 underline" target="_blank" rel="noopener noreferrer">Network Advertising Initiative website</a> to learn more information about interest-based advertising. You may download the AppChoices app at <a href="https://www.youradchoices.com/appchoices" className="text-violet-600 hover:text-violet-700 underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance's AppChoices app</a> to opt out in connection with mobile apps, or use the platform controls on your mobile device to opt out.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For specific information about Mediavine Partners, the data each collects and their data collection and privacy policies, please visit <a href="https://www.mediavine.com/ad-partners/" className="text-violet-600 hover:text-violet-700 underline" target="_blank" rel="noopener noreferrer">Mediavine Partners</a>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
