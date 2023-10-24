import "./app.css";
import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";

function App() {
  const data = [
    { name: "John Smith", salary: 800, increase: false, id: 1 },
    { name: "Rylee Monroe", salary: 3000, increase: false, id: 2 },
    { name: "Carlie Austin", salary: 4000, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} deleteById={(id) => console.log(id)} />
      {/*provided this (deleteById) Prop with a function, now i can use it in employees.list.jsx */}
      <EmployeesAddForm />
    </div>
  );
}

export { App };
