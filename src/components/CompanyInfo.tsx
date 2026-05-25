import { Award, MapPin, ShieldCheck, CheckCircle } from 'lucide-react';

export const CompanyInfo: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-50/50 border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Story & GST Credentials */}
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3 block">કોર્પોરેટ પરિચય / Corporate Profile</span>
            <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-900 font-display mb-6">
              એગ્રી કેર કેમિકલ્સ <span className="text-neutral-500 font-sans text-2xl sm:text-3xl font-light">/ Agri Care Chemicals</span>
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-8">
              ખેડૂતો અને કૃષિ ક્ષેત્રને સક્ષમ બનાવવાના વિઝન સાથે સ્થપાયેલ, એગ્રી કેર કેમિકલ્સ એ અમદાવાદના મુખ્ય ઔદ્યોગિક હબ ચાંગોદરમાંથી કાર્યરત એક રજિસ્ટર્ડ પ્રોપ્રાઇટરશિપ છે. અમે પાક સંરક્ષણ ઉત્પાદનો, ખાતરો અને વૃદ્ધિ નિયમનકારોના ફોર્મ્યુલેશન અને વિતરણમાં વિશેષતા ધરાવીએ છીએ.
            </p>

            {/* Verification highlights */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">સરકાર માન્ય અને પ્રમાણિત / Government Certified</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">GSTIN: 24CAHPR3959Q1ZS. રાજ્ય કરવેરા નિયમો હેઠળ નિયમિત કરદાતા તરીકે નોંધાયેલ.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm">
                  <Award className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">માલિકી અખંડિતતા / Proprietorship Integrity</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">રાઠોડ વિજયકુમાર કિશોરભાઈ (Rathod Vijaykumar Kishorbhai) ના નેતૃત્વમાં ગુણવત્તાયુક્ત વ્યવસાય સંચાલન.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-100 shadow-sm">
                  <MapPin className="w-5 h-5 text-neutral-900" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">વ્યૂહાત્મક ઔદ્યોગિક પ્લાન્ટ / Strategic Industrial Plant</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">યુનિટ નં. ૩૬, સિલ્વર ઔદ્યોગિક વસાહત ૩, ચાંગોદર, અમદાવાદ, ગુજરાત (382213).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Beautiful Info Grid */}
          <div className="bg-white border border-neutral-200/60 rounded-3xl p-8 shadow-xl shadow-neutral-100/50">
            <h3 className="text-xl font-semibold text-neutral-950 mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-neutral-900" /> જીએસટી પ્રમાણપત્ર વિગતો / Certificate Specifications
            </h3>
            
            <div className="divide-y divide-neutral-100">
              <div className="py-4 flex justify-between gap-4">
                <span className="text-sm text-neutral-400">કાનૂની નામ / Legal Name</span>
                <span className="text-sm font-medium text-neutral-900 text-right">Rathod Vijaykumar Kishorbhai</span>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-sm text-neutral-400">વેપારી નામ / Trade Name</span>
                <span className="text-sm font-medium text-neutral-900 text-right">Agri Care Chemicals</span>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-sm text-neutral-400">બંધારણ / Constitution</span>
                <span className="text-sm font-medium text-neutral-900 text-right">Proprietorship</span>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-sm text-neutral-400">નોંધણી અધિકારી / Authority</span>
                <span className="text-sm font-medium text-neutral-900 text-right">State Tax Officer, Gujarat</span>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-sm text-neutral-400">નોંધણી તારીખ / Registration Date</span>
                <span className="text-sm font-medium text-neutral-900 text-right">01/01/2026</span>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <span className="text-sm text-neutral-400">મુખ્ય વ્યવસાય સ્થળ / Principal Place</span>
                <span className="text-sm font-medium text-neutral-950 text-right max-w-xs text-end">
                  Unit 36, Silver Industrial Estate 3, B/H Ramdev Masala, Changodar, Ahmedabad, Gujarat, 382213
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
