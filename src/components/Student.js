const Student = (props) => {
    return (
        <div>
            <h1>Student details</h1>
            <p>Student first name: {props.firstName}</p>
            <p>Student last name: {props.lastName}</p>
            <p>Student email address: {props.email}</p>
        </div>
    )
} 

export default Student