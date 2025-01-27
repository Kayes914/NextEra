import React, { useState } from 'react'
import { FaCode, FaMobile, FaPaintBrush, FaPalette, FaChartLine, FaVideo } from 'react-icons/fa'
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, 
  SiPhp, SiBootstrap, SiMysql, SiMongodb, SiNodedotjs,
  SiKotlin, SiAndroidstudio, SiFirebase, SiFlutter,
  SiFigma, SiAdobexd, SiSketch,
  SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobeaftereffects,
  SiGoogleanalytics, SiMailchimp, SiHubspot, SiGoogleads, SiWordpress,
  SiAdobepremierepro, SiBlender, SiAdobeaudition
} from 'react-icons/si'
import { FiMonitor, FiDatabase, FiShoppingBag, FiSettings, FiLayers, FiSmartphone } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'

const Services = () => {
  const [selectedService, setSelectedService] = useState("Web")

  // Main service categories
  const services = [
    { title: "Web", icon: FaCode },
    { title: "Mobile App", icon: FaMobile },
    { title: "UI/UX", icon: FaPaintBrush },
    { title: "Graphic Design", icon: FaPalette },
    { title: "Digital Marketing", icon: FaChartLine },
    { title: "Video Editing", icon: FaVideo }
  ]

  // Services for each category
  const servicesList = {
    Web: [
      "Frontend Development",
      "Backend Development",
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "API Development & Integration",
      "Web Maintenance & Support",
      "Progressive Web Apps (PWA)"
    ],
    "Mobile App": [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Development",
      "UI/UX Design for Mobile",
      "App Testing & QA",
      "App Store Deployment",
      "Performance Optimization",
      "API Integration"
    ],
    "UI/UX": [
      "User Research",
      "Wireframing",
      "Prototyping",
      "User Interface Design",
      "User Experience Design",
      "Interaction Design",
      "Usability Testing",
      "Design Systems"
    ],
    "Graphic Design": [
      "Logo Design",
      "Brand Identity",
      "Print Design",
      "Social Media Graphics",
      "Marketing Materials",
      "Packaging Design",
      "Illustration",
      "Motion Graphics"
    ],
    "Digital Marketing": [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising",
      "Analytics & Reporting",
      "Brand Strategy",
      "Market Research"
    ],
    "Video Editing": [
      "Video Post-Production",
      "Motion Graphics",
      "Color Correction",
      "Sound Editing",
      "Visual Effects",
      "Video Optimization",
      "Format Conversion",
      "Content Repurposing"
    ]
  }

  // Tech stacks for each category
  const techStacks = {
    Web: [
      { icon: SiReact, name: "React.js" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiPhp, name: "PHP" },
      { icon: SiBootstrap, name: "Bootstrap" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiNodedotjs, name: "Node.js" }
    ],
    "Mobile App": [
      { icon: SiReact, name: "React Native" },
      { icon: SiFlutter, name: "Flutter" },
      { icon: SiKotlin, name: "Kotlin" },
      { icon: SiFirebase, name: "Firebase" },
      { icon: SiAndroidstudio, name: "Android Studio" }
    ],
    "UI/UX": [
      { icon: SiFigma, name: "Figma" },
      { icon: SiAdobexd, name: "Adobe XD" },
      { icon: SiSketch, name: "Sketch" },
      { icon: SiAdobeillustrator, name: "Illustrator" },
      { icon: SiAdobephotoshop, name: "Photoshop" }
    ],
    "Graphic Design": [
      { icon: SiAdobephotoshop, name: "Photoshop" },
      { icon: SiAdobeillustrator, name: "Illustrator" },
      { icon: SiAdobeindesign, name: "InDesign" },
      { icon: SiAdobeaftereffects, name: "After Effects" },
      { icon: SiFigma, name: "Figma" }
    ],
    "Digital Marketing": [
      { icon: SiGoogleanalytics, name: "Google Analytics" },
      { icon: SiMailchimp, name: "Mailchimp" },
      { icon: SiHubspot, name: "HubSpot" },
      { icon: SiGoogleads, name: "Google Ads" },
      { icon: SiWordpress, name: "WordPress" }
    ],
    "Video Editing": [
      { icon: SiAdobepremierepro, name: "Premiere Pro" },
      { icon: SiAdobeaftereffects, name: "After Effects" },
      { icon: SiBlender, name: "Blender" },
      { icon: SiAdobeaudition, name: "Adobe Audition" }
    ]
  }

  const renderServiceContent = () => {
    // Add this images mapping object inside renderServiceContent
    const serviceImages = {
      'Web': '/images/services/web.png',
      'Mobile App': '/images/services/app.png',
      'UI/UX': '/images/services/ui ux.png',
      'Graphic Design': '/images/services/graphic.png',
      'Digital Marketing': '/images/services/marketing.png',
      'Video Editing': '/images/services/video.png'
    };

    switch(selectedService) {
      case 'Web':
        return (
          <>
            {/* Left Column */}
            <div className="space-y-8">
              {/* Header Section */}
              <div>
                <h3 className="text-3xl font-bold text-white">
                  Web Application <span className="text-[#00D1FF]">Development</span>
                </h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Custom, scalable, and secure web solutions for your business
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-8">
                {servicesList.Web.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                  >
                    <BsCheckCircle className="text-[#00D1FF] text-lg flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-[#00D1FF] rounded-full"></div>
                    <h4 className="text-white font-medium">Tech Stack</h4>
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D1FF]/10 to-transparent"></div>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {techStacks.Web.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1E1E2E] rounded-full
                        border border-[#00D1FF]/10 text-sm sm:text-base"
                    >
                      <tech.icon className="text-[#00D1FF] text-lg" />
                      <span className="text-sm text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex items-center justify-center w-full">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={serviceImages['Web']}
                  alt="Web Development"
                  className="w-full h-full object-contain p-4 sm:p-8"
                />
              </div>
            </div>
          </>
        );

      case 'Mobile App':
      case 'UI/UX':
      case 'Graphic Design':
      case 'Digital Marketing':
      case 'Video Editing':
        const titles = {
          'Mobile App': 'Mobile App Development',
          'UI/UX': 'UI/UX Design',
          'Graphic Design': 'Graphic Design',
          'Digital Marketing': 'Digital Marketing',
          'Video Editing': 'Video Production'
        };

        const descriptions = {
          'Mobile App': 'iOS and Android mobile applications with cutting-edge technology',
          'UI/UX': 'User-centered design solutions for digital products',
          'Graphic Design': 'Creative visual solutions for your brand identity',
          'Digital Marketing': 'Strategic digital marketing solutions to grow your business',
          'Video Editing': 'Professional video editing and post-production services'
        };

        return (
          <>
            {/* Left Column */}
            <div className="space-y-8">
              {/* Header Section */}
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {titles[selectedService]}
                </h3>
                <p className="text-gray-400 mt-3 text-sm">
                  {descriptions[selectedService]}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-8">
                {servicesList[selectedService].map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3"
                  >
                    <BsCheckCircle className="text-[#00D1FF] text-lg flex-shrink-0" />
                    <span className="text-gray-300 text-sm">
                      {service}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-[#00D1FF] rounded-full"></div>
                    <h4 className="text-white font-medium">Tech Stack</h4>
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D1FF]/10 to-transparent"></div>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {techStacks[selectedService].map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#1E1E2E] rounded-full
                        border border-[#00D1FF]/10 text-sm sm:text-base"
                    >
                      <tech.icon className="text-[#00D1FF] text-lg" />
                      <span className="text-sm text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex items-center justify-center w-full">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-2xl">
                <img 
                  src={serviceImages[selectedService]}
                  alt={titles[selectedService]}
                  className="w-full h-full object-contain p-4 sm:p-8"
                />
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  }

  return (
    <section className="w-full py-16 bg-[#181824]" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12 px-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service.title)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base transition-all duration-300 border
                ${selectedService === service.title 
                  ? 'bg-[#00D1FF] text-white border-[#00D1FF]' 
                  : 'bg-[#1E1E2E] text-white border-[#00D1FF]/20 hover:bg-[#00D1FF] hover:border-[#00D1FF]'
                }`}
            >
              <service.icon className={`${selectedService === service.title ? 'text-white' : 'text-[#00D1FF] group-hover:text-white'}`} />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {selectedService && (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-8">
            {renderServiceContent()}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services 