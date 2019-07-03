import React from "react";
function Clients() {
  return (
  <div>
      <div className="section bg-light">
          <div className="container">
              <h1 className="text-primary text-center ">Happy Clients</h1>
              <p className="text-center pt-3">See what our happy clients got to say about us</p>
              <div className="row pt-5 ">
                  <div className="col-sm mr-5 bg-white">
                  <div className="d-flex pt-5 justify-content-center">
                      <img className="border border-dark" src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/testi-1.jpg" alt=""/>
                 </div>
                      <p className="text-center pt-5">" Independent investors have been managing my portfolios for more than 5 years now. Apart from helping me make sound financial decisions, the further ensure that every penny you invest is accounted for. I am truly happy with their work. “</p>
                      <h5 className="text-center mt-5 pb-5">TERRY PARKER</h5>
                  </div>

                  <div className="col-sm mr-5 bg-white">
                  <div className="d-flex pt-5 justify-content-center">
                      <img className="border border-dark" src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/testi-2.jpg" alt=""/>
                 </div>
                      <p className="text-center pt-5">" I have invested with various other investment firms in the UK, but none has exceeded my expectations like Independent Investors. Their personalized services ensured stable and consistent returns. The team is professional yet very approachable and has helped me gain the best returns from the investments. I would definitely recommend them to my acquaintances. “</p>
                      <h5 className="text-center mt-5 pb-5">MATHEW JENSON</h5>
                  </div>

                  <div className="col-sm bg-white">
                  <div className="d-flex pt-5 justify-content-center">
                      <img className="border border-dark" src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/testi-3.jpg" alt=""/>
                 </div>
                      <p className="text-center pt-5">“The personalized services from Independent investors has always helped me with my financial goals. The team is highly proactive and available to answer queries at all times. I would highly recommend their services."</p>
                      <h5 className="text-center mt-5 pb-5">MARIAM SALAM</h5>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}
export default Clients;
