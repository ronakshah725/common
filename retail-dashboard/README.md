# Financial Retail Dashboard

A beautifully crafted, interactive dashboard for visualizing US Census Bureau retail sales data. Built with React 19, TypeScript, Tailwind CSS 4.0, and Recharts.

![Dashboard Preview](https://img.shields.io/badge/Status-Working%20MVP-success)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4.0-cyan)

## ✨ Features

- 📊 **Interactive Line Charts** - Visualize retail sales trends across multiple categories
- 🎯 **Category Selection** - Select up to 6 retail sectors to compare
- 📈 **Real Census Data** - 14 major retail categories with monthly data
- 🎨 **Beautiful UI** - Professional financial-grade design with Tailwind CSS 4.0
- ⚡ **Lightning Fast** - Built with Vite for instant hot module reload
- 🔒 **Type-Safe** - 100% TypeScript coverage with strict mode
- 📱 **Responsive** - Works seamlessly on desktop, tablet, and mobile

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

## 📦 Tech Stack

- **React 19.1.1** - Latest stable with concurrent features
- **TypeScript 5.9** - Strict type checking
- **Vite 7.x** - Next-generation frontend tooling
- **Tailwind CSS 4.0** - Utility-first CSS with Oxide engine
- **Recharts 2.x** - Composable charting library
- **Zustand** - Lightweight state management
- **Zod** - TypeScript-first schema validation

## 🎯 Usage

### Visualize Tab

1. **View the Chart** - See retail sales trends for the last 3 months
2. **Select Categories** - Check/uncheck categories to add/remove from chart
3. **Hover for Details** - Hover over lines to see exact values and changes
4. **Compare Sectors** - Up to 6 categories can be displayed simultaneously

### Data Editor Tab

*Coming soon* - Manually update data as new monthly reports are released

## 📊 Data Source

**US Census Bureau Monthly Retail Trade Survey**
- 14 major retail categories (NAICS codes)
- Monthly data: June, July, August (2024 & 2025)
- Year-over-year percent changes
- 8-month cumulative totals

Categories include:
- Motor Vehicle & Parts Dealers
- Food & Beverage Stores
- Food Services & Drinking Places
- General Merchandise Stores
- Gasoline Stations
- And 9 more...

## 🏗️ Project Structure

```
retail-dashboard/
├── src/
│   ├── components/         # React components
│   │   ├── VisualizeTab.tsx
│   │   ├── RetailChart.tsx
│   │   ├── CategoryList.tsx
│   │   └── DataEditorTab.tsx
│   ├── data/
│   │   └── retailData.ts   # Census data
│   ├── store/
│   │   └── useDashboardStore.ts  # Zustand state
│   ├── types/
│   │   └── index.ts        # TypeScript definitions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── vercel.json            # Vercel deployment config
└── DEPLOYMENT.md          # Deployment guide
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type checking
npm run build

# Lint code
npm run lint
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

**Option 1: GitHub Integration**
1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Select repository and branch
4. Vercel auto-detects settings
5. Deploy!

**Option 2: Vercel CLI**
```bash
npm install -g vercel
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Build for Production

```bash
npm run build
# Output in dist/ directory
```

## 📈 Performance

- **First Load**: ~1.5s
- **Subsequent Loads**: ~200ms (cached)
- **Bundle Size**: 516KB (mostly Recharts)
- **Build Time**: ~5 seconds

## 🎨 Design Philosophy

Following the detailed design system in [DESIGN_AND_BUILD.md](../DESIGN_AND_BUILD.md):

- **Financial Clarity** - Clean, high-contrast visualization
- **Progressive Disclosure** - Simple defaults, deep dive on demand
- **Smart Constraints** - Max 6 categories to prevent overwhelm
- **Professional Aesthetic** - Consistent spacing, typography, color

## 🧪 Testing

*Cypress setup in progress*

## 📝 License

MIT

## 🙏 Acknowledgments

- Data: [US Census Bureau](https://www.census.gov/retail/marts/)
- Charts: [Recharts](https://recharts.org/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ using React 19 and modern web technologies**
