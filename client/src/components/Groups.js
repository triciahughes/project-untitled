import Host from "./Host";
import Member from "./Member";
import { useState, useEffect } from "react";

function Groups({ user }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(`/host/9`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  console.log(groups);

  const groupsList = groups.map((groupObj) => (
    <Host key={groupObj.id} name={groupObj.name} />
  ));

  // const memberList = members.map((partObj) => (
  //   <Member
  //     key={partObj.id}
  //     first_name={partObj.first_name}
  //     last_name={partObj.last_name}
  //   />
  // ));
  return (
    <>
      <div>
        <h1>Here's groups you host:</h1>
        <ul>{groupsList}</ul>
      </div>
      <div>
        <h1>Here's groups you're a member of:</h1>
        <ul>memberList</ul>
      </div>
    </>
  );
}

export default Groups;
