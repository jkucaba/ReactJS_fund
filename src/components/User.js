import { useState } from "react"

const User  = () => {
    
    // const [firstName, setFirstName] = useState('Jakubson')
    // const [lastName, setLastName] = useState('Kubica')
    // const [email, setEmail] = useState('jkubica@gmail.com')

    const [user, setUser] = useState({
        firstName: 'Jakub',
        lastName: 'Kubica',
        email: 'jkubica@gamilc.com'
    })

    // function updateUser(){
    //     setFirstName('Nati')
    //     setLastName('Miki')
    //     setEmail('nmiki@gmail.com')
    // }
    function updateUser(){
        setUser({firstName: "Nati", lastName: "Miki", email: "nmiki@gmail.com"})
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>

            <button onClick={updateUser}>Update User</button>
        </div>
    )


}


export default User