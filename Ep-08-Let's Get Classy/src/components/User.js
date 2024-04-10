const User = ({name,location,contact}) => {
    return (
       <div className = "UserCard">
        <h1> Functional Component</h1>
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