import { create } from 'zustand';
import type { RetailCategory } from '../types';
import { retailData } from '../data/retailData';

interface DashboardStore {
  categories: RetailCategory[];
  selectedCategories: Set<string>;
  toggleCategory: (naicsCode: string) => void;
  isSelected: (naicsCode: string) => boolean;
  getSelectedCategories: () => RetailCategory[];
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  categories: retailData,

  // Initialize with top 3 categories by volume (8-month total)
  selectedCategories: new Set([
    '722', // Food Services - $787B
    '441', // Motor Vehicle - $1.11T (actually largest)
    '445', // Food & Beverage - $670B
  ]),

  toggleCategory: (naicsCode: string) => {
    set((state) => {
      const newSelected = new Set(state.selectedCategories);

      if (newSelected.has(naicsCode)) {
        newSelected.delete(naicsCode);
      } else {
        // Max 6 categories limit
        if (newSelected.size >= 6) {
          console.warn('Maximum 6 categories can be selected');
          return state;
        }
        newSelected.add(naicsCode);
      }

      return { selectedCategories: newSelected };
    });
  },

  isSelected: (naicsCode: string) => {
    return get().selectedCategories.has(naicsCode);
  },

  getSelectedCategories: () => {
    const { categories, selectedCategories } = get();
    return categories.filter((cat) => selectedCategories.has(cat.naicsCode));
  },
}));
