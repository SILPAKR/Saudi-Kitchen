import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentdidmount");
  }
  render() {
    console.log("parent render");

    return (
      <div className="border-2">
        <h1>Name</h1>
        <h2>Location:Kerala</h2>
        <UserClass name="first" />
        <UserClass name="second" />
      </div>
    );
  }
}
export default About;
