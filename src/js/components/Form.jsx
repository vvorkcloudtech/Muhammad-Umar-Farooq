import React from "react";
const Form =()=>{
    return(
        <div className="bg-light">
            <br/>
            <hr/>
            <br/>
            <div className="container">
        <div className="row">
          <div className="col-sm">
          <div className="col-sm bg-white p-4  ">
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

        <button id="btcol" className="btn btn-success btn-lg btn-block">CONTACT US</button>
      </form>
           
          </div>
          </div>
          <div className="col-sm mt-4 ml-5">
            <h5>REACH OUT TO US FOR CUSTOM FINANCIAL COUNSEL AND  GUIDANCE.</h5>
            <br/>
            <p>We are a team of investment specialists focused on bringing you tailored investment plans to help you realise your financial goals.</p>
            <h5>HAVE ANY QUESTIONS? REACH US BY PHONE.</h5>
            <br/>
            <h5>Call us on +44 203 695 1157</h5>
            <br/>
            <h5>GET MORE INFO QUICKLY.</h5>
          </div>
          
        </div>
      </div>
      <div className="mt-5">
          <img className="img-fluid" src="../img/map.png" alt=""/>
      </div>
            
        </div>
    )

}
export default Form;