import realestateAPI from './realestateAPI';
export const getPropertyTypes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTY_TYPES_FETCH_REQUEST'
        });
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/PropertyTypes`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTY_TYPES_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTY_TYPES_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
export const createPropertyType = (postObject) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTY_TYPES_CREATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.post(`/api/PropertyTypes`, postObject, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTY_TYPES_CREATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTY_TYPES_CREATE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const updatePropertyType = (postObj, reducerObj) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTY_TYPES_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        await realestateAPI.put(`/api/PropertyTypes/${reducerObj.id}`, postObj, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTY_TYPES_UPDATE_SUCCESS',
            payload: reducerObj
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTY_TYPES_UPDATE_SUCCESS',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Delete
//to delete order material
export const deletePropertyType = (id) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'PROPERTY_TYPES_DELETE_REQUEST'
        })
        const token = getState().usersReducer.currentUser;
        await realestateAPI.delete(`/api/PropertyTypes/${id}`,{headers: {Authorization: `Bearer ${token}`}})
        dispatch({
            type: 'PROPERTY_TYPES_DELETE_SUCCESS',
            payload: id
        })
    }catch (error) {
        dispatch({
            type: 'PROPERTY_TYPES_DELETE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

