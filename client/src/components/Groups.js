import Host from "./Host";
import hostimg from "../host.png";
import memberimg from "../member.png";

import Member from "./Member";

function Groups({ hostGroups, memberGroups }) {
  return (
    <>
      <img alt="Groups You Host" src={hostimg} className="hostimg"></img>
      <div>
        <Host groups={hostGroups} />
      </div>
      <img alt="Groups You Participate In" src={memberimg} className="memberimg"></img>
      <div>
        <Member groups={memberGroups} />
      </div>
    </>
  );
}
export default Groups;
