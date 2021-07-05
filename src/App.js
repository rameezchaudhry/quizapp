import './App.css';
import Quiz from "./component/quiz"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import {Provider} from "react-redux"
import store from "./store"
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
