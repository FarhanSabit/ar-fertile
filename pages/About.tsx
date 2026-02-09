
import React, { useEffect, useRef, useState } from 'react';
import { Target, Eye, Shield, Globe, Flag, Factory, TrendingUp, Zap, Mail, Linkedin, Twitter } from 'lucide-react';
import { TEAM, MILESTONES, PARTNER_DETAILS } from '../constants';

const TimelineItem: React.FC<{ milestone: typeof MILESTONES[0], index: number }> = ({ milestone, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (itemRef.current) observer.unobserve(itemRef.current);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const IconMap: any = { Flag, Globe, Factory, TrendingUp, Zap };
  const Icon = IconMap[milestone.icon] || Flag;

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 w-full transition-all duration-1000 ease-out ${isVisible
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-20 scale-95'
        } ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="hidden md:block w-5/12"></div>
      <div className={`z-20 flex items-center order-1 bg-emerald-600 shadow-2xl w-16 h-16 rounded-full border-4 border-white transition-all duration-700 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`}>
        <Icon className="mx-auto text-white" size={28} />
      </div>
      <div className={`order-1 bg-white rounded-[2.5rem] shadow-xl w-full md:w-5/12 px-10 py-10 border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${index % 2 === 0 ? 'text-right' : 'text-left'
        }`}>
        <span className="text-emerald-600 font-black text-3xl block mb-3 group-hover:scale-110 transition-transform origin-left">{milestone.year}</span>
        <h4 className="mb-4 font-black text-slate-900 text-2xl tracking-tight">{milestone.title}</h4>
        <p className="text-slate-600 leading-relaxed text-lg font-medium">{milestone.description}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineActive, setLineActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLineActive(true);
      },
      { threshold: 0.1 }
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero Header */}
      <section className="bg-slate-700 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600/10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-in fade-in slide-in-from-top-8 duration-1000">Our Legacy & Mission</h1>
          <p className="text-emerald-200 text-xl max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Pioneering agricultural excellence through innovation and global partnerships since 2010.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Journey</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">About AR Fertilizer Limited</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  We are a young and innovative company with a strong presence in the global fertilizer and feed additives business within the Bangladesh market.
                </p>
                <p>
                  Under the leadership of Mr. Atiar Rahman, who possesses over 35 years of vast knowledge in the agricultural sector, we have established a legacy of trust and excellence.
                </p>
                <div className="pt-8 mt-8 border-t border-slate-100">
                  <p className="text-slate-600 italic mb-6 leading-relaxed font-medium">
                    "{TEAM[0].bio}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img src={TEAM[0].image} alt={TEAM[0].name} className="w-16 h-16 rounded-2xl object-cover shadow-lg border-2 border-white" />
                    <div>
                      <p className="font-black text-slate-900 leading-none">{TEAM[0].name}</p>
                      <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mt-1">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="space-y-6 sm:mt-12">
                <img src="/assets/about.jpg" alt="Facility Gate" className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-square hover:scale-[1.02] transition-transform" />
                <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-4xl font-black mb-1">2010</h4>
                  <p className="font-bold uppercase tracking-widest text-sm text-emerald-100">Year Founded</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                  <h4 className="text-4xl font-black mb-1">GMP</h4>
                  <p className="font-bold uppercase tracking-widest text-sm text-slate-400">Quality Standards</p>
                </div>
                <img src="/assets/portfolio/portfolio-5.jpg" alt="Production Unit" className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-square hover:scale-[1.02] transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Client Feedback</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Voices of Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "AR Fertilizer has been our trusted partner for over 5 years. Their Solubor Boron significantly improved our crop yield.",
                author: "Rahim Uddin",
                role: "Proprietor, Rahim Agro Farm",
                location: "Rajshahi"
              },
              {
                text: "The quality of their Zinc Sulphate is unmatched in the market. We highly recommend their products for better farming results.",
                author: "Abdul Karim",
                role: "Managing Director, Green Valley",
                location: "Bogura"
              },
              {
                text: "Excellent technical support and timely delivery. Their team truly understands the needs of modern farmers.",
                author: "Md. Sohel Rana",
                role: "CEO, Rana Poultry & Feed",
                location: "Gazipur"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-emerald-100 flex flex-col relative">
                <div className="text-emerald-500 mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-lg italic mb-8 flex-grow leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider">{testimonial.role}</p>
                    <p className="text-slate-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Milestones of Growth</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">A decade of commitment to agricultural excellence and national prosperity.</p>
          </div>

          <div ref={lineRef} className="relative wrap overflow-hidden p-10 h-full max-w-5xl mx-auto">
            <div
              className={`absolute border-emerald-600 border-l-4 left-4 md:left-1/2 -translate-x-1/2 rounded-full transition-all duration-[2000ms] ease-in-out ${lineActive ? 'h-full opacity-20' : 'h-0 opacity-0'
                }`}
            ></div>
            {MILESTONES.map((milestone, idx) => (
              <TimelineItem key={idx} milestone={milestone} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Slider Section */}
      <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Partners</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Trusted by Industry Leaders</h2>
        </div>

        {/* Infinite Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-12 md:gap-24 items-center">
            {/* Duplicating the list to create a seamless infinite loop */}
            {[...PARTNER_DETAILS, ...PARTNER_DETAILS].map((partner, idx) => (
              <div key={idx} className="flex-shrink-0 group relative">
                <div className="w-48 h-32 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center p-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:border-emerald-100">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="text-sm font-bold text-center whitespace-normal">{partner.name}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide high-quality biotechnology and mineral additives that ensure national food security and agricultural prosperity.", color: "bg-emerald-500" },
              { icon: Eye, title: "Our Vision", desc: "To be the leading innovator in Asian agricultural care, known for integrity, sustainability, and quality.", color: "bg-teal-500" },
              { icon: Shield, title: "Our Values", desc: "Global standards, local integrity, and a commitment to serving the backbone of our nation's agriculture.", color: "bg-emerald-600" }
            ].map((box, idx) => (
              <div key={idx} className="bg-slate-800/40 backdrop-blur-md p-12 rounded-[3.5rem] border border-slate-700/50 text-center hover:bg-slate-800/60 transition-all hover:-translate-y-2">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl ${box.color}`}>
                  <box.icon size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">{box.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >
  );
};

export default About;
