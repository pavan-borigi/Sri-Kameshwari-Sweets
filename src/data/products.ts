export type CategoryId = 'sweets' | 'hots' | 'cakes' | 'bakery' | 'drinks';

export interface Product {
  id: string;
  name: string;
  image: string;
  categoryId: CategoryId;
}

export interface Category {
  id: CategoryId;
  title: string;
  description: string;
  items: Product[];
}

export const products: Product[] = [
  // Sweets
  { id: 's1', name: 'Badam Burfi', image: '/products/badam burfi.jpeg', categoryId: 'sweets' },
  { id: 's2', name: 'Badusha', image: '/products/badusha.jpeg', categoryId: 'sweets' },
  { id: 's3', name: 'Boondi Laddu', image: '/products/boondi laddu.jpeg', categoryId: 'sweets' },
  { id: 's4', name: 'Chana Poda', image: '/products/chanapoda.jpeg', categoryId: 'sweets' },
  { id: 's5', name: 'Chocolate Burfi', image: '/products/chocolate burfi.jpeg', categoryId: 'sweets' },
  { id: 's6', name: 'Dry Fruit Halwa', image: '/products/dry fruit halwa.jpeg', categoryId: 'sweets' },
  { id: 's7', name: 'Dry Fruit Laddu', image: '/products/dry fruit laddu.jpeg', categoryId: 'sweets' },
  { id: 's8', name: 'Kaju Burfi', image: '/products/kaju burfi.jpeg', categoryId: 'sweets' },
  { id: 's9', name: 'Kaju Roll', image: '/products/kaju roll.jpeg', categoryId: 'sweets' },
  { id: 's10', name: 'Kakinada Kaja', image: '/products/kakinada kaja.jpeg', categoryId: 'sweets' },
  { id: 's11', name: 'Kalakand', image: '/products/kalakand.jpeg', categoryId: 'sweets' },
  { id: 's12', name: 'Madatha Kaja', image: '/products/madatha kaja.jpeg', categoryId: 'sweets' },
  { id: 's13', name: 'Matka Rabdi', image: '/products/matka rabdi.jpeg', categoryId: 'sweets' },
  { id: 's14', name: 'Motichoor Laddu', image: '/products/motichoor laddu.jpeg', categoryId: 'sweets' },
  { id: 's15', name: 'Mysore Pak', image: '/products/mysore pak.jpeg', categoryId: 'sweets' },
  { id: 's16', name: 'Palakova', image: '/products/palakova.jpeg', categoryId: 'sweets' },
  { id: 's17', name: 'Paneer Jilebi', image: '/products/paneer jilebi.jpeg', categoryId: 'sweets' },
  { id: 's18', name: 'Pista Burfi', image: '/products/pista burfi.jpeg', categoryId: 'sweets' },
  { id: 's19', name: 'Pootharekulu', image: '/products/pootharekulu.jpeg', categoryId: 'sweets' },
  { id: 's20', name: 'Rasgulla', image: '/products/rasgulla.jpeg', categoryId: 'sweets' },
  { id: 's21', name: 'Rasmalai', image: '/products/rasmalai.jpeg', categoryId: 'sweets' },
  { id: 's22', name: 'Soan Papdi', image: '/products/saon papdi.jpeg', categoryId: 'sweets' },
  { id: 's23', name: 'Poornam Boorelu', image: '/products/poornam boorelu.jpeg', categoryId: 'sweets' },
  { id: 's24', name: 'Ghee Bobbattu', image: '/products/ghee bobbattu.jpg', categoryId: 'sweets' },
  { id: 's25', name: 'Dil Kushh', image: '/products/dil kushh.jpeg', categoryId: 'sweets' },
  { id: 's26', name: 'Kala Jamun', image: '/products/kala jamun.jpeg', categoryId: 'sweets' },
  { id: 's27', name: 'Gulab Jamun', image: '/products/gulab jamun.jpeg', categoryId: 'sweets' },

  // Hots & Mixture
  { id: 'h1', name: 'Andhra Special Mixture', image: '/products/Andhra Special Mixture.jpeg', categoryId: 'hots' },
  { id: 'h2', name: 'Boondi Mixture', image: '/products/Boondi Mixture.jpeg', categoryId: 'hots' },
  { id: 'h3', name: 'Cornflakes Mixture', image: '/products/Cornflakes Mixture.jpeg', categoryId: 'hots' },
  { id: 'h4', name: 'Fried Cashews (Kaju Fry)', image: '/products/Fried Cashews (Kaju Fry).jpeg', categoryId: 'hots' },
  { id: 'h5', name: 'Kaju Mixture', image: '/products/Kaju Mixture.jpeg', categoryId: 'hots' },
  { id: 'h6', name: 'Murukulu (Janthikalu)', image: '/products/Murukulu (Janthikalu).jpeg', categoryId: 'hots' },
  { id: 'h7', name: 'Ribbon Pakoda', image: '/products/Ribbon Pakoda.jpeg', categoryId: 'hots' },
  { id: 'h8', name: 'Spicy Sev', image: '/products/Spicy Sev.jpeg', categoryId: 'hots' },
  { id: 'h9', name: 'Masala Peanuts', image: '/products/masala peanuts.jpeg', categoryId: 'hots' },
  { id: 'h10', name: 'Onion Pakoda', image: '/products/onion pakoda.jpeg', categoryId: 'hots' },
  { id: 'h11', name: 'Peanut Pakoda', image: '/products/peanuts pakoda.jpeg', categoryId: 'hots' },

  // Cakes & Pastries
  { id: 'c1', name: 'Black Forest Cake', image: '/products/Black Forest Cake.jpeg', categoryId: 'cakes' },
  { id: 'c2', name: 'Black Forest Pastry', image: '/products/Black Forest Pastry.jpeg', categoryId: 'cakes' },
  { id: 'c3', name: 'Butterscotch Cake', image: '/products/Butterscotch Cake.jpeg', categoryId: 'cakes' },
  { id: 'c4', name: 'Butterscotch Pastry', image: '/products/Butterscotch Pastry.jpeg', categoryId: 'cakes' },
  { id: 'c5', name: 'Chocolate Cake', image: '/products/Chocolate Cake.jpeg', categoryId: 'cakes' },
  { id: 'c6', name: 'Chocolate Pastry', image: '/products/Chocolate Pastry.jpeg', categoryId: 'cakes' },
  { id: 'c7', name: 'Red Velvet Cake', image: '/products/Red Velvet Cake.jpeg', categoryId: 'cakes' },
  { id: 'c8', name: 'Strawberry Pastry', image: '/products/Strawberry Pastry.jpeg', categoryId: 'cakes' },
  { id: 'c9', name: 'Vanilla Cake', image: '/products/Vanilla Cake.jpeg', categoryId: 'cakes' },

  // Bakery Items
  { id: 'b1', name: 'Chicken Puff', image: '/products/Chicken Puff.jpeg', categoryId: 'bakery' },
  { id: 'b2', name: 'Cream Bun', image: '/products/Cream Bun.jpeg', categoryId: 'bakery' },
  { id: 'b3', name: 'Egg Puff', image: '/products/Egg Puff.jpeg', categoryId: 'bakery' },
  { id: 'b4', name: 'Milk Bread', image: '/products/Milk Bread.jpeg', categoryId: 'bakery' },
  { id: 'b5', name: 'Paneer Puff', image: '/products/Paneer Puff.jpeg', categoryId: 'bakery' },
  { id: 'b6', name: 'Veg Puff', image: '/products/Veg Puff.jpeg', categoryId: 'bakery' },
  { id: 'b7', name: 'Aloo Samosa', image: '/products/aloo samosa.jpeg', categoryId: 'bakery' },

  // Drinks & Beverages
  { id: 'd1', name: 'Badam Milk', image: '/products/Badam Milk.jpeg', categoryId: 'drinks' },
  { id: 'd2', name: 'Soft Drinks', image: '/products/Soft Drinks.jpeg', categoryId: 'drinks' },
  { id: 'd3', name: 'Sweet Lassi', image: '/products/Sweet Lassi.jpeg', categoryId: 'drinks' },
];

