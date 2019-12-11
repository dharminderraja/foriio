export default (state = null, action) => {
    switch (action.type) {
        case 'FETCH_WORK':
            return action.payload;
        case 'HANDLE_ERROR':
            return action.payload;
        default:
            return state;
    }
}