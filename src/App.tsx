import React from 'react';
import './App.css';



function App() {

    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>

        </div>
    );
}

export const AppTitle = ()=>{
    return(
        <>this is app component</>
    )
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
    console.log('star rendered')
    return(
        <div>star</div>
    )
}

export const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>


        </div>
    )
}

const AccordionTitle = ()=>{
    return(
        <h3>MENU</h3>
    )
}
const AccordionBody = ()=>{
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default App;
