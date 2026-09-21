function FilterBar({ categories, category, sortBy, onCategoryChange, onSortChange }) {
  return (
    <div className="filter-bar">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>
    </div>
  );
}

export default FilterBar;