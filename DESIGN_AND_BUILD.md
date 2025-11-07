# Financial Retail Dashboard - Design & Build

## 🎯 Product Vision

A beautifully crafted, single-page financial dashboard for exploring US Census Bureau retail sales data. Built for analysts who need to visualize trends, compare categories, and update data manually as new monthly reports arrive.

---

## 📊 Data Understanding

**Source:** US Census Bureau Monthly Retail Trade Survey
**Structure:**
- Hierarchical business categories (NAICS codes)
- Time series: Monthly data (Aug, Jul, Jun) for 2024 & 2025
- 8-month cumulative totals
- Year-over-year percent change
- ~50 retail categories from Motor Vehicles to Food Services

**Key Insights to Surface:**
1. Which retail sectors are growing/declining?
2. Month-over-month trends within 2025
3. Year-over-year comparisons (2024 vs 2025)
4. Total market vs individual category performance

---

## 🎨 Design Philosophy

### Visual Principles
1. **Financial Clarity** - Clean, high-contrast design with professional data visualization
2. **Purposeful Hierarchy** - Clear visual distinction between totals, categories, and subcategories
3. **Precision** - Exact values always visible alongside visual representations
4. **Confidence** - Consistent spacing, typography, and color system that builds trust

### Color Strategy
```
Primary Palette (Financial Data):
- Growth/Positive: Emerald (#10B981)
- Decline/Negative: Rose (#F43F5E)
- Neutral/Baseline: Slate (#64748B)
- Accent: Blue (#3B82F6)

Background System:
- Base: Slate-50 (#F8FAFC)
- Cards: White with subtle shadows
- Interactive: Blue-50 hover states

Typography:
- Headers: Inter (600-700 weight)
- Data: Tabular numbers (font-variant-numeric)
- Body: Inter (400-500 weight)
```

---

## 🏗️ Architecture Design

### Tech Stack (2025 Best Practices)

**Core Framework:**
- React 19 (latest stable) - Function components, hooks, concurrent features
- TypeScript 5.x - Strict mode for type safety
- Vite 6.x - Lightning-fast dev server and builds

**Styling:**
- Tailwind CSS 4.0 - CSS-first configuration, Oxide engine
- Utility-first approach with custom CSS variables for theming

**Charting:**
- Recharts 2.x - Component-based, responsive, excellent for financial data
  - Why? Drop-in simplicity, optimized for datasets like ours, great docs
  - Alternatives considered: Visx (too low-level), ApexCharts (heavier)

**State Management:**
- Zustand - Lightweight, simple for our use case
- Local state with React hooks for UI concerns

**Data Handling:**
- Zod - Runtime validation for data imports
- Date-fns - Date formatting and calculations

---

## 🖼️ UX Design

### Two-Tab Interface

#### **Tab 1: Visualize 📈**

**Layout Structure:**
```
┌─────────────────────────────────────────────────┐
│  HEADER                                         │
│  US Retail Sales Dashboard                     │
│  [Visualize] [Data Editor]                     │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  FILTER BAR (Sticky)                            │
│  [Category Selector ▼] [View: Totals ▼]        │
│  [Time Range: 3M ▼] [Compare: YoY ✓]           │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  KEY METRICS (Cards)                            │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │Total │ │Aug   │ │MoM   │ │YoY   │          │
│  │$5.7T │ │Growth│ │+3.8% │ │+4.7% │          │
│  └──────┘ └──────┘ └──────┘ └──────┘          │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  PRIMARY CHART (70% width)                      │
│                                                 │
│  Line/Bar Chart showing:                        │
│  - Selected categories over time                │
│  - 2024 vs 2025 comparison                      │
│  - Responsive legend                            │
│                                                 │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  CATEGORY BREAKDOWN (30% width, side panel)     │
│                                                 │
│  Tree view or list:                             │
│  ▼ Retail & Food Services      $5.69T  +3.8%   │
│    ▼ Motor Vehicle & Parts     $1.11T  +4.7%   │
│      - New Car Dealers         $1.02T  +5.0%   │
│      - Auto Parts              $0.09T  -       │
│    ▶ Furniture & Home          $0.09T  +5.4%   │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Interactions:**
1. **Category Selection** - Click categories to add/remove from chart
2. **Hover States** - Show exact values, tooltips with breakdowns
3. **Time Range Toggle** - Switch between 3M, 6M, 8M views
4. **View Modes:**
   - Totals: Show aggregate numbers
   - Categories: Show major categories
   - Subcategories: Drill into specific segments
5. **Compare Mode** - Overlay 2024 vs 2025 data

**Chart Types:**
- **Primary:** Multi-line chart (time series comparison)
- **Secondary:** Grouped bar chart (category comparison)
- **Accent:** Small sparklines in category list

---

#### **Tab 2: Data Editor 📝**

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  HEADER                                         │
│  [← Back to Visualize]                          │
│  Edit Retail Sales Data                         │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  TOOLBAR                                        │
│  [Import CSV] [Export JSON] [Reset] [Save]      │
│  Last updated: Jan 2025                         │
└─────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────┐
│  EDITABLE TABLE                                 │
│                                                 │
│  ┌────────────────────────────────────────────┐│
│  │NAICS│Business        │Aug'25│Jul'25│...│ Edit││
│  ├────────────────────────────────────────────┤│
│  │441  │Motor Vehicle..│145,063│...   │...│ ✎ ││
│  │     │ (editable cells with validation)   │││
│  │4411 │Auto Dealers    │133,106│...   │...│ ✎ ││
│  └────────────────────────────────────────────┘│
│                                                 │
│  Features:                                      │
│  - Inline editing with validation               │
│  - Auto-calculate % change                      │
│  - Highlight changed cells                      │
│  - Undo/Redo stack                              │
│                                                 │
└─────────────────────────────────────────────────┘
```

