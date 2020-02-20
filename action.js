import * as types from './constants';
import Axios from 'axios';

const fetchImageListLoading = () => ({
    type: types.FETCH_IMAGE_LIST_LOADING
});

const fetchImageListSuccess = data => ({
    type: types.FETCH_IMAGE_LIST_SUCCESS,
    payload: data
});

const fetchImageListFailure = error => ({
    type: types.FETCH_IMAGE_LIST_FAILURE,
    payload: error
});

export const addNewImage = obj => ({
    type: types.ADD_NEW_IMAGE,
    payload: obj
})

export const fetchImageList = () => dispatch => {
    const url = 'https://picsum.photos/v2/list';
    dispatch(fetchImageListLoading());
    Axios.get(url)
    .then(res=>{
        dispatch(fetchImageListSuccess(res.data));
    })
    .catch(err => {
        dispatch(fetchImageListFailure(err));
    })
}