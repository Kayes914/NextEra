import React from 'react'

const Contact = () => {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
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
                  rows="5"
                  className="w-full px-4 py-3 rounded-md bg-[#181824] border border-[#00D1FF]/20 
                    text-white focus:outline-none focus:border-[#00D1FF] transition-colors"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00D1FF] to-[#0088FF] 
                  text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00D1FF]/20 
                  transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 