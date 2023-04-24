import React, {ChangeEvent, useRef, useState} from "react";

export const Input = () => {
    return (
        <>
            <div>
                <InputUncontrolled/><span>   Uncontrolled Input</span>
            </div>
            <div>
                <TrackValueOfUncontrolledInput/><span>   Track Value Of Uncontrolled Input</span>
            </div>
            <div>
                <GetValueOfUncontrolledInputByButtonPress/><span>   Get Value Of Uncontrolled Input by button press</span>
            </div>

            <div>
                <InputControlledWhithFixedValues/><span>   Controlled Input Whith Fixed Values</span>
            </div>
            <div>
                <div>
                    -----------------------------------------------------------------
                </div>
                <ControlledInput/><span>   Controlled Input</span>
            </div>
            <div>
                    -----------------------------------------------------------------
                </div>
            <div>
                <ControlledCheckbox/><span>   Controlled Checkbox</span>
            </div>
 <div>
                    -----------------------------------------------------------------
                </div>
            <div>
                <ControlledSelected/><span>   Controlled Selected</span>
            </div>

        </>
    )

}

const InputUncontrolled = () => {
    return (
        <input/>
    )
}

const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeInputChanger = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (
        <div style={{color: "red", fontSize: '20px'}}><input onChange={onChangeInputChanger}/>-{value}

        </div>

    )
}
const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickButtonChanger = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div style={{color: "rosybrown", fontSize: '20px'}}>
            <input ref={inputRef}/>
            <button onClick={onClickButtonChanger}>save</button>
            actual value:{value}

        </div>

    )
}


const InputControlledWhithFixedValues = () => {
    return (
        <input value={'it-incubator'}/>
    )
}

const ControlledInput = () => {
    const [parentValue,setParentValue]=useState('')
    const onChangeHandler= (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.value)
        console.log(parentValue)
    }

    return (
        <input value={parentValue} onChange={onChangeHandler}/>
    )
}

const ControlledCheckbox = () => {
    const [parentValue,setParentValue]=useState(true)
    const onChangeHandler= (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)
        console.log(parentValue)
    }

    return (
        <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
    )
}

const ControlledSelected = () => {
    const [parentValue,setParentValue]=useState<string|undefined>('')
    const onChangeHandler= (e:ChangeEvent<HTMLSelectElement>)=>{
        setParentValue(e.currentTarget.value)
        console.log(parentValue)
    }

    return (<>

            <select value={parentValue} onChange={onChangeHandler}>
                <option >none</option>
                <option value={"1"}>Ivano-Frankivsk</option>
                <option value={"2"}>Zhitomyr</option>
                <option value={"3"}>Kharkiv</option>
            </select>

        </>
    )
}

