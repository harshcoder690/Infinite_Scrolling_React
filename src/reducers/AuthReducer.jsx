export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AUTH_DETAILS':
            console.log(action)
            return {
                ...state,
                IsAuthenticated : action.IsAuthenticated
            }
        default:
            return state;
    }
}