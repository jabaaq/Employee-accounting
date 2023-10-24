import { Component } from "react";
import { AppInfo } from "../app-info/app-info";
import { SearchPanel } from "../search-panel/search-panel";
import { AppFilter } from "../app-filter/app-filter";
import { EmployeesList } from "../employees-list/employees-list";
import { EmployeesAddForm } from "../employees-add-form/employees-add-form";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John Smith", salary: 800, increase: false, id: 1 },
        { name: "Rylee Monroe", salary: 3000, increase: false, id: 2 },
        { name: "Carlie Austin", salary: 4000, increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id), //If the condition is true, the element is included in the new filtered array. If the condition is false, the element is excluded from the new array.
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} deleteById={this.deleteItem} />
        {/*provided this (deleteById) Prop with a function, now i can use it in employees.list.jsx */}
        <EmployeesAddForm />
      </div>
    );
  }
}

export { App };
