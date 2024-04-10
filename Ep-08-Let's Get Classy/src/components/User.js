import {useState} from 'react'

const User = ({name,location,contact}) => {

  let [count,setCount] = useState(0);

    return (
       <div className = "UserCard">
        <h1> Functional Component</h1>
        <p>Count : {count}</p>
        <button onClick={()=>{
          setCount(
            count = count + 1
          )
        }}>Increase Count </button>
          <h3>
               UserName: {name}
          </h3>
          <h3>
            Location : {location}
          </h3>
          <h3>
            Contact : {contact}
          </h3>
       </div>
    );
}
export default User;