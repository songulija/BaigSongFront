import realestateAPI from './realestateAPI';
export const getCountries = () => async(dispatch,getState) =>{
    try {
        dispatch({
            type: 'COUNTRIES_LIST_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get('/api/Countries',{ headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: 'COUNTRIES_LIST_FETCH_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'COUNTRIES_LIST_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const createCountry = (postObject) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'COUNTRIES_LIST_CREATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.post(`/api/Countries`, postObject, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'COUNTRIES_LIST_CREATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'COUNTRIES_LIST_CREATE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const updateCountry = (postObj, reducerObj) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'COUNTRIES_LIST_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await realestateAPI.put(`/api/Countries/${reducerObj.id}`, postObj, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'COUNTRIES_LIST_UPDATE_SUCCESS',
            payload: reducerObj
        });
    } catch (error) {
        dispatch({
            type: 'COUNTRIES_LIST_UPDATE_SUCCESS',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Delete
//to delete order material
export const deleteCountry = (id) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'COUNTRIES_LIST_DELETE_REQUEST'
        })
        const token = getState().usersReducer.currentUser;
        await realestateAPI.delete(`/api/Countries/${id}`,{headers: {Authorization: `Bearer ${token}`}})
        dispatch({
            type: 'COUNTRIES_LIST_DELETE_SUCCESS',
            payload: id
        })
    }catch (error) {
        dispatch({
            type: 'COUNTRIES_LIST_DELETE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}