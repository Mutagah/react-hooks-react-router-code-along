import React from "react";
import {NavLink} from "react-router-dom"
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
function NavBar(){
  return (
    <div>
       <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
        >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      {/* <NavLink to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Signup
      </NavLink>
      <NavLink to="/messages"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Messages
      </NavLink>
  ) */}
  </div>)
}
// function Signup() {
//  return (
//   <h1>This is the Signup page</h1>
//  );
//  }
//  function Messages(){
//   return (
//     <h1>This is the message component rendered</h1>
//   );
//  }

// ReactDOM.render(
// <BrowserRouter>
// <NavBar />
// <Switch>
//   <Route path="/about" >
//     <About />
//   </ Route>
//   <Route path="/login">
//     <Login />
//   </Route>
//   <Route exact path="/">
//     <Home />
//   </Route>
//   <Route exact path="/signup">
//     <Signup />
//   </Route>
//   <Route exact path="/messages">
//     <Messages />
//   </Route>
//   </Switch>  
//   <NavBar /> 
// </BrowserRouter>, document.getElementById("root"));
export  default NavBar