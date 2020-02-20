import React from 'react';
import './ImageViewer.css';

class ImageViewer extends React.Component {

    state = {
        selectedItem: null
    };

    componentDidMount() {
        this.props.fetchImageList();
    }

    onClickImage = (item) => {
        this.setState({
            selectedItem: item
        })
    }

    onClearImage = () => {
        this.setState({
            selectedItem: null
        })
    }
    
    onChangeImage = (e) => {
        const image_url = URL.createObjectURL(e.target.files[0]);
        const imgObj = {
            download_url: image_url
        }

        this.props.addNewImage(imgObj);
    }

    render() {
        console.log('IMAGE LIST =>', this.props);
        const {selectedItem} = this.state;
        return (
            <div className="image-container">
                <h2>Image List</h2>
                <input type="file" onChange={this.onChangeImage}/>
                <div className="image-wrapper">
                <div className="image-list">
                    {
                        this.props.imageList.map(item => {
                            return (
                                <img onClick={()=>this.onClickImage(item)} src={item.download_url} alt={item.author} />
                            )
                        })
                    }
                </div>
                {selectedItem &&
                <div className='image-selection'>
                   <img src={selectedItem.download_url} alt={selectedItem.author}/>
                   <button onClick={this.onClearImage}>Clear</button>
                </div>}
                </div>
            </div>
        );
    }
}

export default ImageViewer;