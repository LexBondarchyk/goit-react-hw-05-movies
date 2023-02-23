import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

// let activeClassName = 'activeLink';
let activeClassName = {
  color: '#fff',
};

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={style.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >

      Home
    </NavLink>

    {/* <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}> */}
    <NavLink
      to="/movies"
      className={style.link}
      style={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