export const categories: Record<CategoryId, Category> = {
  sweets: {
    id: 'sweets',
    title: 'SWEETS',
    description: 'Authentic Indian mithai crafted from time-honoured recipes, bringing the rich heritage of Palasa to your celebrations.',
    items: products.filter(p => p.categoryId === 'sweets')
  },
  hots: {
    id: 'hots',
    title: 'HOTS & MIXTURE',
    description: 'Crispy, crunchy, and perfectly spiced savory snacks to conquer your cravings and perfectly pair with evening tea.',
    items: products.filter(p => p.categoryId === 'hots')
  },
  cakes: {
    id: 'cakes',
    title: 'CAKES & PASTRIES',
    description: 'Beautiful celebration cakes and delectable pastries baked fresh daily to make your special moments unforgettable.',
    items: products.filter(p => p.categoryId === 'cakes')
  },
  bakery: {
    id: 'bakery',
    title: 'BAKERY ITEMS',
    description: 'Freshly baked warm puffs, soft buns, and savory samosas perfect for a quick snack or a light meal.',
    items: products.filter(p => p.categoryId === 'bakery')
  },
  drinks: {
    id: 'drinks',
    title: 'DRINKS & BEVERAGES',
    description: 'Refreshing and authentic chilled beverages to quench your thirst and perfectly complement our traditional sweets.',
    items: products.filter(p => p.categoryId === 'drinks')
  }
};
