import React from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext.js";

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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return <h1>{loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h1>Name</h1>
        <h2>Location:Kerala</h2>
        <UserClass name="first" />
        <UserClass name="second" />
      </div>
    );
  }
}
export default About;
