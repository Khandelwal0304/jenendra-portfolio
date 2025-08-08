# 🚀 Deployment Guide - Jenendra's Portfolio

## Quick Setup for GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Repository name: `jenendra-portfolio`
4. Make it **Public**
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Connect Local Repository
Run these commands in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jenendra-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Your Website is Live!
Your portfolio will be available at:
`https://YOUR_USERNAME.github.io/jenendra-portfolio`

## Alternative Hosting Options

### Netlify (Recommended Alternative)
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
6. Click "Deploy site"

### Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

## Custom Domain Setup

### Option 1: GitHub Pages Custom Domain
1. In your GitHub repository Settings > Pages
2. Add your custom domain (e.g., `jenendra.dev`)
3. Update DNS settings with your domain provider
4. Add CNAME record pointing to `YOUR_USERNAME.github.io`

### Option 2: Netlify Custom Domain
1. In Netlify dashboard, go to your site
2. Click "Domain settings"
3. Add custom domain
4. Update DNS settings

## Features Included
- ✅ Responsive design for all devices
- ✅ AI chatbot functionality
- ✅ Voice and eye detection
- ✅ Modern animations and effects
- ✅ SEO optimized
- ✅ Fast loading times
- ✅ Mobile-first approach

## Contact Information
- Email: khandelwaljenendra96600@gmail.com
- Phone: +91 8824318188
- LinkedIn: linkedin.com/in/jenendrakhandelwal
- GitHub: github.com/khandelwal0304

## Support
If you need help with deployment, contact:
- Email: khandelwaljenendra96600@gmail.com
- Phone: +91 8824318188
