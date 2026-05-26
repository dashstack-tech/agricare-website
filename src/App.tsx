import { useEffect, useRef, useState } from 'react';
import { CompanyInfo } from './components/CompanyInfo';
import { ContactSection } from './components/ContactSection';
import { ProductsBlog } from './components/ProductsBlog';
import { Mail, MapPin, X, Send } from 'lucide-react';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState({ name: '', phone: '', message: '' });
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
          top: '0px', 
          inset: '0px', 
          height: '100vh',
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
        
        {/* Very strong bottom fade to eliminate any hard lines */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-white" style={{ maskImage: 'linear-gradient(to top, white, transparent)', WebkitMaskImage: 'linear-gradient(to top, white, transparent)' }} />
      </div>

      {/* Navigation Bar */}
      <header className="relative z-10 w-full">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-2 hover:scale-102 transition-transform duration-300">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Agri Care Chemicals" className="h-12 w-auto object-contain" />
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
        <h1 className="text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal leading-[0.95] tracking-[-2.46px] font-display text-black animate-fade-rise drop-shadow-[0_0px_12px_rgba(255,255,255,0.9)]">
          Empowering growth, we protect <span className="text-[#6F6F6F] italic">the harvests.</span>
        </h1>

        <p className="text-xl sm:text-2xl max-w-3xl mt-4 font-normal text-[#6F6F6F] font-display animate-fade-rise-delay drop-shadow-[0_0px_8px_rgba(255,255,255,0.9)]">
          કૃષિ વિકાસને વેગ આપીને, અમે પાકનું રક્ષણ કરીએ છીએ.
        </p>

        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay drop-shadow-[0_0px_8px_rgba(255,255,255,0.9)]">
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
                  if (modalForm.name && modalForm.phone && modalForm.message) {
                    const text = `Hello Agri Care Chemicals, my name is ${modalForm.name}. My phone number is ${modalForm.phone}.\n\nMessage:\n${modalForm.message}`;
                    const whatsappUrl = `https://wa.me/919737383223?text=${encodeURIComponent(text)}`;
                    
                    window.open(whatsappUrl, '_blank');

                    setModalSubmitted(true);
                    setTimeout(() => {
                      setModalSubmitted(false);
                      setModalForm({ name: '', phone: '', message: '' });
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
                  <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-1">
                    મોબાઈલ નંબર / Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="modal-phone"
                    required
                    value={modalForm.phone}
                    onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                    placeholder="તમારો મોબાઈલ નંબર લખો"
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm bg-[#25D366] text-white hover:bg-[#1DA851] hover:scale-103 transition-all duration-300 font-semibold cursor-pointer shadow-lg shadow-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp પર મોકલો / Send on WhatsApp</span>
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
