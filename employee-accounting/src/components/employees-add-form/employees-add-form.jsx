import {Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: '',
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      // in this case, instead of this prob 'prop: e.target.value' I can write that I will have [e.target.name]: e.target.value
    });
  };

  render() {
    const {onSubmitForm} = this.props;
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is his/her name?"
            name="name" //I do this so that we have these attributes, their value matches our state.
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={(e) => {
              this.setState({name: '', salary: ''}); //// Reset the input values
              onSubmitForm(e, name, salary);
            }}>
            Add
          </button>
        </form>
        <p id="inputError" className="hide">
          Please fill out all required fields.
        </p>
      </div>
    );
  }
}

export {EmployeesAddForm};
