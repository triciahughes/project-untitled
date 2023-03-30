function DiscussionPanel({ book }) {
  const prompts = book.prompts;

  const prompt_map = prompts?.map((data) => {
    return <p key={data.id}>{data.prompt}</p>;
  });

  return (
    <div id="discussionPanel">
      <h2>Discussion Questions</h2>
      <p>{prompt_map}</p>
    </div>
  );
}

export default DiscussionPanel;
