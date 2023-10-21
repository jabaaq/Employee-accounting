import { EmployeesListItem } from "../employees-list-item/employees-list-item";
import "./employees-list.css";

function EmployeesList() {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem name="John Smith" salary={800} />
      <EmployeesListItem name="Rylee Monroe" salary={3000} />
      <EmployeesListItem name="Carlie Austin" salary={4000} />
    </ul>
  );
}

export { EmployeesList };
