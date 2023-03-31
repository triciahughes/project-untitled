import Host from "./Host";
import hostimg from "../host.png";
import memberimg from "../member.png";

import Member from "./Member";

function Groups({ hostGroups, memberGroups }) {
  return (
    <>
      <div className="columns">
        <section className="hostGroups">
          <img alt="Groups You Host" src={hostimg} className="hostimg"></img>
          <div>
            <Host groups={hostGroups} />
          </div>
        </section>
        <section className="memberGroups">
          <img alt="Groups You Participate In" src={memberimg} className="memberimg"></img>
          <div>
            <Member groups={memberGroups} />
          </div>
        </section>
      </div>
    </>
  );
}
export default Groups;
