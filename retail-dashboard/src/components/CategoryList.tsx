import { useDashboardStore } from '../store/useDashboardStore';

export function CategoryList() {
  const { categories, selectedCategories, toggleCategory } = useDashboardStore();

  // Show only Level 1 categories for now (major categories)
  const level1Categories = categories.filter((cat) => cat.level === 1);

  const formatCurrency = (value: number | null) => {
    if (value === null) return 'N/A';
    if (value >= 1000) return `$${(value / 1000).toFixed(2)}T`;
    return `$${value.toFixed(0)}B`;
  };

  const formatPercent = (value: number | null) => {
    if (value === null) return '';
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  return (
    <div className="space-y-2">
      {level1Categories.map((category) => {
        const isSelected = selectedCategories.has(category.naicsCode);
        const isPositive = (category.percentChange ?? 0) >= 0;

        return (
          <label
            key={category.naicsCode}
            className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => toggleCategory(category.naicsCode)}
              className="mt-1 h-4 w-4 text-accent focus:ring-accent border-slate-300 rounded"
            />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-slate-900 truncate">
                {category.businessName}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm tabular-nums text-slate-600">
                  {formatCurrency(category.eightMonth.total2025)}
                </span>
                <span
                  className={`text-xs tabular-nums font-medium ${
                    isPositive ? 'text-growth' : 'text-decline'
                  }`}
                >
                  {formatPercent(category.percentChange)}
                </span>
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
}
