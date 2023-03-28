import Host from "./Host";
import Member from "./Member";
import { useState, useEffect } from "react";

function Groups({ groups }) {
  // const [groups, setGroups] = useState([]);

  // const userId = user.id;

  // useEffect(() => {
  //   fetch(`/host/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => setGroups(data), console.log(`inside fetch: ${groups}`));
  // }, []);

  // console.dir(groups);

  // const groupMap = groups.map((element) => {
  //   return element.id && element.name;
  // });

  // console.log(groupMap);

  // const groupForEach = groupMap.forEach((element) => {
  //   <Host key={element.id} name={element} />;
  // });

  return (
    <>
      <div>
        <h1>Here's groups you host:</h1>
        <Host groups={groups} />
      </div>
      <div>
        <h1>Here's groups you're a member of:</h1>
        <ul>memberList</ul>
      </div>
    </>
  );
}

export default Groups;
