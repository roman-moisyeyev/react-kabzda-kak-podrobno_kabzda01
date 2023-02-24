import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed:(collapsed:boolean)=>void
}
export const Accordion = (props: AccordionPropsType) => {
return (
    <div><AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}</div>
)
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed:(collapsed:boolean)=>void
    collapsed: boolean
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onClickSetAccordionCollapsedHandler=()=>{
        props.setAccordionCollapsed(!props.collapsed)
    }
    return (
        <h3 onClick={onClickSetAccordionCollapsedHandler}>{props.title}</h3>
    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}