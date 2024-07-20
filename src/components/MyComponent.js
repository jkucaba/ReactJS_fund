export function FirstComponent(){ // named export
    return <h1>First Component</h1>
}

// export default FirstComponent default export - tylko jak jeden komponent w pliku

export function SecondComponent(){ // named export
    return <h1>Second Component</h1>
}


function MyComponent(){
    return <h1>My Component</h1>
}

export default MyComponent