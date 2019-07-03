import React from "react";
function Nav() {
  return(
    <div >
      <div className="container-fluid position:fixed" >
        <div className="container">
          
        
      <nav className="navbar navbar-expand-sm">
  <a className="navbar-brand" href="#"><img src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/independent-investors-logo.png" alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ml-5" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item ">
        <a className="nav-link" href="#">ABOUT US <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TESTIMONIALS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">WHAT WE OFFER</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">CONTACT US</a>
      </li>
      
    </ul>

  </div>
  <button className="btn btn-primary ntn-lg">Contact:+92 321-4794539</button>
</nav>
        </div>
      </div>
    </div>
  )
}
export default Nav;
