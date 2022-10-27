let initialState = '0'

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'PUSH':
            if (state === '0' && action.payload !== '.')
                return action.payload;
            else
                return "".concat(state, action.payload);
        case 'EVALUATE':
            return eval(state);
        case 'RESET':
            return '0'
        default:
            return state;
    }
}

export default reducer;