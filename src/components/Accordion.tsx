import React from "react";
type ItemType={
    title:string
    value:any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed:()=>void
    onClick:(value:any)=>void
    items:Array<ItemType>
}
export const Accordion = (props: AccordionPropsType) => {
return (
    <div><AccordionTitle title={props.titleValue} setAccordionCollapsed={props.setAccordionCollapsed} />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}</div>
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

type AccordionBodyPropsType = {
    onClick:(value:any)=>void
    items:Array<ItemType>
}


const AccordionBody = (props:AccordionBodyPropsType) => {

    return (
        <ul>
            {props.items.map((i,index)=><li  key={index} onClick={()=>{props.onClick(i.value)}}>{i.title}</li>)}
        </ul>
    )
}