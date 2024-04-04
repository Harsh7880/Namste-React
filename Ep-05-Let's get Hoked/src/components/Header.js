import { LOGO_URL } from "../utils/constants"

const Header = () => {
    return (
        <div className='header'>
          <div className='logo-conatiner'>
            <img className = "logo"src={LOGO_URL}></img>
          </div>
          <div className='nav-items'>
           <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Cart</a></li>
           </ul>
          </div>
        </div>
    )
}

export default Header