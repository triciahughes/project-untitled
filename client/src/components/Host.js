function Host({ key, name }) {
  return (
    <>
      <div>
        <li key={key}>{name}</li>
      </div>
    </>
  );
}

export default Host;
