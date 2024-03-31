// Create A element inside DOM using JavaScript

const heading = document.createElement('h1');
heading.innerHTML = 'Hello World !';
const root1 = document.getElementById("root");
root.appendChild(heading);

// Create a element inside DOM using React

const heading = React.createElement('h1',{},'Hello World !');
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// Create Below structure using react inside Dom
// <div id="parent">
//    <div class="child">
//     <h1> Hello World !></h1>
//    </div>
// </div>

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