import React from "react";
import Home from "../home";
import "./translator.css";
import logo2 from "../../images/logo2.png";
import AGMR_SerchLence from "../Icons/AGMR_SerchLence.png";
import AGMR_MyProject from "../Icons/AGMR_MyProject.png";
import AGMR_NewProject from "../Icons/AGMR_NewProject.png";
import AGMR_Import from "../Icons/AGMR_Import.png";
import AGMR_Export from "../Icons/AGMR_Export.png";
import AGMR_Archive from "../Icons/AGMR_Archive.png";
import AGMR_Sync from "../Icons/AGMR_Sync.png";
import AGMR_Settings from "../Icons/AGMR_Settings.png";
import AGMR_User from "../Icons/AGMR_User.png";

const Translator = () => {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo2} alt="Logo" className="logo" />
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <img src={AGMR_SerchLence} alt="AGMR SerchLence" />
          </button>
        </div>
      </header>
  
      <div className="sidebar">
        {/* <div className="sidebar-icon">
          <img src={AGMR_MyProject} alt="AGMR MyProject" />
          <p>MY PROJECTS</p>
        </div>
        <div className="sidebar-icon">
          <img
            src={AGMR_NewProject}
            alt="AGMR NewProject"
            style={{ marginLeft: "10px" }}
          />
          <p>NEW PROJECTS</p>
        </div>
        <div className="sidebar-icon">
          <img src={AGMR_Import} alt="AGMR Import" />
          <p>IMPORT</p>
        </div>
        <div className="sidebar-icon">
          <img src={AGMR_Export} alt="AGMR Export" />
          <p>EXPORT</p>
        </div>
        <div className="sidebar-icon">
          <img src={AGMR_Archive} alt="AGMR Archive" />
          <p>ARCHIVE</p>
        </div>
        <div className="sidebar-icon">
          <img src={AGMR_Sync} alt="AGMR Sync" />
          <p>SYNC</p>
        </div>
        <div className="sidebar-icon">
          <img src={AGMR_Settings} alt="AGMR Settings" />
          <p>SETTINGS</p>
        </div>
        <div className="sidebar-icon">
          <img src={AGMR_User} alt="AGMR User" />
          <p>USER</p>
        </div> */}
      </div>
      <div className="content">
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>☆</th>
                <th>Project Name</th>
                <th>Language</th>
                <th>ISD Code</th>
                <th>Created On</th>
                <th>Last Accessed</th>
                <th>Archive</th>
              </tr>
            </thead>
            <tbody>{/* Table rows go here */}</tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return <footer className="footer"></footer>;
};

export default Translator;
