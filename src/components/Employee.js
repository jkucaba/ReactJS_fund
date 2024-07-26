import React from 'react';

class Employee extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            firstName: "Jakub",
            lastName: "Kubica",
            email: "jkubica@gmail.com"
        }
    }

    updateEmployee(){
        this.setState({
            firstName: "Jackob",
            lastName: "Kubicki",
            email: "jkubicki@gmail.com"
        })
    } 

    render(){
        return (
            <div>
                <h1>Employee Details</h1>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.email}</p>
                <button onClick={() => this.updateEmployee()}>Update Employee</button>
            </div>
        )
    }
}

export default Employee