import { StrictMode } from "react";
import ReactDOM from "react-dom";
import fontawesome from "./fontawesome";
import App from "./App";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import  rootReducer  from "./Redux/Reducer";
import thunk from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';
const rootElement = document.getElementById("root");
const store = createStore(rootReducer,applyMiddleware(thunk))
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
