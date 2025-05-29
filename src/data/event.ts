// src/data.ts
import RoyalWeeding from '../asset/royal Weeding.avif'
import Metgala  from      '../asset/metagala.jpg'
import Haldi from '../asset/haldi.jpg'
import Mahndi from '../asset/Mahandi.jpg'
 import Birthdat from '../asset/bithday.jpg'
  import Kitty from '../asset/kitty.jpg'
  import RingCeremony from '../asset/ring.jpg'
  import enter from '../asset/groom and bridal.jpg'
  import lightfloral from '../asset/light and floer.jpg'
   import theme from '../asset/theme.jpg'
    import NewYear from '../asset/newyear.jpg'
     import liveconsert from '../asset/LiveConsert.jpg'

//catring image


import NorthIndiaFood from '../asset/north india.avif'


export const eventCards = [
  {
    title: 'Royal Wedding Setup',
    description: 'Elegant décor, full management & sound system.',
    image: RoyalWeeding,
    includes: [
      'Luxurious floral arrangements',
      'Themed stage setup',
      'Premium sound and lighting system',
      'Guest seating and entrance décor',
      'Event planning and coordination',
    ],
    tags: ['Wedding', 'Royal', 'Elegant', 'Luxury'],
  },
  {
    title: 'Corporate Gala Night',
    description: 'Perfect for high-end business events.',
    image: Metgala,
   
  
    includes: [
      'Stage and podium with branding',
      'Ambient lighting and background music',
      'Professional seating arrangement',
      'Decorative centerpieces',
      'Event flow coordination',
    ],
    tags: ['Corporate', 'Gala', 'Business', 'Formal'],
  },
  {
    title: 'Live Concert Arrangement',
    description: 'Stage, lighting & sound system included.',
    image: liveconsert,
   
    includes: [
      'Large concert stage setup',
      'Advanced sound system',
      'Dynamic lighting rig',
      'Security and crowd management',
      'Backstage coordination',
    ],
  },
 {
    title: 'Haldi Ceremony Setup',
    image: Haldi, // Replace this with your actual image import or URL
   
    includes: [
      'Traditional Haldi stage decor',
      'Marigold floral arrangements',
      'Color-coordinated seating & backdrops',
      'Music & dhol setup',
      'Haldi bowls & rituals props',
    ],
  
  },

  {
  title: 'Mehndi Ceremony Setup',
  image: Mahndi, // Replace this with your actual image import or URL
  capacity: 'Up to 120 guests',
  includes: [
    'Colorful tent & canopy decor',
    'Mehndi artist stations',
    'Rajasthani seating lounges with bolsters',
    'Floral rangoli & fairy lights',
    'Live dhol and DJ setup (optional)',
  ],
},

 {
  title: 'Birthday Party Celebration',
  image: Birthdat, // Replace with actual image import or URL
  includes: [
    'Themed stage decoration',
    'Professional sound system',
    'Dynamic lighting & laser effects',
    'DJ setup & emcee (optional)',
    'Custom birthday banner & entrance arch',
    'Catering coordination (optional)',
  ],
  tags: ['Birthday', 'Party', 'Outdoor', 'Music', 'Family-Friendly'],
},

  {
  title: 'Kitty Party Elegance',
  image: Kitty, // Replace with actual image reference
  capacity: 'Up to 80 guests',
  includes: [
    'Chic lounge seating & floral décor',
    'Customized theme setup',
    'Full event management',
    'DJ or background music setup',
    'Tea, snacks & dessert coordination (optional)',
    'Games & activity host (optional)',
  ],
},

  {
  title: 'Ring Ceremony Celebration',
  image: RingCeremony, // Replace with the appropriate image asset
  capacity: 'Up to 100 guests',
  includes: [ 
    'Stage & backdrop decoration',
    'Elegant floral arrangements',
    'Ambient lighting & soft music setup',
    'Guest seating with themed décor',
    'Event coordination support',
    'Cake table & engagement props (optional)',
  ],
}
,
 {
  title: 'Bridal & Groom Grand Entrance',
  image: enter, // Replace with the appropriate image asset
  location: 'Open Grounds, Mumbai',
  capacity: 'Unlimited (open venue)',
  includes: [
    'Custom stage design',
    'Thematic lighting effects',
    'Entrance choreography support',
    'Professional-grade sound system',
    'Fog machines and special effects (optional)',
    'Welcome décor and live announcements',
  ],
}
,
  {
    title: 'Lighting & Floral Décor',
    image: lightfloral, // Replace with the appropriate image asset
    capacity: 'Unlimited (open venue)',
    includes: [
      'Full floral stage design',
      'Custom lighting arrangements',
      'Entrance and walkway décor',
      'Hanging installations and centerpieces',
      'Setup and teardown service',
    ],
  },
  {
    title: 'Theme based Decoration',
    image: theme, // Replace with the appropriate image asset
   capacity: 'Unlimited (open venue)',
    includes: [
      'Customized theme décor',
      'Backdrop and props matching the theme',
      'Mood lighting',
      'Table settings and centerpieces',
      'Event coordination support',
    ],
  },
  {
    title: 'New Year Party Celebration',
    image: NewYear, // Replace with the appropriate image asset
  
   capacity: 'Unlimited (open venue)',
    includes: [
      'Live DJ and sound system',
      'Dance floor and stage lighting',
      'Countdown visuals',
      'Decorated entry gate',
      'Fireworks (optional)',
    ],
  },
];

