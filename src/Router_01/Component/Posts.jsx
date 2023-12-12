import { Link } from "react-router-dom";
import classes from "../Styles/Posts.module.css"

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        <li className={classes.listStyle}>
          <Link to="/posts/1" className={classes.eachPost}>Post 1</Link>
        </li>
        <li className={classes.listStyle}>
          <Link to="/posts/2" className={classes.eachPost}>Post 2</Link>
        </li>
        <li className={classes.listStyle}>
          <Link to="/posts/3" className={classes.eachPost}>Post 3</Link>
        </li>
      </ul>
    </div>
  );
}