import React, { useState, useMemo } from 'react';
import { Layers, ArrowRight, Shield, Leaf, Droplet, Sparkles } from 'lucide-react';

interface ProductPost {
  id: string;
  title: string;
  chemical: string;
  category: 'Insecticide' | 'Herbicide' | 'Fungicide' | 'PGR';
  description: string;
  packings: string;
  application: string;
}

const PRODUCTS_POSTS: ProductPost[] = [
  {
    id: 'post-1',
    title: 'સાહો / SAHHO',
    chemical: 'Thiamethoxam 30% FS',
    category: 'Insecticide',
    description: 'શ્રેષ્ઠ સિસ્ટેમિક બીજ માવજત જંતુનાશક. શરૂઆતની સિઝનમાં રસ ચૂસતી જીવાતોનું વ્યાપક નિયંત્રણ પૂરું પાડે છે, નાના છોડ માટે મજબૂત સંરક્ષણ કવચ સ્થાપિત કરે છે.',
    packings: '1 Ltr, 500ml, 250ml',
    application: 'કપાસ, ઘઉં અને સોયાબીનના પાક માટે બીજ માવજત. (Seed treatment for cotton, wheat, and soy crops.)'
  },
  {
    id: 'post-2',
    title: 'ટકલ કિંગ / TAKLE KING',
    chemical: 'Diafenthiuron 47% + Bifenthrin 9.4% SC',
    category: 'Insecticide',
    description: 'દ્વિ-અસરકારક સંપર્ક અને સિસ્ટેમિક રસાયણ. બાગાયતી પાકોમાં સફેદ માખી, મોલોમશી અને ઇયળ જેવી જીવાતો સામે લડવા માટે રચાયેલ, લીલા વિકાસને પ્રોત્સાહન આપે છે.',
    packings: '1 Ltr, 500ml, 250ml',
    application: 'કપાસ અને શાકભાજીના પાક માટે પર્ણિય છંટકાવ. (Foliar spray for cotton and vegetable crops.)'
  },
  {
    id: 'post-3',
    title: 'કોરેવા / KOREVA',
    chemical: 'Chlorantraniliprole 18.5% SC',
    category: 'Insecticide',
    description: 'લેપિડોપ્ટેરન જીવાતો સામે અત્યાધુનિક રક્ષણ. ઓછા ડોઝ સાથે લાંબા સમય સુધી અસરકારક નિયંત્રણ આપે છે, પાકની ઉપજની ગુણવત્તા જાળવી રાખે છે.',
    packings: '150ml, 60ml, 30ml',
    application: 'ડાંગરમાં ગાભમેરા અને શેરડીમાં ટોચ કોરી ખાનાર ઈયળના નિયંત્રણ માટે. (Rice stem borer and sugarcane shoot borer control.)'
  },
  {
    id: 'post-4',
    title: 'એગ્રી ગ્લુફો / AGRI GLUFO',
    chemical: 'Glufosinate Ammonium 13.5% W/W SL',
    category: 'Herbicide',
    description: 'બહુમુખી, બિન-પસંદગીયુક્ત સંપર્ક નિંદણનાશક. ફળઝાડની વાડીઓ અને બગીચાઓમાં મૂળના બંધારણને નુકસાન પહોંચાડ્યા વિના વાર્ષિક અને બારમાસી નિંદણને નષ્ટ કરે છે.',
    packings: '1 Ltr, 500ml',
    application: 'ચાના બગીચા, ફળઝાડની વાડીઓ અને બિન-પાક વિસ્તારમાં નિંદણ નિયંત્રણ. (Weed control in tea gardens, orchards, and non-crop areas.)'
  },
  {
    id: 'post-5',
    title: 'એમ્પાયર / EMPIRE',
    chemical: 'Azoxystrobin 11% + Tebuconazole 18.3% SC',
    category: 'Fungicide',
    description: 'દ્વિ સક્રિય ઘટકોને જોડતું અદભૂત વ્યાપક-સ્પેક્ટ્રમ સિસ્ટેમિક ફૂગનાશક. શીથ બ્લાઇટ, રસ્ટ (ગેરુ) અને પાંદડાના ટપકાં રોગનું નિવારક અને રોગનિવારક નિયંત્રણ.',
    packings: '1 Ltr, 500ml, 250ml',
    application: 'ડાંગર, ઘઉં અને ડુંગળીના પાક માટે પર્ણિય છંટકાવ. (Foliar spray for paddy, wheat, and onion crops.)'
  },
  {
    id: 'post-6',
    title: 'હુમા શક્તિ / HUMA SHAKTI',
    chemical: 'Crop Flowering Stimulant',
    category: 'PGR',
    description: 'સમૃદ્ધ પાક ઉત્તેજક જે વિપુલ પ્રમાણમાં ફૂલ લાવવા અને ફૂલ ખરતા અટકાવવા માટે ઘડવામાં આવ્યું છે. ઉચ્ચ ગુણવત્તાવાળા ફળના વિકાસ માટે પાકના ચયાપચયને શ્રેષ્ઠ બનાવે છે.',
    packings: '1 Ltr, 500ml',
    application: 'કપાસ, મરચી, કેરી અને લીંબુ વર્ગના ફળો માટે ઉપયોગી. (Applicable to cotton, chilly, mango, and citrus fruits.)'
  },
  {
    id: 'post-7',
    title: 'ટેબુઝા / TEBUZA',
    chemical: 'Tebuconazole 10% + Sulphur 65% WG',
    category: 'Fungicide',
    description: 'અદ્યતન પ્રિમિક્સ ફૂગનાશક જે પાવડરી માઇલ્ડ્યુ અને પાંદડાના ટપકાં સામે રક્ષણ પૂરું પાડે છે, સાથે આવશ્યક સલ્ફર પોષણ આપે છે, એકંદરે પાકની રોગપ્રતિકારક શક્તિ વધારે છે.',
    packings: '1 Kg, 500gm, 250gm',
    application: 'દ્રાક્ષ, મરચી અને મગફળીના પાક માટે ઉપયોગી. (Applicable to grapes, chilly, and groundnut crops.)'
  },
  {
    id: 'post-8',
    title: 'ઝેબ્રોલા / ZEBROLA',
    chemical: 'Gibberellic Acid 0.001%',
    category: 'PGR',
    description: 'કુદરતી વનસ્પતિ હોર્મોન ફોર્મ્યુલેટિંગ એજન્ટ જે કોષ વિભાજનને વેગ આપે છે, બીજની સુષુપ્તાવસ્થા તોડે છે અને એકંદરે છોડના કદ અને પાકની ઉપજમાં વધારો કરે છે.',
    packings: '1 Ltr, 500ml, 250ml',
    application: 'દ્રાક્ષ, ડાંગર અને શાકભાજી પર ડ્રિપ અથવા પર્ણિય છંટકાવ. (Drip or foliar spray on grapes, paddy, and vegetables.)'
  }
];

