import { useState, useEffect, useRef } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// import TopCategories from "../../Components/TopCategories";
import { connect } from 'react-redux';
import { SectionHeading, TopSeller } from '../../Components';
// import { top_sellers } from './Data';
import Newdrop from './Newdrop';
import TopCategories from './TopCategories';
import { TopCollectionData, TopSellers } from './TopCollectionData';
import LiveAuctionsData from './LiveAuctionsData';
import { TopCollectionCard_select } from '../../Components/NiceSelect';
import $ from 'jquery';
import cookies from 'js-cookie';
import i18 from '../../Components/i18';
import { useAppSelector } from '../../hooks/useRedux';
import instance from '../../axios';

function Home(props) {
  const { t } = useTranslation();
  const currentLanguage = i18.language;
  // console.info(meta)

  const[users,setuser]=useState([])

     useEffect(()=>{

      instance
      .get(`/api/signUp/all`)
      .then(res=>( setuser(res.data.data)))
  
    },[])
  
  const [sliderItems, setSliderItems] = useState([
    {
      text: {
        header: '12312',
        text: '123123',
        title: {
          text1: t('banner.banner_text1'),
          text2: t('banner.banner_text2'),
          text3: t('banner.banner_text3'),
          text4: t('banner.banner_text4'),
        },
      },
      images: [
        'assets/images/bg-slide1-1.png',
        'assets/images/user-bg1.png',
        'assets/images/bg-slide1.png',
      ],
    },
    {
      text: {
        header: '12312',
        text: '123123',
        title: {
          text1: t('banner.banner_text1'),
          text2: t('banner.banner_text2'),
          text3: t('banner.banner_text3'),
          text4: t('banner.banner_text4'),
        },
      },
      images: [
        'assets/images/bg-slide2-2.png',
        'assets/images/user-bg2.png',
        'assets/images/bg-slide2.png',
      ],
    },
  ]);
  const [active, setActive] = useState(0);
  const [activeSlide, setActiveSlide] = useState(sliderItems[active]);
  const homeSliderRef = useRef(null);
  // const {_id}=JSON.parse(localStorage.getItem('userLoggedIn'))


  useEffect(() => {
    const interval = setInterval(() => {
      homeSliderRef.current?.classList.remove('animate-slider-title');
      setActive((prev) => {
        return prev === sliderItems.length - 1 ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setActiveSlide(sliderItems[active]);
    homeSliderRef.current?.classList.add('animate-slider-title');
  }, [active]);

  useEffect(() => {
    dropSlider();
  });
  const dropSlider = () => {
    $(document).ready(function () {
      $('.new-drop-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-s-line"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      });
    });

    $(document).ready(function () {
      $('.top-collection-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-s-line"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      });
    });

    $(document).ready(function () {
      $('.live-auction-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        prevArrow:
          '<button class="slide-arrow prev-arrow"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow:
          '<button class="slide-arrow next-arrow"><i class="ri-arrow-right-s-line"></i></button>',
        responsive: [
          {
            breakpoint: 1124,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 868,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
            },
          },
        ],
      });
    });
  };

  return (
    <>
      <main id="main">
        <section className="banner-area">
          <div className="container">
            <div className="row">
              <div className="align-items-center justify-content-center row ">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="slides">
                      <div className="banner-content" ref={homeSliderRef}>
                        <h2>
                          {activeSlide.text.title.text1} {active + 1}{' '}
                          <span>{activeSlide.text.title.text2} </span>{' '}
                          {activeSlide.text.title.text3}{' '}
                          <span>{activeSlide.text.title.text4}</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 position-relative">
                    <img
                      src="assets/images/lines-box.png"
                      alt=""
                      className="img-fluid d-none d-lg-block  position-absolute lines-image"
                    />
                    <div className="row no-gutters">
                      <div className="col-6 home-banner-slider">
                        <div className="slides1">
                          <div className="slider-content-border">
                            <img
                              src={activeSlide.images[0]}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <img
                            src="assets/images/frame-bg.png"
                            alt=""
                            className="img-fluid frame-img"
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="slides2">
                          <div className="slider-content">
                            <img
                              src={activeSlide.images[1]}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-lg-9 home-banner-slider">
                    <div className="slides3">
                      <div className="slider-content-border">
                        <img
                          src={activeSlide.images[2]}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="bid-detail-block">
                        <h4>{t('CreativeArtCollection.Current Bid')}</h4>
                        <h5>
                          <img
                            src="assets/images/icons/ethereum-pink.png"
                            alt=""
                            className="me-1"
                          />{' '}
                          2.59{' '}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 home-banner-slider p-0"
                    style={{ height: '100%' }}
                  >
                    <div className="slides4">
                      <div className="slider-content">
                        <h4>
                          {' '}
                          {t(
                            'CreativeArtCollection.Creative Art Collection'
                          )}{' '}
                        </h4>
                        <p>
                          {' '}
                          {t('CreativeArtCollection.Created By')}
                          <span>Ralph Garraway</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-dots mt-lg-4 mt-3">
                  {sliderItems.map((el, i) => (
                    <span
                      key={i}
                      onClick={() => setActive(i)}
                      className={`dot ${active === i && 'dot-active'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/*<div className="circle-lines d-none d-lg-block"> <img src="assets/images/Circle.png" alt="" className="img-fluid" /> </div>*/}
        </section>
        <section className="banner-area2 pt-pb-64">
          <div className="container">
            <div className="section-heading text-center mb-4 mb-lg-5">
              <SectionHeading heading={t('CreativeArtCollection.New Drops')} />
              <img src="images/path1.png" className="img-fluid" />
            </div>

            <div className="col-lg-11 mx-auto">
              <Newdrop />
            </div>
            <div className="section-heading text-center mb-4 mb-lg-5">
              <SectionHeading
                heading={t('CreativeArtCollection.Top Categories')}
              />
              <img src="images/path1.png" className="img-fluid" />
            </div>
            <div className="col-lg-11 mx-auto p-0">
              <TopCategories />
            </div>
            <div className="section-heading text-center day-select top-collection-over-heading mb-4 mb-lg-5">
              <div className="d-flex justify-content-center align-items-center">
                <div className="section-title-path mx-lg-auto d-lg-flex">
                  <SectionHeading
                    heading={'CreativeArtCollection.Top Collections Over Last'}
                  />

                  {/* <select className="section-title-collection">
                              <option data-display="1 Day"> {t("CreativeArtCollection.Days")} </option>
                              <option value={1}> {t("CreativeArtCollection.Days")} </option>
                              <option value={2}> {t("CreativeArtCollection.Days")} </option>
                              <option value={4}> {t("CreativeArtCollection.Days")} </option>
                          </select> */}
                  <TopCollectionCard_select />
                </div>

                <Link
                  className="btn btn-violet btn-white-v text-uppercase d-none d-lg-block"
                  to="/topcollectioncard"
                >
                  {' '}
                  <span>{t('CreativeArtCollection.See All')}</span>{' '}
                </Link>
              </div>
              <img src="images/path1.png" className="img-fluid" />
            </div>
            <div className="top-collection-over-section mb-4">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <TopCollectionData />
                </div>
              </div>
              <div className="row d-lg-none mt-3">
                <Link
                  className="btn btn-violet btn-white-v text-uppercase w-auto m-auto"
                  to="/topcollectioncard"
                >
                  {' '}
                  <span>{t('CreativeArtCollection.See All')}</span>{' '}
                </Link>
              </div>
            </div>
            <div className="section-heading text-center top-seller-heading mb-4 mb-lg-5">
              <div className="d-flex justify-content-center align-items-center">
                <div className="section-title-path mx-lg-auto">
                  <SectionHeading
                    heading={t('CreativeArtCollection.top_sellers')}
                  />
                  <img src="images/path1.png" className="img-fluid" />
                </div>
                <div>
                  <Link
                    className="btn btn-violet btn-white-v text-uppercase d-none d-lg-block"
                    to="/topseller"
                  >
                    {' '}
                    <span>{t('CreativeArtCollection.See All')}</span>{' '}
                  </Link>
                </div>
              </div>
            </div>
            <div className="top-seller-area">
              <div
                className="row justify-content-center"
                style={{ bsGutterX: '2.1rem' }}
              >
                {/* {users.filter(res=>res._id!=_id).map((item, index) => (
                  <TopSeller {...item} index={index} />
                ))} */}
              </div>
              <div className="row d-lg-none">
                <Link
                  className="btn btn-violet btn-white-v text-uppercase w-auto m-auto"
                  to="/topseller"
                >
                  {' '}
                  <span>{t('CreativeArtCollection.See All')}</span>{' '}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div>
          <section className="banner-area3 pt-pb-64">
            <div className="container">
              <div className="section-heading text-center live-auction-heading mb-4 mb-lg-5">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="section-title-path mx-lg-auto">
                    <SectionHeading
                      heading={'CreativeArtCollection.Live Auctions'}
                    />
                    <img src="images/path1.png" className="img-fluid" />
                  </div>
                  <Link
                    className="btn btn-violet btn-white-v d-none d-lg-block"
                    to="/liveaction"
                  >
                    <span>{t('CreativeArtCollection.Explore More')}</span>{' '}
                  </Link>
                </div>
              </div>
              <div className="live-auction-area mb-5">
                <div className="row">
                  <LiveAuctionsData />
                </div>
                <div className="row">
                  <Link
                    className="btn btn-violet btn-white-v d-block d-lg-none m-auto w-auto"
                    to="/liveaction"
                  >
                    {' '}
                    <span>{t('CreativeArtCollection.Explore More')}</span>{' '}
                  </Link>
                </div>
              </div>
              <div className="section-heading text-center mb-4 mb-lg-5">
                <SectionHeading
                  heading={'Createandsell.Create and sell your NFTs'}
                />
                <img src="images/path1.png" className="img-fluid" />
              </div>
              <div className="features-nft-area">
                <div className="row">
                  <div className="col-lg-5 col-md-5">
                    <img
                      src="images/featured-img1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="row ps-lg-4 mb-lg-5">
                      <div className="col-lg-6 col-md-6">
                        <div className="featured-card mb-4 mb-lg-0">
                          <div className="img-box">
                            <img
                              src="images/icons/wallet.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5>
                            {' '}
                            {parse(
                              t('Createandsell.Set up your wallet title')
                            )}{' '}
                          </h5>
                          <p>{parse(t('Createandsell.Set up your wallet'))}</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                        <div className="featured-card">
                          <div className="img-box">
                            <img
                              src="images/icons/tag.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5>
                            {' '}
                            {t(
                              'Createandsell.Create Your Collection title'
                            )}{' '}
                          </h5>
                          <p>
                            {' '}
                            {parse(
                              t('Createandsell.Create Your Collection')
                            )}{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row ps-lg-4">
                      <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
                        <div className="featured-card">
                          <div className="img-box">
                            <img
                              src="images/icons/picture.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5>{t('Createandsell.Add Your Nfts title')} </h5>
                          <p>{t('Createandsell.Add Your Nfts')} </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="featured-card">
                          <div className="img-box">
                            <img
                              src="images/icons/shapes.png"
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                          <h5>{t('Createandsell.List Them For Sale title')}</h5>
                          <p> {t('Createandsell.List Them For Sale')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    someProp: state.someProp,
    anotherProp: state.anotherProp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSomeProp: () => dispatch({ type: 'SOME_ACTION' }),
    updateAnotherProp: () =>
      dispatch({
        type: 'ANOTHER_ACTION',
        // payload: someValue
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
