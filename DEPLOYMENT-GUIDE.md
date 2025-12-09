# 🚀 Deployment Guide for Your Portfolio

## Prerequisites
- GitHub account (✓ You already have your code pushed)
- Vercel account (free): https://vercel.com

## Option 1: Deploy with Vercel (Recommended - 5 minutes)

### Step 1: Install Vercel CLI
```bash
pnpm add -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd /Users/whitedarkhost/Documents/portfolio-website-design
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? **portfolio** (or your choice)
- Directory? **.**
- Override settings? **N**

### Step 4: Production Deploy
```bash
vercel --prod
```

Your site will be live at: `https://your-project-name.vercel.app`

---

## Option 2: Deploy via Vercel Dashboard (Even Easier!)

### Step 1: Go to Vercel
Visit: https://vercel.com/new

### Step 2: Import Your Repository
1. Click "Import Git Repository"
2. Find "PORTFOLIO_" repository
3. Click "Import"

### Step 3: Configure Build Settings
- **Framework Preset**: Vite
- **Build Command**: `pnpm run build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

### Step 4: Deploy!
Click "Deploy" and wait ~1 minute

---

## Option 3: Deploy to Netlify

### Via Netlify CLI:
```bash
pnpm add -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Via Netlify Dashboard:
1. Visit: https://app.netlify.com/start
2. Connect to GitHub
3. Select "PORTFOLIO_" repo
4. Build command: `pnpm run build`
5. Publish directory: `dist`
6. Deploy!

---

## Option 4: Deploy to GitHub Pages

### Step 1: Update vite.config.ts
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO_/', // Your repo name
  // ...rest
})
```

### Step 2: Install gh-pages
```bash
pnpm add -D gh-pages
```

### Step 3: Add deploy script to package.json
```json
{
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

### Step 4: Deploy
```bash
pnpm run deploy
```

Your site will be at: `https://whitehacker000.github.io/PORTFOLIO_/`

---

## 🔒 IMPORTANT: Change Admin Password Before Deploying!

**Before going live, update your admin password:**

Edit `src/contexts/AuthContext.jsx` line 6:
```jsx
const ADMIN_PASSWORD = 'your-super-secure-password-here'
```

Then commit and push:
```bash
git add .
git commit -m "Update admin password"
git push origin main
```

---

## 🎨 Custom Domain (Optional)

After deploying to Vercel/Netlify, you can add a custom domain:
1. Buy domain from Namecheap, GoDaddy, etc.
2. In Vercel/Netlify dashboard, go to Domain Settings
3. Add your custom domain
4. Update DNS records as instructed

---

## 📊 Monitoring

After deployment, you can:
- View analytics in Vercel/Netlify dashboard
- Set up error tracking with Sentry
- Add Google Analytics

---

## Need Help?
If you encounter any issues during deployment, let me know!
