import './app-info.css';

const AppInfo = ({employees, increasedEmployees}) => {
  console.log(employees, increasedEmployees);
  return (
    <div className="app-info">
      <h1>Employee accounting of company N</h1>
      <h2>Total number of employees: {employees}</h2>
      <h2>The bonus will receive: {increasedEmployees}</h2>
    </div>
  );
};

export {AppInfo};
