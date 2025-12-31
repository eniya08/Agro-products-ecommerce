# Image Organization Guide

This folder contains all images used in the Agro Products E-Commerce application, organized following industry best practices.

## Folder Structure

```
images/
├── products/              # Product images organized by category
│   ├── seeds/            # Seed product images
│   ├── fertilizers/      # Fertilizer product images
│   ├── grains/           # Grain product images
│   └── equipments/       # Equipment product images
├── categories/           # Category banner images
├── banners/             # Hero/promotional banners
└── icons/               # UI icons and assets
```

## Naming Conventions

### Product Images
- Format: `{product-name-slug}.jpg` or `{product-name-slug}.png`
- Examples:
  - `hybrid-tomato-seeds.jpg`
  - `organic-wheat-seeds.jpg`
  - `npk-fertilizer.jpg`
  - `tractor-equipment.jpg`

### Category Images
- Format: `{category-name}.jpg`
- Examples:
  - `seeds.jpg`
  - `fertilizers.jpg`
  - `grains.jpg`
  - `equipments.jpg`

### Banner Images
- Format: `{banner-name}-banner.jpg`
- Examples:
  - `hero-banner.jpg`
  - `seasonal-banner.jpg`
  - `promotional-banner.jpg`

## Image Specifications

### Product Images
- **Size**: 500x500px (optimal for e-commerce)
- **Format**: JPG or PNG
- **File Size**: < 200KB
- **Quality**: High quality, clear product visibility
- **Background**: White or transparent background preferred

### Category/Banner Images
- **Size**: 1200x400px (for banners), 600x600px (for categories)
- **Format**: JPG
- **File Size**: < 300KB
- **Quality**: High resolution suitable for backgrounds

### Icons
- **Size**: 24x24px, 32x32px, 48x48px
- **Format**: SVG or PNG
- **Style**: Consistent with design system

## Usage Examples

### In Components
```jsx
// Product images
<img src="/images/products/seeds/hybrid-tomato-seeds.jpg" alt="Hybrid Tomato Seeds" />

// Category images
<img src="/images/categories/seeds.jpg" alt="Seeds Category" />

// Banner images
<img src="/images/banners/hero-banner.jpg" alt="Hero Banner" />
```

### In Seed Data
```javascript
{
    name: "Hybrid Tomato Seeds",
    category: "Seeds",
    price: 150,
    image: "/images/products/seeds/hybrid-tomato-seeds.jpg",
    description: "High yield hybrid tomato seeds."
}
```

## Optimization Tips

1. **Compress Images**: Use tools like TinyPNG, ImageOptim before uploading
2. **Use WebP Format**: For better compression and modern browsers support
3. **Responsive Images**: Use srcset for different screen sizes
4. **Lazy Loading**: Implement lazy loading for better performance
5. **CDN Ready**: Structure supports easy CDN integration

## Adding New Images

1. Choose the appropriate category folder
2. Follow the naming convention
3. Optimize the image (compress, resize if needed)
4. Update the seed data or component with the new path
5. Test in the application

## Tools Recommended

- **Image Compression**: TinyPNG, ImageOptim, FileSize
- **Image Editing**: Canva, Photoshop, GIMP
- **Format Conversion**: CloudConvert, FFmpeg
