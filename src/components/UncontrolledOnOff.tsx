import React, {useState} from "react";


type UncontrolledOnOffPropsType = {
    callBack:(on:boolean)=>void
}
export const UncontrolledOnOff = (props:UncontrolledOnOffPropsType) => {


   let [on,setOn]=useState<boolean>(false)


const onStyle={
    width: '45px',
    height: '25px',
    border:'1px solid black',
    display: "inline-block",
    padding:'2px',
    backgroundColor:on?'green':"white"

}
const offStyle={
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
const onClicked =()=>{
        setOn(true)
        props.callBack(true)
   }

   const offClicked = ()=>{
       setOn(false)
       props.callBack(false)
   }

return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}