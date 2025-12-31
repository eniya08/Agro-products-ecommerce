/**
 * Image Path Helper
 * Centralized image path management for the application
 */

export const IMAGE_PATHS = {
  // Product images
  products: {
    seeds: (filename) => `/images/products/seeds/${filename}`,
    fertilizers: (filename) => `/images/products/fertilizers/${filename}`,
    grains: (filename) => `/images/products/grains/${filename}`,
    equipments: (filename) => `/images/products/equipments/${filename}`,
    getByCategory: (category, filename) => {
      const categoryMap = {
        Seeds: 'seeds',
        Fertilizers: 'fertilizers',
        Grains: 'grains',
        Equipments: 'equipments',
      };
      const categoryFolder = categoryMap[category] || category.toLowerCase();
      return `/images/products/${categoryFolder}/${filename}`;
    },
  },

  // Category images
  categories: {
    seeds: '/images/categories/seeds.jpg',
    fertilizers: '/images/categories/fertilizers.jpg',
    grains: '/images/categories/grains.jpg',
    equipments: '/images/categories/equipments.jpg',
    getByName: (category) => `/images/categories/${category.toLowerCase()}.jpg`,
  },

  // Banner images
  banners: {
    hero: '/images/banners/hero-banner.jpg',
    seasonal: '/images/banners/seasonal-banner.jpg',
    promotional: '/images/banners/promotional-banner.jpg',
  },

  // Icons
  icons: {
    cart: '/images/icons/cart.svg',
    user: '/images/icons/user.svg',
    search: '/images/icons/search.svg',
    menu: '/images/icons/menu.svg',
  },

  // Fallback/Placeholder
  placeholder: {
    product: 'https://via.placeholder.com/500x500?text=Product+Image',
    category: 'https://via.placeholder.com/600x400?text=Category',
    banner: 'https://via.placeholder.com/1200x400?text=Banner',
  },
};

/**
 * Get image URL with fallback
 * @param {string} path - Image path
 * @param {boolean} useExternal - Whether to use external placeholder if local fails
 * @returns {string} Image URL
 */
export const getImageUrl = (path, useExternal = false) => {
  if (!path) {
    return useExternal ? IMAGE_PATHS.placeholder.product : '/images/placeholder.png';
  }
  return path.startsWith('http') ? path : path;
};

/**
 * Generate product image filename from product name
 * @param {string} productName - Name of the product
 * @returns {string} Slugified filename
 */
export const generateProductImageFilename = (productName) => {
  return productName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .concat('.jpg');
};

export default IMAGE_PATHS;
