import PageLayout from '../components/PageLayout'

const PortfolioPage = () => {
  return (
    <PageLayout>
      <section className="page-banner-area bgs-cover py-135 rpy-100" style={{backgroundImage: "url('/images/background/banner.jpg')"}}>
        <div className="container">
            <div className="banner-inner text-white text-center">
                <h1 className="page-title " data-aos="fade-up" data-aos-delay="200">Portfolio</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center mb-5 " data-aos="fade-up" data-aos-delay="400">
                        <li className="breadcrumb-item"><a href="index.html">home</a></li>
                        <li className="breadcrumb-item active">Portfolio</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
    
    
    <section className="project-grid-area rel z-2 py-130 rpy-100">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center mb-50 " data-aos="fade-up" data-aos-delay="200">
                        <h2>Let’s Insides About Recent Project Best Work Gallery</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae .</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img src="/images/projects/project-grid1.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid1.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Web Development</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="400">
                        <div className="image">
                            <img src="/images/projects/project-grid2.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid2.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Mobile Applications</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="600">
                        <div className="image">
                            <img src="/images/projects/project-grid3.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid3.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">IT Consulting</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img src="/images/projects/project-grid4.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid4.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Business Analysis</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="400">
                        <div className="image">
                            <img src="/images/projects/project-grid5.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid5.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">UX/UI Strategy</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="600">
                        <div className="image">
                            <img src="/images/projects/project-grid6.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid6.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Cyber Security</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="200">
                        <div className="image">
                            <img src="/images/projects/project-grid7.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid7.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Market Research</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="400">
                        <div className="image">
                            <img src="/images/projects/project-grid8.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid8.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Product Engineering</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="project-grid-item " data-aos="fade-up" data-aos-delay="600">
                        <div className="image">
                            <img src="/images/projects/project-grid9.jpg" alt="Project Grid" />
                            <a className="plus" href="/images/projects/project-grid9.jpg"></a>
                        </div>
                        <div className="content">
                            <h4><a href="project-details.html">Software Engineering</a></h4>
                            <a href="project-details.html" className="detail-btn"><i className="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <div className="project-more-btn text-center">
                <a href="project-grid.html" className="theme-btn style-two " data-aos="fade-up" data-aos-delay="200">View More Gallery <i className="fas fa-long-arrow-right"></i></a>
            </div> --> */}
        </div>
      </section>
    </PageLayout>
  )
}

export default PortfolioPage