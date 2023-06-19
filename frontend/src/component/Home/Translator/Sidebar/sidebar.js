import React, { useState } from 'react';
import AGMR_MyProject from "../../Icons/AGMR_MyProject.png";
import AGMR_NewProject from "../../Icons/AGMR_NewProject.png";
import AGMR_IconOpen from "../../Icons/AGMR_IconOpen.png";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const toggle = () => setIsOpen(!isOpen);

  const handleNewProjectSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary action with the new project name
    console.log('New Project Name:', newProjectName);
    // Clear the input field
    setNewProjectName('');
  };

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
      <div style={{ width: isOpen ? "250px" : "60px" }} className='sidebar1'>
        <div className='top_section'>
          <h1 style={{ display: isOpen ? "block" : "none" }} className='logo'>logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className='bar'>
            <button type="button">
              <img onClick={toggle} src={AGMR_IconOpen} alt="AGMR MyProject" width={40} />
            </button>
          </div>
        </div>
        <nav className="sidebar-menu">
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeClassName="active">
              <div className='icon'>{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className='link_text'>{item.name}</div>
            </NavLink>
          ))}
        </nav>
      </div>
      <main>
        {children}
        {isOpen && (
          <div className="new-project-page">
            <h2>New Project</h2>
            <form onSubmit={handleNewProjectSubmit}>
              <div className="form-group">
                <label htmlFor="projectName">Project Name:</label>
                <input
                  type="text"
                  id="projectName"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                />
              </div>
              {/* Add more input fields and form elements for other credentials */}
              <div className="form-actions">
                <button type="submit">Create Project</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Sidebar;
