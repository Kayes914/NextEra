import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

// Add this initialization
emailjs.init("eWlNTDt-6h5YJUFx0");

const Contact = () => {
  const canvasRef = useRef(null);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let particleCount = 100;
    const maxParticles = 150;
    const particleAddInterval = 100; // Add particles every 100ms
    let lastParticleAddTime = 0;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsla(${190 + Math.random() * 20}, 100%, 70%, ${Math.random() * 0.5 + 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.01;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      const currentTime = Date.now();
      
      // Add particles gradually
      if (particleCount < maxParticles && currentTime - lastParticleAddTime > particleAddInterval) {
        particles.push(new Particle());
        particleCount++;
        lastParticleAddTime = currentTime;
      }

      ctx.fillStyle = 'rgba(24, 24, 36, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // These should match your EmailJS configuration
    const serviceId = 'service_0mdwfwk';
    const templateId = 'template_y1uzc2q';
    const publicKey = 'eWlNTDt-6h5YJUFx0';

    emailjs.send(serviceId, templateId, {
      from_name: form.current.user_name.value,
      to_name: "Nextera Team",
      from_email: form.current.user_email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    }, publicKey)
    .then((result) => {
      console.log("SUCCESS!", result.text);
      setStatus({
        show: true,
        success: true,
        message: 'Message sent successfully!'
      });
      form.current.reset();
    })
    .catch((error) => {
      console.log("FAILED...", error.text);
      setStatus({
        show: true,
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => {
        setStatus({ show: false, success: false, message: '' });
      }, 5000);
    });
  };

  return (
    <div className="relative min-h-screen bg-[#181824] pt-20">
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#181824]/50 to-[#181824]/90" />

      {/* Content */}
      <div className="relative z-10">
        {/* Go Back Button */}
        <div className="container mx-auto px-4 pt-4">
          <Link
            to="/"
            className="group inline-flex items-center px-4 py-2 rounded-md 
              bg-white/5 hover:bg-white/10 border border-white/10 
              transition-all duration-300 hover:border-[#00D1FF]/50"
          >
            <svg 
              className="w-5 h-5 mr-2 text-[#00D1FF] transform transition-transform 
                group-hover:-translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="text-gray-300 group-hover:text-[#00D1FF] font-medium">
              Back to Home
            </span>
          </Link>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-[2.8rem] font-bold text-white mb-3">Get In Touch</h1>
              <p className="text-gray-300 text-lg">
                Have a project in mind? Let's talk about it.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-7">
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="user_name" className="block text-white mb-1.5 text-base">
                          Name
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          id="user_name"
                          required
                          className="w-full px-3.5 py-2.5 rounded-md bg-white/10 border border-gray-600 
                            text-white focus:outline-none focus:border-[#00D1FF] transition-colors text-base"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="user_email" className="block text-white mb-1.5 text-base">
                          Email
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          required
                          className="w-full px-3.5 py-2.5 rounded-md bg-white/10 border border-gray-600 
                            text-white focus:outline-none focus:border-[#00D1FF] transition-colors text-base"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-white mb-1.5 text-base">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        className="w-full px-3.5 py-2.5 rounded-md bg-white/10 border border-gray-600 
                          text-white focus:outline-none focus:border-[#00D1FF] transition-colors text-base"
                        placeholder="Project Discussion"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-white mb-1.5 text-base">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="5"
                        className="w-full px-3.5 py-2.5 rounded-md bg-white/10 border border-gray-600 
                          text-white focus:outline-none focus:border-[#00D1FF] transition-colors text-base"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    {/* Status Message */}
                    {status.show && (
                      <div className={`p-3 rounded-md ${status.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                        {status.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-[#00D1FF] to-[#00A3FF] 
                          text-white rounded-md font-medium text-base hover:shadow-lg transform hover:scale-[1.02] 
                          transition-all duration-300 active:scale-[0.98] group relative overflow-hidden
                          disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10">
                          {loading ? 'Sending...' : 'Send Message'}
                        </span>
                        <div 
                          className="absolute inset-0 -translate-x-full hover:translate-x-full 
                          bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5">
                  <div className="text-[#00D1FF] mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-1.5 text-base">Phone</h3>
                  <p className="text-gray-300 text-base">+8801309011154</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5">
                  <div className="text-[#00D1FF] mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-1.5 text-base">Email</h3>
                  <p className="text-gray-300 text-base">contact@nextera.com</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5">
                  <div className="text-[#00D1FF] mb-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-1.5 text-base">Location</h3>
                  <p className="text-gray-300 text-base">Dhaka,Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 