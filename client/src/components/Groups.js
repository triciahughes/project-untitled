import Host from "./Host";
import Member from "./Member";
import { useState, useEffect } from "react";

function Groups({ groups }) {
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
