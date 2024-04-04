import React from 'react';
import ReactDOM from 'react-dom/client'

// JSX get transpiled before it reaches to JS 
// this is done by PARCEL and PARCEl usses BABEL for transpilation
// Babel is JS Transpiler

// And JSX --> Babel transplies it to JS 
// Like  below h1 tag is transpiled into React.createElement('h1',{id:"heading","This Heading is created using JSX"})
// by bable

// React Element 
const Titile = () => ( 
   <h1 id='head'>
    This Heading is created using JSX
    </h1>
   );

   const titile = ( 
    <h1 id='head'>
     This  is created using JSX react element and enjected inside functional component
     </h1>
    );

// React Component 
// Class Based Component  --- Old
// Functional Based Component --- New



// React Functional Component 
// It is normal JavaScript Function which return some JSX Or a function which return React Elements

// Component Composition : composing two components into one another is called component composition
// JSX also gives the super power to us that we cam write JavaScript inside JSX
const HeadingComponent = () => (
    <div className='container'>
        <Titile/>
        { titile }
       <h1 className='heading'>  This one is created using Functional React Component</h1>
    </div>
   
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);