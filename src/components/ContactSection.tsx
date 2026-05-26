import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.phone && formState.message) {
      const text = `Hello Agri Care Chemicals, my name is ${formState.name}. My phone number is ${formState.phone}.\n\nMessage:\n${formState.message}`;
      const whatsappUrl = `https://wa.me/919737383223?text=${encodeURIComponent(text)}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', phone: '', message: '' });
      }, 3000);
    }
  };

  return (
    <section id="reach-us" className="py-24 px-6 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] font-semibold mb-3 block">સંપર્ક કરો / Reach Us</span>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-900 font-display mb-4">
            અમારી ટીમ સાથે જોડાઓ / Connect With Our Team
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            અમારા કેમિકલ ફોર્મ્યુલેશન વિશે પૂછપરછ અથવા ભાગીદારી માટે પૂછપરછ મોકલો અથવા ફેક્ટરીની મુલાકાત લો. (Have questions about our formulations or looking to partner? Send a message or visit our plant.)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-neutral-50/30 border border-neutral-100 rounded-3xl p-8 md:p-10 hover:border-neutral-200 transition-all duration-300">
            <h3 className="text-2xl font-normal text-black font-display mb-6">સંદેશ મોકલો / Send a Message</h3>
            
            {submitted ? (
              <div className="bg-emerald-50/50 border border-emerald-100 text-emerald-800 p-6 rounded-2xl text-sm font-medium animate-fade-rise">
                પૂછપરછ મોકલવા બદલ આભાર! અમારી ટીમ ટૂંક સમયમાં તમારો સંપર્ક કરશે. (Thank you for your message! Our team will respond to you shortly.)
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2">
                    પૂરું નામ / Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="તમારું નામ લખો"
                    className="w-full px-5 py-3.5 rounded-full border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2">
                    મોબાઈલ નંબર / Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="તમારો મોબાઈલ નંબર લખો"
                    className="w-full px-5 py-3.5 rounded-full border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 transition-colors bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2">
                    સંદેશ / Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="તમારી પૂછપરછ અહીં લખો..."
                    className="w-full px-5 py-4 rounded-3xl border border-neutral-200 text-sm focus:outline-none focus:border-neutral-950 transition-colors bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm bg-[#25D366] text-white hover:bg-[#1DA851] hover:scale-103 transition-all duration-300 font-semibold cursor-pointer shadow-lg shadow-[#25D366]/20"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp પર મોકલો / Send on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-normal text-black font-display mb-6">સંપર્ક વિગતો / Contact Details</h3>
              <p className="text-[#6F6F6F] text-sm leading-relaxed mb-6">
                અમારા પ્લાન્ટની મુલાકાત લેવા અથવા ઇમેઇલ કે ફોન દ્વારા સંપર્ક કરવા માટે નિઃસંકોચ રહો. (Feel free to visit our corporate plant or get in touch via email or phone.)
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-neutral-900" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6F6F6F] font-semibold block mb-0.5">ઈમેલ આઈડી / Email Support</span>
                  <a href="mailto:agricarechemicals3@gmail.com" className="text-sm font-medium text-black hover:underline transition-all">
                    agricarechemicals3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-neutral-900" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6F6F6F] font-semibold block mb-0.5">મોબાઈલ નંબર / Call Us</span>
                  <span className="text-sm font-medium text-black">
                    +91 9737383223
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-neutral-900" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6F6F6F] font-semibold block mb-0.5">મુખ્ય કાર્યાલય / Headquarters</span>
                  <address className="text-sm font-medium text-black not-italic leading-relaxed max-w-sm">
                    Plot No. 36, Silver Industrial Estate-3, Bagodara-Ahmedabad Highway, B/H Ramdev Masala, Changodar, Ahmedabad-382213
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-neutral-900" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6F6F6F] font-semibold block mb-0.5">સમય / Operating Hours</span>
                  <p className="text-sm font-medium text-black">
                    સોમવાર થી શનિવાર: સવારે ૯:૦૦ થી સાંજે ૬:૦૦ (Monday – Saturday: 9:00 AM – 6:00 PM) <br />
                    <span className="text-[#6F6F6F]">રવિવાર: બંધ (Sunday: Closed)</span>
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
