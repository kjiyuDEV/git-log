const initialState = {
    id: '',
    email: '',
    token: '',
    isLogin: false,
};

export const authReducer = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case 'gg':
            return Object.assign({}, state, {
                ...state,
                isLogin: true,
            });
        default:
            return state;
    }
};
