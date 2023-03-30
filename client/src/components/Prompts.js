import Comments from "./Comments";
function Prompts({ prompts, comments }) {
  const comments_data = comments?.map((data) => {
    return (
      <Comments key={data.id} comments={data.comment} userData={data.user} />
    );
  });

  return (
    <>
      <div className="prompt">{prompts}</div>
      <h4></h4>
      <div>{comments_data}</div>
    </>
  );
}

export default Prompts;
