# Render Deployment Guide for AxiWatt

## Quick Start

This guide will walk you through deploying AxiWatt to Render.

### Prerequisites
- GitHub account with your repository
- Render account (free tier available at [render.com](https://render.com))

## Step-by-Step Setup

### 1. Prepare Your Repository
Make sure your repository includes:
- ✅ `render.yaml` - Render configuration file
- ✅ `server.js` - Express server for static file serving
- ✅ `package.json` - Updated with Express and compression
- ✅ `vite.config.ts` - Vite configuration
- ✅ `public/` - Contains robots.txt, sitemap.xml, favicon files

### 2. Connect Render to GitHub

1. Go to [render.com](https://render.com) and sign in
2. Click **Dashboard** → **New +** → **Web Service**
3. Click **Connect a repository**
4. Select your GitHub repository containing AxiWatt
5. Click **Connect**

### 3. Configure Your Web Service

Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | `axiwatt-solar` (or your preferred name) |
| **Environment** | `Node` |
| **Region** | Choose closest to your users |
| **Branch** | `main` (or your deployment branch) |
| **Build Command** | `npm ci && npm run build` |
| **Start Command** | `npm start` |
| **Plan** | Free or Pro (Free has some limitations) |

### 4. Set Environment Variables

Click **Advanced** → **Add Environment Variable**

Add the following (if using Gemini API):
- **Key**: `VITE_GEMINI_API_KEY`
- **Value**: Your API key

Add Node version:
- **Key**: `NODE_VERSION`
- **Value**: `22.22.0`

### 5. Deploy

1. Click **Create Web Service**
2. Render will:
   - Clone your repository
   - Install dependencies (`npm ci`)
   - Build the project (`npm run build`)
   - Start the Express server (`npm start`)

3. Monitor the deploy in real-time under the **Logs** tab

### 6. Verify Deployment

Once deployed, you'll get a URL like: `https://axiwatt-solar.onrender.com`

**Test static files:**
```bash
# Check robots.txt
curl -I https://axiwatt-solar.onrender.com/robots.txt
# Should return: 200 OK with Content-Type: text/plain

# Check sitemap.xml
curl -I https://axiwatt-solar.onrender.com/sitemap.xml
# Should return: 200 OK with Content-Type: application/xml

# Check the site
curl -I https://axiwatt-solar.onrender.com/
# Should return: 200 OK with index.html
```

## How It Works

The deployment uses a **custom Express server** (`server.js`) that:

1. **Serves the built React app** from the `dist/` folder
2. **Sets proper MIME types** for static files:
   - `.xml` files → `application/xml`
   - `.webmanifest` → `application/manifest+json`
   - `.txt` files → `text/plain`
3. **Implements cache headers**:
   - Asset files: 1-year cache (immutable)
   - HTML files: 1-hour cache
   - XML/manifest: 1-day cache
4. **Handles SPA routing**: Any non-static request serves `index.html`
5. **Enables GZIP compression** for faster delivery

## Connecting Your Own Domain

### Add Custom Domain in Render
1. In your Web Service settings, scroll to **Custom Domain**
2. Click **Add Custom Domain**
3. Enter your domain (e.g., `axiwatt.com`)
4. Copy the CNAME value
5. Add DNS record to your domain provider

### Update DNS at Your Domain Provider
Add a CNAME record:
- **Name**: `@` or `axiwatt` (depending on provider)
- **Type**: CNAME
- **Value**: `your-service-name.onrender.com`

Wait 24-48 hours for DNS to propagate.

## Common Issues & Solutions

### "Static files return 404"

**Issue**: robots.txt, sitemap.xml, or other static files return 404

**Solution**:
1. Verify files exist in your `public/` folder
2. Check the build output in Render logs
3. Clear Render's cache:
   - Go to **Manual Deploy** → **Clear Build Cache**
   - Click **Deploy Latest Commit**
4. Check if Express server is running properly in logs

### "Site shows blank or errors"

**Issue**: Site is blank or shows JavaScript errors

**Solution**:
1. Check Render logs for errors
2. Verify environment variables are set correctly
3. Check browser console for errors (F12)
4. Ensure `server.js` is running (check logs)

### "CSS/Images not loading"

**Issue**: CSS or images are missing or broken

**Solution**:
1. Check Network tab in DevTools (F12)
2. Verify asset paths are correct
3. Check if assets exist in `dist/assets/` folder
4. Verify cache headers aren't blocking updates

### "Long build times or timeouts"

**Issue**: Build takes too long or times out

**Solution**:
1. Use `npm ci` instead of `npm install` (faster)
2. Check if dependencies have issues
3. Free tier has limited resources - consider upgrading

## Monitoring

### Render Dashboard
- **Logs**: View real-time logs
- **Metrics**: Monitor CPU, memory, bandwidth
- **Events**: See deployment history
- **Health**: Check service health

### Google Search Console
1. Add your domain to [Google Search Console](https://search.google.com/search-console)
2. Submit your sitemap:
   - Go to **Sitemaps**
   - Enter: `https://your-domain.com/sitemap.xml`
   - Click **Submit**

### Bing Webmaster Tools
1. Add your domain to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Submit your sitemap similarly

## Performance Tips

1. **Use Redis for caching** (Render can add this)
2. **Enable compression** (already configured in server.js)
3. **Optimize images** before deployment
4. **Monitor Core Web Vitals** in Google Search Console
5. **Consider upgrading from Free tier** if getting high traffic

## Updating Your Site

### Deploy New Changes
1. Make changes to your code
2. Commit and push to GitHub
3. Render will automatically:
   - Detect the push
   - Rebuild your site
   - Deploy new version

### Rollback to Previous Version
1. In Render dashboard, click **Manual Deploy**
2. Select the previous build version
3. Click **Deploy**

## Support & Resources

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Vite Documentation](https://vitejs.dev)
- [Express Documentation](https://expressjs.com)
- [Google Search Console Help](https://support.google.com/webmasters)

## Next Steps

1. ✅ Ensure `render.yaml` and `server.js` are in your repo
2. ✅ Push changes to GitHub
3. ✅ Go to Render and create new Web Service
4. ✅ Connect your GitHub repository
5. ✅ Configure settings (build/start commands)
6. ✅ Click "Create Web Service" and deploy
7. ✅ Verify static files are accessible
8. ✅ Add domain (if you have one)
9. ✅ Submit sitemap to Google Search Console

Happy deploying! 🚀
