import {UserType} from "../HW8";

type actionType={
    type:string
    payload:string|number
}

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            return action.payload==='up'? [...state.sort((a,b)=>a.name.localeCompare(b.name))]
                : state
        }
        case 'sortDown':{
            return action.payload==='down'? [...state.sort((a,b)=>b.name.localeCompare(a.name))]: state
        }
        case 'check': {
            // need to fix
            return state.filter(f=>f.age>=18)
        }
        default: return state
    }
}