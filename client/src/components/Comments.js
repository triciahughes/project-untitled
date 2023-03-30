function Comments({ comments, userData }) {
  const last_initial = userData.last_name[0].toUpperCase() + ".";

  return (
    <>
      <div className="comment-info">
        <div className="comment-body">
          <p className="comment-author">
            {userData.first_name} {last_initial}
          </p>
          {/* <summary> */}
          <p>{comments}</p>
        </div>
        {/* </summary> */}
      </div>
    </>
  );
}

export default Comments;
