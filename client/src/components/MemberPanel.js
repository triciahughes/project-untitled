import memberPanelImg from "../memberspanel.png";
import NewMemberForm from "./NewMemberForm";
import NewPromptForm from "./NewPromptForm";
import { useState } from 'react';

function MemberPanel({ members, setMembers }) {

  const [addMember, setAddMember] = useState(false)
  const [addPrompt, setAddPrompt] = useState(false)

  function handleAddMemberClick() {
    setAddMember(!addMember)
    setAddPrompt(false)
  }

  function handleAddPromptClick() {
    setAddPrompt(!addPrompt)
    setAddMember(false)
  }

  function handleRemoveMemberClick(id) {
    fetch(`/member/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(message => console.log(message))
  }

  const memberNames = members.map((member) => {
    const first_name = member.first_name;
    const last_initial = member.last_name[0].toUpperCase() + ".";
    const memberName = first_name + " " + last_initial;
    return <p key={member.id}>{memberName}  <button onClick={() => handleRemoveMemberClick(member.member_id)}>x</button></p>;
  });

  return (
    <div id="memberPanel">
      <img alt="members" src={memberPanelImg} className="memberPanel"></img>
      <p className="memberName">{memberNames}</p>
      <div className="memberPanel">
        <button className="memberPanel" onClick={handleAddMemberClick}>{ (addMember) ? "Close" : "Add Member" }</button>
        <button className="memberPanel"onClick={handleAddPromptClick}>{ (addPrompt) ? "Close" : "New Prompt" }</button>
        <button className="memberPanel">Choose Book</button>
        { addMember ? <NewMemberForm members={members} setMembers={setMembers}/> : null}
        { addPrompt ? <NewPromptForm /> : null}
      </div>
    </div>
  );
}

export default MemberPanel;
