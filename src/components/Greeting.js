import React from "react"

class Greeting extends React.Component{

    render(){ // props is automatically accessible
        return <h1>Welcome, {this.props.name}</h1>
    }
}

export default Greeting