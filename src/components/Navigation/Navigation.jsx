import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const getNavLinkClassName = ({ isActive }) => {
    clsx(css.NavLink, {
      [css.active]: isActive,
    });
  };
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={getNavLinkClassName} to="/">
          Home
        </NavLink>
        <NavLink className={getNavLinkClassName} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
