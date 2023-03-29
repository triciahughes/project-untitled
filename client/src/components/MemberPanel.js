import memberPanelImg from "../memberspanel.png";
function MemberPanel({ members }) {
  const memberNames = members.map((member) => {
    const first_name = member.first_name;
    const last_initial = member.last_name[0] + ".";
    const memberName = first_name + " " + last_initial;
    return <p key={member.id}>{memberName}</p>;
  });

  return (
    <div id="memberPanel">
      <img alt="members" src={memberPanelImg} className="memberPanel"></img>
      <p className="memberName">{memberNames}</p>
      <div className="memberPanel">
        <button className="memberPanel">Add Member</button>
        <button className="memberPanel">New Prompt</button>
        <button className="memberPanel">Choose Book</button>
      </div>
    </div>
  );
}

export default MemberPanel;
