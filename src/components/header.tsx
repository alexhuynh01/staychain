export default function Header() {
  return (
    <header>
      <div className="header-area header-sticky">
        <div className="main-header ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/STAYCHAIN.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="main-menu f-left d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a href="index.html">Home-Page</a>{" "}
                      </li>
                      <li>
                        <a href="rooms.html">Our-Room</a>{" "}
                      </li>
                      <li>
                        <a href="history-pay.html">History-Payment</a>{" "}
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="main-menu f-right d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <a href="login.html">Log-in/Sign-up</a>{" "}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="header-btn">
                  <a href="payments.html" className="btn btn1 d-none d-lg-block">
                    Book Online
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
