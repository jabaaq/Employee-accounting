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
      term: '',
      filter: '',
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
    const inputError = document.querySelector('#inputError');
    if (name.length !== 0 && salary.length !== 0) {
      this.setState(({data}) => {
        inputError.classList.add('hide');
        inputError.classList.remove('show');
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
    } else {
      inputError.classList.add('show');
      inputError.classList.remove('hide');
    }
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
      /*same as:
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
    this.setState(({data}) => ({
      //Another way to write the above code
      data: data.map((item) => {
        if (item.id === id) {
          return {...item, like: !item.like}; //Returns a new object !
        }
        return item;
      }),
    }));
  };

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items; //if this line that displays the search does not contain anything - return item array
    }

    return items.filter((item) => {
      return item.name.toUpperCase().includes(term.toUpperCase()); //same as return item.name.indexOf(term) > -1;
      //filter and return only those elements that pass this check.
    });
  };

  onUpdateSearch = (term) => {
    //Now this method, just like before, we can pass the <SearchPanel /> component
    this.setState({term}); //same as this.setState =  ({term : term});
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.like); //item.like === true
        break;
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      default:
        return items; //do not filter these elements
        break;
    }
  };

  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increasedEmployees = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.searchEmployee(data, term), filter); //combined two functions at once, because filters can also be applied while searching, that's why I putted this.searchEmployee(data, term) as an array. And it turns out that all the data displayed on the page is double filtered

    return (
      <div className="app">
        <AppInfo employees={employees} increasedEmployees={increasedEmployees} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
        <EmployeesList
          data={visibleData} //here there will still be an array only filtered by the line that comes to us from another component
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
