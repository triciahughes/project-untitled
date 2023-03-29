import MemberPanel from "./MemberPanel";
import BookPanel from "./BookPanel";
import DiscussionPanel from "./DiscussionPanel";
import { useState} from "react";

function HostGroup() {

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

    const bookDetails = {
        id: 6,
        group_id: 12,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51+qSD6UwfL._SX312_BO1,204,203,200_.jpg",
        publication_year: 1979,
        genre: "Science Fiction",
        votes: 5,
        featured: true
    }

    const [selectedGroup, setSelectedGroup] = useState(groupDetails)
    const [featuredBook, setFeaturedBook] = useState(bookDetails)

    return(
    <>
    <h1>{selectedGroup.name}</h1>
    <MemberPanel members={selectedGroup.member_details}/>
    <BookPanel book={featuredBook}/>
    <DiscussionPanel />
    </>
    ) 
}

export default HostGroup