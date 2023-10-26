import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '', //it is necessary to raise this state to the App component
    };
  }

  onSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term); //to raise this local state to the App component
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find an employee.."
        value={this.state.term}
        onChange={this.onSearch}
      />
    );
  }
}
export {SearchPanel};
