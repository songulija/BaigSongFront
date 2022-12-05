export const propertiesReducer = (state = { properties: [], property: {} }, action) => {
    switch (action.type) {
        case 'PROPERTIES_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTIES_FETCH_SUCCESS':
            return { ...state, loading: false, properties: action.payload }
        case 'PROPERTIES_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTIES_BY_USER_ID_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTIES_BY_USER_ID_FETCH_SUCCESS':
            return { ...state, loading: false, properties: action.payload }
        case 'PROPERTIES_BY_USER_ID_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }            
        case 'PROPERTIES_BY_PROPERTY_TYPE_ID_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTIES_BY_PROPERTY_TYPE_ID_FETCH_SUCCESS':
            return { ...state, loading: false, properties: action.payload }
        case 'PROPERTIES_BY_PROPERTY_TYPE_ID_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTIES_BY_RENT_TYPE_ID_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTIES_BY_RENT_TYPE_ID_FETCH_SUCCESS':
            return { ...state, loading: false, properties: action.payload }
        case 'PROPERTIES_BY_RENT_TYPE_ID_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTY_BY_ID_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTY_BY_ID_FETCH_SUCCESS':
            return { ...state, loading: false, property: action.payload }
        case 'PROPERTY_BY_ID_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTIES_CREATE_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTIES_CREATE_SUCCESS':
            const newProperties = [...state.properties, { ...action.payload }]
            return { ...state, loading: false, properties: newProperties }
        case 'PROPERTIES_CREATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTIES_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTIES_UPDATE_SUCCESS':
            const properties_clone = [...state.properties]
            const updated_properties = properties_clone.map(x => x.id === action.payload.id?action.payload:x)
            return { ...state, loading: false, properties: updated_properties }
        case 'PROPERTIES_UPDATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

