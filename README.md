# Financial Retail Dashboard

A beautifully crafted, interactive dashboard for visualizing and editing US Census Bureau retail sales data.

## Overview

This dashboard transforms monthly retail trade statistics into actionable insights through intuitive visualizations and a streamlined data editing interface. Built with the latest React technologies and designed with a focus on clarity, precision, and professional aesthetics.

## Features

### 📈 Visualize Tab
- **Interactive Charts** - Explore retail trends across 50+ categories
- **Smart Filtering** - View by totals, categories, or subcategories
- **Time Comparisons** - Month-over-month and year-over-year analysis
- **Key Metrics** - At-a-glance performance indicators
- **Category Explorer** - Hierarchical view with sparklines

### 📝 Data Editor Tab
- **Inline Editing** - Update values directly in the table
- **Smart Validation** - Real-time data validation and error feedback
- **Auto-Calculate** - Automatic percent change and totals
- **Import/Export** - CSV and JSON support for data management
- **Undo/Redo** - Full edit history tracking

## Tech Stack

**Built with modern web technologies:**
- ⚛️ **React 19** - Latest stable release with concurrent features
- 📘 **TypeScript 5.x** - Full type safety and developer experience
- 🎨 **Tailwind CSS 4.0** - Utility-first styling with Oxide engine
- 📊 **Recharts 2.x** - Beautiful, responsive charts built for React
- 🗄️ **Zustand** - Lightweight state management
- ⚡ **Vite 6.x** - Lightning-fast development and builds

## Project Structure

```
/src
  /components      # React components
    /ui            # Design system (Button, Card, Select)
    /layout        # Layout components (Header, Tabs)
    /visualize     # Chart and visualization components
    /editor        # Data editing components
  /lib             # Data layer and utilities
    /data          # Schemas, parsers, sample data
    /utils         # Formatting and calculations
  /store           # Zustand state management
  /types           # TypeScript type definitions
  /styles          # Global CSS and Tailwind config
```

## Documentation

- **[DESIGN_AND_BUILD.md](./DESIGN_AND_BUILD.md)** - Complete design philosophy, architecture, and implementation plan
- **[personas.md](./personas.md)** - Development agent personas and collaboration model

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Principles

1. **Financial Clarity** - Clean, high-contrast design optimized for data comprehension
2. **Purposeful Hierarchy** - Clear visual distinction between data levels
3. **Precision First** - Exact values always visible alongside visualizations
4. **Professional Aesthetic** - Consistent spacing, typography, and color system

## Data Source

Monthly Retail Trade Survey from the US Census Bureau
- Categories based on NAICS codes
- Time series data for 2024 and 2025
- Covers 50+ retail business categories
- Updated monthly as new reports are released

## Development

This project is built by two specialized development agents:
- **Alex (Design Engineer)** - UI/UX, components, styling, accessibility
- **Jordan (Data Architect)** - Data modeling, state management, business logic

See [personas.md](./personas.md) for details on the development approach.

---

**Version:** 1.0.0
**Last Updated:** November 2025
**License:** MIT
