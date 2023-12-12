import { NavLink } from "react-router-dom";
import classes from "../Styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <ul>
        <li className={classes.listStyle}>
          <NavLink to="/hello" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            Home
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/posts" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            Posts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}