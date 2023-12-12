import PropTypes from "prop-types";
export default function Dashboard(prop) {
    return (
      <div>
        <h1>{prop.title}</h1>
        <p>This is the dashboard page</p>
      </div>
    );
  }

let Test;
Test.PropTypes = {
    title : PropTypes.string
}