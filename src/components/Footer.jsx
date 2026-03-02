import React, { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUp, 
  MessageCircle, 
  Send,          
  Globe          
} from 'lucide-react';
import { partnersData } from '../Data';

const SocialIcon = memo(({ href, icon: Icon, label, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Follow us on ${label}`}
    className={`
      p-3 rounded-full bg-slate-900 border border-slate-800
      transition-all duration-300 
      hover:scale-110 hover:-translate-y-1 
      hover:bg-slate-800
      hover:shadow-lg hover:shadow-emerald-500/20
      hover:border-emerald-500/50
      group
    `}
  >
    <Icon 
      className={`w-5 h-5 transition-colors duration-300 text-slate-400 group-hover:text-white ${colorClass}`} 
    />
  </a>
));

SocialIcon.displayName = 'SocialIcon';

const FooterLink = memo(({ to, children }) => (
  <Link
    to={to}
    className="
      group flex items-center text-slate-400 hover:text-emerald-400 
      transition-all duration-300 transform hover:translate-x-1
      py-1 text-sm
    "
  >
    <span 
      className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" 
      aria-hidden="true"
    ></span>
    {children}
  </Link>
));

FooterLink.displayName = 'FooterLink';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <footer 
      className="bg-slate-950 text-slate-200 pt-16 pb-8 border-t border-slate-900"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/img/common/logo2.png" 
                alt="FindiATM Franchise Hub" 
                className="w-16 h-16 object-contain"
                width="40"
                height="40"
                loading="lazy"
              />
<div className="flex flex-col leading-tight group">
<span className="text-2xl font-black tracking-tighter">
  ATM
  <span className="bg-gradient-to-r from-[#4f3c89] to-[#6fb0cc] bg-clip-text text-transparent">
    FRANCHISE
  </span>
</span>

  <div className="flex items-center gap-2 mt-1">
    <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold whitespace-nowrap">
      ATM Franchise India
    </span>
    <div className="h-[1px] w-8 bg-slate-800 hidden md:block"></div>
  </div>
</div>            </Link>

            <p className="text-slate-500 text-sm leading-relaxed">
              Leading the 2025 financial revolution by providing secure, high-uptime ATM franchise opportunities to entrepreneurs across India. Partner with us for guaranteed operational support.
            </p>

            <div className="flex gap-3">
              <SocialIcon href="https://wa.me/918883335553" icon={MessageCircle} label="WhatsApp" colorClass="group-hover:text-green-400" />
              <SocialIcon href="https://t.me/findiatmfranchise" icon={Send} label="Telegram" colorClass="group-hover:text-blue-400" />
              <SocialIcon href="https://atmfranchise.in" icon={Globe} label="Official Site" colorClass="group-hover:text-emerald-400" />
            </div>
          </div>

          <nav aria-label="Footer Navigation">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-3">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/about">About Our Mission</FooterLink></li>
              <li><FooterLink to="/blog">ATM Business Blog</FooterLink></li>
              <li><FooterLink to="/atm-franchise">Investment Models</FooterLink></li>
              <li><FooterLink to="/contact">Support & Inquiry</FooterLink></li>
            </ul>
          </nav>

          <nav aria-label="ATM Partners">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Our Partners</h3>
            <ul className="space-y-3">
              {(partnersData || []).map((partner) => (
                <li key={partner.name}>
                  <FooterLink to={partner.path}>
                    {partner.name} ATM Franchise
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6">
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact Center</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center gap-3 text-sm group">
                <div className="p-2 bg-slate-900 rounded-lg text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <a href="tel:+918883335553" className="text-slate-400 hover:text-white">+91 88833 35553</a>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <div className="p-2 bg-slate-900 rounded-lg text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <a href="mailto:maktin.help@gmail.com" className="text-slate-400 hover:text-white break-all">maktin.help@gmail.com</a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs">
            © {currentYear} Findi ATM Franchise India. Powered by <span className="text-slate-400 font-bold">MAKT Solutions</span>. Authorized WLATM Partner.
          </p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-500 transition-all transform hover:-translate-y-1"
              aria-label="Back to Top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;