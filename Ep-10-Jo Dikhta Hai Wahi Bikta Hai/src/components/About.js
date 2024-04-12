import User from "./User";
import UserClass from "./UserClass";
import {Component} from 'react';
class About extends Component {

  constructor(props){
    super(props)
    console.log("Parent Constructor Called");
  
  }
  async componentDidMount(){
    console.log("Parent Component Did Mount Called");
  }
  componentDidUpdate(){
    console.log("Parent Component did Update called");
  }
   render(){
    console.log("Parent Render Called");
    return (
      <div>
        <h1>this is About Us Page</h1>
        <UserClass/>
      </div>
    );
   }
}

export default About;
