import { EmployeesListItem } from "../employees-list-item/employees-list-item";
import "./employees-list.css";

function EmployeesList({ data }) {
  const elements = data.map((item) => {
    return <EmployeesListItem name={item.name} salary={item.salary} />; //I can also use [...item]
  });

  return <ul className="app-list list-group">{elements}</ul>;
}

export { EmployeesList };
