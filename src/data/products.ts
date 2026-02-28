import { Product } from '../context/CartContext';
import crock2 from "../assets/images/crock2.jpg";
import leatherbag2 from "../assets/images/leatherbag2.jpg";
import  leather2 from "../assets/images/leather2.jpg";
import  leather1 from "../assets/images/leather1.jpg";
import  leather3 from "../assets/images/leather3.jpg";
import  leather4 from "../assets/images/leather4.jpg";
import leatherbag from "../assets/images/leatherbag.jpg";
import leatherbag3 from "../assets/images/leatherbag3.jpg";
import leatherbag4 from "../assets/images/leatherbag4.jpg";
import maingrills from "../assets/images/Maingrills.jpg";
import grills from "../assets/images/grills.jpg";
import model from "../assets/images/model.jpg";
import model2 from "../assets/images/model2.jpg";
import model3 from "../assets/images/model3.jpg";
import sneakers from "../assets/images/sneakers.jpg";
import sneakers2 from "../assets/images/sneakers2.jpg";
import sneakers3 from "../assets/images/sneakers2.jpg";



export const products: Product[] = [
  // Jewelry
  {
    id: '1',
    name: 'Luminous Lotus',
    price: 420,
    image: maingrills,
    images: [
      maingrills,
      grills,
      'https://via.placeholder.com/1000?text=Luminous+Lotus+Alt+2',
      'https://via.placeholder.com/1000?text=Luminous+Lotus+Alt+3',
    ],
    category: 'jewelry',
    description: 'Crafted with meticulous detail, the pendant features intricate petal-like patterns.',
    rating: 4.8,
    shippingDate: '2026-2-01',
  },
  {
    id: '2',
    name: 'Griils',
    price: 257,
    image: grills,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=1000',
      'https://via.placeholder.com/1000?text=Leather+Bag+Alt+1',
      'https://via.placeholder.com/1000?text=Leather+Bag+Alt+2',
      'https://via.placeholder.com/1000?text=Leather+Bag+Alt+3',
    ],
    category: 'jewelry',
    description: 'Embrace the frosty elegance and embrace the chilly brilliance.',
    rating: 4.9,
    shippingDate: '2026-01-15',
  },
  {
    id: '3',
    name: 'Eternal Embrace',
    price: 365,
    image: model3,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'bags',
    description: 'Crafted with exceptional artistry, this ring serves as a constant reminder.',
    rating: 5.0,
    shippingDate: '2025-11-20',
  },
  {
    id: '4',
    name: 'Enchanting Ember Pendant',
    price: 189,
    image: model2,
    images:[
      leather1,
      leather3,
      leather4,
    ],
    category: 'jewelry',
    description: 'The captivating piece features a radiant gemstone that mesmerizes with its fiery allure.',
    rating: 4.95,
    shippingDate: '2026-02-01',
  },
  {
    id: '7',
    name: 'Diamond Cuban Link',
    price: 1599,
    image: model,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'jewelry',
    description: 'Solid gold Cuban link chain encrusted with VVS diamonds.',
    rating: 5.0,
    shippingDate: '2026-03-10',
  },
  {
    id: '9',
    name: 'Iced Out Watch',
    price: 2499,
    image: model3,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'jewelry',
    description: 'Fully flooded diamond watch with Swiss movement.',
    rating: 4.9,
    shippingDate: '2026-02-20',
  },
  {
    id: '10',
    name: 'Gold Rope Chain',
    price: 850,
    image: leatherbag,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'jewelry',
    description: 'Classic 14k gold rope chain, perfect for everyday wear.',
    rating: 4.7,
    shippingDate: '2025-10-05',
  },
  {
    id: '11',
    name: 'Sapphire Signet Ring',
    price: 550,
    image: leatherbag2,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'jewelry',
    description: 'Bold signet ring featuring a deep blue sapphire center stone.',
    rating: 4.8,
    shippingDate: '2025-09-15',
  },
  {
    id: '12',
    name: 'Diamond Stud Earrings',
    price: 320,
    image: sneakers2,
    category: 'jewelry',
    description: 'Classic diamond studs that add a touch of elegance to any look.',
    rating: 4.6,
    shippingDate: '2025-12-10',
  },
  {
    id: '13',
    name: 'Emerald Tennis Bracelet',
    price: 1250,
    image: sneakers, 
    // Reusing image for demo
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'jewelry',
    description: 'Stunning tennis bracelet featuring vibrant emeralds.',
    rating: 4.9,
    shippingDate: '2026-01-05',
  },

  // Clothing
  {
    id: '5',
    name: 'Urban Street Hoodie',
    price: 120,
    image: model,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'clothing',
    description: 'Premium cotton blend hoodie with oversized fit and custom embroidery.',
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    shippingDate: '2025-11-01',
  },
  {
    id: '8',
    name: 'Velvet Bomber Jacket',
    price: 280,
    image: model2,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'clothing',
    description: 'Luxurious velvet bomber jacket with silk lining.',
    rating: 4.6,
    sizes: ['M', 'L', 'XL'],
    shippingDate: '2025-12-25',
  },
  {
    id: '14',
    name: 'Distressed Denim Jacket',
    price: 180,
    image: leatherbag2,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'clothing',
    description: 'Vintage wash denim jacket with hand-distressed details.',
    rating: 4.5,
    sizes: ['S', 'M', 'L', 'XL'],
    shippingDate: '2025-10-20',
  },
  {
    id: '15',
    name: 'Graphic Tee - Vibe',
    price: 45,
    image: leatherbag3,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'clothing',
    description: 'Heavyweight cotton tee with signature VibeVault graphic.',
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    shippingDate: '2026-01-20',
  },
  {
    id: '16',
    name: 'Cargo Joggers',
    price: 95,
    image: sneakers3, // Placeholder
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'clothing',
    description: 'Functional cargo joggers with multiple pockets and tapered fit.',
    rating: 4.4,
    sizes: ['S', 'M', 'L', 'XL'],
    shippingDate: '2025-09-30',
  },
  {
    id: '17',
    name: 'Silk Button Down',
    price: 150,
    image: leatherbag3,
    images: [
      model3,
      leatherbag4,
      
    ],
    category: 'clothing',
    description: 'Pure silk button down shirt in midnight black.',
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    shippingDate: '2026-02-15',
  },
  {
    id: '18',
    name: 'Oversized Puffer',
    price: 320,
    image: maingrills,
    images: [
      model3,
      leatherbag4,
      leatherbag3
    ],
    category: 'clothing',
    description: 'High-gloss puffer jacket for maximum warmth and style.',
    rating: 4.7,
    sizes: ['M', 'L', 'XL'],
    shippingDate: '2025-12-05',
  },

  // Bags
  {
    id: '6',
    name: 'Vibe Leather Crossbody',
    price: 350,
    image: leatherbag,
    category: 'bags',
    description: 'Italian leather crossbody bag with gold hardware and adjustable strap.',
    rating: 4.8,
    shippingDate: '2025-11-15',
  },
  {
    id: '19',
    name: 'Monogram Backpack',
    price: 450,
    image: leatherbag2,
    category: 'bags',
    description: 'Spacious backpack featuring our signature monogram print.',
    rating: 4.6,
    shippingDate: '2026-01-10',
  },
  {
    id: '20',
    name: 'Mini Duffle Bag',
    price: 280,
    image: leatherbag3,
    category: 'bags',
    description: 'Compact duffle bag perfect for gym or weekend trips.',
    rating: 4.5,
    shippingDate: '2025-10-15',
  },
  {
    id: '21',
    name: 'Chain Strap Shoulder Bag',
    price: 390,
    image:leatherbag4,
    category: 'bags',
    description: 'Elegant shoulder bag with chunky gold chain strap.',
    rating: 4.9,
    shippingDate: '2026-02-25',
  },
  {
    id: '22',
    name: 'Utility Chest Rig',
    price: 110,
    image: grills, // Placeholder
    category: 'bags',
    description: 'Streetwear essential chest rig with multiple compartments.',
    rating: 4.3,
    shippingDate: '2025-09-20',
  },

  // Shoes
  {
    id: '23',
    name: 'High-Top Sneakers',
    price: 220,
    image: leather1,
    category: 'shoes',
    description: 'Classic high-top sneakers with premium leather upper.',
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11', '12'],
    shippingDate: '2025-11-25',
  },
  {
    id: '24',
    name: 'Chunky Sole Runners',
    price: 180,
    image: leather2,
    category: 'shoes',
    description: 'Futuristic runners with exaggerated chunky sole.',
    rating: 4.5,
    sizes: ['7', '8', '9', '10', '11'],
    shippingDate: '2025-12-15',
  },
  {
    id: '25',
    name: 'Velvet Loafers',
    price: 250,
    image: leather3,
    category: 'shoes',
    description: 'Sophisticated velvet loafers with gold embroidery.',
    rating: 4.8,
    sizes: ['8', '9', '10', '11', '12'],
    shippingDate: '2026-01-30',
  },
  {
    id: '26',
    name: 'Streetwear Boots',
    price: 300,
    image: crock2 ,
    category: 'shoes',
    description: 'Rugged combat boots with a modern streetwear twist.',
    rating: 4.6,
    sizes: ['8', '9', '10', '11', '12'],
    shippingDate: '2025-10-25',
  },
  {
    id: '27',
    name: 'Limited Edition Kicks',
    price: 450,
    image: sneakers,
    category: 'shoes',
    description: 'Exclusive colorway sneakers, limited production run.',
    rating: 5.0,
    sizes: ['9', '10', '11'],
    shippingDate: '2026-03-01',
  },
  {
    id: '28',
    name: 'Platform Slides',
    price: 80,
    image: sneakers2,
    category: 'shoes',
    description: 'Comfortable slides with platform sole for extra height.',
    rating: 4.4,
    sizes: ['6', '7', '8', '9', '10'],
    shippingDate: '2025-08-15',
  },
  {
    id: '29',
    name: 'Gold Accent Sneakers',
    price: 210,
    image: crock2,
    category: 'shoes',
    description: 'Clean white sneakers with subtle gold hardware accents.',
    rating: 4.7,
    sizes: ['7', '8', '9', '10', '11', '12'],
    shippingDate: '2025-11-10',
  },
  {
    id: '30',
    name: 'Retro Basketball Shoes',
    price: 190,
    image: sneakers3,
    category: 'shoes',
    description: '90s inspired basketball silhouette in bold colors.',
    rating: 4.8,
    sizes: ['8', '9', '10', '11', '12', '13'],
    shippingDate: '2026-02-10',
  },
];
