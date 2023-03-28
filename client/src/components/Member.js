function Member({ groups }) {
  const groupMap = groups.map((element) => {
    return (
      <p key={element.id} className="host">
        {element.name}
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
