function Comments({ comments, userData }) {
  const last_initial = userData.last_name[0].toUpperCase() + ".";

  return (
    <>
      <div>
        {userData.first_name} {last_initial}
      </div>
      <div>{comments}</div>
    </>
  );
}

export default Comments;
