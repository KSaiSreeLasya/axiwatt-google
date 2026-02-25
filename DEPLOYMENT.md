# AxiWatt Deployment Guide

## Overview
This guide provides instructions for deploying the AxiWatt website to different hosting platforms. The site is built with Vite and React, with static SEO files (robots.txt, sitemap.xml) in the public folder.

## Build Process
```bash
# Install dependencies
npm install

# Development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Platform-Specific Deployments

### Render (Recommended)
1. Sign up at [render.com](https://render.com)
2. Connect your GitHub repository:
   - Click "New +" → "Web Service"
   - Select your GitHub repository
   - Name your service (e.g., "axiwatt-solar")

3. Configure:
   - **Runtime**: Node
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm start`
   - **Node Version**: 22.22.0
   - **Plan**: Free or Pro (depending on needs)

4. Environment Variables (if needed):
   - Add `VITE_GEMINI_API_KEY` in Environment section
   - Add `NODE_ENV=production`

5. Deploy:
   - Render will automatically build and deploy when you push to GitHub
   - Your site will be available at: `https://your-service-name.onrender.com`

**Key Features:**
- Custom Express server for proper static file serving
- Automatic HTTPS
- Environment variable management
- Automatic deployments on push
- Free tier available

**Static Files Served:**
- robots.txt
- sitemap.xml
- site.webmanifest
- All favicon files
- All assets with proper cache headers

### Netlify
1. Connect your GitHub repository to Netlify
2. The `netlify.toml` file is already configured with:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Proper headers for static files
   - Cache rules for assets

3. Deploy:
   - Push to your GitHub repository
   - Netlify will automatically detect and deploy
   - Your site will be available at your Netlify URL

**Key Features:**
- Automatic static file serving (robots.txt, sitemap.xml)
- Proper MIME types for XML files
- Cache optimization for assets
- Automatic HTTPS

### Vercel
1. Connect your GitHub repository to Vercel
2. The `vercel.json` file is already configured with:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Proper headers and rewrites for SPA routing

3. Deploy:
   - Push to your GitHub repository
   - Vercel will automatically detect and deploy
   - Environment variables can be set in Vercel dashboard

**Key Features:**
- Automatic static file serving
- Edge caching for performance
- Built-in analytics
- Automatic deployments on push

### Traditional Server (Apache/cPanel)
1. Build the project locally:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder contents to your web server's public_html directory

3. The `.htaccess` file (in public folder) handles:
   - URL rewriting for SPA routing
   - Cache control headers
   - GZIP compression
   - Proper MIME types for static files

**File Structure:**
```
public_html/
├── index.html
├── .htaccess
├── robots.txt (→ dist/)
├── sitemap.xml (→ dist/)
├── favicon.svg (→ dist/)
├── assets/
│   ├── js/
│   ├── css/
│   └── ...
```

### Docker
```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

## Environment Variables
Create a `.env` file with:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

For deployment platforms:
- **Netlify**: Set in Site settings → Build & deploy → Environment
- **Vercel**: Set in Project settings → Environment Variables
- **Traditional Server**: Add to `.htaccess` or server config

## Static Files Location
The following files are in the `public/` folder and will be served from the root:

- `robots.txt` - Search engine crawling rules
- `sitemap.xml` - XML sitemap for SEO
- `favicon.svg` - Website icon (modern)
- `favicon.ico` - Website icon (legacy)
- `.webmanifest` - PWA manifest
- Various `.png` icons for different devices

## Verification After Deployment

### For Render Deployments
1. Check your deployed site URL (e.g., https://your-service-name.onrender.com)
2. Check static files are accessible:
   ```bash
   # These should return 200 status and proper content type
   curl -I https://your-service-name.onrender.com/robots.txt
   curl -I https://your-service-name.onrender.com/sitemap.xml
   curl -I https://your-service-name.onrender.com/site.webmanifest
   ```

3. View the response headers to verify:
   ```bash
   curl -i https://your-service-name.onrender.com/robots.txt
   # Should show: Content-Type: text/plain

   curl -i https://your-service-name.onrender.com/sitemap.xml
   # Should show: Content-Type: application/xml
   ```

### Check Static Files (All Platforms)
```bash
# These should return 200 status
curl -I https://your-domain.com/robots.txt
curl -I https://your-domain.com/sitemap.xml
curl -I https://your-domain.com/site.webmanifest
```

### Check SEO
1. Google Search Console
   - Add property for your domain
   - Submit sitemap.xml
   - Check for crawl errors

2. Bing Webmaster Tools
   - Submit sitemap.xml
   - Monitor crawl status

### Check Page Metadata
View source of deployed page and verify:
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta property="og:image">`
- `<link rel="canonical">`

## Common Issues

### Sitemap.xml returns 404
**Cause**: Build didn't copy public folder to dist
**Solution**: 
- Verify public folder exists with sitemap.xml
- Run `npm run build` and check dist folder
- Check platform's public/static folder settings

### CSS/JS files return 404
**Cause**: Asset paths incorrect after deployment
**Solution**:
- Check `<base>` tag in index.html
- Verify Vite config has correct base path
- Check network tab in browser DevTools

### Robots.txt not crawlable
**Cause**: Server not serving .txt files correctly
**Solution**:
- Verify .htaccess is deployed (Apache)
- Check Netlify/Vercel headers configuration
- Ensure Content-Type: text/plain is set

## Performance Tips

1. **Minification**: Enabled by default in Vite build
2. **Code Splitting**: Configured in vite.config.ts
3. **Asset Caching**: Set in netlify.toml or vercel.json
4. **Image Optimization**: Use optimized images in public folder
5. **Lazy Loading**: Consider lazy-loading components

## Monitoring

Set up monitoring for:
- Core Web Vitals
- SEO coverage in Google Search Console
- 404 errors in server logs
- Performance metrics

## Support

For platform-specific help:
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev/)
