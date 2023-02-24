import React, {useState} from "react";


type UncontrolledOnOffPropsType = {
    //on: boolean
}
export const UncontrolledOnOff = (props: OnOffPropsType) => {


   let [on,setOn]=useState(false)


const onStyle={
    width: '45px',
    height: '25px',
    border:'1px solid black',
    display: "inline-block",
    padding:'2px',
    backgroundColor:on?'green':"white"

}
const ofStyle={
    width: '45px',
    height: '25px',
    border:'1px solid black',
    display: "inline-block",
    marginLeft:'2px',
    padding:'2px',
    backgroundColor:on?'white':"red"

}
const indicatorStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    border:'1px solid black',
    display: "inline-block",
    marginLeft:'5px',
    backgroundColor:on? 'green': 'red'

}
return (
        <div>
            <div style={onStyle} onClick={()=>{setOn(true)}}>ON</div>
            <div style={ofStyle} onClick={()=>{setOn(false)}}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}