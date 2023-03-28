import Host from "./Host";
import Member from "./Member";
import { useState, useEffect } from "react";

function Groups({ hostGroups, memberGroups }) {
  return (
    <>
      <div>
        <h1>Here's groups you host:</h1>
        <Host groups={hostGroups} />
      </div>
      <div>
        <h1>Here's groups you're a member of:</h1>
        <Member groups={memberGroups} />
      </div>
    </>
  );
}

export default Groups;
