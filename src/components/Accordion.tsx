import React from "react";


type AccordionPropsType={
    titleValue:string
    collapsed:boolean
}
export const Accordion = (props:AccordionPropsType) => {
    let collapsedMenu=<div><AccordionTitle title={props.titleValue}/>
        <AccordionBody/></div>
    if(!props.collapsed){
        return (<div><AccordionTitle title={props.titleValue}/></div>)
    }

    return (
        <div>{collapsedMenu}</div>
    )
}
type AccordionTitlePropsType={
    title:string
}
const AccordionTitle = (props:AccordionTitlePropsType)=>{
    return(
        <h3>{props.title}</h3>
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