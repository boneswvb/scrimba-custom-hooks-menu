import React from "react"
import useToggler from "./useToggler"

function Menu(props) {
  const [show, toggle] = useToggler(true)
  return (
    <div>
      <button onClick={ toggle }>{ show ? "Hide" : "Show" } Menu </button>
      <nav style={{ display: show ? "block" : "none" }}>
          <h6>Signed in as Coder123</h6>
          <p>Your Profile</p>
          <p>Your Repositories</p>
          <p>Your Stars</p>
          <p>Your Gists</p>
      </nav>
    </div>
  ) 
}

export default Menu;