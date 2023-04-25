import {reducer, TOGGLE_COLLAPSED, UncontrolledAccordionStateType} from "./uncontrolledAccordion-reducer";

test('collapsed should be true', () => {

//data
const state:UncontrolledAccordionStateType={
    collapsed:false
}

//action
const newState= reducer(state,{type:TOGGLE_COLLAPSED})

//expectation
expect(newState.collapsed).toBe(true)

})
test('collapsed should be false', () => {

//data
    const state:UncontrolledAccordionStateType={
        collapsed:true
    }

//action
    const newState= reducer(state,{type:TOGGLE_COLLAPSED})

//expectation
    expect(newState.collapsed).toBe(false)

})
test('collapsed should throw error because action type is incorrect', () => {

//data
    const state:UncontrolledAccordionStateType={
        collapsed:true
    }

//action
   reducer(state,{type:TOGGLE_COLLAPSED})

//expectation
    expect(()=>{reducer(state,{type:"FAKETYPE"})}).toThrowError()

})