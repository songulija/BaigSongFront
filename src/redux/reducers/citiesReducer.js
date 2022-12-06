
export const citiesListReducer = (state = {cities: []}, action) => {
    switch(action.type){
        case 'CITIES_LIST_FETCH_REQUEST':
            return {...state, 'loading': true}
        case 'CITIES_LIST_FETCH_SUCCESS':
            return {...state, 'loading': false, cities: action.payload}
        case 'CITIES_LIST_FETCH_FAIL':
            return {...state, 'loading': false, error: action.payload}
        case 'CITIES_LIST_CREATE_REQUEST':
            return { ...state, loading: true }
        case 'CITIES_LIST_CREATE_SUCCESS':
            const newCities = [...state.cities, { ...action.payload }]
            return { ...state, loading: false, cities: newCities }
        case 'CITIES_LIST_CREATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'CITIES_LIST_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'CITIES_LIST_UPDATE_SUCCESS':
            const cities_clone = [...state.cities]
            const updated_cities = cities_clone.map(x => x.id === action.payload.id?action.payload:x)
            return { ...state, loading: false, cities: updated_cities }
        case 'CITIES_LIST_UPDATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'CITIES_LIST_DELETE_REQUEST':
            return { ...state, loading: true }
        case 'CITIES_LIST_DELETE_SUCCESS':
            const _cities = state.cities.filter(x => x.id !== action.payload);
            return { ...state, cities: _cities };
        case 'CITIES_LIST_DELETE_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}