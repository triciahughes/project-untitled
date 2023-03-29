import MemberPanel from "./MemberPanel";
import BookPanel from "./BookPanel";
import DiscussionPanel from "./DiscussionPanel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HostGroup() {
  const params = useParams();
  console.log(params)
  const groupId = params['groupId']

  const [selectedGroup, setSelectedGroup] = useState([]);
  const [members, setMembers] = useState([])
  const [featuredBook, setFeaturedBook] = useState([]);

  useEffect( () => {
    
    function setMembersandBooks(data) {
        const memberArray = [...data.member_details]
        setMembers(memberArray)

        const book = data.books[0]
        setFeaturedBook(book)
    }
    
    
    fetch(`/host_group/${groupId}`)
        .then(res => res.json())
        .then(groupData => {
            setSelectedGroup(groupData);
            setMembersandBooks(groupData)
        })
    }, [groupId])

  return (
    <>
      <h1>{selectedGroup.name}</h1>
      <div className="hostPanels">
        <MemberPanel members={members} />
        <BookPanel book={featuredBook} />
        <DiscussionPanel />
      </div>
    </>
  );
}

export default HostGroup;
