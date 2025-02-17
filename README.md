# Lighthouse Performance Demo

This project demonstrates the contrast between optimized and unoptimized web pages, showing how different development practices affect Lighthouse performance scores.

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Demo

Start both servers:

```bash
# Start the unoptimized server that serves the bad.html page
npm run start:bad

# Start the optimized server that serves the good.html page
npm run start:good
```

## Running Lighthouse Tests

1. Open Chrome DevTools (F12)
2. Go to the Lighthouse tab
3. Run tests on both URLs:
   - Bad site: http://localhost:8001
   - Good site: http://localhost:8002

## Bad Implementation Analysis

The bad implementation (`bad.html`) intentionally implements anti-patterns to demonstrate poor performance:

### 1. Heavy Initial Load

- Blocking computation that delays initial render

### 2. Memory Issues

- Large memory allocation using emoji arrays

### 3. Layout Thrashing

- Continuous forced reflows

### 4. Network Performance Issues

- Multiple oversized images (8000x6000)
- Synchronous loading of multiple third-party scripts

### 5. Animation Performance

- Expensive continuous animations
- Forced reflows on every frame

### 6. CPU Intensive Operations

- Multiple Web Workers performing intensive calculations

## Good Implementation Analysis

The optimized implementation (`good.html`) follows web performance best practices:

### 1. Proper Meta Tags

- Charset and viewport definitions
- SEO-friendly meta description

### 2. Resource Optimization

- Preloaded critical assets
- Properly sized images
- WebP image format support
- Lazy loading for below-fold content

### 3. CSS Optimizations

- Critical CSS inlined
- Modern CSS features (clamp, min)
- System font stack
- Efficient CSS reset

### 4. JavaScript Optimization

- Deferred loading
- Minimal and efficient code
- Performance monitoring
- Service worker support

## Server Optimizations

### Unoptimized Server

Basic Express server with:

- Static file serving
- No compression
- No caching

### Optimized Server

Enhanced Express server with:

- Gzip compression
- Proper cache headers
- Static file optimization

## Performance Impact

The bad implementation typically scores poorly across all Lighthouse metrics:

- Performance: < 30
- Best Practices: < 50
- SEO: < 70
- Accessibility: < 60

The good implementation consistently achieves:

- Performance: 100
- Best Practices: 96
- SEO: 91
- Accessibility: 100

## Learning Objectives

This demo illustrates:

1. Impact of JavaScript performance on page load
2. Importance of resource optimization
3. Effects of layout thrashing
4. Benefits of proper caching
5. Role of server-side optimization
6. Modern web performance best practices

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - See LICENSE file for details
