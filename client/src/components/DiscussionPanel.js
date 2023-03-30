import Prompts from "./Prompts";

function DiscussionPanel({ book }) {
  const prompts = book.prompts;

  const prompt_map = prompts?.map((data) => {
    return (
      <Prompts key={data.id} prompts={data.prompt} comments={data.comments} />
    );
  });

  // console.log(prompts);
  // console.log(book);

  // const comments_map = comments.forEach((data) => {
  //   return data.comment;
  // });

  // console.log(comments_map);

  return (
    <div id="discussionPanel">
      <h2>Discussion Questions</h2>
      <div>{prompt_map}</div>
      <p>comments</p>
    </div>
  );
}

export default DiscussionPanel;
