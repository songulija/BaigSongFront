
export const usersListReducer = (state = {users: []}, action) => {
    switch(action.type){
        case 'USERS_LIST_FETCH_REQUEST':
            return {...state, 'loading': true}
        case 'USERS_LIST_FETCH_SUCCESS':
            return {...state, 'loading': false, users: action.payload}
        case 'USERS_LIST_FETCH_FAIL':
            return {...state, 'loading': false, error: action.payload}
        case 'USERS_LIST_CREATE_REQUEST':
            return { ...state, loading: true }
        case 'USERS_LIST_CREATE_SUCCESS':
            const newUsers = [...state.users, { ...action.payload }]
            return { ...state, loading: false, users: newUsers }
        case 'USERS_LIST_CREATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'USERS_LIST_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'USERS_LIST_UPDATE_SUCCESS':
            const users_clone = [...state.users]
            const updated_users = users_clone.map(x => x.id === action.payload.id?action.payload:x)
            return { ...state, loading: false, users: updated_users }
        case 'USERS_LIST_UPDATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'USERS_LIST_DELETE_REQUEST':
            return { ...state, loading: true }
        case 'USERS_LIST_DELETE_SUCCESS':
            const _users = state.users.filter(x => x.id !== action.payload);
            return { ...state, users: _users };
        case 'USERS_LIST_DELETE_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}