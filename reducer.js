import * as types from './constants';

const INITIAL_STATE = {
    imageList: []
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FETCH_IMAGE_LIST_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
                imageList: []
            }
        case types.FETCH_IMAGE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                imageList: action.payload
            }
        case types.FETCH_IMAGE_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.ADD_NEW_IMAGE:
            const newList = [action.payload, ...state.imageList];
            return {
                ...state,
                imageList: newList
            }    
        default:
            return state;    
    }
}

export default Reducer;