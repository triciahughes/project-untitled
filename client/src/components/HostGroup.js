import MemberPanel from "./MemberPanel";
import BookPanel from "./BookPanel";
import DiscussionPanel from "./DiscussionPanel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function HostGroup() {
  const params = useParams();
  const groupId = params['groupId']

  const [selectedGroup, setSelectedGroup] = useState([]);
  const [members, setMembers] = useState([])
  const [featuredBook, setFeaturedBook] = useState([]);

  useEffect( () => {
    
    function setMembersandBooks(data) {
        // const memberArray = [...data.member_details]
        // setMembers(memberArray)

        const membershipArray = data['memberships']

        const updatedUserArray = membershipArray.map((member) => {
          console.log('Member being added:', member)
          const userObject = member.user
          userObject.member_id = member.id
          return userObject
  
        }) 
        setMembers(updatedUserArray)

        const book = data.books[0]
        setFeaturedBook(book)
    }

    // function checkMemberships(data) {
    //   const membershipArray = data['memberships']

    //   const updatedUserArray = membershipArray.map((member) => {
    //     console.log('Member being added:', member)
    //     const userObject = member.user
    //     userObject.member_id = member.id
    //     return userObject

    //   }) 
    //   console.log(updatedUserArray)
    // }
    
    
    fetch(`/host_group/${groupId}`)
        .then(res => res.json())
        .then(groupData => {
            setSelectedGroup(groupData);
            setMembersandBooks(groupData)
            // checkMemberships(groupData)
        })
    }, [groupId])

  return (
    <>
      <h1>{selectedGroup.name}</h1>
      <div className="hostPanels">
        <MemberPanel members={members} setMembers={setMembers}/>
        <BookPanel book={featuredBook} />
        <DiscussionPanel />
      </div>
    </>
  );
}

export default HostGroup;
