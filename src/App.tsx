import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";


function App() {

    return (
        <div className="App">
            <PageTitle value={'this is app component'}/>
            <PageTitle value={'my friends'}/>

            <Accordion/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}

export const PageTitle = (props:any)=>{
    return(
        <h3>{props.value}</h3>
    )
}



export default App;
