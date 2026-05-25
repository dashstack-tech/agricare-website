import { useEffect, useRef, useState } from 'react';
import { CompanyInfo } from './components/CompanyInfo';
import { ContactSection } from './components/ContactSection';
import { ProductsBlog } from './components/ProductsBlog';
import { Mail, MapPin, X, Send } from 'lucide-react';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({ name: '', email: '', message: '' });
  const [modalSubmitted, setModalSubmitted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animFrameId: number;

    const checkTime = () => {
      if (video.duration) {
        const time = video.currentTime;
        const duration = video.duration;
        const fadeTime = 0.5; // 0.5s fade duration

        if (time < fadeTime) {
          // Fade in at the start
          setVideoOpacity(time / fadeTime);
        } else if (time > duration - fadeTime) {
          // Fade out before the end
          setVideoOpacity(Math.max(0, (duration - time) / fadeTime));
        } else {
          // Normal playing state
          setVideoOpacity(1);
        }
      }
      animFrameId = requestAnimationFrame(checkTime);
    };

    animFrameId = requestAnimationFrame(checkTime);

    const handleEnded = () => {
      setVideoOpacity(0);
      cancelAnimationFrame(animFrameId);
      
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play()
            .then(() => {
              animFrameId = requestAnimationFrame(checkTime);
            })
            .catch((err) => console.warn("Video autoplay failed on replay:", err));
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);

    // Play video automatically on mount
    video.play().catch((err) => console.warn("Initial autoplay blocked:", err));

    return () => {
      cancelAnimationFrame(animFrameId);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-neutral-900 font-body">
      {/* Background Video Layer */}
      <div 
        className="absolute z-0 w-full transition-opacity duration-100 ease-out"
        style={{ 
          top: '300px', 
          inset: '300px 0px 0px 0px', 
          height: 'calc(100vh - 300px)',
          opacity: videoOpacity 
        }}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Navigation Bar */}
      <header className="relative z-10 w-full">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2 hover:scale-102 transition-transform duration-300">
            <img src="/logo.png" alt="Agri Care Chemicals" className="h-12 w-auto object-contain" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-black font-medium transition-colors">Home</a>
            <a href="#about" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">About</a>
            <a href="#products" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">Products</a>
            <a href="#reach-us" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">Reach Us</a>
          </nav>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="rounded-full px-6 py-2.5 text-sm bg-black text-white hover:scale-103 transition-transform duration-300 font-medium cursor-pointer"
          >
            Begin Journey
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ 
          paddingTop: 'calc(8rem - 75px)',
          paddingBottom: '10rem'
        }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal leading-[0.95] tracking-[-2.46px] font-display text-black animate-fade-rise">
          Empowering growth, we protect <span className="text-[#6F6F6F] italic">the harvests.</span>
        </h1>

        <p className="text-xl sm:text-2xl max-w-3xl mt-4 font-normal text-[#6F6F6F] font-display animate-fade-rise-delay">
          કૃષિ વિકાસને વેગ આપીને, અમે પાકનું રક્ષણ કરીએ છીએ.
        </p>

        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
          ચાંગોદર ઔદ્યોગિક પ્લાન્ટથી ઉચ્ચ ગુણવત્તાવાળા જંતુનાશકો, ખાતરો અને અન્ય કૃષિ રસાયણોનું ઉત્પાદન. (Formulating state-of-the-art agricultural chemicals, protective treatments, and plant growth regulators from our Changodar industrial center.)
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-full px-14 py-5 text-base mt-12 bg-black text-white hover:scale-103 transition-transform duration-300 font-semibold shadow-lg shadow-black/10 animate-fade-rise-delay-2 cursor-pointer"
        >
          Begin Journey
        </button>
      </section>

      {/* Company Info Section */}
      <CompanyInfo />

      {/* Products Blog Layout Section */}
      <ProductsBlog />

      {/* Contact Section */}
      <ContactSection />
      <footer id="reach-us" className="py-24 px-6 bg-white border-t border-neutral-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Logo and Tagline */}
            <div className="lg:col-span-1">
              <span className="text-2xl font-display tracking-tight text-black mb-4 block">
                Agri Care Chemicals
              </span>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-xs">
                Premium agricultural solutions, high-grade chemicals formulation and distribution. Building a greener tomorrow.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">Quick Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">About Us</a></li>
                <li><a href="#products" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">Our Products</a></li>
                <li><a href="#reach-us" className="text-sm text-[#6F6F6F] hover:text-black transition-colors">Reach Us</a></li>
              </ul>
            </div>

            {/* Contact details */}
            <div>
              <h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#6F6F6F]">
                  <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                  <a href="mailto:agricarechemicals3@gmail.com" className="hover:text-black transition-colors">
                    agricarechemicals3@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#6F6F6F]">
                  <MapPin className="w-4 h-4 text-neutral-400 mt-1 flex-shrink-0" />
                  <span>
                    Plot No. 36, Silver Industrial Estate-3, Bagodara-Ahmedabad Highway, Changodar, Ahmedabad-382213
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-400">
              © {new Date().getFullYear()} Agri Care Chemicals. All rights reserved.
            </p>
            <p className="text-xs text-neutral-400 flex items-center gap-2">
              <span>GSTIN: 24CAHPR3959Q1ZS</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
          <div className="relative bg-white border border-neutral-100 rounded-3xl p-8 max-w-lg w-full shadow-2xl text-left animate-fade-rise">
            {/* Close button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[#6F6F6F] hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-normal text-black font-display mb-6">સંદેશ મોકલો / Send a Message</h3>
            
            {modalSubmitted ? (
              <div className="bg-emerald-50/50 border border-emerald-100 text-emerald-800 p-6 rounded-2xl text-sm font-medium animate-fade-rise">
                પૂછપરછ મોકલવા બદલ આભાર! અમારી ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે. (Thank you for your message! Our team will respond shortly.)
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (modalForm.name && modalForm.email && modalForm.message) {
                    const subject = `Agri Care Chemicals Inquiry from ${modalForm.name}`;
                    const body = `Name: ${modalForm.name}\nEmail: ${modalForm.email}\n\nMessage:\n${modalForm.message}`;
                    const mailtoUrl = `mailto:agricarechemicals3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    
                    window.location.href = mailtoUrl;

                    setModalSubmitted(true);
                    setTimeout(() => {
                      setModalSubmitted(false);
                      setModalForm({ name: '', email: '', message: '' });
                      setIsModalOpen(false);
                    }, 2500);
                  }
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1">
                    પૂરું નામ / Full Name
                  </label>
                  <input
                    type="text"
                    id="modal-name"
                    required
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    placeholder="તમારું નામ લખો"
                    className="w-full px-4 py-2.5 rounded-full border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1">
                    ઈમેલ એડ્રેસ / Email Address
                  </label>
                  <input
                    type="email"
                    id="modal-email"
                    required
                    value={modalForm.email}
                    onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                    placeholder="તમારું ઈમેલ આઈડી લખો"
                    className="w-full px-4 py-2.5 rounded-full border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1">
                    સંદેશ / Your Message
                  </label>
                  <textarea
                    id="modal-message"
                    required
                    rows={4}
                    value={modalForm.message}
                    onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                    placeholder="તમારી પૂછપરછ અહીં લખો..."
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 transition-colors bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm bg-black text-white hover:scale-103 transition-transform duration-300 font-semibold cursor-pointer"
                >
                  <span>સબમિટ કરો / Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
