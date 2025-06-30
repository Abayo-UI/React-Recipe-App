import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const ShowDropDown = ({ showDropDown, setShowDropDown }) => {
  const { recipeList, searchParam, setSearchParam, setFilteredData, setPageNumbering, setNumberOfPages } = useContext(GlobalContext);
  if (!showDropDown || !searchParam) return null;

  // Filter and limit suggestions
  const suggestions = recipeList
    .filter(recipe => recipe.title.toLowerCase().includes(searchParam.toLowerCase()))
    .slice(0, 5);

  // Helper to bold the matched part
  const highlightMatch = (title) => {
    const idx = title.toLowerCase().indexOf(searchParam.toLowerCase());
    if (idx === -1) return title;
    const before = title.slice(0, idx);
    const match = title.slice(idx, idx + searchParam.length);
    const after = title.slice(idx + searchParam.length);
    return <>{before}<b>{match}</b>{after}</>;
  };

  // When a suggestion is clicked, filter to only that recipe
  const handleSuggestionClick = (recipe) => {
    setSearchParam(recipe.title);
    setFilteredData([recipe]);
    setPageNumbering([0]);
    setNumberOfPages(1);
    setShowDropDown(false);
    if (document.activeElement) document.activeElement.blur();
  };

  // Reset filteredData if user types or submits a new search
  React.useEffect(() => {
    setFilteredData(null);
    // eslint-disable-next-line
  }, [searchParam]);

  // Position dropdown absolutely below the input, and fix mobile overlap
  return (
    <div
      style={{
        position: 'absolute',
        top: '110%', // just below the input, works for both desktop and mobile
        left: 0,
        width: '100%',
        maxWidth: 400,
        zIndex: 2000,
        pointerEvents: 'auto',
      }}
    >
      <div
        className="bg-white border rounded shadow"
        style={{ maxHeight: '220px', overflowY: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
      >
        {suggestions.length === 0 ? (
          <div className="px-3 py-2 text-muted">No matches found</div>
        ) : (
          suggestions.map(recipe => (
            <div
              key={recipe.id}
              className="px-3 py-2 dropdown-option text-dark"
              style={{ cursor: 'pointer' }}
              onMouseDown={() => handleSuggestionClick(recipe)}
            >
              {highlightMatch(recipe.title)}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShowDropDown