import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard />
      <CommentDetail
        author='Sam'
        timeAgo='Today at 4:45pm'
        comment='great'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Alex'
        timeAgo='Today at 2:00am'
        comment='not so great'
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author='Jane'
        timeAgo='Yesterday at 10:00pm'
        comment='actually couldnt care less'
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
