import React from 'react';
import './App.css';



function App() {

    return (
        <div className="App">
            this is app component
            <Rating/>
            <Accordion/>

        </div>
    );
}

export const Rating = () => {

    return (
        <div>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
           <Star/>
        </div>
    )
}

export const Star =()=>{
    return(
        <div>star</div>
    )
}

export const Accordion = () => {
    return (
        <div>
            <h3>MENU</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
