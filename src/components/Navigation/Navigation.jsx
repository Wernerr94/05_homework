import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';
import '../app.css';

export default function Navigation() {
  return (
    <div className={css.container}>
      <div className={css.navbar}>
        <NavLink to="/" className={css.navLink}>
          HOME
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          MOVIES
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
