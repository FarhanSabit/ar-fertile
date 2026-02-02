
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award, Zap, ShieldCheck, Globe, ArrowRight,
  TrendingUp, Leaf, Droplets, Users, Package,
  CheckCircle2, ShoppingBag, MessageSquare
} from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { PRODUCTS, TEAM, PARTNER_DETAILS } from '../constants';
import { Category } from '../types';

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const categories = ['All', ...Object.values(Category)];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS.slice(0, 8)
    : PRODUCTS.filter(p => p.category === activeCategory).slice(0, 8);

  return (
    <div className="overflow-hidden">
      <HeroSlider />

      {/* Feature Section */}
      <section className="py-12 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <span className="text-brand-maroon font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Biotechnology for Modern Farming</h2>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg font-medium">
              We provide science-backed solutions designed to optimize crop yield across Bangladesh's agricultural sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Premium Quality", desc: "Rigorous ISO-compliant testing ensures only the highest grade materials reach your farm." },
              { icon: Zap, title: "Biotech Innovation", desc: "Utilizing advanced enzyme technology from world leaders like VTR Bio-Tech." },
              { icon: ShieldCheck, title: "Trusted Advice", desc: "Consultancy from industry leaders with over 35 years of agricultural leadership." },
              { icon: Globe, title: "Global Partners", desc: "Strategic alliances with Sichuan Chanhen and Esigma for best-in-class mineral sources." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-brand-maroon/30 shadow-sm hover:shadow-2xl hover:shadow-brand-maroon/10 hover:-translate-y-2 transition-all group">
                <div className="w-16 h-16 bg-brand-maroon/5 text-brand-maroon rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-brand-maroon group-hover:to-brand-maroon-dark group-hover:text-white transition-all duration-500">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase (Replaced Partners) */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-8">
            <div className="max-w-xl text-center md:text-left w-full">
              <span className="text-brand-maroon font-bold tracking-widest uppercase text-sm mb-4 block">Featured Showcase</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">High-Performance Products</h2>

              {/* Category Filter - Optimized for 756px threshold */}
              <div className="mt-8">
                <div className="flex flex-nowrap items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-4 min-[756px]:pb-0 min-[756px]:overflow-x-visible">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat as any)}
                      className={`px-3 py-1.5 min-[756px]:px-5 min-[756px]:py-2.5 rounded-full text-[8px] min-[756px]:text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all shrink-0 ${activeCategory === cat
                          ? 'bg-brand-maroon text-white shadow-lg shadow-brand-maroon/20 scale-105'
                          : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-200 hover:border-brand-maroon/30'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/products" className="group flex items-center space-x-2 text-brand-maroon font-bold text-lg shrink-0">
              <span>View Full Catalog</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products?id=${product.id}`}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-brand-maroon transition-colors leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-brand-maroon font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Details <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
            <div className="max-w-xl text-center md:text-left w-full">
              <span className="text-brand-maroon font-bold tracking-widest uppercase text-sm mb-4 block">Product Categories</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Advanced Nutrition for Excellence</h2>
            </div>
            <Link to="/products" className="group relative flex items-center justify-center md:justify-start space-x-2 text-brand-maroon font-bold text-lg mt-6 mb-6 md:mb-0 w-full md:w-auto hover:text-brand-maroon-dark transition-colors">
              <span>View All Products</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-maroon transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fertilizers", count: "20+ Products", icon: Droplets, img: "/assets/portfolio/portfolio-7.jpg" },
              { name: "Minerals", count: "10+ Products", icon: TrendingUp, img: "/assets/portfolio/portfolio-8.jpg" },
              { name: "Micro-nutrients", count: "15+ Products", icon: ShieldCheck, img: "/assets/portfolio/portfolio-9.jpg" }
            ].map((cat, idx) => (
              <Link to="/products" key={idx} className="group relative h-[450px] overflow-hidden rounded-[3rem] shadow-lg">
                <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10 text-white z-10">
                  <cat.icon className="text-brand-gold mb-4" size={40} />
                  <h3 className="text-3xl font-extrabold mb-2 tracking-tight">{cat.name}</h3>
                  <p className="text-slate-300 font-medium">{cat.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section className="py-12 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-maroon/5 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-green/5 rounded-full blur-3xl opacity-60" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10 aspect-[4/5]">
                <img src="/assets/team/team-1.jpg" alt="AR Fertilizer CEO" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-left-6 bg-white p-6 md:p-8 rounded-3xl shadow-xl z-20 max-w-[280px] md:max-w-[320px] border border-slate-100">
                <p className="text-slate-600 italic mb-4 leading-relaxed font-medium text-sm md:text-base">"Our mission is to nurture the agriculture of our nation with world-class biotechnology and integrity."</p>
                <p className="font-bold text-slate-900 text-sm md:text-base">- Mr. Atiar Rahman, CEO</p>
              </div>
            </div>

            <div>
              <span className="text-brand-maroon font-bold tracking-widest uppercase text-sm mb-4 block">About AR Fertilizer</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">Dedicated to Agricultural & Nutritional Excellence</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Since 2010, AR Fertilizer Limited has grown into a cornerstone of Bangladesh's agricultural sector. We combine deep local expertise with world-class scientific partnerships to ensure national prosperity.
              </p>
              <ul className="space-y-4 mb-10">
                {["Pioneering agricultural innovation", "Strategic partnerships with Sichuan Chanhen & VTR", "Data-driven scientific nutrition approach", "Committed to sustainable national food security"].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-700 font-bold">
                    <CheckCircle2 className="text-brand-green" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-block bg-slate-900 hover:bg-brand-maroon text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl transition-all duration-300">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-slate-900 border-y border-brand-maroon/10 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
            {[
              { label: "Farmers Served", val: "10,000+", icon: Users },
              { label: "Products", val: "60+", icon: Package },
              { label: "Years Experience", val: "35+", icon: Award },
              { label: "Partner Brands", val: "12+", icon: Globe }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <stat.icon size={32} className="mb-4 text-brand-gold opacity-80 md:size-10" />
                <span className="text-3xl md:text-5xl font-black mb-2">{stat.val}</span>
                <span className="text-white/60 font-black tracking-widest uppercase text-[10px] md:text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden p-8 md:p-24 shadow-2xl">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-maroon skew-x-12 translate-x-32 hidden lg:block opacity-20 transition-transform hover:translate-x-24 duration-700"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-maroon/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="max-w-2xl text-center lg:text-left">
                <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-6 block">Ready to Grow?</span>
                <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tighter">
                  Elevate Your Agricultural Output Today.
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-10">
                  Whether you're a large-scale distributor or a private farm owner, our biotechnology solutions are tailored for your success.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <Link
                    to="/products"
                    className="group bg-gradient-to-r from-brand-maroon to-brand-maroon-dark hover:from-brand-maroon-dark hover:to-brand-maroon text-white px-10 py-5 rounded-[2rem] font-black text-lg flex items-center space-x-3 shadow-xl shadow-brand-maroon/20 transition-all active:scale-95"
                  >
                    <ShoppingBag size={22} />
                    <span>Explore Catalog</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-[2rem] font-black text-lg flex items-center space-x-3 transition-all active:scale-95"
                  >
                    <MessageSquare size={22} />
                    <span>Contact Sales</span>
                    <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block relative">
                <div className="w-80 h-80 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 flex items-center justify-center p-12 shadow-inner">
                  <div className="text-center">
                    <TrendingUp size={80} className="text-brand-gold mx-auto mb-6" />
                    <p className="text-white font-black text-2xl tracking-tight">Guaranteed Quality</p>
                    <p className="text-slate-500 text-sm mt-2 font-bold uppercase tracking-widest">Global Standards</p>
                  </div>
                </div>
                {/* Floating stats badge */}
                <div className="absolute -top-8 -right-8 bg-brand-maroon p-6 rounded-3xl shadow-2xl animate-bounce duration-[3000ms]">
                  <p className="text-white font-black text-2xl">35+</p>
                  <p className="text-brand-gold text-[10px] font-black uppercase">Years Exp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
