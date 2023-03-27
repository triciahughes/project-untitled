import Host from "./Host";
import Participant from "./Participant";
function Groups({ groups, participants }) {
  const groupsList = groups.map((groupObj) => (
    <Host key={groupObj.id} name={groupObj.name} />
  ));

  const participantList = participants.map((partObj) => (
    <Participant
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
        <ul>{participantList}</ul>
      </div>
    </>
  );
}

export default Groups;
