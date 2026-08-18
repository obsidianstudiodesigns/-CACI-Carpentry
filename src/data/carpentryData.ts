import heroWallpaper from '../assets/images/caci_hero_wallpaper_1787060003488.jpg';
import kitchenImg from '../assets/images/caci_kitchen_1787060036026.jpg';
import tvUnitImg from '../assets/images/caci_tv_unit_1787060023144.jpg';
import wardrobeImg from '../assets/images/caci_wardrobe_1787060052005.jpg';
import vanityImg from '../assets/images/caci_vanity_1787060068142.jpg';
import { ServiceItem, PortfolioItem, Testimonial } from '../types';

export const COMPANY_DETAILS = {
  name: 'CACI Carpentry',
  tagline: 'Every Home Deserves a Signature Piece',
  secondaryTagline: 'Custom Carpentry. Built For Life.',
  subtext: 'From statement TV units to dream kitchens, we create custom interiors that reflect your lifestyle and elevate your home.',
  phone: '064 677 3292',
  phoneFormatted: '+27 64 677 3292',
  phoneHref: 'tel:0646773292',
  whatsapp: '069 541 3313',
  whatsappFormatted: '+27 69 541 3313',
  whatsappHref: 'https://wa.me/27695413313?text=Hi%20CACI%20Carpentry,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20custom%20carpentry%20work.',
  location: 'Klipgat, next to Mngomezulu Hardware',
  locationArea: 'Klipgat / Mabopane / Pretoria & Surrounds',
  businessHours: 'Mon - Sat: 07:30 - 18:00 | Sunday: By Appointment',
  email: 'info@cacicarpentry.co.za',
  values: [
    { title: 'Custom Made', desc: 'Made to fit your exact space and your unique lifestyle.' },
    { title: 'Perfect Fit', desc: 'Every cupboard is laser measured and installed with 0mm gaps.' },
    { title: 'Premium Materials', desc: 'Moisture-resistant boards, high-grade finishes, and heavy-duty hardware.' },
    { title: 'Expert Finishes', desc: 'Precision edge-banding, seamless joints, and ultra-smooth surfaces.' },
    { title: 'Built to Last', desc: 'Engineered durability designed to withstand daily life for decades.' },
  ],
  pillars: [
    'Quality Workmanship',
    'Modern Designs',
    'Lasting Impressions',
    'Custom Results',
    'Built to Last'
  ]
};

