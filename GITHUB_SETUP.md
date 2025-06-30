# 🔗 GitHub Repository Setup Guide

## Step 1: Create New GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `ray-thompson-portfolio` (or any name you prefer)
4. Description: `Professional AI Portfolio - Ray Thompson`
5. Make it **Public** (so employers can see it)
6. ✅ Check "Add a README file"
7. Click "Create repository"

## Step 2: Upload Files to GitHub

### Method 1: Web Upload (Easiest)
1. In your new repository, click "uploading an existing file"
2. Download these files from Replit and upload them:

**Essential Files:**
- ray-portfolio.html
- thank-you.html
- netlify.toml
- README.md
- .gitignore
- ray-headshot.jpg
- wine-modal.jpg

**Project Images (21 files):**
- mars-1.jpg through mars-7.jpg
- ems-1.jpg through ems-7.jpg  
- enoteca-1.jpg through enoteca-7.jpg

3. Add commit message: "Initial portfolio upload"
4. Click "Commit changes"

### Method 2: Git Commands (If you prefer command line)
```bash
git clone https://github.com/YOUR_USERNAME/ray-thompson-portfolio.git
cd ray-thompson-portfolio
# Copy all files from Replit to this folder
git add .
git commit -m "Initial portfolio upload"
git push origin main
```

## Step 3: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login (can use GitHub account)
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub" and authorize Netlify
5. Select your `ray-thompson-portfolio` repository
6. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty or put ".")
7. Click "Deploy site"

## Benefits of GitHub + Netlify

✅ **Automatic Deployment**: Every GitHub update auto-deploys
✅ **Version Control**: Track all changes and history  
✅ **Professional Presence**: Employers can see your code
✅ **Easy Updates**: Edit files directly on GitHub
✅ **Free Hosting**: Both GitHub and Netlify are free
✅ **Custom Domain**: Easy to add later

## Your Portfolio URLs

After setup, you'll have:
- **GitHub**: `https://github.com/YOUR_USERNAME/ray-thompson-portfolio`
- **Live Site**: `https://YOUR_SITE_NAME.netlify.app`

Ready for job applications! 🚀