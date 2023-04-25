export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
type UncontrolledAccordionActionType={
    type:string
}
export type UncontrolledAccordionStateType={
   collapsed:boolean
}

export const reducer = (state: UncontrolledAccordionStateType, action: UncontrolledAccordionActionType):UncontrolledAccordionStateType => {

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // const stateCopy={...state}
            // stateCopy.collapsed=!state.collapsed
            // return stateCopy;
            return {...state,collapsed:!state.collapsed}
        default:
             throw new Error('bad action type')
    }

    return state;
}