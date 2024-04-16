import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

function getNavLinkClassName(match, location) {
  return clsx(css.navLink, {
    [css.navLinkActive]: match && match.url === location.pathname,
  });
}

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="/"
            end
            className={(match) => getNavLinkClassName(match, location)}
          >
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="/movies"
            className={(match) => getNavLinkClassName(match, location)}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
