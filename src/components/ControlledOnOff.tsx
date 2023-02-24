import React, {useState} from "react";


type ControlledOnOffPropsType = {
    on: boolean
    setOn:(on: boolean)=>void
}
export const ControlledOnOff = (props: ControlledOnOffPropsType) => {

    const onStyle={
        width: '45px',
        height: '25px',
        border:'1px solid black',
        display: "inline-block",
        padding:'2px',
        backgroundColor:props.on?'green':"white"
        //backgroundColor:"white"

    }
    const ofStyle={
        width: '45px',
        height: '25px',
        border:'1px solid black',
        display: "inline-block",
        marginLeft:'2px',
        padding:'2px',
        backgroundColor:props.on?'white':"red"
        //backgroundColor:"red"

    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border:'1px solid black',
        display: "inline-block",
        marginLeft:'5px',
        backgroundColor:props.on? 'green': 'red'
        //backgroundColor:'red'

    }


    const onClickHandler = ()=>{
        props.setOn(!props.on)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>ON</div>
            <div style={ofStyle} onClick={onClickHandler}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}