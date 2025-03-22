import { Link } from 'react-router'
import PageLayout from '../components/PageLayout'
import { ABOUT_URL, ACADEMY_URL, MARKETING_URL, SALES_URL, SERVICES_URL } from '../utils/Routes'

const HomePage = () => {
  return (
    <PageLayout>
      <section className="slider-area bgs-cover pt-185 pb-160" style={{backgroundImage: "url('/images/slider/slider-bg2.jpg')"}}>
          <div className="container">
              <div className="main-slider-active">
                  <div className="slider-item">
                      <div className="slide-content text-white">
                          <span className="sub-title">Your Success, Our Mission</span>
                          {/* <!-- <span className="h2">We’re Digital</span> --> */}
                          <h1>Growth Marketing</h1>
                          <Link to={SERVICES_URL} className="theme-btn">Let’s Get Started <i className="fas fa-long-arrow-right"></i></Link>
                      </div>
                  </div>
                  <div className="slider-item">
                      <div className="slide-content text-white">
                          <span className="sub-title">Your Success, Our Strategy</span>
                          {/* <!-- <span className="h2">We’re Digital</span> --> */}
                          <h1>Website and Brand Management</h1>
                          <Link to={SERVICES_URL} className="theme-btn">Let’s Get Started <i className="fas fa-long-arrow-right"></i></Link>
                      </div>
                  </div>
                  <div className="slider-item">
                      <div className="slide-content text-white">
                          <span className="sub-title">Turning Clicks into Customers</span>
                          {/* <!-- <span className="h2">We’re Digital</span> --> */}
                          <h1>Social Media Marketing</h1>
                          <Link to={SERVICES_URL} className="theme-btn">Let’s Get Started <i className="fas fa-long-arrow-right"></i></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      <section className="feature-area-two rel z-1">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                        <div className="icon"><i className="flaticon-trust"></i></div>
                        <h4>Creative Innovators</h4>
                        <p>Unique ideas for engaging content and campaigns.</p>
                        {/* <!-- <a className="more-btn" href="<?php echo site_url('/services') ?>"><i className="far fa-angle-right"></i></a> --> */}
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item style-two wow fadeInDown delay-0-2s">
                        <div className="icon"><i className="flaticon-technical-support"></i></div>
                        <h4>Data-Driven Tactics</h4>
                        <p>Strategies based on real-time data and consumer insights.</p>
                        {/* <!-- <a className="more-btn" href="<?php echo site_url('/services') ?>"><i className="far fa-angle-right"></i></a> --> */}
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item style-two mt-45 wow fadeInUp delay-0-2s">
                        <div className="icon"><i className="flaticon-social-media"></i></div>
                        <h4>Conversion Focus</h4>
                        <p>Emphasis on turning visitors into customers.</p>
                        {/* <!-- <a className="more-btn" href="<?php echo site_url('/services') ?>"><i className="far fa-angle-right"></i></a> --> */}
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                        <div className="icon"><i className="flaticon-brainstorming"></i></div>
                        <h4>Proven Success</h4>
                        <p>Track record of satisfied clients and successful campaigns.</p>
                        {/* <!-- <a className="more-btn" href="<?php echo site_url('/services') ?>"><i className="far fa-angle-right"></i></a> --> */}
                    </div>
                </div>
            </div>
        </div>
      </section>
  
      <section className="about-area-three pt-25 rpt-0 pb-100 rpb-65 rel z-1">
        <div className="container">
            <div className="row align-items-center gap-100">
                <div className="col-lg-6">
                    <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
                        <img src="/images/about/about-front1.jpg" style={{objectFit: "cover", width: "100%", height: "auto"}} alt="About" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                        <div className="section-title mb-60 rmb-40">
                            <span className="sub-title mb-15">About Josue Digital</span>
                            <h2>Elevate Your Brand, Boost Your Business: Where Ideas Meet Impact in the Digital Realm</h2>
                        </div>
                        <div className="row gap-40">
                            <div className="col-md-6">
                                <div className="service-item style-three">
                                    <div className="icon">
                                        <i className="flaticon-trophy"></i>
                                    </div>
                                    <h4><Link to={ABOUT_URL}>Targeted and Data-Driven Strategies:</Link></h4>
                                    <p>Empower your brand with precision. Stay ahead, make informed decisions, and optimize your ROI with us.</p>
                                    <Link to={ABOUT_URL} className="read-more">Read More <i className="far fa-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-item style-three">
                                    <div className="icon">
                                        <i className="flaticon-pie-chart"></i>
                                    </div>
                                    <h4><Link to={ABOUT_URL}>Comprehensive Online Presence:</Link></h4>
                                    <p>Engage your audience, boost visibility, and enhance your reputation – all under one roof.</p>
                                    <Link to={ABOUT_URL} className="read-more">Read More <i className="far fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-bg-shape">
          <img src="/images/background/about-bg-shape.png" alt="About" />
        </div>
      </section>

      <section className="what-we-provide rel z-1">
        <div className="container">
            <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-10">What We Provide</span>
                <h2>Digital Core Services</h2>
            </div>
            <div className="service-three-slider">
                <div className="service-item-three wow fadeInUp delay-0-2s">
                    <div className="image">
                        <img src="/images/services/online.jpg" alt="Service" />
                        <a className="plus" href="/images/services/service-three1.jpg"><i className="fal fa-plus"></i></a>
                    </div>
                    <div className="content">
                        <div className="top-part">
                            <span className="number">01</span>
                            <div className="icon"><i className="flaticon-coding-1"></i></div>
                            <h4><Link to={ACADEMY_URL}>ONLINE MARKETING ACADEMY</Link></h4>
                        </div>
                        <div className="bottom-part">
                            <p>Unlock the power of digital marketing and content marketing with our comprehensive online courses.</p>
                            <Link to={ACADEMY_URL} className="read-more">Read More <i className="far fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="service-item-three active wow fadeInUp delay-0-4s">
                    <div className="image">
                        <img src="/images/services/media.jpg" alt="Service" />
                        <a className="plus" href="/images/services/service-three2.jpg"><i className="fal fa-plus"></i></a>
                    </div>
                    <div className="content">
                        <div className="top-part">
                            <span className="number">02</span>
                            <div className="icon"><i className="flaticon-layers"></i></div>
                            <h4><Link to={MARKETING_URL}>DIGITAL MEDIA SERVICES</Link></h4>
                        </div>
                        <div className="bottom-part">
                            <p>We specialize in a range of digital marketing services to help you reach your target audience and achieve your business goals.</p>
                            <Link to={MARKETING_URL} className="read-more">Read More <i className="far fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="service-item-three wow fadeInUp delay-0-6s">
                    <div className="image">
                        <img src="/images/services/analysis.jpg" alt="Service" />
                        <a className="plus" href="/images/services/service-three3.jpg"><i className="fal fa-plus"></i></a>
                    </div>
                    <div className="content">
                        <div className="top-part">
                            <span className="number">03</span>
                            <div className="icon"><i className="flaticon-cyber-security-1"></i></div>
                            <h4><Link to={SALES_URL}>SALES AND LEAD GENERATION SOLUTIONS</Link></h4>
                        </div>
                        <div className="bottom-part">
                            <p>Empower your business, unlock its potential today!</p>
                            <Link to={SALES_URL} className="read-more">Read More <i className="far fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="testimonials-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-30">
              <div className="col-lg-8">
                  <div className="section-title mb-25 wow fadeInRight delay-0-2s">
                      <span className="sub-title mb-15">Clients Feedback</span>
                      <h2>What Our Clients Say About Us</h2>
                  </div>
              </div>
              <div className="col-lg-4">
                  <div className="slider-arrow mb-25 text-lg-end">
                      <button className="testi-prev"><i className="far fa-angle-left"></i></button>
                      <button className="testi-next"><i className="far fa-angle-right"></i></button>
                  </div>
              </div>
          </div>
          <div className="testimonial-slider">
              <div className="testimonial-item wow fadeInUp delay-0-2s">
                  <div className="image">
                      <img src="/images/testimonials/testi-author1.jpg" alt="Author" />
                  </div>
                  <div className="content">
                      <div className="testi-header">
                          <h4>Excellent Works</h4>
                          <div className="ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                          </div>
                      </div>
                      <div className="testi-text">
                          Loved the work Josue Digital did with us last December. They trained our staff in content marketing, social media management and digital marketing. We had so much fun.
                      </div>
                      <div className="testi-footer">
                          <div className="icon"><i className="flaticon-quotation"></i></div>
                          <div className="title">
                              <h4>Adebayor Jessica</h4>
                              <span className="designation">Head of HR</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="testimonial-item wow fadeInUp delay-0-4s">
                  <div className="image">
                      <img src="/images/testimonials/testi-author1.jpg" alt="Author" />
                  </div>
                  <div className="content">
                      <div className="testi-header">
                          <h4>Exceptional Partnership</h4>
                          <div className="ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                          </div>
                      </div>
                      <div className="testi-text">
                          Josue Digital did an excellent work on our company startup strategy, brand management and digital marketing. I could not have asked for a better partner to work with.
                      </div>
                      <div className="testi-footer">
                          <div className="icon"><i className="flaticon-quotation"></i></div>
                          <div className="title">
                              <h4>Nurudeen Ali</h4>
                              <span className="designation">Founder</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="testimonial-item wow fadeInUp delay-0-6s">
                  <div className="image">
                      <img src="/images/testimonials/testi-author4.jpg" alt="Author" />
                  </div>
                  <div className="content">
                      <div className="testi-header">
                          <h4>Record Breakers</h4>
                          <div className="ratting">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                          </div>
                      </div>
                      <div className="testi-text">
                          They sold 5000+ of our products in less than a month. I don't think we have reached those numbers before. We have been in business with them ever since
                      </div>
                      <div className="testi-footer">
                          <div className="icon"><i className="flaticon-quotation"></i></div>
                          <div className="title">
                              <h4>Morgan Maxwell</h4>
                              <span className="designation">Sales Lead</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default HomePage