const initState = {
    Loading:false
}
type ActionType=loadingActionType
type StateType={
    Loading:boolean
}

export const loadingReducer = (state:StateType = initState, action: ActionType): StateType=> { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, Loading:action.loading}
        }
        default:
            return state
    }
}

type loadingActionType=ReturnType<typeof loadingAC>

export const loadingAC = (loading:boolean) => {
    return {
        type: 'LOADING',
        loading
    } as const
} // fix any