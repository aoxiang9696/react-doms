import React from "react";
import "./index.css";
// import Hello from "./Hello";
class Home extends React.Component {
  render() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      var p = (
        <p className="myp" key={i}>
          本质是啥{" "}
        </p>
      );
      arr.push(p);
    }
    // var person = {
    //   name: "ls",
    //   age: 22,
    //   gender: "男",
    //   address: "北京",
    // };

    return (
      <div>
        <h1> 欢迎， 这里是Home {this.props.children} </h1> <hr />{" "}
        {/* 注释要用大括号,组件和标签是通过大小写区分的*/} <h1> 你会读吗 </h1>{" "}
        <div className="pp"> {arr} </div>{" "}
      </div>
    );
  }
}

export default Home;