export const IMAGES = {
  hero: heroWallpaper,
  kitchen: kitchenImg,
  tvUnit: tvUnitImg,
  wardrobe: wardrobeImg,
  vanity: vanityImg,
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'kitchen-units',
    title: 'Modern Fitted Kitchens',
    subtitle: 'Culinary spaces designed for function & built for life',
    description: 'Transform your kitchen into the heart of your home. We custom build high-gloss, matte, fluted, and textured cabinetry with smart storage, soft-close hardware, integrated appliance housings, and premium quartz or granite countertops.',
    category: 'kitchen',
    image: kitchenImg,
    features: [
      'Custom island counters & breakfast bars with fluted wood accents',
      'Dual-tone gloss & textured timber finish options',
      'Full-extension soft-close drawers & pantry pull-outs',
      'Integrated oven, stove & refrigerator encasements',
      'Under-cabinet ambient LED channel lighting'
    ],
    popularChoices: ['L-Shape Modern Layout', 'Open Concept Island', 'Handleless J-Pull Kitchen', 'Two-Tone Scandinavian'],
    finishes: ['Super Matte Charcoal', 'High Gloss White Alabaster', 'Natural Fluted Oak', 'Calacatta Quartz Tops']
  },
  {
    id: 'built-in-cupboards',
    title: 'Built-in Cupboards & Wardrobes',
    subtitle: 'Smart storage, beautiful bedrooms & seamless organization',
    description: 'Not bought off a store shelf — custom built to the exact millimeter of your room. From floor-to-ceiling bedroom wardrobes with mirrored panels to customized internal drawer configurations.',
    category: 'cupboards',
    image: wardrobeImg,
    features: [
      'Floor-to-ceiling customized storage capacity',
      'Integrated mirror doors & designer full-length handles',
      'Internal organizer drawers, tie racks & double hanging rails',
      'Soft-close hinged or space-saving sliding track systems',
      'Moisture-resistant backing and precision edge sealing'
    ],
    popularChoices: ['3-Door Master Wardrobe', 'Floor-to-Ceiling 6-Door Unit', 'Integrated Vanity Mirror Closet', 'Sliding High-Gloss System'],
    finishes: ['Gloss White', 'Matte Slate Grey', 'Warm Walnut', 'Natural Light Ash']
  },
  {
    id: 'tv-units',
    title: 'Statement TV Units & Media Walls',
    subtitle: 'Modern focal points that elevate your entertainment lounge',
    description: 'Elevate your living room with our signature bespoke TV units. Featuring vertical acoustic fluted wood slats, faux marble slab backdrops, floating media consoles, and warm perimeter LED lighting with 100% hidden cable management.',
    category: 'tv-units',
    image: tvUnitImg,
    features: [
      'Vertical acoustic slatted fluted wood feature walls',
      'Backlit stone / marble slab backdrop mounting panels',
      'Floating low-profile consoles with push-to-open doors',
      'Hidden cable management channels & power brick compartments',
      'Integrated display cubbies with warm LED glow'
    ],
    popularChoices: ['Fluted Oak & Marble Media Wall', 'Minimalist Floating Console', 'Full Wall Architectural Entertainment Center'],
    finishes: ['Fluted Natural Oak', 'Matte Obsidian Black', 'Calacatta Gold Marble Backing', 'Smoked Glass Shelving']
  },
  {
    id: 'vanity-cabinets',
    title: 'Luxury Bathroom Vanities',
    subtitle: 'Details that make a difference in your private retreat',
    description: 'Bespoke floating bathroom vanity cabinets engineered with water-resistant core materials, stone vessel sink tops, slatted wood frontals, and integrated ambient mirror backlighting.',
    category: 'vanities',
    image: vanityImg,
    features: [
      'Moisture & humidity resistant marine-grade board core',
      'Floating wall-mounted design for clean, spacious floors',
      'Custom stone countertop cutout for top-mount or undermount basins',
      'Deep soft-close vanity drawers for toiletries & towels',
      'Coordinated backlit circular or pill mirrors'
    ],
    popularChoices: ['Single Floating Vessel Vanity', 'Double Master Ensuite Basin Vanity', 'Fluted Oak Spa Console'],
    finishes: ['Water-Resistant Fluted Wood', 'Matte Black', 'Pure Alabaster', 'Stone Composite Tops']
  },
  {
    id: 'walk-in-closets',
    title: 'Luxury Walk-in Closets',
    subtitle: 'Bespoke boutique dressing rooms built exclusively for you',
    description: 'Step into luxury every morning. We build custom dressing rooms equipped with jewelry island display cases, glass-topped accessory drawers, illuminated shoe showcases, and tailored hanging bays.',
    category: 'closets',
    image: wardrobeImg,
    features: [
      'Center jewelry island with glass display top & velvet compartments',
      'Integrated warm LED strip lighting on every shelf & rail',
      'Full-height angled shoe display towers',
      'Dedicated handbag and hat display alcoves',
      'Integrated dressing table with makeup vanity lighting'
    ],
    popularChoices: ['Walk-through Gallery Closet', 'Master Bedroom Walk-in Suite', 'L-Shaped Dressing Haven'],
    finishes: ['Warm Sand Pine', 'Charcoal & Champagne Gold', 'High-Gloss Pure White']
  },
  {
    id: 'custom-furniture',
    title: 'Tables, Chairs & Bespoke Furniture',
    subtitle: 'Handcrafted signature pieces with timeless solid craftsmanship',
    description: 'Looking for a dining table or accent console that fits your exact room dimensions? We handcraft solid wood dining tables, matching upholstered or solid chairs, coffee tables, and hallway entry consoles.',
    category: 'furniture',
    image: kitchenImg,
    features: [
      'Solid timber and engineered wood handcrafted joints',
      'Custom sizing to match your exact room proportions',
      'Protective high-grade heat and scratch resistant topcoats',
      'Coordinated matching dining benches and chairs'
    ],
    popularChoices: ['8-Seater Solid Oak Dining Table', 'Minimalist Glass & Wood Coffee Table', 'Entryway Console Table'],
    finishes: ['Natural Solid Oak', 'Rich Imbuia / Walnut Stain', 'Matte Black Ash']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-1',
    title: 'Signature Marble & Fluted Wood TV Media Wall',
    category: 'tv-units',
    image: tvUnitImg,
    location: 'Klipgat Showroom / Residential Project',
    description: 'A bespoke living room transformation featuring handcrafted vertical fluted wood acoustic slats, illuminated calacatta marble slab, and a floating soft-close media console.',
    specs: ['Fluted Natural Oak', 'Calacatta Gold Backdrop', 'Warm 3000K LED Strip', 'Internal Cable Ducting'],
    highlight: 'Signature Piece'
  },
  {
    id: 'proj-2',
    title: 'High-Gloss Modern Master Kitchen with Fluted Island',
    category: 'kitchen',
    image: kitchenImg,
    location: 'Pretoria North Residence',
    description: 'Custom fitted modern kitchen featuring dual-tone charcoal and natural oak cabinetry, waterfall quartz island with breakfast seating, and hidden pantry access.',
    specs: ['Soft-Close Blum Hinges', 'Quartz Waterfall Island', 'Integrated Appliance Wall', 'Push-to-open Upper Units'],
    highlight: 'Customer Favorite'
  },
  {
    id: 'proj-3',
    title: 'Floor-to-Ceiling High Gloss White Built-in Wardrobe',
    category: 'cupboards',
    image: wardrobeImg,
    location: 'Mabopane Master Bedroom',
    description: 'Full-wall custom built-in cupboard with integrated center mirrored door, 3 deep bottom organizer drawers, and full-length modern matte black handles.',
    specs: ['Zero-gap Ceiling Scribing', 'Smoked Mirror Panel', 'Triple Organizer Drawers', 'High Gloss Alabaster Finish'],
    highlight: 'Perfect Fit Guarantee'
  },
  {
    id: 'proj-4',
    title: 'Floating Spa Bathroom Vanity with Vessel Sink',
    category: 'vanities',
    image: vanityImg,
    location: 'Ga-Rankuwa Residence',
    description: 'Custom wall-hung fluted wood vanity cabinet featuring a matte stone vessel basin, matte black wall-mounted tapware, and a backlit circular mirror.',
    specs: ['Moisture-Resistant HMR Board', 'Floating Steel Brackets', 'Natural Fluted Oak Front', 'Backlit Smart Mirror'],
    highlight: 'Water-Resistant Craft'
  },
  {
    id: 'proj-5',
    title: 'Open Concept Designer Kitchen & Dining Space',
    category: 'kitchen',
    image: heroWallpaper,
    location: 'Soshanguve Family Home',
    description: 'Comprehensive interior carpentry package combining custom fitted kitchen, matching dining island, and integrated feature walls.',
    specs: ['Custom Fitted Islands', 'Seamless Floor Joints', 'Ambient LED Channels', 'Bespoke Bar Stools'],
    highlight: 'Full Home Package'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Thabo & Lerato M.',
    location: 'Klipgat',
    project: 'Full Kitchen & Master Built-in Wardrobes',
    rating: 5,
    comment: 'CACI Carpentry completely transformed our home. The kitchen island and bedroom cupboards are top-tier quality. They measured everything accurately and finished on time. We recommend them to everyone in our community!',
    date: '2 weeks ago'
  },
  {
    id: 'test-2',
    name: 'Dr. Kevin Ndlovu',
    location: 'Mabopane',
    project: 'Statement TV Unit & Media Wall',
    rating: 5,
    comment: 'The fluted wood TV wall with the LED lights is the first thing guests comment on when entering our home. It looks like it came straight out of an architectural magazine. Truly custom built and built to last.',
    date: '1 month ago'
  },
  {
    id: 'test-3',
    name: 'Nomsa Sithole',
    location: 'Soshanguve',
    project: 'Custom Built-in Cupboards',
    rating: 5,
    comment: 'I had awkward high ceilings and uneven walls, but CACI Carpentry made the cupboards fit with zero gaps. The soft-close hinges and high-gloss white finish are stunning. 100% worth every cent.',
    date: '3 weeks ago'
  },
  {
    id: 'test-4',
    name: 'Sipho Khumalo',
    location: 'Pretoria North',
    project: 'Floating Bathroom Vanity & Custom Dining Table',
    rating: 5,
    comment: 'Professional, punctual, and very skilled craftsmen. You can tell they take pride in what they build. Great communication via WhatsApp and very fair pricing for this level of luxury finish.',
    date: 'Last month'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Consultation & Precision Measurements',
    desc: 'We visit your home or meet at our Klipgat workshop to understand your vision, take exact laser measurements, and inspect the space.'
  },
  {
    step: '02',
    title: 'Custom 3D Design & Material Selection',
    desc: 'We design your 3D layout, helping you select the best colors, fluted timber profiles, stone tops, handles, and internal organizers.'
  },
  {
    step: '03',
    title: 'Workshop Precision Crafting',
    desc: 'Our master carpenters cut, edge-band, and assemble your pieces with heavy-duty hardware and moisture-resistant premium boards.'
  },
  {
    step: '04',
    title: 'Expert Installation & Quality Handover',
    desc: 'We deliver and professionally install your units with 0mm gap perfection, test every soft-close hinge, and leave your home spotless.'
  }
];

