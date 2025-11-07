# Deployment Guide - Vercel

This guide covers deploying the Financial Retail Dashboard to Vercel.

## 🚀 Quick Deploy Options

### Option 1: GitHub Integration (Recommended)

**Best for:** Automatic deployments on every push, team collaboration

1. **Push to GitHub** (already done ✅)
   ```bash
   git push origin claude/financial-retail-dashboard-011CUu1meBktR3GhGQHP6D9Z
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository: `ronakshah725/common`
   - Choose the branch: `claude/financial-retail-dashboard-011CUu1meBktR3GhGQHP6D9Z`

3. **Configure Project**
   - Framework Preset: **Vite** (auto-detected)
   - Root Directory: `retail-dashboard`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait ~2 minutes for build
   - Get your live URL: `https://your-project.vercel.app`

**After Setup:**
- Every push to the branch auto-deploys
- Pull requests get preview deployments
- Production domain can be customized

---

### Option 2: Vercel CLI

**Best for:** Quick deploys, local testing, CI/CD pipelines

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from Project Root**
   ```bash
   cd retail-dashboard
   vercel
   ```

4. **Follow Prompts**
   ```
   ? Set up and deploy "retail-dashboard"? [Y/n] Y
   ? Which scope? <your-username>
   ? Link to existing project? [y/N] N
   ? What's your project's name? retail-dashboard
   ? In which directory is your code located? ./
   ```

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

**CLI Commands:**
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs <deployment-url>

# Remove deployment
vercel rm <deployment-name>
```

---

### Option 3: Manual Upload (Not Recommended)

**Best for:** One-time testing without git

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload dist/ folder**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Drag & drop the `dist` folder
   - Deploy

---

## 🔧 Configuration Files

### vercel.json
Configures Vercel deployment settings:
- Framework detection (Vite)
- Build commands
- Output directory
- SPA routing (rewrites)
- Asset caching headers

### .vercelignore
Excludes unnecessary files from deployment:
- node_modules
- Development files
- Test artifacts

---

## 🌍 Environment Variables (If Needed)

If you add API keys or secrets later:

1. **In Vercel Dashboard:**
   - Project Settings → Environment Variables
   - Add variables (e.g., `VITE_API_KEY`)

2. **In Code:**
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

3. **Local Development:**
   Create `.env.local`:
   ```
   VITE_API_KEY=your_key_here
   ```

---

## 📊 Build Settings

**Confirmed Working:**
- Node Version: 20.x (Vercel default)
- Package Manager: npm
- Build Command: `npm run build`
- Output: `dist/`
- Build Time: ~30 seconds

**Build Output:**
```
✓ 836 modules transformed
✓ dist/index.html (0.46 kB)
✓ dist/assets/index.css (18.83 kB)
✓ dist/assets/index.js (516.41 kB)
```

---

## 🎯 Post-Deployment Checklist

After deploying, verify:

- [ ] Dashboard loads at Vercel URL
- [ ] Charts render correctly
- [ ] Category selection works
- [ ] Tab navigation functions
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] Assets load quickly (cached)

---

## 🐛 Troubleshooting

### Build Fails
**Issue:** TypeScript errors
**Fix:** Run `npm run build` locally first to catch errors

### 404 on Refresh
**Issue:** SPA routing not configured
**Fix:** Verify `vercel.json` has rewrites (already included ✅)

### Slow Load Times
**Issue:** Large bundle size
**Fix:** Already optimized with Vite code-splitting

### Assets Not Found
**Issue:** Incorrect base path
**Fix:** Vite defaults to `/` which works for Vercel root domains

---

## 🔗 Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Project Settings → Domains
   - Add domain: `retail-dashboard.yourdomain.com`

2. **Configure DNS:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers

3. **SSL:**
   - Automatic HTTPS (Let's Encrypt)
   - No configuration needed

---

## 📈 Performance

**Expected Metrics:**
- First Load: ~1.5s
- Subsequent Loads: ~200ms (cached)
- Lighthouse Score: 90+ (Performance)

**Optimizations Included:**
- Vite code-splitting
- Asset hashing for cache busting
- 1-year cache headers on static assets
- Minified JS/CSS

---

## 🔄 Continuous Deployment

**With GitHub Integration:**
1. Make changes locally
2. `git commit` and `git push`
3. Vercel automatically deploys
4. Preview URL in GitHub PR comments
5. Merge to production branch for production deploy

**Deployment URL Format:**
- Preview: `retail-dashboard-git-<branch>-<scope>.vercel.app`
- Production: `retail-dashboard.vercel.app` (or custom domain)

---

## 📞 Support

**Vercel Docs:** https://vercel.com/docs
**Vite Deployment:** https://vitejs.dev/guide/static-deploy.html
**Vercel CLI:** https://vercel.com/docs/cli

---

**Ready to deploy!** Choose your method above and go live in minutes.
