import React from 'react'
class UserClass extends React.Component {

  constructor({props}){
   super(props);
  }  
 

  render() {
    const {name,location,contact} = this.props; 
    return (
      <div className="UserCard">
        <h1> Class Based Component</h1>
        <h3>UserName: {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;