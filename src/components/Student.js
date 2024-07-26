const Student = ({firstName, lastName, email}) => {
    return (
        <div>
            <h1>Student details</h1>
            <p>Student first name: {firstName}</p>
            <p>Student last name: {lastName}</p>
            <p>Student email address: {email}</p>
        
        </div>
    )
} 

export default Student