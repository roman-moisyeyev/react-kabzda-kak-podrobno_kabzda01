import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOff";


function App() {


    return (
        <div className="App">
            <PageTitle titleValue={'this is app component'}/>
            <PageTitle titleValue={'my friends'}/>
            <Accordion titleValue={'MENU'} collapsed={true}/>
            <Accordion titleValue={'USERS'} collapsed={true}/>
            <Accordion titleValue={'Hobbies'} collapsed={false}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


type PageTitlePropsType = {
    titleValue: string

}
export const PageTitle = (props: PageTitlePropsType) => {
    return (
        <h2>{props.titleValue}</h2>
    )
}


export default App;
