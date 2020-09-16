import React from "react";

export default function CommentItem(props) {
  const inlineStyle = {
    boxStyle: {
      border: "1px solid #ccc",
      margin: "10px",
      paddingLeft: 15,
    },
    titleStytle: { fontSize: 16, color: "purple" },
    bodyStyle: {
      fontSize: 14,
      color: "green",
    },
  };
  return (
    <div className="itemStyles.box">
      <h1 className={itemStyles.title}>评论人:{props.user}</h1>
      <h3 className={itemStyles.body}>评论内容:{props.content}</h3>
    </div>
  );
}
