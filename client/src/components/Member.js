import { Link } from "react-router-dom";
function Member({ groups }) {
  const groupMap = groups.map((element) => {
    return (
      <p key={element.id} className="host">
        <Link to={`/member_group/${element.id}`}>{element.name}</Link>
      </p>
    );
  });

  return (
    <>
      <div>
        <div>
          <div className="grid">{groupMap}</div>
        </div>
      </div>
    </>
  );
}

export default Member;
