import MemberOnlyPanel from "./MemberOnlyPanel";
import BookPanel from "./BookPanel";
import DiscussionPanel from "./DiscussionPanel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MemberGroup() {
  const params = useParams();
  const groupId = params["groupId"];

  const [selectedGroup, setSelectedGroup] = useState([]);
  const [members, setMembers] = useState([]);
  const [featuredBook, setFeaturedBook] = useState([]);

  useEffect(() => {
    function setMembersandBooks(data) {
      const membershipArray = data["memberships"];

      const updatedUserArray = membershipArray.map((member) => {
        console.log("Member being added:", member);
        const userObject = member.user;
        userObject.member_id = member.id;
        return userObject;
      });
      setMembers(updatedUserArray);

      const book = data.books[0];
      setFeaturedBook(book);
    }

    fetch(`/host_group/${groupId}`)
      .then((res) => res.json())
      .then((groupData) => {
        setSelectedGroup(groupData);
        setMembersandBooks(groupData);
        // checkMemberships(groupData)
      });
  }, [groupId]);

  return (
    <>
      <h1>{selectedGroup.name}</h1>
      <div className="hostPanels">
        <MemberOnlyPanel members={members} />
        <BookPanel book={featuredBook} />
        <DiscussionPanel book={featuredBook} />
      </div>
    </>
  );
}

export default MemberGroup;
