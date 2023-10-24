import { EmployeesListItem } from "../employees-list-item/employees-list-item";
import "./employees-list.css";

function EmployeesList({ data, deleteById }) {
  //use this (onDelete from app.jsx) function here
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        name={item.name}
        salary={item.salary}
        increase={item.increase} //I can also use:  {...item}
        key={item.id}
        onDelete={() => deleteById(item.id)} // created a function onDelete that I call in EmployeesListItem -> props
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
}

export { EmployeesList };
