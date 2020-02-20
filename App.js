import React from 'react';
import { Provider } from 'react-redux'
import store from './store';
import ImageViewer from './ImageViewer/ImageViewer.container'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <ImageViewer/>
      </Provider>
    </div>
  );
}


export default App;
