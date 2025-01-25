import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ name, position, company, image, testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative ${index % 3 === 1 ? 'mt-12' : ''}`}
    >
      {/* Main Card */}
      <div className="relative bg-[#1E1E2E] rounded-2xl p-8 transition-transform duration-300 group-hover:translate-z-10">
        {/* Quote Icon with Gradient Background */}
        <div className="absolute -top-5 -left-2 w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00D1FF] to-[#00A3FF] rounded-xl rotate-12 opacity-50 group-hover:rotate-0 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-[#1E1E2E] rounded-xl flex items-center justify-center">
            <FaQuoteLeft className="text-[#00D1FF] text-xl" />
          </div>
        </div>

        {/* Client Info */}
        <div className="flex items-center gap-4 mb-6 mt-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden transform -rotate-6 group-hover:rotate-0 transition-transform duration-300 ring-2 ring-[#00D1FF]/20">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-xl">{name}</h4>
            <p className="text-[#00D1FF] font-medium">{position}</p>
            <p className="text-gray-400 text-sm">{company}</p>
          </div>
        </div>

        {/* Testimonial */}
        <p className="text-gray-300 text-lg leading-relaxed">
          {testimonial}
        </p>

        {/* Decorative Corner */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#00D1FF]/10 to-transparent rounded-br-2xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
      </div>

      {/* Background Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#00D1FF]/0 via-[#00D1FF]/5 to-[#00A3FF]/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      name: "Tahasin Morshed",
      position: "Founder & CEO",
      company: "SkillWaveIT",
      image: "/images/testimonials/client1.jpg",
      testimonial: "Working with NextEra has been transformative for our business. Their innovative solutions and attention to detail have helped us achieve remarkable growth. The team's expertise and dedication are truly exceptional."
    },
    {
      name: "NEYAZ NAFIZ",
      position: "COO",
      company: "BitLaab",
      image: "/images/testimonials/client2.jpg",
      testimonial: "The level of technical expertise and creativity that NextEra brings to the table is outstanding. They've helped us modernize our entire digital infrastructure while maintaining seamless operations."
    },
    {
      name: "Shuvo Isleem",
      position: "Managing Director",
      company: "Happiest Period",
      image: "/images/testimonials/client3.jpg",
      testimonial: "NextEra's approach to digital solutions is refreshingly innovative. They don't just deliver what you ask for – they anticipate future needs and build scalable solutions that grow with your business."
    }
  ]

  return (
    <section className="w-full py-20 bg-[#181824] overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center relative mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <span className="text-sm font-bold tracking-[0.3em] text-[#00D1FF] uppercase mb-4 block">
              Client Reviews
            </span>
            <div className="relative">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D1FF]/20">
                <div className="absolute inset-1 rounded-full bg-[#00D1FF] animate-ping"></div>
                <div className="absolute inset-1 rounded-full bg-[#00D1FF]"></div>
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#00D1FF]/20">
                <div className="absolute inset-1 rounded-full bg-[#00D1FF] animate-ping"></div>
                <div className="absolute inset-1 rounded-full bg-[#00D1FF]"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white">
                Testimonials
              </h2>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00D1FF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#00D1FF]"></div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00D1FF]"></div>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 