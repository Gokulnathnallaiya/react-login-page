import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData, notLoggedInData } from "./sidebarData";
import "./styles.css";

//react- icons
import { IconContext } from "react-icons";

//redux
import { connect } from "react-redux";
import { setCurrentUser, setRole } from "../../redux/user/user.action";
import { withRouter } from "react-router-dom";



function Navbar({ currentUser, setCurrentUser, setRole, history }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const Navbardata = currentUser ? SidebarData : notLoggedInData;

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to="#" className="menu-bars">
            <FaIcons.FaShopify />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>

            
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>


            {Navbardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}





            <li className="nav-text">
              {currentUser ? (
                <Link
                  onClick={() => {
                    setCurrentUser(null);
                    setRole(null);
                    history.push({
                      pathname: "/",
                    });
                  }}
                  to="/"
                >
                  <AiIcons.AiOutlineLogout />
                  <span>Signout</span>
                </Link>
              ) : null}
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  role: state.user.role,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  setRole: (role) => dispatch(setRole(role)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
