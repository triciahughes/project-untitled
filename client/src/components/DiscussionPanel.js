import discussionsImg from "../discussions.png";
import Prompts from "./Prompts";

function DiscussionPanel({ user, prompts }) {
  // console.dir(prompts);
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

  console.log(user);

  return (
    <div id="discussionPanel">
      <img alt="" src={discussionsImg} className="discussions"></img>
      <div>{prompt_map}</div>
    </div>
  );
}

export default DiscussionPanel;
