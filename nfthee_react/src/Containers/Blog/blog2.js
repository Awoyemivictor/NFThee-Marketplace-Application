import {useState} from 'react'
import {NavLink, Link,useHistory} from 'react-router-dom'
import { BlogData } from './BlogData';
function Blog() {
  const history =  useHistory();

  const [Bloglist, setBloglist] = useState(BlogData.overview);  

  const Blogdetail =(id)=>{ 
    console.log(id)
    history.push('/blogdetail/'+id) 
    } 
  return ( 
    <>
 <main>
   <section className="bg-section blog-section">
        <div className="container">
          <div className="section-heading text-center mb-lg-5 mb-4">
            <h2 className="section-title mb-1">Blogs</h2>
            <span><img src="assets/images/path1.png" alt="" className="img-fluid" /></span>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="blog-section-wrapper">
                <div className="row">
                  <div className="col-md-10 col-lg-10 mx-auto overflow-auto">
                    <ul className="nav nav-pills mb-lg-5 mb-4 justify-content-center border-bottom" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="blog-tab1-tab" data-bs-toggle="pill" data-bs-target="#blog-tab1" type="button" role="tab" aria-selected="true">OVERVIEW</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="blog-tab2-tab" data-bs-toggle="pill" data-bs-target="#blog-tab2" type="button" role="tab" aria-selected="false">HIGHLIGHTS</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="blog-tab3-tab" data-bs-toggle="pill" data-bs-target="#blog-tab3" type="button" role="tab" aria-selected="false">SAFETY &amp;  SECURIT</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link" id="blog-tab4-tab" data-bs-toggle="pill" data-bs-target="#blog-tab4" type="button" role="tab" aria-selected="false">ANNOUNCEMENTS</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content" id="pills-tabContent">

                  <div className="tab-pane fade show active" id="blog-tab1" role="tabpanel">
                    <div className="row">
                      {Bloglist.map((bloglist, i)=>{
                        return(<> 
                      <div className="col-md-4 col-lg-4">
                        <Link to="/blogdetail">
                        </Link><div className="blog-card"><Link   onClick={() => Blogdetail(bloglist.id)}>
                            <img src={bloglist.image} className="card-img-top" />
                          </Link><div className="card-body"><Link   onClick={() => Blogdetail(bloglist.id)}>
                              <h5 className="card-title">{bloglist.title}</h5>
                            </Link><p className="card-text"><Link  onClick={() => Blogdetail(bloglist.id)}><span className="card-text-content">{bloglist.blog_text} </span></Link><a href="#"><b>ReadMore</b></a></p>
                            <h6 className="card-text2">{bloglist.date}</h6>
                          </div>
                        </div>
                      </div> 
                      </>)
                      })}
                     
                    </div>
                  </div>

                  <div className="tab-pane fade" id="blog-tab2" role="tabpanel">
                    
                  </div>
                  <div className="tab-pane fade" id="blog-tab3" role="tabpanel">
                    <div className="row">
                      
                    </div>
                  </div>
                  <div className="tab-pane fade" id="blog-tab4" role="tabpanel">
                    <div className="row">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
   </main>
   

    </>
  )
}

export default Blog;