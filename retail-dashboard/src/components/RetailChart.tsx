import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useDashboardStore } from '../store/useDashboardStore';
import type { ChartDataPoint } from '../types';

// Color palette for up to 6 categories
const COLORS = [
  '#3b82f6', // blue
  '#10b981', // green
  '#f59e0b', // amber
  '#ef4444', // red
  '#8b5cf6', // purple
  '#06b6d4', // cyan
];

export function RetailChart() {
  const getSelectedCategories = useDashboardStore(
    (state) => state.getSelectedCategories
  );

  const selectedCategories = getSelectedCategories();

  // Transform data for Recharts
  const chartData: ChartDataPoint[] = [
    { month: 'Jun 2025' },
    { month: 'Jul 2025' },
    { month: 'Aug 2025' },
  ];

  // Add data for each selected category
  selectedCategories.forEach((category) => {
    const shortName = category.businessName.substring(0, 20); // Shorter name for legend
    chartData[0][shortName] = category.monthly.jun2025 ?? 0;
    chartData[1][shortName] = category.monthly.jul2025 ?? 0;
    chartData[2][shortName] = category.monthly.aug2025 ?? 0;
  });

  // Format Y-axis values
  const formatYAxis = (value: number) => {
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}T`;
    return `$${value.toFixed(0)}B`;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-lg">
          <p className="font-semibold text-slate-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-slate-700">{entry.name}:</span>
              <span className="font-medium tabular-nums text-slate-900">
                {formatYAxis(entry.value)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  if (selectedCategories.length === 0) {
    return (
      <div className="h-96 flex items-center justify-center text-slate-500">
        <div className="text-center">
          <p className="text-lg font-medium">No categories selected</p>
          <p className="text-sm mt-1">
            Select categories from the list to visualize trends
          </p>
        </div>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="month"
          tick={{ fill: '#64748b' }}
          tickLine={{ stroke: '#cbd5e1' }}
        />
        <YAxis
          tickFormatter={formatYAxis}
          tick={{ fill: '#64748b' }}
          tickLine={{ stroke: '#cbd5e1' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ paddingTop: '20px' }}
          iconType="line"
        />
        {selectedCategories.map((category, index) => {
          const shortName = category.businessName.substring(0, 20);
          return (
            <Line
              key={category.naicsCode}
              type="monotone"
              dataKey={shortName}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}
