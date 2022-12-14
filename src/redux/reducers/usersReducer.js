//creating reducer. first paraemeter is how our state will look like. what is initial state of usersReducer
//reducer will take care of all Actions related to userReducer. //and second is action that was dispatched
//our initial state will just be emty object
export const usersReducer = (state = { currentUser: null, userId: 0, email: null }, action) => {
    switch (action.type) {//switching action type/name that was dispatched
        //depending on action type/name we'll return different state
        case 'USER_LOGIN_REQUEST'://when action name is USER_LOGIN_REQUEST, return loading true
            return { loading: true }
        case 'USER_LOGIN_SUCCESS'://if success loading false, and set userInfo to action.payload which is user data from dispatched action set as payload
            return { ...state, loading: false, currentUser: action.payload.token, user: null }//if success action will have user data on it as payload
        case 'USER_LOGIN_FAIL':
            return { loading: false, error: action.payload }//if fail dispatched action will have error data on it. as payload
        case 'USER_LOGOUT':
            return { ...state, currentUser: null, user: null }//if dispatched action type/name is USER_LOGOUT return empty object
        case 'USER_REGISTER_REQUEST':
            return { ...state, loading: true };
        case 'USER_REGISTER_SUCCESS':
            return { ...state, loading: false, 'register': action.payload };
        case 'USER_REGISTER_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state
    }
}

export const userInfoReducer = (state = { role: null, info: {} }, action) => {
    switch (action.type) {//switching action type/name that was dispatched
        case 'USER_DATA_SUCCESS':
            return { ...state, loading: false, 'role': action.payload };
        case 'USER_DATA_REMOVE':
            return { ...state, loading: false, 'role': null }
        case 'USER_DATA_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'USER_INFO_FETCH_REQUEST':
            return { ...state, loading: false, info: null };
        case 'USER_INFO_FETCH_SUCCESS':
            return { ...state, loading: false, info: action.payload }
        case 'USER_INFO_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        case 'USER_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'USER_UPDATE_SUCCESS':
            return { ...state, loading: true, info: { ...state.info, email: action.payload.email, firstName: action.payload.firstName, lastName: action.payload.lastName, phoneNumber: action.payload.phoneNumber} }
        case 'USER_UPDATE_FAIL':
            return { ...state, loading: true }
        default:
            return state
    }
}
