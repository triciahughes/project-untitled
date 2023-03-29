import MemberPanel from "./MemberPanel";
import { useState, useEffect } from "react";

function HostGroup() {

    const [selectedGroup, setSelectedGroup] = useState({})

    useEffect(() => {

        function fetchDetails() {
            const groupDetails = {
                "host_id": 15,
                "id": 11,
                "member_details": [
                {
                "email": "hughes.a.tricia@gmail.com",
                "first_name": "Tricia",
                "id": 14,
                "last_name": "Hughes"
                }
                ],
                "name": "Book Bees"
                }

            setSelectedGroup(groupDetails)
        }
        fetchDetails()

    }, [])

    console.log(selectedGroup)

    
    return(
    <>
    <h1>Host Group Rendering!</h1>
    <MemberPanel members={selectedGroup.member_details}/>
    </>
    ) 
}

export default HostGroup