import React, {useState} from 'react';
import AGMR_MyProject from "./Icons/AGMR_MyProject.png";
import AGMR_NewProject from "./Icons/AGMR_NewProject.png";
import AGMR_IconOpen from "./Icons/AGMR_IconOpen.png";
import { NavLink } from 'react-router-dom';
import "./home.css";

const Home = ({ children }) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
   const menuItem = [
    {
      path: '/',
      icon: <img src={AGMR_MyProject} alt="AGMR MyProject" />,
      name: 'Home'
    },
    {
      path: '/settings',
      icon: <img src={AGMR_NewProject} alt="AGMR NewProject" />,
      name: 'Settings'
    },
    {
      path: '/some-page',
      icon: <img src={AGMR_NewProject} alt="AGMR NewProject" />,
      name: 'Some Page'
    },
    {
      path: '/another-page',
      icon: <img src={AGMR_NewProject} alt="AGMR NewProject" />,
      name: 'Another Page'
    },
    {
      path: '/more-page',
      icon: <img src={AGMR_NewProject} alt="AGMR NewProject" />,
      name: 'More Page'
    }
  ];

  return (
    <div className='container'>
      <div style={{width: isOpen ? "250px" : "60px"}} className='sidebar1'>
        <div className='top_section'>
          <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>logo</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className='bar'>
            <button type="button">
              <img onClick={toggle} src={AGMR_IconOpen} alt="AGMR MyProject" width={40} />
            </button>
          </div>
        </div>
        <nav className="sidebar-menu">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
            </NavLink>
          ))}
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Home;
