import { NavLink } from "react-router-dom";
import classes from "../Styles/Header.module.css";


export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.allWorks}>All Works</div>
      <ul>
        <li className={classes.listStyle}>
          <NavLink to="/hello" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            Home
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app4" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App1_4
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app5" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App5
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app6" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App6
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app7" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App7
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app8" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App8
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app9_10" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App9_10
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app11" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App11
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app12" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App12
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app13" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App13
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app14" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App14
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app15_16" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App15_16
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app17_1" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App17_1
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app17_2" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App17_2
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app18_19" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App18_19
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app20" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App20
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app21" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App21
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app22" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App22
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app23_1" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App23_1
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app23_2" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App23_2
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app23_3" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App23_3
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app24" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App24
          </NavLink>
        </li>
        <li className={classes.listStyle}>
          <NavLink to="/app25" className={(navInfo)=>(
            navInfo.isActive ? classes.active : classes.headerStyle)}>
            App25
          </NavLink>
        </li>
      </ul>
    </div>
  );
}