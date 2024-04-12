import React from 'react'
class UserClass extends React.Component {

  constructor({props}){
   super(props);
   this.state = {
    userInfo : {
      name: "Dummy User",
      location: "Default"
    }
  }
   console.log("Child Constructor Called");
  }  
  async componentDidMount(){
    const data = await fetch('https://api.github.com/users/harsh7880');
    const json = await data.json();
    this.setState({
       userInfo : json
    })
    console.log("Child Component Did Mount Called");
  }
  componentDidUpdate(){
    console.log("Child Component did Update called");
  }
 componentWillUnmount(){
  console.log("Component Will unmount")
 }
  render() {
    console.log("Child rendered");
    const {name,location,contact,userName,avatar_url} = this.state.userInfo; 
    return (
      <div className="UserCard">
        <h1> Class Based Component</h1>
        <img
        alt='profile-photo'
        src={avatar_url}
        />
        <h3> Name : {userName}</h3>
        <h3>UserName: {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;