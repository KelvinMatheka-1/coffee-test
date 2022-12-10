import { NavLink } from "react-router-dom";
import React from "react";

function NavBar({user, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
      
    
    return (
        <header className="header">
          <NavLink to="/home"><h2 className="logo">coffee<span className="navnav">Cafe</span></h2></NavLink> 
          {/* <NavLink to="/checkout"><h2 className="logo">coffee<span className="navnav">Cart</span></h2></NavLink>  */}
            <nav>
            {user ?  (
                <ul>
                  <button to="/login" onClick={handleLogoutClick}>Logout</button>
                    <li><NavLink  to="/home">Home</NavLink></li>
                    <li><NavLink  to="/checkout">Checkout</NavLink></li>
                     {/* <li><NavLink to="/">Signup</NavLink></li> */}
                   {/* <li> <NavLink to="/login">Login</NavLink></li>  */}
                </ul>
             ) : (
              <>
              <button to="/login" onClick={handleLogoutClick}>Logout</button>
              </>
            )}
            </nav>
            
            {/* <button className="cta">Sign-up</button>
            <button className="cta">Sign-up</button> */}
        </header>
       
    )
}

export default NavBar;