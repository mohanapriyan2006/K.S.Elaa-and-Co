function FilterTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => onChange(tab.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            activeTab === tab.value
              ? 'bg-primary text-brown shadow-soft'
              : 'border border-border bg-white text-textSecondary hover:border-primary/50 hover:text-brown'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
