import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>E-Salary</div>
      <nav>
        <ul>
        <li>
            <Link to='/'>Homepage</Link>
          </li>
          <li>
            <Link to='/all'>Employees</Link>
          </li>
          <li>
            <Link to='/add'>New Employee</Link>
          </li>
          <li>
            <Link to='/query'>Query</Link>
          </li>
          <li>
            <Link to='/update'>Update</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;