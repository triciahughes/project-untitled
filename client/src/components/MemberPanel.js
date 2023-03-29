function MemberPanel({ members }) {

    const memberNames = members.map((member) => {
        const first_name = member.first_name
        const last_initial = member.last_name[0] + "."
        const memberName = first_name + " " + last_initial
        return (
            <li key={member.id}>{memberName}</li>
        )
    })
    
    return (
        <div>
            <h2>Members</h2>
            <ul>{memberNames}</ul>
            <button>Add Member</button>
            <button>New Prompt</button>
            <button>Choose Book</button>
        </div>
    
    )

}

export default MemberPanel