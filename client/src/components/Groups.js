import Host from "./Host";
import Member from "./Member";
function Groups({ groups, members }) {
  const groupsList = groups.map((groupObj) => (
    <Host key={groupObj.id} name={groupObj.name} />
  ));

  const memberList = members.map((partObj) => (
    <Member
      key={partObj.id}
      first_name={partObj.first_name}
      last_name={partObj.last_name}
    />
  ));
  return (
    <>
      <div>
        <h1>Here's groups you host:</h1>
        <li>List of group names here</li>
        <ul>{groupsList}</ul>
      </div>
      <div>
        <h1>Here's groups you're a member of:</h1>
        <ul>{memberList}</ul>
      </div>
    </>
  );
}

export default Groups;
