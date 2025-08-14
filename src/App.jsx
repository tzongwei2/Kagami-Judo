import React, { useState, useEffect } from 'react';
import { User, Menu, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function JudoSchoolWebsite() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const slides = [
    {
      image: "/IMG_9069.jpeg",
      alt: "Judo Training Session",
      title: "Little Tigers"
    },
    { 
      image: "/IMG_0998.jpeg",
      alt: "Kagami Judo Logo",
      title: "Our Students"
    },
    {
      image: "/IMG_9068.jpeg",
      alt: "Judo Competition",
      title: "Competition Excellence"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src="KGM Tiger (white.png).png"
                  alt="Kagami Judo Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">BEGINNING</a>
              <a href="#trainers" className="hover:text-yellow-400 transition-colors">Our Trainers</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact Us</a>
            </div>

            {/* Desktop Register Button & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden"
                onClick={toggleMobileMenu}
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors py-2 px-4 rounded"
                  onClick={closeMobileMenu}
                >
                  BEGINNING
                </a>
                <a
                  href="#trainers"
                  className="hover:text-yellow-400 transition-colors py-2 px-4 rounded"
                  onClick={closeMobileMenu}
                >
                  Our Trainers
                </a>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition-colors py-2 px-4 rounded"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-4 sm:py-6 lg:py-16 pb-8 sm:pb-12 lg:pb-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="lg:w-1/2 mb-8 sm:mb-12 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                <img
                  src="KGM Judo Logo (black.png).png"
                  alt="Kagami Judo Logo"
                  className="w-full h-full object-contain"
                />
              </h1>
              <p className="text-gray-600 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base">
                Welcome to Kagami Judo, Reflection fuels Progression🥋
                Kagami Judo is Singapore’s only Judo club focused exclusively on kids. Judo is more than a sport — it’s a way to build character, confidence, and discipline.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScqRBEg53Cn9LEzYLr_OkWgwmsvdDJHl1BgkJXEdZuEBgEi1g/viewform?fbclid=PAZXh0bgNhZW0CMTEAAaeg6yYdfHnxihPRdbCU4BNY-NjrfKv1_Yx3uFs5bv-Uu3_NCIJhYeodtCmSkA_aem_iVLi_e6epZ2m2C9rWS5Mow"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base text-center"
                >
                  REGISTER
                </a>
                <a
                  href="https://wa.me/6584089935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <img
                    src="/whatsapp-logo-transparent.png"
                    alt="WhatsApp"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 relative w-full">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Slideshow Container */}
                  <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' :
                            'opacity-0 scale-105'
                          }`}
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="w-full h-full object-cover"
                        />
                        {/* Enhanced Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Slide Title with enhanced styling */}
                        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 drop-shadow-lg">{slide.title}</h3>
                          <div className="w-12 sm:w-14 lg:w-16 h-1 sm:h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-2.5 lg:p-3 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-110"
                  >
                    <ChevronLeft size={18} className="sm:hidden" />
                    <ChevronLeft size={20} className="hidden sm:block lg:hidden" />
                    <ChevronLeft size={24} className="hidden lg:block" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 sm:p-2.5 lg:p-3 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-110"
                  >
                    <ChevronRight size={18} className="sm:hidden" />
                    <ChevronRight size={20} className="hidden sm:block lg:hidden" />
                    <ChevronRight size={24} className="hidden lg:block" />
                  </button>

                  {/* Enhanced Slide Indicators */}
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 hover:scale-125 ${index === currentSlide
                            ? 'w-6 sm:w-7 lg:w-8 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg'
                            : 'w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-white/60 hover:bg-white/80 rounded-full'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="bg-black h-1"></div>

      {/* Trainers Section */}
      <section id="trainers" className="bg-black py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Our <span className="text-yellow-400">Trainers</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-justify leading-relaxed text-base">
              Led by national athletes and certified coaches with backgrounds in Sports Coaching and Sports Science, we’re here to help your child grow on and off the mat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {/* Trainer 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative ">
                <div className="w-full aspect-[5/3] bg-gray-200 flex items-center justify-center">
                  <img
                    src="/jiayao.jpeg"
                    alt="Master Sensei"
                    className="h-full w-full object-cover object-[55%_15%] mx-auto"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Head Coach & Founder
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-1">Jia Yao</h3>
                <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 pl-2">
                  <li>Kodokan-certified 2nd Dan black belt 🥋</li>
                  <li>Former national Judo athlete</li>
                  <li>Graduate in Sports Coaching</li>
                  <li>Over 10 years of Judo experience</li>
                  <li>Certified under Singapore Judo Federation (SJF), MOE, and NROC</li>
                  <li>Combines technical skill with a passion for child development</li>
                </ul>
              </div>
            </div>

            {/* Trainer 2 */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <div className="w-full aspect-[5/3] bg-gray-200 flex items-center justify-center">
                  <img
                    src="/james.jpeg"
                    alt="Master Sensei"
                    className="h-full w-full object-cover object-[55%_15%] mx-auto"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Lead Coach & Co-Founder
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black mb-1">James Wong</h3>
                <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 pl-2">
                  <li>Current National Judo athlete</li>
                  <li>Diploma in Sports Science</li>
                  <li>Experienced in coaching kids of various ages</li>
                  <li>Brings energy, care, and structure to every class</li>
                </ul>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* Elegant Separator */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <section id="contact" className="bg-black text-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Contact <span className="text-yellow-400">Us</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get in touch with us today to learn more about our programs and kickstart your little one's judo journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Information and Social Media Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-300">
                        Sulacademy, 60 Lor 23 Geylang<br />
                        #06-01<br />
                        Singapore 388384
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ">
                      <span className="text-white text-lg">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">info@kagamijudo.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-black text-sm">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Class Hours</h4>
                      <p className="text-gray-300">
                        Saturdays, 3:00–4:00 PM<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6584089935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/whatsapp-logo-transparent.png"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-gray-300">84089935</p>
                  </div>
                </a>
                 <a
                  href="https://wa.me/6587516033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
                >
                     <div className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  
                  </div>
                    <p className="text-gray-300">87516033</p>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/kagamijudo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 mt-8 hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <img
                      src="/Instagram-Logo-PNG-Image-1.png"
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-1 mb-4">
            <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
              <img
                src="/KGM Tiger (white.png).png"
                alt="Kagami Judo Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-white">KagamiJudo</span>
          </div>
          <p className="mb-4">Dedicated to excellence in martial arts training and character development.</p>
          <p className="text-sm">&copy; 2025 Kagami Judo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}