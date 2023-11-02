import { NavLink } from 'react-router-dom';
import './topbar.css'

function TopBar() {
  const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
        <i className=" topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><NavLink to='/' >Home</NavLink></li>
                <li className="topListItem"><NavLink to='/about' >about</NavLink></li>
                <li className="topListItem"><NavLink to='/write' >write</NavLink></li>
                <li className="topListItem"><NavLink to='/contact' >contact</NavLink></li>
                
                {user && <li className="topListItem"><NavLink to='/logout' >logout</NavLink></li>}
            </ul>
        </div>
        <div className="topRight">
          {
            user ? (

              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="user" className='topImg'/>
            ) : (<ul className='topList'><li className="topListItem">
              <NavLink to='/login'>login</NavLink>
              </li>
             <li className="topListItem">
                <NavLink to='/register'>register</NavLink>
              </li>
              </ul> )
          }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}

export default TopBar