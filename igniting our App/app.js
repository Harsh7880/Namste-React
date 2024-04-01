import React from 'react';
import ReactDOM from 'react-dom/client'

const parent = React.createElement('div',
                                  {id :"parent"},
                                  React.createElement('div',
                                  {id: 'child'},
                                  [React.createElement('h1',{},
                                  'Hello World from React'),
                                  React.createElement('h2',{},
                                  'Hello World from React H2')]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);