export const propertyTypesReducer = (state = { propertyTypes: [] }, action) => {
    switch (action.type) {
        case 'PROPERTY_TYPES_FETCH_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTY_TYPES_FETCH_SUCCESS':
            return { ...state, loading: false, propertyTypes: action.payload }
        case 'PROPERTY_TYPES_FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTY_TYPE_CREATE_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTY_TYPE_CREATE_SUCCESS':
            const newPropertyTypes = [...state.propertyTypes, { ...action.payload }]
            return { ...state, loading: false, propertyTypes: newPropertyTypes }
        case 'PROPERTY_TYPE_CREATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'PROPERTY_TYPE_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'PROPERTY_TYPE_UPDATE_SUCCESS':
            const propertyTypes_clone = [...state.propertyTypes]
            const updated_propertyTypes = propertyTypes_clone.map(x => x.id === action.payload.id?action.payload:x)
            return { ...state, loading: false, propertyTypes: updated_propertyTypes }
        case 'PROPERTY_TYPE_UPDATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}

