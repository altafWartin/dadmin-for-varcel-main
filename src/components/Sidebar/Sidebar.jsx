import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import logo from "../../assets/logo.svg";
import element from "../../assets/Icon/element.svg";
import Contianer from "../../assets/Icon/Container.svg";
import setting from "../../assets/Icon/setting.svg";
import calander from "../../assets/Icon/calendar.svg";
import workflow from "../../assets/Icon/WorkF.svg";
import Projecticon from "../../assets/Icon/workflow.svg";

const Sidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const isLinkActive = (path) => {
    return path === activeLink;
  };

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.bg} />
        <div className={styles.menuSidebarWrapper}>
          <div className={styles.menuSidebar}>
            <div className={styles.frameParent}>
              <Link
                to="/"
                className={styles.linkText}
                onClick={() => handleLinkClick("/")}
              >
                <div
                  className={`${styles.iconcalendarParent} ${
                    isLinkActive("/") && styles.active
                  }`}
                >
                  <img
                    className={styles.vuesaxboldelement3Icon}
                    alt=""
                    src={element}
                  />
                  <div className={styles.workspace}>Dashboard</div>
                </div>
              </Link>
              <Link
                to="/projects"
                className={styles.linkText}
                onClick={() => handleLinkClick("/projects")}
              >
                <div
                  className={`${styles.iconcalendarParent} ${
                    isLinkActive("/projects") && styles.active
                  }`}
                >
                  <img className={styles.vuesaxboldelement3Icon} alt="" src={Projecticon} />
                  <div className={styles.workspace}>Projects</div>
                </div>
              </Link>
              <Link
                to="/container"
                className={styles.linkText}
                onClick={() => handleLinkClick("/container")}
              >
                <div
                  className={`${styles.iconcalendarParent} ${
                    isLinkActive("/container") && styles.active
                  }`}
                >
                  <img
                    className={styles.vuesaxboldelement3Icon}
                    alt=""
                    src={Contianer}
                  />
                  <div className={styles.workspace}>Resources</div>
                </div>
              </Link>
              <Link
                to="/workspace"
                className={styles.linkText}
                onClick={() => handleLinkClick("/workspace")}
              >
                <div
                  className={`${styles.iconcalendarParent} ${
                    isLinkActive("/workspace") && styles.active
                  }`}
                >
                  <img
                    className={styles.vuesaxboldelement3Icon}
                    alt=""
                    src={calander}
                  />
                  <div className={styles.workspace}>Workspace</div>
                </div>
              </Link>
              <Link
                to="/workflow"
                className={styles.linkText}
                onClick={() => handleLinkClick("/workflow")}
              >
                <div
                  className={`${styles.iconcalendarParent} ${
                    isLinkActive("/workflow") && styles.active
                  }`}
                >
                  <img
                    className={styles.vuesaxboldelement3Icon}
                    alt=""
                    src={workflow}
                  />
                  <div className={styles.workspace}>Workflows</div>
                </div>
              </Link>
            
              <Link
                to="/settings"
                className={styles.linkText}
                onClick={() => handleLinkClick("/settings")}
              >
                <div
                  className={`${styles.iconcalendarParent} ${
                    isLinkActive("/settings") && styles.active
                  }`}
                >
                  <img
                    className={styles.vuesaxboldelement3Icon}
                    alt=""
                    src={setting}
                  />
                  <div className={styles.workspace}>Settings</div>
                </div>
              </Link>
              <div className={styles.frameChild} />
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
        <div className={styles.sidebarChild} />
        <b className={styles.logoDesign}>logo design</b>
        <img className={styles.sidebarItem} alt="logo" src={logo} />
      </div>
    </>
  );
};

export default Sidebar;
