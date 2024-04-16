import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

// import React from 'react'
const NotFoundPage = () => {
  return (
    <div className={css.notFoundContainer}>
      <h1>Page you visited doesn&apos;t exist.</h1>
      <img src="/src/img/1.jpg" alt="Stop" width="200px" height="auto" />
      <Link className={css.notFoundLink} to="/">
        Go Home 🏠
      </Link>
    </div>
  );
};

export default NotFoundPage;
