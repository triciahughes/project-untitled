import Host from "./Host";
import hostimg from "../host.png";
import memberimg from "../member.png";

import Member from "./Member";

function Groups({ hostGroups, memberGroups }) {
  return (
    <>
      <div className="columns">
        <section className="hostGroups">
          <img alt="host symbol" src={hostimg} className="hostimg"></img>
          <div>
            <Host groups={hostGroups} />
          </div>
        </section>
        <section className="memberGroups">
          <img alt="host symbol" src={memberimg} className="memberimg"></img>
          <div>
            <Member groups={memberGroups} />
          </div>
        </section>
      </div>
    </>
  );
}
export default Groups;
