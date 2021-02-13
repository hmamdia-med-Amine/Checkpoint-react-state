import { Component } from "react";
import "./App.css";
import Clock from "./Clock";

let time = new Date().toLocaleString();
class AppC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Shrek's Donkey",
      bio: "A long story",
      imgSrc: (
        <img src="https://i.pinimg.com/originals/81/4c/b5/814cb54378f9f5c2568bbafc2c7ab675.jpg" />
      ),
      profession: "Comedian Actor",
      show: false,
    };
  }

  render() {
    return (
      <div className="App-header">
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle show status
        </button>

        {this.state.show ? (
          <p>
            {" "}
            If you don't know me, i am {this.state.fullName}
            <br />
            Bio: {this.state.bio}.
            <br />
            {this.state.imgSrc}
            And i work as {this.state.profession}.
          </p>
        ) : (
          ""
        )}
        <Clock />
      </div>
    );
  }
}
export default AppC;
