import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faBug, faChartLine, faComments, faPeopleGroup, faUser, faUserGear } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/traka_logo.gif'
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../../Controller/Redux/authSlice'

const NavBar = () => {
  const [activeState, setActiveState] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

  const toggleMenu = (index) => {
    setActiveState(index)
    localStorage.setItem('activeMenu', JSON.stringify(index))
    console.log("Active Menu Index:", activeState)
  }

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const currentMenu = JSON.parse(localStorage.getItem('activeMenu'))
  console.log("Current Menu", currentMenu)


  return (
    <div className='navBar'>
        <div className="navBar-header">
            <div className="navBar-header-logo">
              <Link to={'/dashboard'}>
                <img src={logo} alt="traka logo" className='nav-logo'/>
              </Link>
            </div>
            {/* <Hamburger /> */}
            <div className="hamburger" onClick={toggle}>
                <span className="hamOne"></span>
                <span className="hamTwo"></span>
                <span className="hamThree"></span>
            </div>
        </div>
        <div className={open ? 'overlay open': 'overlay'} onClick={toggle}></div>
        <div className={open ? 'navBar-sideBar open' : 'navBar-sideBar'}>
            <ul>
              <div>
                <li>
                  <Link className='link' to ="/dashboard" onClick={() => toggleMenu(1)}>
                    <span className="menuLogo" id={currentMenu === 1 ? "active-menu" : "menuLogo"}><FontAwesomeIcon icon={faChartLine}/></span>
                    <span id={currentMenu === 1 ? "active-menu": "menuLogo"}>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link className='link' to ="/incidence" onClick={() => toggleMenu(2)}>
                    <span className="menuLogo" id={currentMenu === 2 ? "active-menu" : "menuLogo"}><FontAwesomeIcon icon={faBug}/></span>
                    <span id={currentMenu === 2 ? "active-menu": "menuLogo"}>Incidences</span>
                  </Link>
                </li>
                <li>
                  <Link className='link' to ="/team" onClick={() => toggleMenu(3)}>
                    <span className="menuLogo" id={currentMenu === 3 ? "active-menu" : "menuLogo"}><FontAwesomeIcon icon={faPeopleGroup}/></span>
                    <span id={currentMenu === 3 ? "active-menu": "menuLogo"}>Team</span>
                  </Link>
                </li>
                <li>
                  <Link className='link' to ="/chatbox" onClick={() => toggleMenu(4)}>
                    <span className="menuLogo" id={currentMenu === 4 ? "active-menu" : "menuLogo"}><FontAwesomeIcon icon={faComments}/></span>
                    <span id={currentMenu === 4 ? "active-menu": "menuLogo"}>Chatbox</span>
                  </Link>
                </li>
                <li>
                  <Link className='link' to ="/notifications" onClick={() => toggleMenu(5)}>
                    <span className="menuLogo" id={currentMenu === 5 ? "active-menu" : "menuLogo"}><FontAwesomeIcon icon={faBell}/></span>
                    <span id={currentMenu === 5 ? "active-menu": "menuLogo"}>Notifications</span>
                  </Link>
                </li>
                {/* <li>
                  <Link className='link' to ="/administration" onClick={() => toggleMenu(6)}>
                    <span className="menuLogo" id={currentMenu === 6 && "active-menu"}><FontAwesomeIcon icon={faUser}/></span>
                    <span id={currentMenu === 6 ? "active-menu": "menuLogo"}>Profile</span>
                  </Link>
                </li> */}
                <li>
                  <Link className='link' to ="/administration" onClick={() => toggleMenu(7)}>
                    <span className="menuLogo" id={currentMenu === 7 && "active-menu"}><FontAwesomeIcon icon={faUserGear}/></span>
                    <span id={currentMenu === 7 ? "active-menu": "menuLogo"}>Administration</span>
                  </Link>
                </li>
              </div>
              <div className='navBar-sideBar-lower'>
                <li className='logout' onClick={onLogout}>
                  <Link className='link logout' onClick={() => toggleMenu(8)}>
                    <span className="menuLogo"><FontAwesomeIcon icon={faArrowRightFromBracket}/></span>
                    <span>Log Out</span>
                  </Link>
                </li>
              </div>
            </ul>
        </div>
    </div>
  )
}

export default NavBar