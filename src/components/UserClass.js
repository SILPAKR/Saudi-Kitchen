import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dummmy",
        location: "dummy place",
      },
    };
    // console.log(this.props.name + "child constructor");
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/SILPAKR");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    this.timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);

    // console.log(this.props.name + "child componentdidmount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.name + "child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="border-2 mt-4">
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          className="border-2 border-cyan-300"
        >
          count
        </button>
        <h1>Name :{name}</h1>
        <h2>Location:{location}</h2>
        <img src={avatar_url} alt="" />
      </div>
    );
  }
}
export default UserClass;
