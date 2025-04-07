import { Link } from 'react-router'
import { ABOUT_URL, BLOG_URL, CONTACT_URL, SERVICES_URL } from '../utils/Routes'

const Navbar = () => {
  return (
    <header className="main-header header-three menu-white menu-absolute">

      {/* <!-- <div className="header-top-wrap bgc-secondary">
          <div className="container">
              <div className="header-top">
                  <div className="text"><span className="hello">Hello</span> We’re professional IT solutions company. Let’s work together <Link to="contact.html">Contact Us</Link></div>
              </div>
          </div>
      </div> --> */}
      
      <div className="header-upper">
          <div className="container clearfix">

              <div className="header-inner rel d-flex align-items-center">
                  <div className="logo-outer">
                      <div className="logo">
                          <Link to={"/"}>
                              {/* <!-- <img src="<?php bloginfo('template_directory');?>/assets/images/logos/logo-two.png" alt="Logo" title="Logo"> --> */}
                              <h3 className="text-white my-auto">Josue Digital</h3>
                          </Link>
                      </div>
                  </div>

                  <div className="nav-outer ms-lg-auto clearfix">
                      <nav className="main-menu navbar-expand-lg">
                          <div className="navbar-header py-10">
                          <div className="mobile-logo">
                              <Link to={"/"}>
                                      {/* <!-- <img src="<?php bloginfo('template_directory');?>/assets/images/logos/logo-two.png" alt="Logo" title="Logo"> --> */}
                                      <h4 className="text-white my-auto">Josue <br />Digital</h4>
                              </Link>
                          </div>
                          
                              <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                                  <span className="icon-bar"></span>
                              </button>
                          </div>

                          <div className="navbar-collapse collapse clearfix">
                              <ul className="navigation clearfix">
                                  <li>
                                    <Link to={"/"}>Home</Link>
                                  </li>

                                  <li>
                                    <Link to={ABOUT_URL}>About us</Link>
                                  </li>
                                  
                                  <li>
                                    <Link to={SERVICES_URL}>Services</Link>
                                  </li>
                                  
                                  <li>
                                    <Link to={BLOG_URL}>Blog</Link>
                                  </li>

                                  {/* <!-- <li className="dropdown"><Link to="#">services</Link>
                                      <ul>
                                          <li><Link to="services.html">Services One</Link></li>
                                          <li><Link to="services2.html">Services Two</Link></li>
                                          <li><Link to="service-details.html">service details</Link></li>
                                      </ul>
                                  </li> -->
                                  
                                  <!-- <li className=""><Link to="<?php echo site_url('/portfolio') ?>">Portfolio</Link> -->
                                      <!-- <ul>
                                          <li><Link to="project-grid.html">Project Grid</Link></li>
                                          <li><Link to="project-masonry.html">Project Masonry.</Link></li>
                                          <li><Link to="project-details.html">Project Details</Link></li>
                                      </ul> -->
                                  <!-- </li> -->
                                  <!-- <li className="dropdown"><Link to="#">shop</Link>
                                      <ul>
                                          <li><Link to="shop.html">shop grid</Link></li>
                                          <li><Link to="product-details.html">product details</Link></li>
                                          <li><Link to="cart.html">cart page</Link></li>
                                          <li><Link to="checkout.html">checkout</Link></li>
                                      </ul>
                                  </li> -->
                                  <!-- <li>
                                      <Link to="<?php echo site_url('/blog') ?>">Blog</Link>
                                      </li> --> */}

                                  <li>
                                    <Link to={CONTACT_URL}>Contact us</Link>
                                  </li>
                                  {/* <!-- <li className="dropdown"><Link to="#">pages</Link>
                                      <ul>
                                          <li><Link to="about.html">About us</Link></li>
                                          <li><Link to="contact.html">Contact us</Link></li>
                                          <li><Link to="team.html">Team</Link></li>
                                          <li><Link to="faqs.html">faqs</Link></li>
                                          <li><Link to="pricing.html">Pricing Plan</Link></li>
                                          <li><Link to="404.html">404 error</Link></li>
                                      </ul>
                                  </li> --> */}
                              </ul>
                          </div>

                      </nav>
                  </div>
                  
                  {/* <!-- Nav Search -->
                  <!-- <div className="nav-search py-10">
                      <button className="far fa-search"></button>
                      <form action="#" className="hide">
                          <input type="text" placeholder="Search" className="searchbox" required="">
                          <button type="submit" className="searchbutton far fa-search"></button>
                      </form>
                  </div> --> */}
                  
                  {/* <!-- Menu Button -->
                  <!-- <div className="menu-btns"> -->
                      <!-- menu sidbar -->
                      <!-- <div className="menu-sidebar">
                          <button>
                              <span className="toggle-btn"></span>
                          </button>
                      </div>
                  </div> --> */}
              </div>
          </div>
      </div>
    </header>
  )
}

export default Navbar