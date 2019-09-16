import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//para funcionar offline, envia datos cuado vuelve la conexion
import * as serviceWorker from "./serviceWorker";
//ayudar a react a renderizar en pantalla
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
