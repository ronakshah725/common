import { useState } from 'react';
import { VisualizeTab } from './components/VisualizeTab';
import { DataEditorTab } from './components/DataEditorTab';

type Tab = 'visualize' | 'editor';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('visualize');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-semibold text-slate-900">
            US Retail Sales Dashboard
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Monthly Retail Trade Survey - US Census Bureau
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('visualize')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'visualize'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Visualize
            </button>
            <button
              onClick={() => setActiveTab('editor')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'editor'
                  ? 'border-accent text-accent'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              Data Editor
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'visualize' ? <VisualizeTab /> : <DataEditorTab />}
      </main>
    </div>
  );
}

export default App;
