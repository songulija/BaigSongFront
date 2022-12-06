import realestateAPI from './realestateAPI';
export const getUserTypes = () => async(dispatch,getState) =>{
    try {
        dispatch({
            type: 'USER_TYPES_FETCH_REQUEST'
        });
        const token = getState().usersReducer.currentUser;
        const response = await realestateAPI.get('/api/UserTypes',{ headers: { Authorization: `Bearer ${token}` } })

        dispatch({
            type: 'USER_TYPES_FETCH_SUCCESS',
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: 'USER_TYPES_FETCH_FAIL',
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
