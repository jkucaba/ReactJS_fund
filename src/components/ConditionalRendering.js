import { useState } from "react"

const ConditionalRendering = () => {

    let isLogged = false;

    const [isLoggedIn, setIsLoggedIn] = useState(false)


    let message;
    if(isLoggedIn){
        message =  <p>Welcome, User</p>
    } else {
        message =  <p>Please login!</p>
    }

    function handleLogin(){
        isLogged = !isLogged
        setIsLoggedIn(isLogged)
    }

    return (
        <div>
            {
                isLoggedIn ? <p>Welcome, User</p> : <p>Please login!</p>
            }

            <br/>
            {
                isLoggedIn ? <button onClick={handleLogin}>Logout</button> :  <button onClick={handleLogin}>Login</button>
            }
            
        </div>
    )

} 

export default ConditionalRendering