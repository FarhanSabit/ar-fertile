
import { Category, Product, TeamMember, GalleryItem, BlogPost } from './types';

const asset = (path: string) => path.startsWith('/') ? path : `/${path}`;

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'বোরন',
    category: Category.MICRO_NUTRIENTS,
    description: 'বোরন সার একটি অত্যাবশকীয় পুষ্টি উপাদান যা মাটি ও ফসলের গুনগত মান ও ফলন বৃদ্ধি করে। গাছের পাতা সবুজ ও সতেজ করে। শিকড়ের বৃদ্ধি ভালো হয়। দানা জাতীয় ফসলের দানা ও বীজ পুষ্ট হয়। বন্ধ্যাত্ব রোধ করে।',
    image: asset('assets/clients/1.jpg'),
    specifications: ['Soil & Crop Quality', 'Growth Rate', 'Root Development', 'Seed Nourishment']
  },
  {
    id: 'p2',
    name: 'Solubor Boron',
    category: Category.MICRO_NUTRIENTS,
    description: 'Boron fertilizer is an essential micronutrient for plants, Solubor Boron can be applied directly to the soil, through fertigation, or as a foliar spray. By observing, you can decide when to provide boron fertilizer to your plants.',
    image: asset('assets/clients/2.jpg'),
    specifications: ['Essential Micronutrient', 'Direct Soil Application', 'Fertigation', 'Foliar Spray']
  },
  {
    id: 'p3',
    name: 'Gypsum',
    category: Category.FERTILIZERS,
    description: "Gypsum is widely used to manufacture wallboards that are used to cover walls and ceilings. It's also used to make plaster which is used in the construction of homes as well as mixed into a patching compound for wallboard repair",
    image: asset('assets/clients/3.jpg'),
    specifications: ['Wallboards', 'Plaster', 'Construction', 'Patching Compound']
  },
  {
    id: 'p4',
    name: 'Cheleted Zinc',
    category: Category.MICRO_NUTRIENTS,
    description: 'Chelated zinc is a type of zinc supplement. It contains zinc that’s been attached to a chelating agent. Chelating agents are chemical compounds that bond with metal ions (such as zinc) to create a stable, water-soluble product that can be easily absorbed by the body.',
    image: asset('assets/clients/4.jpg'),
    specifications: ['Zinc Supplement', 'Chelating Agent', 'Stable', 'Water-Soluble']
  },
  {
    id: 'p5',
    name: 'Zinc Sulphate Monohydrate',
    category: Category.MICRO_NUTRIENTS,
    description: 'Zinc sulfate is used medically as a dietary supplement. Specifically it is used to treat zinc deficiency and to prevent the condition in those at high risk. This includes use together with oral rehydration therapy for children who have diarrhea.',
    image: asset('assets/clients/5.jpg'),
    specifications: ['Dietary Supplement', 'Zinc Deficiency Treatment', 'Oral Rehydration Support', 'Medical Use']
  },
  {
    id: 'p6',
    name: 'Zinc Sulphate Heptahydrate',
    category: Category.MICRO_NUTRIENTS,
    description: 'Zinc sulfate heptahydrate is a hydrate that is the heptahydrate form of zinc sulfate. It is a hydrate and a metal sulfate. It contains a zinc sulfate.',
    image: asset('assets/clients/6.jpg'),
    specifications: ['Hydrate Form', 'Metal Sulfate', 'Zinc Sulfate Content', 'Heptahydrate']
  },
  {
    id: 'p7',
    name: 'Agro Machinery',
    category: Category.AGRO_MACHINERIES,
    description: 'Agricultural machinery relates to the mechanical structures and devices used in farming or other agriculture. There are many types of such equipment, from hand tools and power tools to tractors and the countless kinds of farm implements that they tow or operate.',
    image: asset('assets/agro-machineries.jpg'),
    specifications: ['Farming Equipment', 'Mechanical Structures', 'Power Tools', 'Tractors']
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
  { id: 'g1', title: 'Boron', category: 'Products', image: asset('assets/clients/1.jpg') },
  { id: 'g2', title: 'Solubor Boron', category: 'Products', image: asset('assets/portfolio/portfolio-2.jpg') },
  { id: 'g3', title: 'Gypsum', category: 'Products', image: asset('assets/portfolio/portfolio-3.jpg') },
  { id: 'g4', title: 'Cheleted Zinc', category: 'Products', image: asset('assets/portfolio/portfolio-1.jpg') },
  { id: 'g5', title: 'Zinc Sulphate Monohydrate', category: 'Products', image: asset('assets/portfolio/portfolio-5.jpg') },
  { id: 'g6', title: 'Zinc Sulphate Heptahydrate', category: 'Products', image: asset('assets/clients/2.jpg') },
  // Additional Portfolio Images
  { id: 'g7', title: 'Portfolio Item 4', category: 'Products', image: asset('assets/portfolio/portfolio-4.jpg') },
  { id: 'g8', title: 'Portfolio Item 6', category: 'Products', image: asset('assets/portfolio/portfolio-6.jpg') },
  { id: 'g9', title: 'Portfolio Item 7', category: 'Products', image: asset('assets/portfolio/portfolio-7.jpg') },
  { id: 'g10', title: 'Portfolio Item 8', category: 'Products', image: asset('assets/portfolio/portfolio-8.jpg') },
  { id: 'g11', title: 'Portfolio Item 9', category: 'Products', image: asset('assets/portfolio/portfolio-9.jpg') },
  { id: 'g12', title: 'Portfolio Detail 1', category: 'Products', image: asset('assets/portfolio/portfolio-details-1.jpg') },
  { id: 'g13', title: 'Portfolio Detail 2', category: 'Products', image: asset('assets/portfolio/portfolio-details-2.jpg') },
  { id: 'g14', title: 'Portfolio Detail 3', category: 'Products', image: asset('assets/portfolio/portfolio-details-3.jpg') },
  { id: 'g15', title: 'Gypsum (Product)', category: 'Products', image: asset('assets/clients/3.jpg') },
  { id: 'g16', title: 'Cheleted Zinc (Product)', category: 'Products', image: asset('assets/clients/4.jpg') },
  { id: 'g17', title: 'Zinc Sulphate Mono', category: 'Products', image: asset('assets/clients/5.jpg') },
  { id: 'g18', title: 'Zinc Sulphate Hept', category: 'Products', image: asset('assets/clients/6.jpg') },
  { id: 'g19', title: 'Agro Machinery', category: 'Products', image: asset('assets/agro-machineries.jpg') },
  { id: 'g20', title: 'Our Facility', category: 'About', image: asset('assets/about.jpg') }
];

