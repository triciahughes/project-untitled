import memberPanelImg from "../memberspanel.png";
import NewMemberForm from "./NewMemberForm";
import NewPromptForm from "./NewPromptForm";
import NewBookForm from "./NewBookForm";
import { useState } from "react";

function MemberPanel({ members, setMembers, featuredBook }) {
  const [addMember, setAddMember] = useState(false);
  const [addPrompt, setAddPrompt] = useState(false);
  const [chooseBook, setChooseBook] = useState(false);

  const prompts = featuredBook.prompts;
  // console.log(prompts);

  // This must stay here
  const [promptsArray, setPromptsArray] = useState([prompts]);

  function handleAddMemberClick() {
    setAddMember(!addMember);
    setAddPrompt(false);
    setChooseBook(false);
  }

  function handleAddPromptClick() {
    setAddPrompt(!addPrompt);
    setAddMember(false);
    setChooseBook(false);
  }
  function handleChooseBookClick() {
    setChooseBook(!chooseBook);
    setAddMember(false);
    setAddPrompt(false);
  }

  function handleRemoveMemberClick(id) {
    fetch(`/member/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedMembers = members.filter(
          (member) => member.member_id !== id
        );
        setMembers(updatedMembers);
      });
  }

  const memberNames = members.map((member) => {
    const first_name = member.first_name;
    const last_initial = member.last_name[0].toUpperCase() + ".";
    const memberName = first_name + " " + last_initial;
    return (
      <div key={member.id}>
        {memberName}{" "}
        <button onClick={() => handleRemoveMemberClick(member.member_id)}>
          x
        </button>
      </div>
    );
  });

  return (
    <div id="memberPanel">
      <img alt="members" src={memberPanelImg} className="memberPanel"></img>
      <p className="memberName">{memberNames}</p>
      <div className="memberPanel">
        <button className="memberPanel" onClick={handleAddMemberClick}>
          {addMember ? "Close" : "Add Member"}
        </button>
        <button className="memberPanel" onClick={handleAddPromptClick}>
          {addPrompt ? "Close" : "New Prompt"}
        </button>
        <button className="memberPanel" onClick={handleChooseBookClick}>
          {chooseBook ? "Close" : "Choose Book"}
        </button>
        {addMember ? (
          <NewMemberForm members={members} setMembers={setMembers} />
        ) : null}
        {addPrompt ? (
          <NewPromptForm
            featuredBook={featuredBook}
            promptsArray={promptsArray}
            setPromptsArray={setPromptsArray}
          />
        ) : null}
        {chooseBook ? <NewBookForm featuredBook={featuredBook} /> : null}
      </div>
    </div>
  );
}

export default MemberPanel;
