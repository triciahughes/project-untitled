import Prompts from "./Prompts";

function DiscussionPanel({ book, user }) {
  const prompts = book.prompts;

  const prompt_map = prompts?.map((data) => {
    return (
      <Prompts
        key={data.id}
        prompts={data.prompt}
        promptId={data.id}
        comments={data.comments}
        user={user}
      />
    );
  });

  return (
    <div id="discussionPanel">
      <h2>Discussion Question</h2>
      <div>{prompt_map}</div>
    </div>
  );
}

export default DiscussionPanel;
