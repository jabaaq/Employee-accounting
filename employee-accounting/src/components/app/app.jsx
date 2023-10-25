import {Component} from 'react';
import {AppInfo} from '../app-info/app-info';
import {SearchPanel} from '../search-panel/search-panel';
import {AppFilter} from '../app-filter/app-filter';
import {EmployeesList} from '../employees-list/employees-list';
import {EmployeesAddForm} from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John Smith', salary: 800, increase: false, like: true, id: 1},
        {name: 'Rylee Monroe', salary: 3000, increase: true, like: false, id: 2},
        {name: 'Carlie Austin', salary: 4000, increase: false, like: false, id: 3},
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter((item) => item.id !== id), //If the condition is true, the element is included in the new filtered array. If the condition is false, the element is excluded from the new array.
      };
    });
  };

  addItem = (e, name, salary) => {
    e.preventDefault();
    this.setState(({data}) => {
      const newData = [...data];
      newData.push({
        name: name,
        salary: salary,
        increase: false,
        like: false,
        id: Math.floor(Math.random() * 1000),
      });
      return {data: newData};
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];
      const newItem = {...old, increase: !old.increase}; // it just takes the value either true or false, changes it to the opposite and writes it to 'increase'
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; //split the array 'data' in half and added a new element 'newItem' in the middle
      return {
        data: newArr,
      };
      /*
       this.setState(({data}) => ({   //Another way to write the above code
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, increase: !item.increase};   //Returns a new object !
        }
        return item;
      }),
    }));
  };
      */
    });
  };

  onToggleRise = (id) => {
    console.log(`Like this ${id}`);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          deleteById={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        {/*provided this (deleteById) Prop with a function, now i can use it in employees.list.jsx */}
        <EmployeesAddForm onSubmitForm={this.addItem} />
      </div>
    );
  }
}
export {App};