export const FAQS = [
  {
    question: 'Where is CACI Carpentry located and what areas do you service?',
    answer: 'Our main workshop and showroom is located in Klipgat, right next to Mngomezulu Hardware. We service clients across Klipgat, Mabopane, Soshanguve, Ga-Rankuwa, Pretoria North, Centurion, and the wider Gauteng / North West regions.'
  },
  {
    question: 'How do I request a free quote for my home?',
    answer: 'You can request a free quote by calling us directly at 064 677 3292 or sending us a message on WhatsApp at 069 541 3313. You can also use our interactive online quote estimator on this website to get started immediately.'
  },
  {
    question: 'Why choose custom-built cupboards over store-bought flat-packs?',
    answer: 'Store-bought flat-packs come in fixed sizes that leave ugly gaps, use lightweight low-durability chipboards, and wear out quickly. At CACI Carpentry, every unit is custom-made to your room’s exact height and width (floor-to-ceiling), using high-density moisture-resistant boards and heavy-duty soft-close hardware built for life.'
  },
  {
    question: 'How long does a typical kitchen or wardrobe project take?',
    answer: 'From finalizing 3D design to completion, most built-in cupboards and TV units take 5 to 10 working days for workshop crafting, followed by 1 to 2 days for on-site installation. Larger custom kitchen installations typically take 2 to 3 weeks.'
  },
  {
    question: 'Do you offer a warranty or guarantee on your craftsmanship?',
    answer: 'Yes! We stand behind our work with our "Built for Life" craftsmanship guarantee. All our hinges, drawer runners, and structural joinery are built with premium materials engineered to last.'
  }
];
