import realestateAPI from './realestateAPI';
export const getProperties = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTIES_FETCH_REQUEST'
        });
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/Properties`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTIES_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTIES_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

// Properties By User Id
export const getPropertiesByUserId = (itemsPerPage, pageNumber) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTIES_BY_USER_ID_FETCH_REQUEST'
        });
        const perPage = itemsPerPage >= 3? itemsPerPage : 3
        const pageNum = pageNumber > 0? pageNumber : 1 
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/Properties/user?Page=${pageNum}&ItemsPerPage=${perPage}`, { headers: { Authorization: `Bearer ${token}` } })
        console.log(JSON.stringify(response))
        dispatch({
            type: 'PROPERTIES_BY_USER_ID_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTIES_BY_USER_ID_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Properties By Property Type Id (Hotels=1, Apartments=2 ....)
export const getPropertiesByPropertyTypeId = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTIES_BY_PROPERTY_TYPE_ID_FETCH_REQUEST'
        });
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/Properties/propertyType/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTIES_BY_PROPERTY_TYPE_ID_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTIES_BY_PROPERTY_TYPE_ID_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

//Properties By Rent Type
export const getPropertiesByRentTypeId = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTIES_BY_RENT_TYPE_ID_FETCH_REQUEST'
        });
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/Properties/rentType/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTIES_BY_RENT_TYPE_ID_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTIES_BY_RENT_TYPE_ID_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const getPropertyById = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTY_BY_ID_FETCH_REQUEST'
        });
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/Properties/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTY_BY_ID_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTY_BY_ID_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const getTopLikedProperties = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'TOP_LIKED_PROPERTIES_FETCH_REQUEST'
        });
        //getting token from usersReducer state
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get(`/api/Properties/most-liked-properties`, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'TOP_LIKED_PROPERTIES_FETCH_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'TOP_LIKED_PROPERTIES_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const createProperty = (postObject) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTIES_CREATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.post(`/api/Properties`, postObject, { headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data' } })
        dispatch({
            type: 'PROPERTIES_CREATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTIES_CREATE_FAIL',
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
            type: 'PROPERTY_COMMENTS_CREATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.post(`/api/Comments`, postObject, { headers: { Authorization: `Bearer ${token}` } })
        dispatch({
            type: 'PROPERTY_COMMENTS_CREATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTY_COMMENTS_CREATE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}


export const updateProperty = (postObj) => async (dispatch, getState) => {
    try {
        dispatch({
            type: 'PROPERTIES_UPDATE_REQUEST'
        });
        //get token from usersReducer
        const token = getState().usersReducer.currentUser;
        //get id from form data
        const id = postObj.get('id')
        const response = await realestateAPI.put(`/api/Properties/${id}`, postObj, { headers: { Authorization: `Bearer ${token}`,'Content-Type': 'multipart/form-data' } })
        dispatch({
            type: 'PROPERTIES_UPDATE_SUCCESS',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'PROPERTIES_UPDATE_SUCCESS',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const deleteProperty = (id) => async(dispatch,getState)=>{
    try{
        dispatch({
            type: 'PROPERTIES_DELETE_REQUEST'
        })
        const token = getState().usersReducer.currentUser;
        await realestateAPI.delete(`/api/PropertyTypes/${id}`,{headers: {Authorization: `Bearer ${token}`}})
        dispatch({
            type: 'PROPERTIES_DELETE_SUCCESS',
            payload: id
        })
    }catch (error) {
        dispatch({
            type: 'PROPERTIES_DELETE_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

