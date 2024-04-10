 import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>this is About Us Page</h1>
      <User 
       name = {"Harsh Kumar"}
       location = {"Lucknow"}
       contact = {"vijayk8478@gmail.com"}
      />
      <UserClass
      name = {"Harsh Kumar"}
      location = {"Lucknow"}
      contact = {"vijayk8478@gmail.com"}
      />
    </div>
  );
};
export default About;
