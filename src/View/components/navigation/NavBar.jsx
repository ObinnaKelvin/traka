import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faBell, faBug, faChartLine, faComments, faPeopleGroup, faUserGear } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/images/traka_logo.gif'

const NavBar = () => {

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
    console.log(open)
  }

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
              <li>
                <Link className='link' to ="/dashboard">
                  <span><FontAwesomeIcon icon={faChartLine}/></span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/incidence">
                  <span><FontAwesomeIcon icon={faBug}/></span>
                  <span>Incidences</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/team">
                  <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                  <span>Team</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/chatbox">
                  <span><FontAwesomeIcon icon={faComments}/></span>
                  <span>Chatbox</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/notifications">
                  <span><FontAwesomeIcon icon={faBell}/></span>
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link className='link' to ="/administration">
                  <span><FontAwesomeIcon icon={faUserGear}/></span>
                  <span>Administration</span>
                </Link>
              </li>
              <li className='logout'>
                <Link className='link logout' to ="/">
                  <span><FontAwesomeIcon icon={faArrowRightFromBracket}/></span>
                  <span>Log Out</span>
                </Link>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar