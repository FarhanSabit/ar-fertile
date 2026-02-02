
import { Category, Product, TeamMember, GalleryItem, BlogPost } from './types';

const asset = (path: string) => path.startsWith('/') ? path : `/${path}`;

export const PRODUCTS: Product[] = [
  // Fertilizers (8)
  {
    id: 'f1',
    name: 'NPK 15-15-15 Plus',
    category: Category.FERTILIZERS,
    description: 'A premium balanced fertilizer designed for general crop growth and soil revitalization. Optimized for maximum absorption in diverse soil conditions.',
    image: asset('assets/portfolio/portfolio-details-1.jpg'),
    specifications: ['Nitrogen: 15%', 'Phosphorus: 15%', 'Potassium: 15%', 'Enhanced with Micro-nutrients']
  },
  {
    id: 'f2',
    name: 'Urea Diamond Grade',
    category: Category.FERTILIZERS,
    description: 'High-nitrogen fertilizer essential for the vegetative growth phase of crops. Provides a quick boost to leaf and stem development.',
    image: asset('assets/portfolio/portfolio-details-2.jpg'),
    specifications: ['Nitrogen: 46%', 'Slow Release Formula', 'Industrial Grade Purity']
  },
  {
    id: 'f3',
    name: 'DAP Power Gold',
    category: Category.FERTILIZERS,
    description: 'Diammonium Phosphate formulated for strong root development and winter hardiness. Essential for cereal crops and orchards.',
    image: asset('assets/portfolio/portfolio-details-3.jpg'),
    specifications: ['N: 18%', 'P2O5: 46%', 'High Water Solubility', 'Fast Acting']
  },
  {
    id: 'f4',
    name: 'MOP Premium Red',
    category: Category.FERTILIZERS,
    description: 'Muriate of Potash provides essential potassium for fruit quality, water regulation, and disease resistance.',
    image: asset('assets/portfolio/portfolio-1.jpg'),
    specifications: ['K2O: 60%', 'Crystalline Form', 'Low Moisture Content']
  },
  {
    id: 'f5',
    name: 'Boron Booster 20',
    category: Category.FERTILIZERS,
    description: 'বোরন সার একটি অত্যাবশকীয় পুষ্টি উপাদান যা মাটি ও ফসলের গুনগত মান ও ফলন বৃদ্ধি করে। গাছের পাতা সবুজ ও সতেজ করে। শিকড়ের বৃদ্ধি ভালো হয়। দানা জাতীয় ফসলের দানা ও বীজ পুষ্ট হয়। বন্ধ্যাত্ব রোধ করে।',
    image: asset('assets/portfolio/portfolio-2.jpg'),
    specifications: ['Boron: 20%', 'Instant Dissolving', 'Foliar Grade']
  },
  {
    id: 'f6',
    name: 'Zinc-Sulphate Hepta',
    category: Category.FERTILIZERS,
    description: 'Essential micronutrient for enzyme function and chlorophyll production. Prevents white bud disease in maize.',
    image: asset('assets/portfolio/portfolio-3.jpg'),
    specifications: ['Zn: 21%', 'S: 10%', 'Heptahydrate Crystals']
  },
  {
    id: 'f7',
    name: 'Organic Compost Plus',
    category: Category.FERTILIZERS,
    description: 'Enriched organic matter that improves soil structure and microbial activity. Sustainable long-term nutrition.',
    image: asset('assets/portfolio/portfolio-4.jpg'),
    specifications: ['Organic Carbon: 16%', 'C:N Ratio < 20:1', 'Pathogen Free']
  },
  {
    id: 'f8',
    name: 'TSP Superior Grey',
    category: Category.FERTILIZERS,
    description: 'Triple Superphosphate for efficient phosphorus delivery in root-heavy crops. Essential for legume nitrogen fixation.',
    image: asset('assets/portfolio/portfolio-5.jpg'),
    specifications: ['P2O5: 46%', 'High Water Solubility', 'Granular Form']
  },

  // Fertilizers - Specialized (8)
  {
    id: 'a1',
    name: 'Lipidin - Agricultural Supplement',
    category: Category.FERTILIZERS,
    description: 'Advanced nutritional supplement from Avitech, enhancing plant metabolism and growth efficiency. Formulated for high-performance agriculture.',
    image: asset('assets/portfolio/portfolio-6.jpg'),
    specifications: ['Metabolism enhancer', 'Growth promoter', 'Highly efficient', 'Member of Keggfarms Group']
  },
  {
    id: 'a2',
    name: 'Huineng Growth Boost',
    category: Category.FERTILIZERS,
    description: 'Specialized agricultural supplement manufactured under strict global quality standards in Zhejiang. Focuses on soil health and yield optimization.',
    image: asset('assets/portfolio/portfolio-7.jpg'),
    specifications: ['Agricultural Grade', 'Zhejiang Huineng Brand', 'Growth Booster', 'GMP Certified']
  },
  {
    id: 'a3',
    name: 'Pro-Enzyme X Multi',
    category: Category.MICRO_NUTRIENTS,
    description: 'Multi-enzyme complex from VTR Bio-Tech. Enhances nutrient availability in diverse soil conditions.',
    image: asset('assets/portfolio/portfolio-8.jpg'),
    specifications: ['Xylanase', 'Beta-Glucanase', 'Cellulase', 'Protease']
  },
  {
    id: 'a4',
    name: 'Amino-Grow Ultra',
    category: Category.MICRO_NUTRIENTS,
    description: 'Essential amino acid supplement for optimizing plant growth and yield.',
    image: asset('assets/portfolio/portfolio-9.jpg'),
    specifications: ['High Purity', 'Agricultural Grade', 'Fast Absorption']
  },
  {
    id: 'a5',
    name: 'Bio-Tox Binder Ultra',
    category: Category.MICRO_NUTRIENTS,
    description: 'High-capacity soil conditioner that protects crops from soil-borne toxins and improves health.',
    image: asset('assets/portfolio/portfolio-1.jpg'),
    specifications: ['Broad Spectrum Protection', 'Natural Base', 'Mineral Enriched']
  },
  {
    id: 'a6',
    name: 'Vita-Grow D3 Plus',
    category: Category.MICRO_NUTRIENTS,
    description: 'Concentrated nutrient mix for improving crop resilience and growth.',
    image: asset('assets/about.jpg'),
    specifications: ['Enhanced with D3', 'Potassium Enriched', 'Water Soluble']
  },
  {
    id: 'a7',
    name: 'Choline Guard 60',
    category: Category.MICRO_NUTRIENTS,
    description: 'Essential nutrient for plant metabolism and preventing nutrient deficiencies.',
    image: asset('assets/portfolio/portfolio-details-1.jpg'),
    specifications: ['Choline Chloride: 60%', 'Carrier Based', 'High Bioavailability']
  },
  {
    id: 'a8',
    name: 'Opti-Soil Prebiotic',
    category: Category.MICRO_NUTRIENTS,
    description: 'High-quality prebiotics to support beneficial soil microflora and inhibit pathogens.',
    image: asset('assets/portfolio/portfolio-details-2.jpg'),
    specifications: ['Microbial Support', 'Heat Stable']
  },

  // Minerals (4)
  {
    id: 'm1',
    name: 'Loong Dicalcium Phosphate',
    category: Category.MINERALS,
    description: 'High-purity feed-grade mineral powder from Sichuan Chanhen, essential for bone development and overall metabolic health.',
    image: asset('assets/portfolio/portfolio-details-3.jpg'),
    specifications: ['Phosphorus: 18% min', 'Calcium: 21% min', 'Feed Grade Powder', 'Certified Asian Leader']
  },
  {
    id: 'm2',
    name: 'MCP Mono-Calcium 22',
    category: Category.MINERALS,
    description: 'High-solubility phosphorus source for starter diets and aquaculture applications.',
    image: asset('assets/portfolio/portfolio-5.jpg'),
    specifications: ['Total P: 22.7%', 'Water Soluble P: 20%', 'Fine Granule']
  },
  {
    id: 'm3',
    name: 'Trace Mineral Premix-P',
    category: Category.MINERALS,
    description: 'Custom blend of essential minerals for poultry including Fe, Mn, Zn, Cu, and I.',
    image: asset('assets/portfolio/portfolio-6.jpg'),
    specifications: ['Agricultural Specific', 'Consistent Particle Size', 'Non-Reactive Carrier']
  },
  {
    id: 'm4',
    name: 'Bone-Strength Calcium Carbonate',
    category: Category.MINERALS,
    description: 'Ultrafine ground limestone for maximum calcium absorption across high-performance crops.',
    image: asset('assets/portfolio/portfolio-7.jpg'),
    specifications: ['Calcium: 38%', 'Purity: 98%', 'Grit Size: 2-4mm']
  },
  {
    id: 'am1',
    name: 'Advanced Mechinery',
    category: Category.AGRO_MACHINERIES,
    description: 'Mechanical structures and devices used in farming or other agriculture. Essential for modern mechanized farming to ensure global food security.',
    image: asset('assets/agro-machineries.jpg'),
    specifications: ['High Durability', 'Fuel Efficient', 'Multipurpose Use']
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'ceo',
    name: 'Mr. Atiar Rahman',
    role: 'Chief Executive Officer',
    image: asset('assets/team/team-1.jpg'),
    bio: 'Mr. Atiar Rahman possesses over 35 years of vast knowledge in the agricultural sector. Educational qualification: M.Sc (A.H) in Agricultural Science. He started his career at Biman Agriculture Complex as a Production Officer in 1987 and served as Farm Manager until 2005. He has visited USA, Canada, Europe, and Asia to attend numerous agricultural seminars and symposiums.',
    socials: { linkedin: '#', email: 'atiar@arfertile.com' }
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Global Operations Center', category: 'Facilities', image: asset('assets/portfolio/portfolio-1.jpg') },
  { id: 'g2', title: 'Distribution Network', category: 'Logistics', image: asset('assets/portfolio/portfolio-2.jpg') },
  { id: 'g3', title: 'Modern Storage Solutions', category: 'Facilities', image: asset('assets/portfolio/portfolio-3.jpg') },
  { id: 'g4', title: 'Soil Fertility Research', category: 'Innovation', image: asset('assets/portfolio/portfolio-4.jpg') },
  { id: 'g5', title: 'Technical Lab Analysis', category: 'Science', image: asset('assets/portfolio/portfolio-5.jpg') },
  { id: 'g6', title: 'Field Trial Monitoring', category: 'Environment', image: asset('assets/portfolio/portfolio-6.jpg') },
  { id: 'g10', title: 'Production Excellence', category: 'Facilities', image: asset('assets/portfolio/portfolio-7.jpg') },
  { id: 'g11', title: 'Quality Control Lab', category: 'Science', image: asset('assets/portfolio/portfolio-8.jpg') },
  { id: 'g12', title: 'Sustainability Initiatives', category: 'Environment', image: asset('assets/portfolio/portfolio-9.jpg') },
  { id: 'g13', title: 'Product Detail Analysis', category: 'Science', image: asset('assets/portfolio/portfolio-details-1.jpg') },
  { id: 'g14', title: 'Mineral Processing Unit', category: 'Facilities', image: asset('assets/portfolio/portfolio-details-2.jpg') },
  { id: 'g15', title: 'Fertilizer Quality Check', category: 'Testing', image: asset('assets/portfolio/portfolio-details-3.jpg') }
];

export const HERO_SLIDES = [
  {
    title: "World-Class Agricultural Partners",
    subtitle: "Strategic alliances with Sichuan Chanhen, VTR, and Esigma to bring global innovation to Bangladesh.",
    image: asset('assets/slide/slide-1.jpg')
  },
  {
    title: "Advanced Bio-Agriculture",
    subtitle: "Pioneering the market with high-efficiency enzymes and pharmaceutical-grade agricultural additives.",
    image: asset('assets/slide/slide-2.jpg')
  },
  {
    title: "Decades of Trusted Leadership",
    subtitle: "Leveraging 35+ years of agricultural expertise to solve modern farming challenges.",
    image: asset('assets/slide/slide-3.jpg')
  }
];

export const PARTNER_DETAILS = [
  { name: 'JHEJIANG ESIGMA CO. LTD.', desc: 'Chinese leader in agricultural additives specializing in soil health and growth enhancers.', logo: asset('assets/clients/client-1.png') },
  { name: 'AVITECH NUTRITION PVT LTD', desc: 'Specialists in nutritional supplements and growth promoters for high-performance agriculture.', logo: asset('assets/clients/client-2.png') },
  { name: 'ZOUPING JUJIA CHOLINE INDUSTRIAL CO. LTD', desc: 'World-class manufacturer of Choline Chloride for agricultural use.', logo: asset('assets/clients/client-3.png') },
  { name: 'SICHUAN CHEMICAL CORPORATION', desc: 'Leading mineral and chemical provider for specialized agricultural needs.', logo: asset('assets/clients/client-4.png') },
  { name: 'GUANGDONG VTR BIO-TEC CO. LTD.', desc: 'Largest professional agricultural enzyme manufacturer in China with 18+ years of experience.', logo: asset('assets/clients/client-5.png') },
  { name: 'YNNAN COPPER INDUSTRY SUNWARD CHEMICALS CO. LTD', desc: 'Specialized mineral producer for micronutrient solutions.', logo: asset('assets/clients/client-6.png') },
  { name: 'YUNNA XINLONG MINERAL ANIMAL FEED CO. LTD.', desc: 'Chemical division of the New Hope Group, focusing on mineral nutrition.', logo: asset('assets/clients/client-1.png') },
  { name: 'HENGYI VET CO. LTD', desc: 'Partner for veterinary and agricultural health solutions.', logo: asset('assets/clients/client-2.png') },
  { name: 'INTEGRATED WORLD ENTERPRISE (INTEWE)', desc: 'Global strategic partner for agricultural distribution.', logo: asset('assets/clients/client-3.png') },
  { name: 'YUNNAN XINLONG MINERAL FEED', desc: 'Specialized supplier of mineral-based feed and crop additives.', logo: asset('assets/clients/client-4.png') },
  { name: 'ZHEJIANG SHENGHUA BIOK BIOLOGY', desc: 'Innovative biological solutions provider for agriculture.', logo: asset('assets/clients/client-5.png') }
];

export const HOTLINES = [
  '+88 01777-703243',
  '+88 01777-703241',
  '+88 01777-703242',
  '+88 01777-703240'
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: "The Future of Phosphate in Soil Nutrition",
    excerpt: "Discover how deep processing of phosphorus resources is revolutionizing agricultural yield across Southeast Asia.",
    content: "Phosphorus is a cornerstone of modern agriculture. At AR Fertilizer Limited, we are partnering with global leaders like Sichuan Chanhen to bring high-purity MCP and MDCP to the local market. Our research shows that optimized mineral intake in agriculture significantly boosts crop health and productivity...",
    date: "Jan 12, 2024",
    author: "Atiar Rahman",
    image: asset('assets/portfolio/portfolio-details-1.jpg'),
    category: "Technical"
  },
  {
    id: '2',
    title: "Optimizing Crop Yield with Bio-Enzymes",
    excerpt: "New studies show that feed additives containing targeted enzymes can improve feed conversion ratios by up to 15%.",
    content: "Bio-engineering in agriculture is no longer a luxury but a necessity for sustainable farming. Guangdong VTR Bio-Tech has pioneered enzymatic solutions that ensure better nutrient absorption. By integrating these solutions, farmers can expect a significant reduction in waste and cost...",
    date: "Feb 05, 2024",
    author: "Atiar Rahman",
    image: asset('assets/portfolio/portfolio-details-2.jpg'),
    category: "Research"
  }
];

export const MILESTONES = [
  { year: '2010', title: 'Founding Year', description: 'AR Fertilizer Limited established to fill the gap in high-tech agricultural supplies.', icon: 'Flag' },
  { year: '2013', title: 'Strategic Alliance', description: 'Became the primary distributor of Asia\'s leading Monocalcium Phosphate brand.', icon: 'Globe' },
  { year: '2023', title: 'Biotech Hub', description: 'Launched a dedicated technical support app for farmers.', icon: 'Zap' }
];
