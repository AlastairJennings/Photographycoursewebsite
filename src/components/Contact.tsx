import { useState, FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Using Formspree - a free form backend service
      // To activate: Sign up at formspree.io and replace 'YOUR_FORM_ID' with your actual form ID
      const response = await fetch('https://formspree.io/f/xdkoqajv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _to: 'ali@curvemedia.uk'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Sorry, there was an error sending your message. Please try again later or use one of our social media channels.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-white">
      <Helmet>
        <title>Contact Us - The Photo Course</title>
        <meta name="description" content="Get in touch with The Photo Course. Whether you have questions about our courses, need technical support, or want to provide feedback, we're here to help." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50" style={{ minHeight: '300px' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 mb-4" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Have a question about our courses? Need technical support? We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                <h2 
                  className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-6" 
                  style={{ fontFamily: 'Roslindale, Georgia, serif' }}
                >
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject...</option>
                      <option value="General - The Photo Course">General - The Photo Course</option>
                      <option value="Advertising - The Photo Course">Advertising - The Photo Course</option>
                      <option value="Suggestions - The Photo Course">Suggestions - The Photo Course</option>
                      <option value="Work with us - The Photo Course">Work with us - The Photo Course</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all resize-y"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Success Message */}
                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h3>
                        <p className="text-sm text-green-700">Thank you for contacting us. We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-red-900 mb-1">Error Sending Message</h3>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg font-medium hover:from-violet-700 hover:to-fuchsia-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-3"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. We'll respond within 24-48 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200 p-8">
                <h2 
                  className="text-xl sm:text-2xl tracking-tight text-gray-900 mb-6" 
                  style={{ fontFamily: 'Roslindale, Georgia, serif' }}
                >
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <MapPin className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-sm text-gray-600">
                        New Forest, UK
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
                <h2 
                  className="text-xl sm:text-2xl tracking-tight text-gray-900 mb-4" 
                  style={{ fontFamily: 'Roslindale, Georgia, serif' }}
                >
                  Quick Answers
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Looking for quick answers? Check out our frequently asked questions.
                </p>
                <a 
                  href="/about"
                  className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors text-sm"
                >
                  Visit FAQ Section
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl border border-blue-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please mark your subject line as "Urgent".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 
              className="text-2xl sm:text-3xl tracking-tight text-gray-900 mb-4" 
              style={{ fontFamily: 'Roslindale, Georgia, serif' }}
            >
              Other Ways to Connect
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Join our community and stay updated with the latest photography tips, course updates, and announcements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-violet-600 hover:text-violet-600 transition-all font-medium"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-violet-600 hover:text-violet-600 transition-all font-medium"
              >
                Twitter
              </a>
              <a 
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-violet-600 hover:text-violet-600 transition-all font-medium"
              >
                Facebook
              </a>
              <a 
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-violet-600 hover:text-violet-600 transition-all font-medium"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}