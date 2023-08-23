import Footer from "../components/footer"
import Header from "../components/header"

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <div className="slider-area ">
          <div className="slider-active dot-style">
            <div
              className="single-slider  hero-overly slider-height d-flex align-items-center"
              data-background="assets/img/hero/Hotel1.jpg"
            >
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-9">
                    <div className="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">
                        Best Hotel Search
                      </h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">
                        Only available at STAYCHAIN
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider  hero-overly slider-height d-flex align-items-center"
              data-background="assets/img/hero/hotel2.jpg"
            >
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-9">
                    <div className="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">
                        Best Room Search
                      </h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">
                        Only available at STAYCHAIN
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider  hero-overly slider-height d-flex align-items-center"
              data-background="assets/img/hero/hotel3.jpg"
            >
              <div className="container">
                <div className="row justify-content-center text-center">
                  <div className="col-xl-9">
                    <div className="h1-slider-caption">
                      <h1 data-animation="fadeInUp" data-delay=".4s">
                        Best Payment Search
                      </h1>
                      <h3 data-animation="fadeInDown" data-delay=".4s">
                        Only available at STAYCHAIN
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-area">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <form action="">
                  <div className="booking-wrap d-flex justify-content-between align-items-center">
                    <div className="single-select-box mb-30">
                      <div className="boking-tittle">
                        <span> Check In Date:</span>
                      </div>
                      <div className="boking-datepicker">
                        <input id="datepicker1" placeholder="10/12/2020" />
                      </div>
                    </div>

                    <div className="single-select-box mb-30">
                      <div className="boking-tittle">
                        <span>Check OutDate:</span>
                      </div>
                      <div className="boking-datepicker">
                        <input id="datepicker2" placeholder="12/12/2020" />
                      </div>
                    </div>

                    <div className="single-select-box mb-30">
                      <div className="boking-tittle">
                        <span>Adults:</span>
                      </div>
                      <div className="select-this">
                        <form action="#">
                          <div className="select-itms">
                            <select name="select" id="select1">
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="single-select-box mb-30">
                      <div className="boking-tittle">
                        <span>Children:</span>
                      </div>
                      <div className="select-this">
                        <form action="#">
                          <div className="select-itms">
                            <select name="select" id="select2">
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="single-select-box mb-30">
                      <div className="boking-tittle">
                        <span>Rooms:</span>
                      </div>
                      <div className="select-this">
                        <form action="#">
                          <div className="select-itms">
                            <select name="select" id="select3">
                              <option value="">1</option>
                              <option value="">2</option>
                              <option value="">3</option>
                              <option value="">4</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="single-select-box pt-45 mb-30">
                      <a href="#" className="btn select-btn">
                        Check-Room
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <section className="make-customer-area customar-padding fix">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="customer-img mb-120">
                  <img src="assets/img/customer/customar1.png" className="customar-img1" alt="" />
                  <img src="assets/img/customer/customar2.png" className="customar-img2" alt="" />
                  <div className="service-experience heartbeat">
                    <h3>
                      25 Years of Service
                      <br />
                      Experience
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" col-xl-4 col-lg-4">
                <div className="customer-caption">
                  <span>About our company</span>
                  <h2>Make the customer the hero of your story</h2>
                  <div className="caption-details">
                    <p className="pera-dtails">
                      Lorem ipsum dolor sit amet, consectetur adipisic- ing elit, sed do eiusmod tempor inc.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.{" "}
                    </p>
                    <a href="#" className="btn more-btn1">
                      Learn More <i className="ti-angle-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="room-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8"></div>
            </div>
          </div>
        </section>

        <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-9 col-md-9">
                <div className="h1-testimonial-active">
                  <div className="single-testimonial pt-65">
                    <div className="font-back-tittle mb-105">
                      <div className="archivment-front">
                        <img src="assets/img/logo/testimonial.png" alt="" />
                      </div>
                      <h3 className="archivment-back">Testimonial</h3>
                    </div>

                    <div className="testimonial-caption text-center">
                      <p>
                        Yorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi.
                      </p>

                      <div className="testimonial-ratting">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="rattiong-caption">
                        <span>
                          Clifford Frazier, <span>Regular Client</span>{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="single-testimonial  pt-65">
                    <div className="font-back-tittle mb-105">
                      <div className="archivment-front">
                        <img src="assets/img/logo/testimonial.png" alt="" />
                      </div>
                      <h3 className="archivment-back">Testimonial</h3>
                    </div>

                    <div className="testimonial-caption text-center">
                      <p>
                        Yorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi.
                      </p>
                      <div className="testimonial-ratting">
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                        <a href="#">
                          <i className="fas fa-star"></i>
                        </a>
                      </div>
                      <div className="rattiong-caption">
                        <span>
                          Clifford Frazier, <span>Regular Client</span>{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-area blog-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="font-back-tittle mb-50">
                  <div className="archivment-front">
                    <h3>Our Services</h3>
                  </div>
                  <h3 className="archivment-back">Recent News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-blog mb-30">
                  <div className="blog-img">
                    <a href="single-blog.html">
                      <img src="assets/img/our_blog/blog-img1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-caption">
                    <div className="blog-cap-top d-flex justify-content-between mb-40">
                      <span>news</span>
                      <ul>
                        <li>
                          by<a href="#"> Jhon Guru</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-cap-mid">
                      <p>
                        <a href="single-blog.html">
                          5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are
                        </a>
                      </p>
                    </div>

                    <div className="blog-cap-bottom d-flex justify-content-between">
                      <span>Feb 28, 2020</span>
                      <span>
                        <img src="assets/img/our_blog/blog-comments-icon.jpg" alt="" />3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-blog mb-30">
                  <div className="blog-img">
                    <a href="single-blog.html">
                      {" "}
                      <img src="assets/img/our_blog/blog-img2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-caption">
                    <div className="blog-cap-top d-flex justify-content-between mb-40">
                      <span>news</span>
                      <ul>
                        <li>
                          by<a href="#"> Jhon Guru</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-cap-mid">
                      <p>
                        <a href="single-blog.html">
                          5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are
                        </a>
                      </p>
                    </div>

                    <div className="blog-cap-bottom d-flex justify-content-between">
                      <span>Feb 28, 2020</span>
                      <span>
                        <img src="assets/img/our_blog/blog-comments-icon.jpg" alt="" />3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-blog mb-30">
                  <div className="blog-img">
                    <a href="single-blog.html">
                      <img src="assets/img/our_blog/blog-img3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-caption">
                    <div className="blog-cap-top d-flex justify-content-between mb-40">
                      <span>news</span>
                      <ul>
                        <li>
                          by<a href="#"> Jhon Guru</a>
                        </li>
                      </ul>
                    </div>
                    <div className="blog-cap-mid">
                      <p>
                        <a href="single-blog.html">
                          5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are
                        </a>
                      </p>
                    </div>

                    <div className="blog-cap-bottom d-flex justify-content-between">
                      <span>Feb 28, 2020</span>
                      <span>
                        <img src="assets/img/our_blog/blog-comments-icon.jpg" alt="" />3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-area fix">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-md-12">
                <div className="gallery-active owl-carousel">
                  <div className="gallery-img">
                    <a href="#">
                      <img src="assets/img/gallery/gallery1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="gallery-img">
                    <a href="#">
                      <img src="assets/img/gallery/gallery2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="gallery-img">
                    <a href="#">
                      <img src="assets/img/gallery/gallery3.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
