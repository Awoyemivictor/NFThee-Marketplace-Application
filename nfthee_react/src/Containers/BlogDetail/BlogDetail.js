import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BlogData } from "../Blog/BlogData";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import BlogService from "../../services/blogServices";
import Moment from "react-moment";
import Loader from "react-loader";
import axios from "axios";

export default function BlogDetail() {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  console.log(id);
  const [BlogId] = useState(id);
  console.log("done", id, BlogId);

  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);

  // useEffect(async () => {
  //   if (BlogId)
  //     BlogService.getBlogByID(BlogId)
  //       .then((res) => {
  //         setLoading(true);
  //         if (res && res.data) {
  //           setBlog(res.data);
  //         }
  //       })
  //       .catch((e) => {
  //         setLoading(true);
  //       });
  // }, [BlogId]);

  useEffect(async () => {
    console.log(BlogId);
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/blog/fetch?blogId=${BlogId}`)
      .then((response) => {
        // setLoading(true);
        console.log(response.data);
        setBlog(response.data.data);
        // setLoading(false);
      })
      .catch((e) => {
        // setLoading(true);
      });
  }, []);
  console.log("::::>", { blog });
  return (
    <>
      <main>
        <section className="bg-section blog-detail-section">
          <div className="container">
            <div className="row mb-3">
              <div className="col-lg-12 col-md-12">
                <Link to="/blog">
                  <span className="back-text">
                    <i className="ri-arrow-left-s-line" />
                    Back
                  </span>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="row">
                  {/* <Loader loaded={loading}> */}
                  {blog && (
                    <div className="col-md-9 col-lg-9 mx-auto">
                      <div className="blog-detail-wrapper">
                        <div className="blog-detail-header text-center mb-4">
                          <h5 className>{blog.title}</h5>
                          <img
                            src={`${blog.uploadFile}`}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="blog-detail-body">
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <h4 className="blog-detail-title-header">
                               Sub Description: {blog.description}
                              </h4>
                              <h2 className="blog-detail-title-header">
                             <span> Description:</span>  {blog.sub_description}
                              </h2>
                              <ul>
                                <li>
                                  <h4 className="blog-detail-title">
                                   Meta Tag: {blog.meta_tag}
                                  </h4>
                                  <p className="blog-detail-text">
                                   Meta Title: {blog.meta_title}
                                  </p>
                                  <p className="blog-detail-text">
                                  Meta Description:  {blog.meta_description}
                                  </p>
                                  <p className="blog-detail-text">
                                   Author: {blog.author_name}
                                  </p>
                                </li>
                              </ul>

                              <Moment format="DD/MM/YYYY">
                                {blog.date_of_Posting}
                              </Moment>

                              {/* <ol>
                              {blog.Blog_Detail.map((list, i) => {
                                return (
                                  <>
                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title1}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail01)}
                                      </p>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail1)}
                                      </p>
                                    </li>

                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title2}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail02)}
                                      </p>
                                    </li>
                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title3}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail03)}
                                      </p>
                                      <p className="blog-detail-text"></p>
                                    </li>
                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title4}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail04)}
                                      </p>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail4)}
                                      </p>
                                    </li>

                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title5}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail05)}
                                      </p>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail5)}
                                      </p>
                                      <p className="blog-detail-text"></p>
                                    </li>
                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title6}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail06)}
                                      </p>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail6)}
                                      </p>
                                      <p className="blog-detail-text"></p>
                                    </li>
                                    <li>
                                      <h4 className="blog-detail-title">
                                        {list.blog_detail_title7}
                                      </h4>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail07)}
                                      </p>
                                      <p className="blog-detail-text">
                                        {parse(list.blog_detail7)}
                                      </p>
                                    </li>

                                    <h4 className="blog-detail-title">
                                      {list.Wrapping_up}
                                    </h4>
                                    <p className="blog-detail-text">
                                      {parse(list.wrriping_text)}
                                    </p>
                                  </>
                                );
                              })}
                            </ol> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* </Loader> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
