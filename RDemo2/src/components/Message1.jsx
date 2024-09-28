import { Component } from "react";
import Counter from "./Counter";
class Message1 extends Component {
  constructor() {
    super();
    this.state = {
      Counter: 0,
    };
  }
  increment() {
    this.setState({
      Counter: this.state.Counter + 1,
    });
  }
  render() {
    return (
      <div>
        counter : {this.state.Counter}
        <button onClick={() => this.increment()}>inc</button>
        <h1>msg1 {this.props.porp}</h1>
      </div>
    );
  }
}

export default Message1;
