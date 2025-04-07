import { Link, useParams } from "react-router";
import PageLayout from "../components/PageLayout";
import { BLOG_URL, CONTACT_URL } from "../utils/Routes";
import { useEffect, useState } from "react";
import {
  getAndCacheJsonFromS3,
  getCachedData,
  isCacheValid,
} from "../utils/helper";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const STORAGE_KEY = "s3-cached-data";
    const CACHE_EXPIRY_MINUTES = 60;

    try {
      // Check if cache exists and is valid
      if (isCacheValid(STORAGE_KEY, CACHE_EXPIRY_MINUTES)) {
        const cachedData = getCachedData(STORAGE_KEY);
        if (cachedData) {
          setPosts(cachedData);
          let currentPost = cachedData?.filter(
            (curr: any) => curr.id === Number(id)
          )[0];
          setPost(currentPost);
          return;
        }
      }

      fetchNewData();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load data");
    } finally {
      console.log("done==========");
      setLoading(false);
    }
  }, [id]);

  const fetchNewData = async () => {
    try {
      // You would call your S3 function here if needed
      console.log("fetching==========");
      const freshData = await getAndCacheJsonFromS3();
      setPosts(freshData);
      let currentPost = freshData?.filter(
        (curr: any) => curr.id === Number(id)
      )[0];
      setPost(currentPost);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Fetch failed");
    }
  };

  console.log("first==== ", id, loading, error);
  //   console.log("error==== ", error);

  return (
    <PageLayout>
      <section
        className="page-banner-area bgs-cover py-135 rpy-100"
        style={{
          backgroundImage: `url(${
            post?.headerImage || "/images/new/blog-header-default.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="banner-inner text-white text-center">
            <h1 className="page-title wow fadeInUp delay-0-2s">
              {post?.title}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s">
                <li className="breadcrumb-item">
                  <Link to={"/"}>home</Link>
                </li>
                <li className="breadcrumb-item active">{post?.title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="blog-details-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-60">
            <div className="col-lg-8">
              <div className="blog-details-content wow fadeInUp delay-0-2s">
                <div className="blog-meta-two pb-15">
                  {/* <a className="tag" href="blog.html">
                    UX/UI Strategy
                  </a> */}
                  <a className="author">Joshua Udonne</a>
                  <a className="date">
                    <i className="far fa-calendar-alt"></i>{" "}
                    {new Date(post?.createdAt).toLocaleDateString()}
                  </a>
                </div>
                <div className="title mb-20">
                  {post?.headerText && <h3>{post?.headerText}</h3>}
                </div>
                <p>{post?.introText}</p>

                {post?.sections && (
                  <>
                    {post?.sections.map((curr: any) => (
                      <div key={curr.id} className="w-full py-20">
                        {curr?.picture && (
                          <div className="image mt-60 mb-30">
                            <img src={curr?.picture} alt="Blog Details" />
                          </div>
                        )}
                        {curr?.subHeading && <h4>{curr?.subHeading}</h4>}
                        {curr?.sectionText && <p>{curr?.sectionText}</p>}
                      </div>
                    ))}
                  </>
                )}
              </div>

              <hr className="mt-50" />
            </div>
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="main-sidebar rmt-75">
                <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Recent Posts</h4>
                  <ul>
                    {posts
                      ?.filter((c) => c.id !== Number(id))
                      ?.slice(-3)
                      ?.map((item: any) => (
                        <li key={item.id}>
                          <div className="image">
                            <img
                              src={
                                item?.headerImage ||
                                "/images/new/blog-header-default.jpg"
                              }
                              alt="News"
                            />
                          </div>
                          <div className="content">
                            <h5>
                              <Link to={`${BLOG_URL}/${item?.id}`}>
                                {item?.title}
                              </Link>
                            </h5>
                            <span className="date">
                              <i className="far fa-calendar-alt"></i>
                              <a>
                                {new Date(post?.createdAt).toLocaleDateString()}
                              </a>
                            </span>
                          </div>
                        </li>
                      ))
                      ?.reverse()}
                  </ul>
                </div>
                <div className="widget widget-cta wow fadeInUp delay-0-2s px-1">
                  <h4>Book Marketting Consultation</h4>
                  <Link to={CONTACT_URL} className="theme-btn style-two">
                    Contact Us <i className="fas fa-angle-double-right"></i>
                  </Link>
                  <img src="/images/widgets/cta.png" alt="CTA" />
                  <img
                    className="cta-bg-line"
                    src="/images/widgets/cta-bg-line.png"
                    alt="CTA bg line"
                  />
                  <img
                    className="cta-bg-dots"
                    src="/images/widgets/cta-bg-dots.png"
                    alt="CTA bg Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SingleBlogPage;
