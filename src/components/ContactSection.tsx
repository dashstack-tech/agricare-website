import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      // Build mailto URL to launch default mail app
      const subject = `Agri Care Chemicals Inquiry from ${formState.name}`;
      const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
      const mailtoUrl = `mailto:agricarechemicals3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mail client
      window.location.href = mailtoUrl;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
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
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#6F6F6F] mb-2">
                    ઈમેલ એડ્રેસ / Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="તમારું ઈમેલ આઈડી લખો"
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm bg-black text-white hover:scale-103 transition-transform duration-300 font-semibold cursor-pointer"
                >
                  <span>સબમિટ કરો / Submit Inquiry</span>
                  <Send className="w-4 h-4" />
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
