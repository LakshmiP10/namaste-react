import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"from namaste React"),
    React.createElement("h2",{},"by Lakshmi")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"h1 tag from  div child2"),
    React.createElement("h2",{},"h2 tag from div child2 ")])

]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)