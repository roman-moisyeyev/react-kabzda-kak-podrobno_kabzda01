import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {ControlledOnOff} from "./components/ControlledOnOff";
import {Input} from "./components/Input";
import {CustomSelect} from "./components/CustomSelect";


function App() {

    let [ratingValue,setRatingValue] = useState<RatingValueType>(0)

    let[accordionCollapsed, setAccordionCollapsed]= useState<boolean>(true)


    let [swithOn,setSwitchOn]=useState<boolean>(false)

    let [on,setOn]=useState<boolean>(false)

    const [value,setValue]=useState('2')


    return (
        <div className="App">
           {/* <PageTitle titleValue={'this is app component'}/>*/}
           {/* <PageTitle titleValue={'my friends'}/>*/}
           {/* /!*<Accordion titleValue={'MENU'} collapsed={true}/>*!/*/}
           {/* /!*<Accordion titleValue={'USERS'} collapsed={true}/>*!/*/}
            <Accordion
                titleValue={'USERS'}
                collapsed={accordionCollapsed}
                setAccordionCollapsed={()=>{setAccordionCollapsed(!accordionCollapsed)}}
             items={[
                 {title:'Roman',value:1},
                 {title:'Sergey',value:2},
                 {title:'Andrey',value:3},
                 {title:'John',value:4},
                 {title:'Elle',value:5},
                 {title:'Cristofer',value:6}
             ]
             } onClick={(id)=>{
                console.log(`user with id=${id} was clicked`)}} />
            <div>
                ---------------------------------------------------
            </div>

            <CustomSelect items={[{title:'Kharkiv',value:'1'},{title:'Zhytomyr',value:'2'},{title:'Kyiv',value:'3'}]}
                          onChange={setValue}
                          value={value}/>


           {/* <Accordion*/}
           {/*     titleValue={'menu'}*/}
           {/*     collapsed={accordionCollapsed}*/}
           {/*     setAccordionCollapsed={()=>{setAccordionCollapsed(!accordionCollapsed)}}*/}
           {/* />*/}



           {/* <ControlledOnOff on={on} setOn={setOn}/>*/}

           {/* <Rating value={ratingValue} onClick={setRatingValue}/>*/}

           {/*<ControlledOnOff on={on} setOn={setOn}/>*/}

           {/* <UncontrolledOnOff callBack={setSwitchOn}  />*/}
           {/*<div>{swithOn.toString()}</div>*/}



           {/* <UncontrolledAccordion titleValue={'What to drink'} />*/}
           {/* <UncontrolledAccordion titleValue={'What to learn'} />*/}

           {/* <UncontrolledRating />*/}
           {/* <UncontrolledRating />*/}

{/*<Input/>*/}
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
