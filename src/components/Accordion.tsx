import React from "react";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed:()=>void
}
export const Accordion = (props: AccordionPropsType) => {
return (
    <div><AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} />
        {!props.collapsed && <AccordionBody/>}</div>
)
}
type AccordionTitlePropsType = {
    title: string
    setAccordionCollapsed:()=>void

}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    const onClickSetAccordionCollapsedHandler=()=>{
        props.setAccordionCollapsed()
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