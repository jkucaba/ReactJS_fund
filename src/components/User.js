import { useState } from "react"

const User  = () => {
    
    const [firstName, setFirstName] = useState('Jakubson')
    const [lastName, setLastName] = useState('Kubica')
    const [email, setEmail] = useState('jkubica@gmail.com')

    function updateUser(){
        setFirstName('Nati')
        setLastName('Miki')
        setEmail('nmiki@gmail.com')
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>

            <button onClick={updateUser}>Update User</button>
        </div>
    )


}


export default User