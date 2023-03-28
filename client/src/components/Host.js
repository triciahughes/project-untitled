function Host({ groups }) {
  const groupMap = groups.map((element) => {
    return <li key={element.id}>{element.name}</li>;
  });

  return (
    <>
      <div>
        <ul>{groupMap}</ul>
      </div>
    </>
  );
}

export default Host;
