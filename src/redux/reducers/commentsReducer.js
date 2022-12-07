
export const commentsListReducer = (state = {comments: []}, action) => {
    switch(action.type){
        case 'COMMENTS_LIST_FETCH_REQUEST':
            return {...state, 'loading': true}
        case 'COMMENTS_LIST_FETCH_SUCCESS':
            return {...state, 'loading': false, comments: action.payload}
        case 'COMMENTS_LIST_FETCH_FAIL':
            return {...state, 'loading': false, error: action.payload}
        case 'COMMENTS_LIST_CREATE_REQUEST':
            return { ...state, loading: true }
        case 'COMMENTS_LIST_CREATE_SUCCESS':
            const newComments = [...state.comments, { ...action.payload }]
            return { ...state, loading: false, comments: newComments }
        case 'COMMENTS_LIST_CREATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'COMMENTS_LIST_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'COMMENTS_LIST_UPDATE_SUCCESS':
            const comments_clone = [...state.comments]
            const updated_comments = comments_clone.map(x => x.id === action.payload.id?action.payload:x)
            return { ...state, loading: false, comments: updated_comments }
        case 'COMMENTS_LIST_UPDATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'COMMENTS_LIST_DELETE_REQUEST':
            return { ...state, loading: true }
        case 'COMMENTS_LIST_DELETE_SUCCESS':
            const _comments = state.comments.filter(x => x.id !== action.payload);
            return { ...state, comments: _comments };
        case 'COMMENTS_LIST_DELETE_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}