export const cateringCards = [
  {
    title: 'Traditional Rajasthani Thali',
    image:'https://i.pinimg.com/736x/71/f3/4d/71f34dc09917ebbab207edd680f17539.jpg',
    capacity: 'Unlimited (open venue)',
    includes: [
      'Dal Baati Churma',
      'Gatte ki Sabzi',
      'Ker Sangri',
      'Bajra Roti',
      'Chaas (buttermilk)',
      'Papad & Pickle',
      'Sweet Dish (Ghevar/Malpua)',
    ],
  },
 {
    title: 'Live Chaat & Snacks Counter',
    description: 'Pani Puri, Dahi Bhalla, Tikki & more.',
    image: 'https://i.pinimg.com/736x/04/ed/be/04edbec496130dc29e9e4ed0b806afba.jpg',
     capacity: 'Unlimited (open venue)',
    includes: [
      'Pani Puri with flavored water',
      'Dahi Bhalla with chutneys',
      'Aloo Tikki',
      'Sev Puri & Papdi Chaat',
      'Chaat Counter Staff',
      'Live preparation setup',
    ],
  },
 {
  title: 'Out Side Catering',
  image: 'https://i.pinimg.com/736x/eb/27/fc/eb27fc5c50a698da3cc545dd1ef3f406.jpg',
  capacity: 'Unlimited (open venue)',
  includes: [
    '12+ authentic Rajasthani & Gujarati dishes',
    'On-site cooking and buffet setup',
    'Professional serving staff',
    'Disposable plates & cutlery',
    'Live food counters available',
    'Clean-up and waste management'
  ]
}
,
  {
    title: 'Live Food Counter',
 
    image: NorthIndiaFood,
   capacity: 'Unlimited (open venue)',
    includes: [
      'Multiple live counters (tandoor, chaat, pasta, etc.)',
      'Professional chefs on site',
      'Serving staff with hygiene kit',
      'Basic seating arrangement (optional)',
      'Unlimited servings during event time',
      'Customizable menu options'
    ]
  },
  {
    title: 'Delicious Chaat Counter',
    image: 'https://i.pinimg.com/736x/16/b3/fa/16b3faf28da2c2a1a0595d68f4fb8fd3.jpg',
    capacity: 'Unlimited (open venue)',
    includes: [
      'Live Pani Puri, Dahi Bhalla & Tikki counter',
      'Disposable eco-friendly plates & bowls',
      'Chaat chef & server included',
      'Spice & flavor customization options',
      'Setup & tear-down support',
      'Themed stall decor (optional)'
    ]
  },
   {
    title: 'Wedding Catering',
    description: 'Includes 12+ authentic items served hot.',
    image: 'https://i.pinimg.com/736x/56/e2/32/56e232137a3b383a2224e7e5a7bfb376.jpg',
   capacity: 'Unlimited (open venue)',
    includes: [
      'Multi-course wedding feast',
      'Regional cuisines & sweets',
      'Premium table setup & chafing dishes',
      'Uniformed serving staff',
      'Live dessert & snack counters',
      'Event-day food supervisor'
    ]
  },
  {
  title: 'Birthday Party Catering',
  description: 'Paneer, Dal, Roti, Rice, Dessert & more.',
  image: 'https://i.pinimg.com/736x/1d/eb/ef/1debef4390da21de136270874bc2a431.jpg',
   capacity: 'Unlimited (open venue)',
  includes: [
    'North Indian full-course meal',
    'Birthday cake table setup (optional)',
    'Themed disposable serveware',
    'Live counter options available',
    'Beverages & sweet dishes included',
    'Setup, serving, and cleanup support',
    'On-site event supervisor (optional)',
  ],
}
,
{
  title: 'Corporate Catering',
  description: 'Premium menu designed for business events and conferences.',
  image: 'https://i.pinimg.com/736x/0a/89/f8/0a89f8517b2f70eaab0ed9d2e35031d1.jpg', // Consider updating this to a more corporate-appropriate image
   capacity: 'Unlimited (open venue)',
  includes: [
    'Multi-course meal options (veg & non-veg)',
    'Professional serving staff',
    'Disposable or ceramic serveware',
    'Live food counters (optional)',
    'On-site chef supervision',
    'Water, beverages & desserts included',
    'Setup and cleanup service',
  ],
},

{
  title: 'Drinking Water Service',
  description: 'Hygienic and timely water supply for all event guests.',
  image:'https://i.pinimg.com/736x/e2/51/b0/e251b0feb0772d03954a8dd085c9efb3.jpg', // You may want to replace this with a more relevant image.
   capacity: 'Unlimited (open venue)',
  includes: [
    '20L Water Cans (RO purified)',
    'Disposable glasses or glass tumblers',
    'Water dispensers at key locations',
    'Refill staff available throughout event',
    'Backup water cans',
    'Cold and room-temperature options',
    'Setup and cleanup included',
  ],
},

{
  title: 'Chinese Catering',
  description: 'Paneer, Dal, Roti, Rice, Dessert & more.',
  image: 'https://i.pinimg.com/736x/6e/0c/ee/6e0ceebe5a84a750ab15db9b93b8bcc7.jpg',
   capacity: 'Unlimited (open venue)',
  includes: [
    'Veg Manchurian',
    'Chilli Paneer',
    'Hakka Noodles',
    'Fried Rice',
    'Spring Rolls',
    'Hot & Sour Soup',
    'Dessert (Ice Cream / Sweet Dish)',
    'Live counter with chef (optional)',
    'Serving staff & cutlery',
  ],
},

 {
  title: 'Fast Food Catering',
  description: 'Pani Puri, Dahi Bhalla, Tikki & more.',
  image: 'https://i.pinimg.com/736x/23/77/80/237780341e8e19feffe5c7388285d6e5.jpg',
  capacity: 'Unlimited (open venue)',
  includes: [
    'Pani Puri with 3 flavored waters',
    'Dahi Bhalla with chutneys',
    'Aloo Tikki with chole & curd',
    'Sev Puri / Bhel Puri',
    'Live counter setup with chef',
    'Disposable eco-friendly plates',
    'Hygiene and crowd management staff',
  ],
}

];
