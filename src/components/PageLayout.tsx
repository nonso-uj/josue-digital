import { Link } from 'react-router'
import Navbar from './Navbar'
import { ABOUT_URL, ACADEMY_URL, CONTACT_URL, MARKETING_URL, SALES_URL, SERVICES_URL } from '../utils/Routes'
import { useEffect } from 'react';
// import Preloader from './Preloader';

const PageLayout = ({ children }: any) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <div className="page-wrapper">
            
        {/* <Preloader /> */}
        <div className="preloader">
            <div className="custom-loader"></div>
        </div>
        
        <Navbar />
        
        <div className="form-back-drop"></div>

        { children }

        <footer className="main-footer bgc-gray footer-white rel z-1 mt-80">
            <div className="footer-cta-wrap">
                <div className="container">

                    <div className="footer-cta-inner bgs-cover" style={{backgroundImage: "url('/images/footer/footer-cta-bg.jpg')"}}>
                        <div className="section-title wow fadeInLeft delay-0-2s">
                            <span className="sub-title">Need Any Consultations ?</span>
                            <h2>We’re Ready to Growth Your Business</h2>
                        </div>
                        <Link to={CONTACT_URL} className="theme-btn style-three wow fadeInRight delay-0-2s">Get Free Quote <i className="fas fa-long-arrow-right"></i></Link>
                        <div className="hotline wow fadeInRight delay-0-2s">
                            <i className="fas fa-phone"></i>
                            <div className="content">
                                <span>Hotline</span><br />
                                <a href="tel:+2349040014613">+234 0904 001 4613</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row medium-gap">
                    <div className="col-xl-4 col-sm-6">
                        <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
                            <div className="footer-logo mb-30">
                                <Link to={'/'}>
                                    <h3 className="text-white my-auto">Josue Digital</h3>
                                </Link>
                            </div>
                            <p>At Josue Digital, we are deeply dedicated to your success. Explore our journey, get acquainted with our team, and experience our unwavering dedication to ensuring your success.</p>
                            <Link to={ABOUT_URL} className="read-more">Learn More Us <i className="fas fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 order-xl-2">
                        <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
                            <h4 className="footer-title">Newsletter</h4>
                            <p>Sed perspiciatis unde omnste natus error voluptatem accusante.</p>
                            <form action="#">
                                <label htmlFor="email"><i className="far fa-envelope"></i></label>
                                <input id="email" type="email" placeholder="support@gmail.com" required />
                                <button>Sign Up</button>
                            </form>
                            <h5>Follow Us</h5>
                            <div className="social-style-one">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="row">
                            <div className="col-md-6 col-6 col-small">
                                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                                    <h4 className="footer-title">Quick Links</h4>
                                    <ul className="list-style-two">
                                        <li><Link to={ABOUT_URL}>About Company</Link></li>
                                        <li><Link to={SERVICES_URL}>Latest Services</Link></li>
                                        {/* <li><Link to={PORTFOLIO_URL}>Popular Works</Link></li> */}
                                        {/* <!-- <li><a href="<?php echo site_url('/blog') ?>">Blog & News</a></li> --> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-6 col-small">
                                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                                    <h4 className="footer-title">Services</h4>
                                    <ul className="list-style-two">
                                        <li><Link to={ACADEMY_URL}>Online Marketing Academy</Link></li>
                                        <li><Link to={MARKETING_URL}>Digital Marketing Services</Link></li>
                                        <li><Link to={SALES_URL}>Sales and Lead Generation Solutions</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bgc-black mt-20 pt-20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="copyright-text text-center wow fadeInLeft delay-0-2s">
                                <p>© 2025 Josue Digital. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-shapes">
                <img className="shape one" src="/images/footer/footer-bg-weve-shape.png" alt="Shape" />
                <img className="shape two" src="/images/footer/footer-bg-line-shape.png" alt="Shape" />
                <img className="shape three wow fadeInRight delay-0-8s" src="/images/footer/footer-right.png" alt="Shape" />
            </div>
        </footer>

        <button className="scroll-top scroll-to-target" data-target="html"><span className="fas fa-angle-double-up"></span></button>

    </div>
  )
}

export default PageLayout