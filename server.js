import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable compression
app.use(compression());

// Set proper MIME types
app.type('xml', 'application/xml');
app.type('webmanifest', 'application/manifest+json');

// Serve static files with caching headers
app.use((req, res, next) => {
  if (req.path.match(/\.(js|css|woff|woff2|ttf|eot|svg|png|jpg|jpeg|gif|ico)$/)) {
    // Long-term caching for versioned assets
    res.set('Cache-Control', 'public, immutable, max-age=31536000');
  }
  next();
});

// Serve static files from dist folder
app.use(express.static(join(__dirname, 'dist'), {
  maxAge: '1h',
  setHeaders: (res, path) => {
    // Set proper content type for XML files
    if (path.endsWith('.xml')) {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    // Set proper content type for manifest
    if (path.endsWith('.webmanifest')) {
      res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    // Set proper content type for robots.txt
    if (path.endsWith('robots.txt')) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    // HTML files - shorter cache
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

// Serve static files from public folder (fallback)
app.use(express.static(join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.xml')) {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    if (path.endsWith('.webmanifest')) {
      res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
    if (path.endsWith('robots.txt')) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=86400');
    }
  }
}));

// SPA routing - serve index.html for all non-static requests
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'), {
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌍 Visit: http://localhost:${PORT}`);
});
