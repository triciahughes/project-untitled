import NewCommentForm from "./NewCommentForm";
import { useState } from "react";
function Comments({ comments, userData }) {
  const [addComment, setAddComment] = useState(false);

  function handleAddComment() {
    setAddComment(!addComment);
  }

  const last_initial = userData.last_name[0].toUpperCase() + ".";

  return (
    <>
      <div className="comment-info">
        <p className="comment-author">
          {userData.first_name} {last_initial}
        </p>
      </div>
      <summary>
        <details className="comment-body">
          <p>{comments}</p>
        </details>
      </summary>
      <button onClick={handleAddComment}>
        {addComment ? "Close" : "Add Comment"}
      </button>
      {addComment ? (
        <NewCommentForm comments={comments} setcomments={setAddComment} />
      ) : null}
    </>
  );
}

export default Comments;
