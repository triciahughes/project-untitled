function Comments({ comments, userData }) {
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
    </>
  );
}

export default Comments;
