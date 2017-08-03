const initialState = {
    number: 0,
}

const INCREASENUMBER = 'INCREASENUMBER'
const DECREASENUMBER = 'DECREASENUMBER'

export const IncreaseNumber = {
    type: INCREASENUMBER,
}

export const decreaseNumber = {
    type: DECREASENUMBER,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case INCREASENUMBER:
            return {
                number: state.number + 1,
            }

        case DECREASENUMBER:
            return {
                number: state.number - 1,
            }
        default:
            return state
    }
}