export const HERO_SLIDES = [
  {
    title: "World-Class Agricultural Partners",
    subtitle: "Strategic alliances with Sichuan Chanhen, VTR, and Esigma to bring global innovation to Bangladesh.",
    image: asset('assets/agro-machineries.jpg')
  },
  {
    title: "Advanced Bio-Agriculture",
    subtitle: "Pioneering the market with high-efficiency enzymes and pharmaceutical-grade agricultural additives.",
    image: asset('assets/clients/2.jpg')
  },
  {
    title: "Decades of Trusted Leadership",
    subtitle: "Leveraging 35+ years of agricultural expertise to solve modern farming challenges.",
    image: asset('assets/portfolio/portfolio-3.jpg')
  }
];

export const PARTNER_DETAILS = [
  { name: 'JHEJIANG ESIGMA ANIMAL HEALTH CO. LTD.', desc: 'Foreign Principal and Global Partner', logo: asset('assets/clients/client-1.png') },
  { name: 'AVITECH NUTRITION PVT LTD', desc: 'Foreign Principal and Global Partner', logo: asset('assets/clients/client-2.png') },
  { name: 'ZOUPING JUJIA CHOLINE INDUSTRIAL CO. LTD', desc: 'Foreign Principal and Global Partner', logo: asset('assets/clients/client-3.png') },
  { name: 'SICHUAN CHEMICAL CORPORATION', desc: 'Foreign Principal and Global Partner', logo: asset('assets/clients/client-4.png') },
  { name: 'GUANGDONG VTR BIO-TEC CO. LTD.', desc: 'Foreign Principal and Global Partner', logo: asset('assets/clients/client-5.png') },
  { name: 'YNNAN COPPER INDUSTRY SUNWARD CHEMICALS CO. LTD', desc: 'Foreign Principal and Global Partner', logo: asset('assets/clients/client-6.png') }
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
