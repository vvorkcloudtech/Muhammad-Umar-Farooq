import React from "react";
function Header() {
  return (
    <div>
      <div className="section mt-5" id="backimg">
        <div className="container">
          <div className="row">
            <div className="col-sm-8" id="content">
              <p className="mt-5 text-primary">HIGH-PERFORMANCE INVESTMENTS FROM UK’S TOP INVESTMENT COMPANY</p>
              <h1 className="text-dark text-wrap">Enjoy Up To 35%<br /> Yearly Returns</h1>
              <ul className="mt-5 container-fluid">
                <div className="row">
                  <div className="cl-sm-9">
                    
                <li> <h5 className="d-inline">Custom Portfolios:</h5>Flexible Investment Solutions</li>
                <li><h5 className="d-inline">Fully Managed:</h5> Personalized Services Available 24x7</li>
                <li><h5 className="d-inline">Secure Returns:</h5> Safe, Secure & Consistent Interest Returns</li>
                <li><h5 className="d-inline">Fully Regulated:</h5> FCA Regulated & FSCS Covered Funds</li>
              
                  </div>
                  <div className="col-sm-3">
                <div className="ml-5">
                <img src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/offer-new.png" alt=""/>
              </div>

                  </div>
                </div>
              </ul>
            </div>
            <div className="col-sm-4 bg-white" id="form">
            
            <div className="text-center mt-4">
            <h5 >Achieve Your Financial Goals By <br/> Investing With Us Today!</h5>
            <p id="psize">Fill in the form to reach out to us and we  will call you back in   <br/>24 hours.</p>
            </div>
            <form>
        <div className="form-row">
          <div className="col-sm ">
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col-sm">
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>
        
        <div className="form-row mt-3">
        <div className="col-sm">
            <input type="emile" className="form-control" placeholder="Emil Adderss" />
          </div>
        </div>
        


        <div className="form-row mt-3 w-100">
        <div className="form-group w-100">
        <select className="form-control" id="exampleFormControlSelect1">
          <option id="psize">Which investment option interested in ?</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
        </div>


        
        <div className="form-row w-100">
        <div className="form-group w-100">
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Investment sum</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
        </div>

        <button className="btn btn-success btn-lg btn-block mb-4">CONTACT US</button>
      </form>
           

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
