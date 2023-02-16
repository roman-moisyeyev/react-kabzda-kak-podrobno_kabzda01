import React from "react";


type OnOffPropsType = {
    on: boolean
}
export const OnOff = (props: OnOffPropsType) => {

const onStyle={
    width: '45px',
    height: '25px',
    border:'1px solid black',
    display: "inline-block",
    padding:'2px',
    backgroundColor:props.on?'green':"white"

}
const ofStyle={
    width: '45px',
    height: '25px',
    border:'1px solid black',
    display: "inline-block",
    marginLeft:'2px',
    padding:'2px',
    backgroundColor:props.on?'white':"red"

}
const indicatorStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    border:'1px solid black',
    display: "inline-block",
    marginLeft:'5px',
    backgroundColor:props.on? 'green': 'red'

}
return (
        <div>
            <div style={onStyle}>ON</div>
            <div style={ofStyle}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}