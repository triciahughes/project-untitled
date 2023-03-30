function DiscussionPanel({ book }) {
  const prompts = book.prompts;

  const prompt_map = prompts?.map((data) => {
    return (
      <p key={data.id} id={data.id}>
        {data.prompt}
      </p>
    );
  });

  const comments = prompts?.map((data) => {
    return data.comments;
  });

  console.log(comments);

  // const comments_map = comments.forEach((data) => {
  //   return data.comment;
  // });

  // console.log(comments_map);

  return (
    <div id="discussionPanel">
      <h2>Discussion Questions</h2>
      <p>{prompt_map}</p>
      <p>comments</p>
    </div>
  );
}

export default DiscussionPanel;
