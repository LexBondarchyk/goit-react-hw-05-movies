import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

let activeClassName = {
  color: '#2AC6E8',
};

const Navigation = () => (
    <header className={style.header}>
      <div className={style.nav}>
        <nav>
          <NavLink
            to="/"
            className={style.link}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >

            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={style.link}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
);

export default Navigation;
