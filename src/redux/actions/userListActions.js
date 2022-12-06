import realestateAPI from './realestateAPI';
export const getUsers = () => async(dispatch,getState) =>{
    try {
        dispatch({
            type: 'USERS_LIST_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get('/api/Accounts',{ headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: 'USERS_LIST_FETCH_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'USERS_LIST_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const createUser = (postObject) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USERS_LIST_CREATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.post(`/api/Accounts`, postObject, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'USERS_LIST_CREATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'USERS_LIST_CREATE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const updateUser = (postObj, reducerObj) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'USERS_LIST_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await realestateAPI.put(`/api/Accounts/${reducerObj.id}`, postObj, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'USERS_LIST_UPDATE_SUCCESS',
            payload: reducerObj
        });
    } catch (error) {
        dispatch({
            type: 'USERS_LIST_UPDATE_SUCCESS',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Delete
//to delete order material
export const deleteUser = (id) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'USERS_LIST_DELETE_REQUEST'
        })
        const token = getState().usersReducer.currentUser;
        await realestateAPI.delete(`/api/Accounts/${id}`,{headers: {Authorization: `Bearer ${token}`}})
        dispatch({
            type: 'USERS_LIST_DELETE_SUCCESS',
            payload: id
        })
    }catch (error) {
        dispatch({
            type: 'USERS_LIST_DELETE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}