export const ProductsBlog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Insecticide', 'Herbicide', 'Fungicide', 'PGR'];

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS_POSTS;
    return PRODUCTS_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Insecticide':
        return <Shield className="w-4 h-4 text-emerald-500" />;
      case 'Herbicide':
        return <Leaf className="w-4 h-4 text-amber-500" />;
      case 'Fungicide':
        return <Droplet className="w-4 h-4 text-blue-500" />;
      case 'PGR':
        return <Sparkles className="w-4 h-4 text-purple-500" />;
      default:
        return <Layers className="w-4 h-4 text-neutral-400" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Insecticide':
        return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'Herbicide':
        return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'Fungicide':
        return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'PGR':
        return 'bg-purple-50 text-purple-700 border-purple-100';
      default:
        return 'bg-neutral-50 text-neutral-700 border-neutral-100';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'All':
        return 'બધા / All';
      case 'Insecticide':
        return 'જંતુનાશક / Insecticide';
      case 'Herbicide':
        return 'નિંદણનાશક / Herbicide';
      case 'Fungicide':
        return 'ફૂગનાશક / Fungicide';
      case 'PGR':
        return 'વૃદ્ધિ નિયમનકાર / PGR';
      default:
        return category;
    }
  };

  return (
    <section id="products" className="py-24 px-6 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6F6F6F] font-semibold mb-3 block">કૃષિ રસાયણો / Chemical Innovations</span>
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-neutral-900 font-display mb-4">
            ઉત્પાદન કૅટેલોગ અને ફોર્મ્યુલેશન / Product Catalog & Formulations
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            અમારા ઉચ્ચ કાર્યક્ષમ કૃષિ ફોર્મ્યુલેશન શોધો. વર્ગીકરણ જોવા માટે નીચેના કૅટેગરી ટેગ્સ પર ક્લિક કરો. (Discover our high-efficiency agricultural formulations. Tap target category tags below to filter.)
          </p>
        </div>

        {/* Categories Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14 border-b border-neutral-100 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === category
                  ? 'bg-black text-white shadow-md shadow-black/10'
                  : 'bg-neutral-50 text-[#6F6F6F] border border-neutral-200/50 hover:bg-neutral-100 hover:text-black'
              }`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              <span>{getCategoryLabel(category)}</span>
            </button>
          ))}
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col justify-between overflow-hidden bg-neutral-50/20 border border-neutral-100 hover:border-neutral-200 rounded-3xl p-6 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-500 hover:bg-white"
            >
              <div>
                {/* Product Card Image */}
                <div className="h-48 w-full overflow-hidden rounded-2xl mb-6 bg-neutral-100">
                  <img 
                    src={`${import.meta.env.BASE_URL}product.png`}
                    alt={post.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Meta details */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryBadgeClass(post.category)}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-semibold font-mono bg-neutral-100/60 px-2 py-0.5 rounded-md">
                    Packing: {post.packings.split(',')[0]} & more
                  </span>
                </div>

                {/* Post Title */}
                <h3 className="text-2xl font-normal text-black font-display mb-1 group-hover:text-neutral-900 transition-colors">
                  {post.title}
                </h3>
                
                {/* Chemical composition subtitle */}
                <p className="text-xs text-neutral-400 font-mono font-medium mb-4 block">
                  {post.chemical}
                </p>

                {/* Post Excerpt Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {post.description}
                </p>
              </div>

              {/* Read more footer */}
              <div className="border-t border-neutral-100/60 pt-4 flex items-center justify-between">
                <div className="text-[11px] text-neutral-400">
                  <span className="font-semibold block text-[#6F6F6F]">લક્ષિત પાક ઉપયોગ / Target Crop Use:</span>
                  <span>{post.application}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