**UX Features:**
1. **Smart Editing:**
   - Click cell to edit
   - Tab/Enter to navigate
   - Number formatting on blur
   - Validation (no negative values, reasonable ranges)

2. **Visual Feedback:**
   - Changed cells highlighted in blue
   - Invalid data shows red border + error tooltip
   - Save button activates when changes present

3. **Data Integrity:**
   - Auto-recalculate dependent values (totals, %)
   - Confirm before reset
   - Export current state before major changes

4. **Import Flow:**
   - Paste CSV directly or upload file
   - Preview changes before applying
   - Map columns to data structure

---

## 🔧 Technical Implementation Plan

### Phase 1: Foundation (Days 1-2)
```
1. Project Setup
   - Vite + React 19 + TypeScript
   - Tailwind CSS 4.0 configuration
   - ESLint + Prettier
   - Project structure

2. Data Layer
   - TypeScript interfaces for data model
   - Zod schemas for validation
   - Sample data parsing from Census PDF
   - Mock data structure

3. Component Architecture
   - Layout components (Header, Tabs, Container)
   - Design system (Button, Card, Select)
   - Theme setup (colors, spacing)
```

### Phase 2: Visualize Tab (Days 3-4)
```
1. Filter Bar Component
   - Category selector with autocomplete
   - View mode toggle
   - Time range selector

2. Key Metrics Cards
   - Stat card component
   - Animation on data change
   - Trend indicators

3. Chart Integration
   - Recharts setup
   - Multi-line time series chart
   - Responsive container
   - Custom tooltip
   - Legend with interactions

4. Category Panel
   - Collapsible tree structure
   - Select/deselect categories
   - Sparkline previews
```

### Phase 3: Data Editor Tab (Days 5-6)
```
1. Table Component
   - Virtual scrolling for performance
   - Editable cells
   - Number formatting

2. Edit State Management
   - Track changes
   - Undo/redo logic
   - Validation layer

3. Import/Export
   - CSV parser
   - JSON serialization
   - File download utility
```

### Phase 4: Polish & Integration (Day 7)
```
1. State Management
   - Zustand store setup
   - Persist edited data to localStorage
   - Sync between tabs

2. Responsive Design
   - Mobile breakpoints
   - Touch interactions
   - Reduced charts for small screens

3. Performance
   - Lazy load charts
   - Memoize expensive calculations
   - Debounce filters

4. Accessibility
   - ARIA labels
   - Keyboard navigation
   - Focus management
```

---

## 📁 Project Structure

```
/src
  /components
    /ui              # Design system components
      Button.tsx
      Card.tsx
      Select.tsx
      Input.tsx
    /layout
      Header.tsx
      TabContainer.tsx
    /visualize
      FilterBar.tsx
      KeyMetrics.tsx
      MainChart.tsx
      CategoryPanel.tsx
      CategoryTree.tsx
    /editor
      DataTable.tsx
      EditableCell.tsx
      Toolbar.tsx
  /lib
    /data
      schema.ts      # Zod schemas
      parser.ts      # Data parsing logic
      sample.ts      # Initial dataset
    /utils
      formatting.ts  # Number/date formatting
      calculations.ts # % change, totals
  /store
    useDataStore.ts  # Zustand store
  /types
    index.ts         # TypeScript types
  /styles
    globals.css      # Tailwind imports
  App.tsx
  main.tsx
```

---

## 🎭 Agent Personas (See personas.md)

Two specialized agents will implement this:
1. **Design Engineer** - UI/UX implementation, Tailwind, component design
2. **Data Architect** - State management, data parsing, validation, calculations

---

## ✅ Success Criteria

**User Experience:**
- [ ] Load dashboard in < 1 second
- [ ] Smooth interactions (60fps animations)
- [ ] Clear visual hierarchy on first glance
- [ ] Can add new monthly data in < 2 minutes

**Technical:**
- [ ] 100% TypeScript coverage
- [ ] Responsive on mobile, tablet, desktop
- [ ] All data validated with Zod
- [ ] Accessible (WCAG 2.1 AA)

**Design:**
- [ ] Consistent 8px spacing grid
- [ ] Cohesive color system
- [ ] Professional financial aesthetic
- [ ] Delightful micro-interactions

---

## 🚀 Next Steps

1. **Review this plan** - Get alignment on approach
2. **Initialize project** - Set up Vite + React 19 + Tailwind 4.0
3. **Parse data** - Extract and structure the Census data
4. **Build iteratively** - Visualize tab → Editor tab → Polish

---

**Last Updated:** 2025-11-07
**Product Designer:** Claude (10yr Frontend SWE + Product Design)
