# Image Migration Guide

This guide helps you migrate from external image URLs to local images.

## Quick Start

### 1. Update seedData.js

Replace external URLs with local paths:

```javascript
// BEFORE (External URL)
{
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    price: 150,
    image: "https://images.unsplash.com/photo-1464226184485-280280d37ccb?auto=format&fit=crop&q=80&w=500",
    description: "High yield hybrid tomato seeds."
}

// AFTER (Local Path)
{
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    price: 150,
    image: "/images/products/seeds/hybrid-tomato-seeds.jpg",
    description: "High yield hybrid tomato seeds."
}
```

### 2. Update Home.jsx

Replace category banner URLs:

```jsx
// BEFORE
<img src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&q=80&w=500" alt="Seeds" />

// AFTER
<img src="/images/categories/seeds.jpg" alt="Seeds" />
```

### 3. Use Image Helper (Optional but Recommended)

```jsx
import { IMAGE_PATHS } from '../utils/imagePaths';

// In components
<img src={IMAGE_PATHS.categories.seeds} alt="Seeds" />
<img src={IMAGE_PATHS.products.seeds('hybrid-tomato-seeds.jpg')} alt="Product" />
```

## File Upload Steps

1. **Download images** from Unsplash or use your own product images
2. **Optimize** images (compress, resize to specifications)
3. **Place in correct folder**:
   - Seeds → `public/images/products/seeds/`
   - Fertilizers → `public/images/products/fertilizers/`
   - Grains → `public/images/products/grains/`
   - Equipments → `public/images/products/equipments/`
4. **Name files** using the naming convention (e.g., `hybrid-tomato-seeds.jpg`)
5. **Update code** to use new paths

## Current Structure

```
client/
└── public/
    └── images/
        ├── products/
        │   ├── seeds/          ← Place seed product images here
        │   ├── fertilizers/    ← Place fertilizer images here
        │   ├── grains/         ← Place grain images here
        │   └── equipments/     ← Place equipment images here
        ├── categories/         ← Category banner images
        ├── banners/           ← Promotional banners
        └── icons/             ← UI icons
```

## Environment Setup

No special setup needed! The image structure works with:
- ✅ Vite (fast refresh)
- ✅ React
- ✅ Static serving
- ✅ CDN ready

## Performance Tips

1. **Keep image sizes under 200KB** for products
2. **Use 500x500px** for product images
3. **Implement lazy loading** for better performance:
   ```jsx
   <img src={...} alt="..." loading="lazy" />
   ```
4. **Consider WebP format** for even smaller files:
   ```jsx
   <picture>
     <source srcSet="image.webp" type="image/webp" />
     <img src="image.jpg" alt="..." />
   </picture>
   ```

## Troubleshooting

### Images not showing?
- Check path starts with `/`
- Verify file exists in correct folder
- Check file name matches exactly (case-sensitive)
- Open browser DevTools to see 404 errors

### Slow loading?
- Compress images more
- Reduce resolution if possible
- Use WebP format
- Implement lazy loading

## Example: Complete Migration

### Before
```javascript
const products = [
  {
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    price: 150,
    image: "https://images.unsplash.com/...",
  }
];
```

### After
```javascript
const products = [
  {
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    price: 150,
    image: "/images/products/seeds/hybrid-tomato-seeds.jpg",
  }
];
```

That's it! Your app now serves images locally.
