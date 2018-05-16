import React, { Component } from 'react';
import '../styles/VisitorHomePage.css';

class VisitorHomePage extends Component {
  render(){
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">WalkSome</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header className="masthead text-center text-white">
      <div className="masthead-content">
        <div className="container">
          <h1 className="masthead-heading mb-0">Go for a stroll...</h1>
          <h2 className="masthead-subheading mb-0">Discover something new!</h2>
          <a href="#" className="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
        </div>
      </div>
      <div className="bg-circle-1 bg-circle"></div>
      <div className="bg-circle-2 bg-circle"></div>
      <div className="bg-circle-3 bg-circle"></div>
      <div className="bg-circle-4 bg-circle"></div>
    </header>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="https://torontoguardian.com/wp-content/uploads/2016/12/Final-2609-copy.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">For the local...</h2>
              <p>You've been through enough.  Our 10 months of winter are over and it's finally our one week of summer! Get out an enjoy your city!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="http://www.sonic1029.com/wp-content/uploads/sites/3/2017/10/MAC31_TORONTO-ARCHITECTURE_POST01.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-5">
              <h2 className="display-4">For the traveller...</h2>
              <p>You're just visiting, and here's a little secret.  There is a lot more to see than the CN Tower! Check out some cool walking paths, that you can do yourself and the best part is... it's totally free!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <div className="p-5">
              <img className="img-fluid rounded-circle" src="http://www.seetorontonow.com/wp-content/uploads/2018/03/toronto-flatiron-building-copyright-@nguxentravels-from-instagram.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="p-5">
              <h2 className="display-4">See the City!</h2>
              <p>There are dozens of hidden gems in Toronto! Liberty Village, Distillery District, High Park, Queen West, St. Lawrence Market, Sugar Beach, the entire waterfront!!! ... and many more! </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <footer className="py-5 bg-black">
      <div className="container">
        <p className="m-0 text-center text-white small">Copyright &copy; BragaStranMat 2018</p>
      </div>

    </footer>


    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</div>
  )}
}


export default VisitorHomePage;
