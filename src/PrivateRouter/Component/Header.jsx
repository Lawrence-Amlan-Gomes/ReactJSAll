import { NavLink } from "react-router-dom";
import classes from "../Styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li className={classes.listStyle}>
          <NavLink to="/" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            Home
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/dashboard" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}