import {connect} from 'react-redux';
import {fetchImageList, addNewImage} from './action';
import ImageViewer from './ImageViewer';

const mapStateToProps = state => ({
    ...state.imageReducer
});

const mapDispatchToProps = {
    fetchImageList,
    addNewImage
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);