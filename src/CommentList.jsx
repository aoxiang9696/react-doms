import React from "react";
import ReactDOM from "react-dom";
import CommentItem from "./CommentItem";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmts: [
        { user: "张三", content: "沙发" },
        { user: "张三", content: "凉席" },
        { user: "张三", content: "板凳" },
        { user: "张三", content: "砖头" },
        { user: "张三", content: "笨笨" },
      ],
    };
  }
  // 有状态组件，render函数是必须的，表示渲染那些虚拟dom并展示出来
  render() {
    return (
      <div>
        <h1 className="title">评论列表按理</h1>
        {this.state.cmts.map((item, i) => {
          return <CommentItem {...item} key={i}></CommentItem>;
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <CommentList></CommentList>
  </div>,
  document.getElementById("app")
);
