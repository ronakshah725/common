// Core data types for retail sales dashboard

export interface MonthlyData {
  aug2025: number | null;
  jul2025: number | null;
  jun2025: number | null;
  aug2024: number | null;
  jul2024: number | null;
  jun2024: number | null;
}

export interface EightMonthTotal {
  total2025: number | null;
  total2024: number | null;
}

export interface RetailCategory {
  naicsCode: string;
  businessName: string;
  parentCode?: string; // For hierarchical relationship
  percentChange: number | null; // Year-over-year % change
  monthly: MonthlyData;
  eightMonth: EightMonthTotal;
  level: 0 | 1 | 2; // Hierarchy level: 0=total, 1=major category, 2=subcategory
}

export interface ChartDataPoint {
  month: string;
  [key: string]: number | string; // Dynamic keys for each category
}

export interface CategorySelection {
  naicsCode: string;
  selected: boolean;
}

// State types
export interface DashboardState {
  categories: RetailCategory[];
  selectedCategories: Set<string>;
  viewMode: 'overview' | 'deepDive' | 'yoy';
  chartType: 'line' | 'stackedArea' | 'bar';
  timeRange: '3m' | '6m' | '8m';
}
