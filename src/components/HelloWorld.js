import React from 'react'

const HelloWorld = () => {

    // const myElement = <h1>Hello World!</h1>
    function handleClick(){
        alert("Buton clicked");
    }
    
    const name = "Jakub"
    const addition = 1 + 2;

    return (<div>
        <h1 className='title'>Title</h1>
        <h2>Sub title</h2>
        <p>paragraph</p>
        <p>{name}</p>
        <p>{addition}</p>
        <button onClick={handleClick}>Click</button>
    </div>)
}

export default HelloWorld