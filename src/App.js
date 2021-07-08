import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import {Provider} from "react-redux"
import store from "./store"
import Quiz from './component/quiz';
function App() {
  return (
    <div>
      <Provider store={store}>
        <Quiz />
        
      </Provider>
    </div>
  );
}

export default App;
