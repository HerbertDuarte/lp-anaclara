import React from "react";
import { NavLink , Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className={styles.logo}>
        <div>
          <span>Ana</span>
          <span className={styles.logoText2}>Clara</span>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/works">Trabalhos</NavLink>
          </li>
          <li>
            <NavLink to="/about">Sobre</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
