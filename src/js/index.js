//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let digitos1 = 0
let digitos2 = 0
let digitos3 = 0
let digitos4 = 0
let digitos5 = 0
let digitos6 = 0
setInterval(function(){
    digitos1++
    if (digitos1 == 10) {
        digitos1 = 0
        digitos2++
        if (digitos2 == 10) {
            digitos2 = 0
            digitos3++
            if (digitos3 == 10) {
                digitos3 = 0
                digitos4++
                if (digitos4 == 10) {
                    digitos4 = 0
                    digitos5++
                    if (digitos5 == 10) {
                        digitos5 = 0
                        digitos6++
                        if (digitos6 == 10) {
                            digitos6 = 0
                        }
                    }
                }
            }
        }
    } 
  ReactDOM.render(<Home digitos1={digitos1} digitos2={digitos2} digitos3={digitos3} digitos4={digitos4} digitos5={digitos5} digitos6={digitos6}/>, document.querySelector("#app"));  
},1000)

