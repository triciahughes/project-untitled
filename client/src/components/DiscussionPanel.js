import Prompts from "./Prompts";

function DiscussionPanel({ book }) {
  const prompts = book.prompts;

  const prompt_map = prompts?.map((data) => {
    return (
      <Prompts key={data.id} prompts={data.prompt} comments={data.comments} />
    );
  });

  return (
    <div id="discussionPanel">
      <h2>Discussion Questions</h2>
      <div>{prompt_map}</div>
    </div>
  );
}

export default DiscussionPanel;
