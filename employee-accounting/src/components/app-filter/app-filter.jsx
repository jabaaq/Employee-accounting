import './app-filter.css';

function AppFilter(props) {
  const buttonsData = [
    //I decided to move the buttons into an array
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'For promotion'},
    {name: 'moreThen1000', label: 'Salary more than $1000'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name ? true : false;
    //here I will determine whether this button is active or not
    const clazz = active ? 'btn-light' : ' btn-outline-light';
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export {AppFilter};
