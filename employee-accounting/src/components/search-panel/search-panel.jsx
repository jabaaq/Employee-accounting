import "./search-panel";

function SearchPanel() {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee.."
    />
  );
}

export { SearchPanel };
