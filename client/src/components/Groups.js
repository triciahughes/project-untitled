import Host from "./Host";
import hostimg from "../host.png";
import memberimg from "../member.png";

import Member from "./Member";
import { useState, useEffect } from "react";

function Groups({ groups }) {
  return (
    <>
      <img alt="host symbol" src={hostimg} className="hostimg"></img>
      <div>
        <Host groups={groups} />
      </div>
      <div>
        <img alt="host symbol" src={memberimg} className="memberimg"></img>
        <ul>memberList</ul>
      </div>
    </>
  );
}

export default Groups;
