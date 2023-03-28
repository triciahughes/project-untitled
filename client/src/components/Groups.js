import Host from "./Host";
import hostimg from "../host.png";
import memberimg from "../member.png";

import Member from "./Member";
import { useState, useEffect } from "react";

function Groups({ hostGroups, memberGroups }) {
  return (
    <>
      <img alt="host symbol" src={hostimg} className="hostimg"></img>
      <div>
        <Host groups={hostGroups} />
      </div>
      <img alt="host symbol" src={memberimg} className="memberimg"></img>
      <div>
        <Member groups={memberGroups} />
      </div>
    </>
  );
}
export default Groups;
