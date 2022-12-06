
export const countriesListReducer = (state = {countries: []}, action) => {
    switch(action.type){
        case 'COUNTRIES_LIST_FETCH_REQUEST':
            return {...state, 'loading': true}
        case 'COUNTRIES_LIST_FETCH_SUCCESS':
            return {...state, 'loading': false, countries: action.payload}
        case 'COUNTRIES_LIST_FETCH_FAIL':
            return {...state, 'loading': false, error: action.payload}
        case 'COUNTRIES_LIST_CREATE_REQUEST':
            return { ...state, loading: true }
        case 'COUNTRIES_LIST_CREATE_SUCCESS':
            const newCountries = [...state.countries, { ...action.payload }]
            return { ...state, loading: false, countries: newCountries }
        case 'COUNTRIES_LIST_CREATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'COUNTRIES_LIST_UPDATE_REQUEST':
            return { ...state, loading: true }
        case 'COUNTRIES_LIST_UPDATE_SUCCESS':
            const countries_clone = [...state.countries]
            const updated_countries = countries_clone.map(x => x.id === action.payload.id?action.payload:x)
            return { ...state, loading: false, countries: updated_countries }
        case 'COUNTRIES_LIST_UPDATE_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'COUNTRIES_LIST_DELETE_REQUEST':
            return { ...state, loading: true }
        case 'COUNTRIES_LIST_DELETE_SUCCESS':
            const _countries = state.countries.filter(x => x.id !== action.payload);
            return { ...state, countries: _countries };
        case 'COUNTRIES_LIST_DELETE_FAIL':
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}