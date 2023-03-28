import { Link } from 'react-router-dom'

function Host({ groups }) {
  const groupMap = groups.map((element) => {
    return (
        <p key={element.id} className="host" groups={groups}>
        <Link to='/host_group'>
        {element.name}
        </Link>
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

export default Host;
