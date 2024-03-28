
const initialState = {
    val: '',
    todo: []
}

export function todoReducer(state = initialState, action) {
    switch(action.type) {
        case 'WRITETODO':
            return {
                val: action.nextValue,
                todo: []
            }


        case 'SAVETODO':
            return {
                val: '',
                todo: [
                    ...state['todo'],
                    state.val
                ]
            }

        default:
            return state
    }
}