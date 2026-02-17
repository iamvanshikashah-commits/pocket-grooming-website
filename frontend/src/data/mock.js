// Mock data for Pocket Grooming website

export const mockData = {
  // Contact form submissions (will be replaced with backend)
  contactSubmissions: [],
  
  // Logo
  logo: {
    url: 'https://customer-assets.emergentagent.com/job_pocket-grooming/artifacts/g7q9vj92_pocket%20logo-01.png',
    alt: 'Pocket - Micro Grooming'
  },
  
  // Navigation
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Product', path: '/product' },
    { label: 'Micro Grooming', path: '/micro-grooming' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ],
  
  // Home page data
  home: {
    hero: {
      eyebrow: 'A new category in grooming',
      headline: 'MICRO GROOMING.',
      subheadline: 'Made for life in motion.',
      description: 'Precision grooming in a compact format. Engineered for consistent output, designed for modern distribution.',
      pillars: ['FORMAT', 'FLOW', 'FUNCTION']
    },
    category: {
      title: 'A new format. Designed for modern movement.',
      description: 'Micro-format grooming eliminates bulk while maximizing control. Compact engineering meets consistent output for portability without compromise. Built for modern distribution needs and refined guest experiences.'
    },
    systemPoints: [
      {
        number: '1',
        title: 'Micro-Aerosol Delivery',
        description: 'Controlled dispensing architecture delivers consistent foam density with every application. Precision-engineered valve system ensures stable output across product lifecycle.'
      },
      {
        number: '2',
        title: 'Engineered for Consistency',
        description: 'Formula stability maintained through micro-format design. Dense, workable foam that holds its structure. Reliable performance from first use to last.'
      },
      {
        number: '3',
        title: 'Built for Hospitality Integration',
        description: 'Designed for seamless property integration. Compact footprint optimizes inventory and presentation. Premium amenity experience that aligns with modern hospitality standards.'
      }
    ],
    product: {
      name: 'Pocket Shaving Foam (PSF)',
      size: '25 ml Micro-Aerosol',
      highlights: [
        'Dense foam output',
        'Stable consistency',
        'Compact and travel-ready'
      ],
      inquiry: 'Inquire for sampling & institutional supply.'
    },
    useContexts: [
      {
        title: 'Hotels & Premium Stays',
        description: 'Elevated amenity experience in compact format.'
      },
      {
        title: 'Airlines & Travel Kits',
        description: 'TSA-compliant grooming for modern travel.'
      },
      {
        title: 'Corporate Gifting',
        description: 'Premium presentation for professional contexts.'
      },
      {
        title: 'Institutional Supply',
        description: 'Scalable distribution with consistent quality.'
      }
    ],
    trust: {
      headline: 'Backed by decades of hotel amenity manufacturing.',
      description: 'Built on Jaivanti Cosmetics\' 30+ year legacy of supplying premium hospitality properties across India.',
      linkText: 'Read our story',
      linkPath: '/about'
    }
  },
  
  // Product page data
  product: {
    hero: {
      title: 'Pocket Shaving Foam (PSF)',
      subtitle: '25 ml Micro-Aerosol shaving-grade foam.',
      specs: ['Controlled output', 'Dense foam', 'Compact format']
    },
    quality: {
      title: 'Foam quality that holds.',
      points: [
        {
          title: 'Density',
          description: 'Rich, workable foam that maintains structure throughout application.'
        },
        {
          title: 'Stability',
          description: 'Consistent texture from first dispense to final use. No degradation over time.'
        },
        {
          title: 'Output',
          description: 'Precision valve delivers controlled portions. Eliminates waste, ensures reliability.'
        }
      ]
    },
    system: {
      title: 'Micro-Aerosol Delivery',
      description: 'Compact engineering meets controlled dispensing. Pressure-regulated system maintains consistent foam density across entire product lifecycle. Miniaturized format without compromised performance.'
    },
    specifications: [
      { label: 'Net content', value: '25 ml' },
      { label: 'Format', value: 'Micro-aerosol' },
      { label: 'Use', value: 'Shaving foam' },
      { label: 'Output', value: 'Controlled dispensing' },
      { label: 'Packaging', value: 'Compact can' },
      { label: 'Supply', value: 'Institutional / hospitality availability via inquiry' }
    ],
    scenarios: [
      {
        title: 'Guest Room Integration',
        benefit: 'Premium amenity that optimizes bathroom space and enhances presentation.'
      },
      {
        title: 'Travel Kit Inclusion',
        benefit: 'Compact format ideal for airline amenity kits and premium travel sets.'
      },
      {
        title: 'Corporate Distribution',
        benefit: 'Professional presentation for gifting, welcome kits, and employee benefits.'
      }
    ]
  },
  
  // Micro Grooming page data
  microGrooming: {
    hero: {
      title: 'MICRO GROOMING.',
      subtitle: 'A system designed for movement, efficiency, and modern distribution.'
    },
    shift: {
      problem: {
        title: 'The Problem',
        points: [
          'Bulk formats create storage and presentation challenges',
          'Inconsistent amenity quality diminishes guest experience',
          'Messy application wastes product and time',
          'Traditional sizing conflicts with modern travel requirements'
        ]
      },
      solution: {
        title: 'The Solution',
        points: [
          'Micro-format design: compact, controlled, premium',
          'Consistent output through precision engineering',
          'Enhanced portability without performance compromise',
          'Modern distribution model for institutional needs'
        ]
      }
    },
    pillars: [
      {
        title: 'FORMAT',
        description: 'Micro-aerosol architecture reduces footprint while maintaining premium output. 25 ml delivers optimal use-per-guest ratio. Compact design enhances presentation and storage efficiency.'
      },
      {
        title: 'FLOW',
        description: 'Controlled dispensing system ensures consistent foam density. Precision valve technology eliminates waste and maintains quality. Reliable performance from first application to last.'
      },
      {
        title: 'FUNCTION',
        description: 'Engineered for institutional integration. TSA-compliant sizing for travel contexts. Premium grooming experience in a format built for modern hospitality and distribution needs.'
      }
    ],
    vision: {
      title: 'System Vision',
      description: 'The Micro-Aerosol System establishes a new grooming platform. Pocket Shaving Foam (PSF) is the foundation—a category-defining product that proves micro-format viability. Future releases will expand the ecosystem while maintaining the same engineering principles: compact, consistent, premium.',
      note: 'PSF is the first release in the Pocket Grooming ecosystem.'
    }
  },
  
  // About page data
  about: {
    hero: {
      title: 'Heritage meets innovation.',
      subtitle: 'Building the future of institutional grooming.'
    },
    heritage: {
      title: 'Jaivanti Cosmetics',
      established: 'Established 1990',
      description: 'For over three decades, Jaivanti Cosmetics has been a trusted partner to India\'s premium hospitality sector. Our expertise spans hotel amenity manufacturing, institutional supply, and large-scale distribution. We understand the standards that premium properties demand: consistency, quality, and operational reliability.',
      focus: 'Our manufacturing capabilities and supply chain infrastructure serve hospitality groups, airlines, and institutional clients nationwide. Every product reflects our commitment to precision and partnership.'
    },
    capability: {
      title: 'Manufacturing & Supply',
      points: [
        {
          title: 'Production Scale',
          description: 'Established manufacturing infrastructure with capacity for high-volume institutional supply.'
        },
        {
          title: 'Quality Systems',
          description: 'ISO-certified processes ensure batch-to-batch consistency and regulatory compliance.'
        },
        {
          title: 'Distribution Network',
          description: 'Pan-India logistics capabilities with reliable fulfillment for multi-property hospitality groups.'
        },
        {
          title: 'Partnership Approach',
          description: 'Direct engagement with procurement teams. Custom solutions for unique property requirements.'
        }
      ]
    },
    pocket: {
      title: 'Why Pocket exists',
      description: 'Pocket is Jaivanti\'s innovation arm—a response to evolving hospitality needs and modern grooming behaviors. We saw an opportunity to reimagine amenity formats through engineering and design. The result is Micro Grooming: a new category that delivers premium experiences in compact, consistent formats. Pocket Shaving Foam is the first expression of this vision, built on decades of manufacturing expertise and deep understanding of institutional requirements.'
    }
  },
  
  // Contact form options
  contactForm: {
    requirementOptions: [
      'Hotels',
      'Airlines',
      'Corporate Gifting',
      'Institutional',
      'Other'
    ]
  }
};
