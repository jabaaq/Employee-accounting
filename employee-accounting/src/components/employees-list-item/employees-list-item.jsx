import './employees-list-item.css';

const EmployeesListItem = (props) => {
  //I removed this part of the code because now the state is controlled by two methods (onToggleIncrease, onToggleRise) that are located in the app.jsx component. Now it’s more logical to track increases and bonuses at the Top level in app.jsx.

  const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, like} = props;
  let classNames = 'list-group-item d-flex justify-content-between';

  if (increase) {
    classNames += ' increase';
  }

  if (like) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span onClick={onToggleRise} className="list-group-item-label">
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm " onClick={onToggleIncrease}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export {EmployeesListItem};
