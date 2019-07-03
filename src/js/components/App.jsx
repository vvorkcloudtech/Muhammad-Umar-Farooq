import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Offer from "./Offer"
import Clients from "./Clients"
import Help from "./Help"
import About from "./About"
import Form from "./Form"
import Footer from "./Footer"

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Offer />
      <Help />
      <Clients />
      <Form />
      <Footer />

    </div>
  );
}
export default App;
