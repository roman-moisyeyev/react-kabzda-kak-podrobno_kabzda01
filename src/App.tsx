import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {ControlledOnOff} from "./components/ControlledOnOff";


function App() {

    let [ratingValue,setRatingValue] = useState<RatingValueType>(0)

    let[accordionCollapsed, setAccordionCollapsed]= useState<boolean>(true)


    let [on,setOn]=useState(false)

    return (
        <div className="App">
            {/*<PageTitle titleValue={'this is app component'}/>*/}
            {/*<PageTitle titleValue={'my friends'}/>*/}
            {/*<Accordion titleValue={'MENU'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'USERS'} collapsed={true}/>*/}
            <Accordion
                titleValue={'Hobbies'}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={setAccordionCollapsed}
            />

            {/*<UncontrolledOnOff />*/}
            {/*<UncontrolledOnOff />*/}


            <ControlledOnOff on={on} setOn={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <ControlledOnOff on={on} setOn={setOn}/>



            {/*<UncontrolledAccordion titleValue={'What to drink'} />*/}
            {/*<UncontrolledAccordion titleValue={'What to learn'} />*/}

            {/*<UncontrolledRating />*/}
            {/*<UncontrolledRating />*/}


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
