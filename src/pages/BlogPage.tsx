import { Link } from "react-router"
import PageLayout from "../components/PageLayout"
import { BLOG_URL, CONTACT_URL } from "../utils/Routes"
import { useEffect, useState } from "react";
import { getAndCacheJsonFromS3, getCachedData, getExcerpt, isCacheValid } from "../utils/helper";

const BlogPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const STORAGE_KEY = 's3-cached-data';
    const CACHE_EXPIRY_MINUTES = 60;

    try {
      // Check if cache exists and is valid
      if (isCacheValid(STORAGE_KEY, CACHE_EXPIRY_MINUTES)) {
        const cachedData = getCachedData(STORAGE_KEY);
        if (cachedData) {
          setData(cachedData);
          return;
        }
      }

      // If no valid cache, fetch fresh data
      fetchNewData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      console.log('done==========')
      setLoading(false);
    }
  }, []);
  
  const fetchNewData = async () => {
    try {
      // You would call your S3 function here if needed
      console.log('fetching==========')
      const freshData = await getAndCacheJsonFromS3();
      setData(freshData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Fetch failed');
    }
  };

  console.log('first==== ', data)
  console.log('error==== ', error)

  return (
    <PageLayout>
      <section className="page-banner-area bgs-cover py-135 rpy-100" style={{backgroundImage: "url('/images/new/blog-header.jpg')"}}>
            <div className="container">
                <div className="banner-inner text-white text-center">
                    <h1 className="page-title wow fadeInUp delay-0-2s">Blog</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s">
                        <li className="breadcrumb-item"><Link to={"/"}>home</Link></li>
                            <li className="breadcrumb-item active">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        
        
        <section className="blog-standard-area py-130 rpy-100">
            <div className="container">
                <div className="row gap-60">
                    <div className="col-lg-8">
                        <div className="blog-standard-inner">
                          {loading ? (
                            <>
                            <p>Loading...</p>
                          </>
                            ) : (
                            <>
                            {data?.length > 0 ? (
                              <>
                              {data?.reverse()?.map(post => (
                                <div key={post.id} className="blog-standard-item wow fadeInUp delay-0-2s">
                                    <div className="image">
                                        <img src={post?.headerImage || "/images/new/blog-header-default.jpg"} alt="Blog" />
                                    </div>
                                    <div className="content">
                                        <h4><Link to={`${BLOG_URL}/${post?.id}`}>{post?.title}</Link></h4>
                                        <p>{ getExcerpt(post?.introText) }</p>
                                        <div className="blog-meta-two">
                                            <a className="author">Joshua Udonne</a>
                                            <a className="date"><i className="far fa-calendar-alt"></i>{ new Date(post?.createdAt).toLocaleDateString() }</a>
                                        </div>
                                        <hr />
                                        <Link to={`${BLOG_URL}/${post?.id}`} className="read-more">{'Read More >>'}</Link>
                                    </div>
                                </div>
                              ))?.reverse()}
                              </>
                            ) : (
                               <>
                                <p>No posts yet...</p>
                               </>
                              )}
                            </>
                          )}
                            

                            {/* <ul className="pagination flex-wrap wow fadeInUp delay-0-2s">
                                <li className="page-item disabled">
                                    <span className="page-link"><i className="fas fa-angle-left"></i></span>
                                </li>
                                <li className="page-item active">
                                    <span className="page-link">
                                        01
                                        <span className="sr-only">(current)</span>
                                    </span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">02</a></li>
                                <li className="page-item"><a className="page-link" href="#">03</a></li>
                                <li className="page-item"><a className="page-link" href="#">04</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fas fa-angle-right"></i></a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-sm-9">
                        <div className="main-sidebar rmt-75">
                            <div className="widget widget-search wow fadeInUp delay-0-2s">
                                <h4 className="widget-title">Search</h4>
                                <form action="#" className="default-search-form">
                                    <input type="text" placeholder="Find Keywords" required />
                                    <button type="submit" className="searchbutton far fa-search"></button>
                                </form>
                            </div>
                            {/* <div className="widget widget-category wow fadeInUp delay-0-4s">
                                <h4 className="widget-title">Category</h4>
                                <ul>
                                    <li><a href="blog.html">Digital Solutions</a> <span>(25)</span></li>
                                    <li><a href="blog.html">Saas Landing</a> <span>(09)</span></li>
                                    <li><a href="blog.html">WordPress</a> <span>(18)</span></li>
                                    <li><a href="blog.html">Graphics Design</a> <span>(05)</span></li>
                                    <li><a href="blog.html">Business Consulting</a> <span>(03)</span></li>
                                    <li><a href="blog.html">SEO Optimization</a> <span>(04)</span></li>
                                    <li><a href="blog.html">Marketing</a> <span>(05)</span></li>
                                </ul>
                            </div> */}
                            {/* <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                                <h4 className="widget-title">Recent News</h4>
                                <ul>
                                    <li>
                                        <div className="image">
                                            <img src="/images/widgets/news1.jpg" alt="News" />
                                        </div>
                                        <div className="content">
                                            <h5><a href="blog-details.html">Build Group Chat App With Vanilla JS Twilio Node</a></h5>
                                            <span className="date">
                                                <i className="far fa-calendar-alt"></i>
                                                <a href="#">25 June 2022</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img src="/images/widgets/news2.jpg" alt="News" />
                                        </div>
                                        <div className="content">
                                            <h5><a href="blog-details.html">Expand Your Horiz Desktop Wallpapers Edition See</a></h5>
                                            <span className="date">
                                                <i className="far fa-calendar-alt"></i>
                                                <a href="#">25 June 2022</a>
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <img src="/images/widgets/news3.jpg" alt="News" />
                                        </div>
                                        <div className="content">
                                            <h5><a href="blog-details.html">Manage Accessible Design System With Colorntes</a></h5>
                                            <span className="date">
                                                <i className="far fa-calendar-alt"></i>
                                                <a href="#">25 June 2022</a>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}
                            <div className="widget widget-cta wow fadeInUp delay-0-2s px-1">
                                <h4>Book Marketting Consultation</h4>
                                <Link to={CONTACT_URL} className="theme-btn style-two">Contact Us <i className="fas fa-angle-double-right"></i></Link>
                                <img src="/images/widgets/cta.png" alt="CTA" />
                                <img className="cta-bg-line" src="/images/widgets/cta-bg-line.png" alt="CTA bg line" />
                                <img className="cta-bg-dots" src="/images/widgets/cta-bg-dots.png" alt="CTA bg Dots" />
                            </div>
                            {/* <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                                <h4 className="widget-title">Popular Tags</h4>
                                <div className="tag-coulds">
                                    <a href="blog.html">Design</a>
                                    <a href="blog.html">Landing</a>
                                    <a href="blog.html">software</a>
                                    <a href="blog.html">web</a>
                                    <a href="blog.html">education</a>
                                    <a href="blog.html">email marketing</a>
                                    <a href="blog.html">SEO</a>
                                    <a href="blog.html">development</a>
                                    <a href="blog.html">wordpress</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </PageLayout>
  )
}

export default BlogPage