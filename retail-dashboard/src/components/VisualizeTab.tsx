import { RetailChart } from './RetailChart';
import { CategoryList } from './CategoryList';

export function VisualizeTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Chart Area - 2/3 width on large screens */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Retail Sales Trends
          </h2>
          <RetailChart />
        </div>
      </div>

      {/* Category Selection - 1/3 width on large screens */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Categories
          </h2>
          <p className="text-sm text-slate-600 mb-4">
            Select up to 6 categories to compare
          </p>
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
