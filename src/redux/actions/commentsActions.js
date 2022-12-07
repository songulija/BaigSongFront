import realestateAPI from './realestateAPI';
export const getComments = () => async(dispatch,getState) =>{
    try {
        dispatch({
            type: 'COMMENTS_LIST_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get('/api/Comments',{ headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: 'COMMENTS_LIST_FETCH_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'COMMENTS_LIST_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const createComment = (postObject) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'COMMENTS_LIST_CREATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.post(`/api/Comments`, postObject, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'COMMENTS_LIST_CREATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'COMMENTS_LIST_CREATE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const updateComment = (postObj, reducerObj) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'COMMENTS_LIST_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await realestateAPI.put(`/api/Comments/${reducerObj.id}`, postObj, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'COMMENTS_LIST_UPDATE_SUCCESS',
            payload: reducerObj
        });
    } catch (error) {
        dispatch({
            type: 'COMMENTS_LIST_UPDATE_SUCCESS',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Delete
//to delete order material
export const deleteComment = (id) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'COMMENTS_LIST_DELETE_REQUEST'
        })
        const token = getState().usersReducer.currentUser;
        await realestateAPI.delete(`/api/Comments/${id}`,{headers: {Authorization: `Bearer ${token}`}})
        dispatch({
            type: 'COMMENTS_LIST_DELETE_SUCCESS',
            payload: id
        })
    }catch (error) {
        dispatch({
            type: 'COMMENTS_LIST_DELETE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}