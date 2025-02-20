import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await emailjs.send(
        'service_0mdwfwk',
        'template_z1a0ki4',
        {
          user_name: formData.name,
          user_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'eWlNTDt-6h5YJUFx0'
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-[#181824]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-[#00D1FF]">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about it. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1E1E2E]/50 backdrop-blur-sm rounded-lg p-8 border border-[#00D1FF]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#181824] border border-[#00D1FF]/20 
                      text-white focus:outline-none focus:border-[#00D1FF] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-[#181824] border border-[#00D1FF]/20 
                      text-white focus:outline-none focus:border-[#00D1FF] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-white mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md bg-[#181824] border border-[#00D1FF]/20 
                    text-white focus:outline-none focus:border-[#00D1FF] transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md bg-[#181824] border border-[#00D1FF]/20 
                    text-white focus:outline-none focus:border-[#00D1FF] transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.submitted && (
                <div className="text-green-400 text-sm">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status.error && (
                <div className="text-red-400 text-sm">
                  {status.error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00D1FF] to-[#0088FF] 
                  text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00D1FF]/20 
                  transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70
                  disabled:cursor-not-allowed disabled:transform-none"
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 