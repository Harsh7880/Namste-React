import React from 'react'
class UserClass extends React.Component {

  constructor({props}){
   super(props);

   this.state = {
    count : 0
   }
  }  
 

  render() {
    const {name,location,contact} = this.props; 
    return (
      <div className="UserCard">
        <p>Count : {this.state.count}</p>
        <button onClick={()=>{
          this.setState({
            count : this.state.count + 1
          })
        }}>Increase Count</button>
        <h1> Class Based Component</h1>
        <h3>UserName: {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;