import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">about me</span>
            <img
          src="https://images.bridebook.com/weddingsuppliers/florist/csW8eRvmaX/4C11A68F-0917-4DD5-9836-6FA3AB88A261.jpeg?auto=format%2Ccompress&ch=DPR%2CSave-Data&cs=srgb&dpr=1&crop=faces&fit=crop&ar=3%3A2&blur=0&w=1024"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic accusamus enim tempore sint totam dicta pariatur quibusdam quasi similique magni ipsam exercitationem facilis.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">life</li>
                <li className="sidebarListItem">music</li>
                <li className="sidebarListItem">sport</li>
                <li className="sidebarListItem">style</li>
                <li className="sidebarListItem">tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">follow us</span>
            <div className="sidebarSocial">
            <i className=" sidebarIcon fa-brands fa-facebook"></i>
        <i className=" sidebarIcon fa-brands fa-twitter"></i>
        <i className=" sidebarIcon fa-brands fa-pinterest"></i>
        <i className=" sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar