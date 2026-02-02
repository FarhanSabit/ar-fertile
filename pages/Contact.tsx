
import React from 'react';
import {
  Mail, MapPin, Phone, Globe, Send, PhoneCall,
  ArrowRight, Instagram, Linkedin, Twitter, Facebook,
  MessageCircle, Clock, Headset, Zap, CheckCircle2
} from 'lucide-react';
import { HOTLINES } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-emerald-700 pt-24 md:pt-32 pb-32 md:pb-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-slate-50 translate-y-1"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-7xl font-black text-emerald-100 mb-4 md:mb-6 tracking-tighter">Let's Connect</h1>
          <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Contact us for wholesale inquiries, partnerships, or technical support for our agricultural products.
          </p>
        </div>
      </section>

      {/* Illustrative Contextual Section 1: Global Reach */}
      <section className="container mx-auto px-4 md:px-6 -mt-24 mb-24 relative z-30">
        <div className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 md:p-20 flex flex-col justify-center">
            <div className="flex items-center space-x-3 text-emerald-600 mb-6">
              <Globe size={28} />
              <span className="font-black uppercase tracking-widest text-xs">Global Strategic Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Worldwide Biotechnology Partnerships</h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8">
              We coordinate with leading manufacturers across China, Asia, and Europe to ensure the highest quality fertilizers and additives reach the heart of Bangladesh's agriculture.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg mb-1 tracking-tight">Technical Support</span>
                {HOTLINES.map((hotline, idx) => (
                  <a key={idx} href={`tel:${hotline.replace(/[^0-9]/g, '')}`} className="text-slate-500 font-bold hover:text-emerald-600 transition-colors block">
                    {hotline}
                  </a>
                ))}
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">35+</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Years Expertise</span>
              </div>
            </div>
          </div>
          <div className="relative bg-emerald-50 h-[400px] lg:h-auto overflow-hidden">
            <img
              src="/assets/portfolio/portfolio-6.jpg"
              alt="Global Logistics and Network Map Representation"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="text-center mb-12 md:mb-16">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-600/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle size={32} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Get in Touch</h2>
                  <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    We are here to assist you. Reach out through any of our direct channels below.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-slate-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all">
                      <MapPin size={28} />
                    </div>
                    <h4 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-3">Our Location</h4>
                    <p className="text-slate-800 font-bold text-lg leading-relaxed">
                      House-51, Flat: A-7 (7th Floor), Rabindra Sarani Road, Sector-3, Uttara, Dhaka-1230, Bangladesh.
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-slate-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all">
                      <PhoneCall size={28} />
                    </div>
                    <h4 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-3">Call Support</h4>
                    <p className="text-slate-800 font-bold text-xl md:text-2xl mb-1 text-emerald-700">+88-02-58951859</p>
                    {HOTLINES.slice(0, 1).map((hotline, idx) => (
                      <p key={idx} className="text-slate-500 font-bold text-lg">{hotline}</p>
                    ))}
                  </div>

                  <div className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
                    <div className="w-16 h-16 bg-slate-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white group-hover:shadow-md transition-all">
                      <Mail size={28} />
                    </div>
                    <h4 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-3">Email Us</h4>
                    <p className="text-slate-800 font-bold text-lg md:text-xl break-all hover:text-emerald-600 transition-colors cursor-pointer">
                      info@arfertile.com
                    </p>
                  </div>
                </div>

                {/* Business Hours Strip */}
                <div className="mt-16 bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6 md:mb-0 relative z-10">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Clock size={24} className="text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-400 text-xs uppercase tracking-widest mb-1">Office Hours</p>
                      <p className="font-black text-xl">Saturday - Thursday</p>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-emerald-500 tracking-tight relative z-10">
                    9:00 AM - 7:00 PM
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Contextual Section 2: Support Rep */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[2rem] md:rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 text-white">
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="/assets/portfolio/portfolio-7.jpg"
                alt="Professional Support Illustration"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-emerald-600/20 backdrop-blur-xl rounded-full flex items-center justify-center animate-pulse">
                  <Headset size={48} className="text-emerald-500" />
                </div>
              </div>
            </div>
            <div className="p-8 md:p-24 flex flex-col justify-center">
              <div className="flex items-center space-x-3 text-emerald-500 mb-6">
                <Headset size={28} />
                <span className="font-black uppercase tracking-widest text-xs">Expert Advisory</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-tight">Dedicated Technical Support Team</h2>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-10">
                Our specialists are available to provide on-site technical advisory, dosage optimization, and soil diagnostics to ensure your success with AR Fertilizer products.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Zap className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <p className="font-black text-sm">Fast Response</p>
                    <p className="text-slate-500 text-xs">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <div>
                    <p className="font-black text-sm">Certified Pros</p>
                    <p className="text-slate-500 text-xs">Expert Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="h-[400px] md:h-[600px] w-full bg-slate-200 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative group border-4 md:border-8 border-white">
            <iframe
              title="AR Fertilizer Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6206110909143!2d90.39530651439071!3d23.86760219020718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4230e6c5687%3A0xbe6a72361efb0bb9!2sRabindra%20Sarani%2C%20Dhaka%201230%2C%20Bangladesh!5e0!3m2!1sen!2sbg!4v1644134617529!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
