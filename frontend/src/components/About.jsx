import React from "react";
import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CountingNumber = ({ value, suffix = "+", duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1
        );
        setDisplayValue(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return (
    <motion.h4
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="text-3xl font-bold text-[#00D1FF] mb-1"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {displayValue}
        {suffix}
      </motion.span>
    </motion.h4>
  );
};

const About = () => {
  return (
    <section className="w-full py-20 bg-[#181824]" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <span className="text-sm font-bold tracking-[0.3em] text-[#00D1FF] uppercase mb-4 block">
              Discover Our Story
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
                About Us
              </h2>
            </div>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00D1FF]"></div>
              <div className="w-2 h-2 rounded-full bg-[#00D1FF]"></div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#00D1FF]"></div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
          {/* Left side - Image with heading */}
          <div className="space-y-6">
            <div className="relative pl-5">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00D1FF] to-[#00A3FF] rounded-full"></div>
              <h3 className="text-4xl font-bold text-white mb-3 flex flex-col sm:flex-row sm:items-center gap-2">
                Think Big.{" "}
                <span className="text-[#00D1FF] relative">
                  Move Fast.
                  <span className="absolute -right-4 top-0 w-2 h-2 bg-[#00D1FF] rounded-full animate-ping"></span>
                </span>
              </h3>
              <p className="text-xl text-gray-300 relative">
                We're Here to Make It Happen!
                <span className="absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#00D1FF] rounded-full"></span>
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D1FF] to-[#00A3FF] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="/screen1.jpg"
                alt="About Us"
                className="relative rounded-lg shadow-xl w-full h-[400px] object-cover transform transition duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Right side - Description and Stats */}
          <div className="space-y-6">
            <div className="relative pl-5 mb-6">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#00D1FF] to-[#00A3FF] rounded-full opacity-0"></div>
              <h3 className="text-4xl font-bold text-white mb-3 flex flex-col sm:flex-row sm:items-center gap-2 opacity-0">
                Think Big.{" "}
                <span className="text-[#00D1FF] relative">Move Fast.</span>
              </h3>
              <p className="text-xl text-gray-300 opacity-0">
                We're Here to Make It Happen!
              </p>
            </div>
            <div className="flex flex-col justify-between h-[400px]">
              <p className="text-gray-300 text-lg leading-relaxed">
              At NextEra, we specialize in delivering innovative IT solutions that drive business success. Founded in 2024, we help organizations streamline operations, enhance security, and embrace digital transformation through our expertise in Software Development, UI UX, App Development, and IT consulting].

Our team of skilled professionals is committed to providing high-quality, tailored solutions that meet the unique needs of each client. We prioritize collaboration, transparency, and long-term partnerships, ensuring that our clients are equipped to thrive in a rapidly evolving digital landscape.

Let us help you unlock the potential of technology to accelerate your business growth and achieve your goals.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 rounded-lg bg-[#1E1E2E] border border-[#00D1FF]/20 shadow-lg hover:shadow-[#00D1FF]/20 transition duration-300">
                  <CountingNumber value={30} />
                  <p className="text-gray-300 font-medium text-sm">
                    Total Works
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-[#1E1E2E] border border-[#00D1FF]/20 shadow-lg hover:shadow-[#00D1FF]/20 transition duration-300">
                  <CountingNumber value={1} suffix=" Year" />
                  <p className="text-gray-300 font-medium text-sm">
                    Experience
                  </p>
                </div>
                <div className="text-center p-6 rounded-lg bg-[#1E1E2E] border border-[#00D1FF]/20 shadow-lg hover:shadow-[#00D1FF]/20 transition duration-300">
                  <CountingNumber value={15} />
                  <p className="text-gray-300 font-medium text-sm">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
