import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

const Hero = () => {
  const canvasRef = useRef(null);

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

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#181824] px-4 sm:px-6" id="home">
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#181824]/50 to-[#181824]/90" />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] via-white to-[#00D1FF]">
            Innovating Beyond Boundaries
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
            We craft innovative digital solutions that help businesses thrive in the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <motion.a 
              href="#services" 
              className="px-8 py-4 bg-gradient-to-r from-[#00D1FF] to-[#0088FF] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00D1FF]/20 transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 border-2 border-[#00D1FF] text-[#00D1FF] font-semibold rounded-full hover:bg-[#00D1FF]/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get Started
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="mt-12 sm:mt-20 flex justify-center gap-6 sm:gap-8">
            {[
              { icon: FaGithub, href: 'https://github.com/yourusername' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/company/nextera-inc' },
              { icon: FaFacebookF, href: 'https://www.facebook.com/nexterax/' },
              { icon: FaWhatsapp, href: 'https://wa.me/+8801309011154' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-[#00D1FF] hover:text-white transform hover:scale-110 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3">
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-2 h-2 bg-[#00D1FF] rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-2 h-2 bg-[#00D1FF] rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-2 h-2 bg-[#00D1FF] rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero 