import { useEffect, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import instance from '../../axios';
import { swal } from 'sweetalert';
import Select, { components } from 'react-select';
import { useAppSelector } from '../../hooks/useRedux';
import Swal from 'sweetalert2';
import { handleCollectionCreation, handleListNFTSale, handleNFTCreation } from '../../Config/sendFunctions';
import { bscTest, ethTest, polyTest } from '../../Config/chains';
import axios from 'axios';

const CreateNewItem = () => {
  const user = useAppSelector((state) => state.user.user);
  const { SingleValue, Option } = components;

  const Blockchains = [
    {
      label: 'Ethereum',
      value: 'Ethereum',
      image: 'assets/images/icons/ethereum-pink.png',
    },
    {
      label: 'Solana',
      value: 'Solana',
      image: 'assets/images/icons/solona.png',
    },
    {
      label: 'Polygon',
      value: 'Polygon',
      image: 'assets/images/icons/polygon.png',
    },
    {
      label: 'Binance',
      value: 'Binance',
      image: 'assets/images/icons/binance.png',
    },
    {
      label: 'Harmony',
      value: 'Harmony',
      image: 'assets/images/icons/harmony.png',
    },
  ];

  const categoryList = [
    { value: 'Art', label: 'Art' },
    { value: 'Collectibles', label: 'Collectibles' },
    { value: 'Domain Names', label: 'Domain Names' },
    { value: 'Music', label: 'Music' },
    { value: 'Photography', label: 'Photography' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Trading Cards', label: 'Trading Cards' },
    { value: 'Utility', label: 'Utility' },
    { value: 'Virtual World', label: 'Virtual World' },
  ];

  const IconSingleValue = (props) => (
    <SingleValue {...props}>
      <img
        src={props.data.image}
        style={{
          height: '18px',
          width: '18px',
          borderRadius: '50%',
          marginRight: '10px',
          background: '#F0F4FD 0% 0% no-repeat padding-box',
          color: 'black',
        }}
      />
      {props.data.label}
    </SingleValue>
  );

  const IconOption = (props) => (
    <Option {...props}>
      <img
        src={props.data.image}
        style={{
          height: '18px',
          width: '18px',
          borderRadius: '50%',
          marginRight: '10px',
          background: '#F0F4FD 0% 0% no-repeat padding-box',
          color: 'black',
          backgroundColor: ' #d66cde12 !important',
        }}
      />
      {props.data.label}
    </Option>
  );

  const customStyles = {
    option: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      color: 'black',
    }),

    singleValue: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      background: 'transparent',
      color: 'black',
    }),
  };

  const LoginStatis = JSON.parse(localStorage.getItem('LoginInfo'));
  const [isLogin, setIsLogin] = useState(LoginStatis === null ? false : true);
  const [isNotLogin, setIsNotLogin] = useState(
    LoginStatis === null ? true : false && (window.location.href = '/')
  );
  const token = JSON.parse(localStorage.getItem('TokenData'));
  // console.log(token === null ? window.location.href = "/walletlogin" : token);

  const load = () => {
    var langArray = [];
    $('.vodiapicker option').each(function () {
      var img = $(this).attr('data-thumbnail');
      var text = this.innerText;
      var value = $(this).val();
      var item =
        '<li><span><img src="' +
        img +
        '" alt="" value="' +
        value +
        '"/></span><p>' +
        text +
        '</p></li>';
      langArray.push(item);
    });

    $('#a').html(langArray);

    //Set the button value to the first el of the array
    $('.btn-select').html(langArray[0]);
    $('.btn-select').attr('value', 'en');

    //change button stuff on click
    $('#a li').click(function () {
      var img = $(this).find('img').attr('src');
      var value = $(this).find('img').attr('value');
      var text = this.innerText;
      var item =
        '<li><span><img src="' +
        img +
        '" alt="" /></span><p>' +
        text +
        '</p></li>';
      $('.btn-select').html(item);
      $('.btn-select').attr('value', value);
      $('.b').toggle();
    });

    $('.btn-select').click(function () {
      $('.b').toggle();
    });

    //check local storage for the lang
    var sessionLang = localStorage.getItem('lang');
    if (sessionLang) {
      //find an item with value of sessionLang
      var langIndex = langArray.indexOf(sessionLang);
      $('.btn-select').html(langArray[langIndex]);
      $('.btn-select').attr('value', sessionLang);
    } else {
      var langIndex = langArray.indexOf('ch');
      // console.log(langIndex);
      $('.btn-select').html(langArray[langIndex]);
      //$('.btn-select').attr('value', 'en');
    }
  };
  const {_id}=JSON.parse(localStorage.getItem('userLoggedIn'));
  console.log(_id,"id on the create ")
  const [collectionData, setCollectionData] = useState({
   
    name: '',
    symbol: '',
    description: '',
    chooseType: '',
    logo_image: '',
    featured_image: '',
    banner_image: '',
    url: '',
    category: '',
    website: '',
    discord: '',
    instagram: '',
    medium: '',
    telegram: '',
    creator_earnings: '',
    created_by:_id,
    blockchain: '',
    payment_token: '',
    display_theme: '',
    explicit_sensitive_content: true,
  });

  const initialDataState = {
   
    name: '',
    symbol: '',
    chooseType: '',
    uploadFile: {},
    designation: '',
    about: '',
    chooseCollection: '',
    chooseCategory: '',
    chooseBlockchain: '',
    unlockOncePurchased: true,
    attribute: [
      {
        attrType: '',
        attrName: '',
      },
    ],
    levels: [
      {
        levelSpeed: '',
        levelUsername: 0,
        levelServer: 0,
      },
    ],
    stats: [
      {
        statsSpeed: '',
        statsUsername: 0,
        statsServer: 0,
      },
    ],
    created_by:_id,
    putOnMarketplace: {},
    explicitAndSensitiveContent: true,
  };
  const [blockchains, setBlockchains] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const fetchBlockchains = async () => {
      const arr = [];
      await instance.get('/api/getBlockchain').then((response) => {
        let res = response.data.data;
        res.map((blockchain) => {
          arr.push({
            value: blockchain.name,
            label: blockchain.name,
            image: blockchain.icon,
          });
        });
        // console.info(arr)
        setBlockchains(arr);
      });
    };

    const fetchCategories = async () => {
      const arr = [];
      instance.get('/api/getCategory').then((response) => {
        let res = response.data.data;
        res.map((category) => {
          arr.push({
            value: category.name,
            label: category.name,
            image: category.image,
          });
        });
        console.info(arr);
        setCategories(arr);
      });
    };

    fetchBlockchains();
    fetchCategories();
    console.info(categories);
  }, []);

  const [itemData, setItemData] = useState(initialDataState);
  console.log('::::::::>', { itemData }, { collectionData });

  const handleCollectionChange = (e) => {
    setCollectionData({
      ...collectionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const [collections, setCollections] = useState([]);
  const [activeTab, setActiveTab] = useState('Fixed price');

  useEffect(() => {
    const fetchData = async () => {
      const arr = [];
      await axios.get('http://192.168.1.4:8002/api/createCollection/all').then((response) => {
        let result = response.data.data;
        result.map((collection) => {
          // console.info(collection)
          arr.push({
            value: collection.name,
            label: collection.name,
            category: collection.category,
          });
        });
        setCollections(arr);
      });
    };
    fetchData();
  }, []);

  const [uploadedFile, setUploadedFile] = useState([]);
  const [newData, setNewData] = useState();
  const handleImageChange = (e) => {
    const formData = new FormData();
    formData.append('fileName', e.target.files[0]);
    instance
      .post('/api/image', formData)
      .then((response) => response.data.data)
      .then((data) => {
        setUploadedFile(URL.createObjectURL(e.target.files[0]));

        setItemData({
          ...itemData,
          uploadFile: data.filename,
        });
      });
  };

  console.log(':::::<><><><><>>>', { newData }, uploadedFile);
  const handleSubmitNewCollection = async () => {
    //!check if collection is single or multiple
    //! pass  collectionName Symbol and Creator Address and Royalty

    console.log(
      collectionData.name,
      collectionData.symbol,
      collectionData.blockchain
    );

    // const contractAddress = await handleCollectionCreation(
    //   collectionData.blockchain,
    //   true,
    //   collectionData.name,
    //   collectionData.symbol,
    //   '0x41c100Fb0365D9A06Bf6E5605D6dfF72F44fb106',
    //   collectionData.creator_earnings
    // );
    // console.log(contractAddress);  
    // await handleNFTCreation(contractAddress)
    await instance
      .post('/api/createCollection', collectionData)
    // console.log(contractAddress);
    // await handleNFTCreation(contractAddress)
    
    await 
instance      .post(`/api/createCollection`, collectionData)
      .then((response) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successful',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Try to create again',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleNFTListing = async()=>{
   const res =  await handleListNFTSale()
   console.log(res)
  }

  const [openForBids, setOpenForBids] = useState({});
  const [fixedPrice, setFixedPrice] = useState({
    price: '',
  });
  const [timedAuction, setTimedAuction] = useState({
    minimumBid: 0,
    startDate: 0,
    finishDate: 0,
  });

  const handleSubmitNewItem = async () => {
    let data = {};
    switch (activeTab) {
      case 'Fixed price':
        data = fixedPrice;
        break;

      case 'Open for bids':
        data = openForBids;
        break;

      case 'Timed auction':
        data = timedAuction;
        break;
    }
    const post = itemData;
    post.putOnMarketplace = data;

    instance
      .post('/api/store', post)
      .then((response) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successful',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Try to create again',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    data = {};
  };

  const handleClearClick = () => {
    setItemData(initialDataState);
    setTimedAuction({});
  };

  const [blockchainImage, setBlockchainImage] = useState('');
  const [chooseBlockchain, setChooseBlockchain] = useState({});

  useEffect(() => {
    let data = '';
    switch (itemData.blockchain) {
      case 'Ethereum':
        setBlockchainImage('assets/images/icons/ethereum.png');
        break;

      case 'Harmony':
        setBlockchainImage('assets/images/icons/harmony.png');
        break;

      case 'Solana':
        setBlockchainImage('assets/images/icons/solana-icon.png');
        break;

      case 'Binance':
        setBlockchainImage('assets/images/icons/binance.png');
        break;

      case 'Polygon':
        setBlockchainImage('assets/images/icons/polygon.png');
        break;
      default:
        setBlockchainImage('assets/images/icons/polygon.png');
    }
  }, [itemData.blockchain]);

  const handleItemBlockchain = (option) => {
    console.info(option);
    getChains(option.value);

    setItemData({
      ...itemData,
      chooseBlockchain: option.value,
    });
  };

  const getChains = async (getChainValues) => {
    let eth = 'Ethereum Testnet';
    let poly = 'Polygon Testnet';
    let bsc = 'Binance Smart Chain';
    let harmony = 'Harmony Testnet';
    console.log(getChainValues, eth);

    if (eth === getChainValues) {
      ethTest();
    } else if (poly === getChainValues) {
      polyTest();
    } else if (bsc === getChainValues) {
      bscTest();
    } else if (harmony === getChainValues) {
    }
  };

  const handleCollectionBlockchain = async (option) => {
    await getChains(option.value);
    setCollectionData({
      ...collectionData,
      blockchain: option.value,
    });
  };

  const handleExplicitCollectionChange = (e) => {
    setCollectionData({
      ...collectionData,
      explicit_sensitive_content: e.target.checked,
    });
  };

  const handleExplicitItemChange = (e) => {
    setItemData({
      ...itemData,
      explicitAndSensitiveContent: e.target.checked,
    });
  };

  const handleUnlockPurchase = (e) => {
    setItemData({
      ...itemData,
      unlockOncePurchased: e.target.checked,
    });
  };

  const handleItemCollection = (option) => {
    setItemData({
      ...itemData,
      chooseCollection: option.value,
      chooseCategory: option.category,
    });
  };

  const handleFixedPriceChange = (e) => {
    setFixedPrice({
      ...fixedPrice,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimedAuctionChange = (e) => {
    setTimedAuction({
      ...timedAuction,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategorySelect = (option) => {
    setCollectionData({
      ...collectionData,
      category: option.value,
    });
  };

  const handleStartDate = (e) => {
    setTimedAuction({
      ...timedAuction,
      startDate: e.target.value,
    });
  };

  const handleFinishDate = (e) => {
    setTimedAuction({
      ...timedAuction,
      finishDate: e.target.value,
    });
  };

  const [logoImage, setLogoImage] = useState(null);
  const handleLogoImage = (e) => {
    const formData = new FormData();
    formData.append('logo_image', e.target.files[0]);
    // instance
     instance .post('/api/createCollection', formData)
      .then((response) => response.data.data)
      .then((data) => {
        setLogoImage(URL.createObjectURL(e.target.files[0]));
        setCollectionData({
          ...collectionData,
          logo_image: data.logo_image,
        });
      });
  };
  const [bannerImage, setBannerImage] = useState(null);
  const handleBannerImage = (e) => {
    const formData = new FormData();
    formData.append('banner_image', e.target.files[0]);
    // instance
     instance .post('/api/createCollection', formData)
      .then((response) => response.data.data)
      .then((data) => {
        setBannerImage(URL.createObjectURL(e.target.files[0]));
        setCollectionData({
          ...collectionData,
          banner_image: data.banner_image,
        });
      });
  };

  const [featuredImage, setFeaturedImage] = useState(null);
  const handleFeaturedImage = (e) => {
    const formData = new FormData();
    formData.append('featured_image', e.target.files[0]);
    // instance
    instance  .post('/api/createCollection', formData)
      .then((response) => response.data.data)
      .then((data) => {
        setFeaturedImage(URL.createObjectURL(e.target.files[0]));
        setCollectionData({
          ...collectionData,
          featured_image: data.featured_image,
        });
      });
  };

  //levels
  const deleteLevel = (levelIndex) => {
    if (itemData.levels.length > 1) {
      setItemData({
        ...itemData,
        levels: itemData.levels.filter((s, index) => index !== levelIndex),
      });
    }
  };

  const handleLevelChange = (levelIndex, type, value) => {
    setItemData({
      ...itemData,
      levels: itemData.levels.map((level, index) =>
        index === levelIndex ? { ...level, [type]: value } : level
      ),
    });
  };

  const addLevels = (e) => {
    setItemData({
      ...itemData,
      levels: [
        ...itemData.levels,
        { levelServer: '', levelSpeed: '', levelUsername: '' },
      ],
    });
  };

  //attributes
  const deleteAttribute = (attrIndex) => {
    if (itemData.attribute.length > 1) {
      setItemData({
        ...itemData,
        attribute: itemData.attribute.filter((s, index) => index !== attrIndex),
      });
    }
  };

  const handleAttributeChange = (attrIndex, type, value) => {
    setItemData({
      ...itemData,
      attribute: itemData.attribute.map((attribute, index) =>
        index === attrIndex ? { ...attribute, [type]: value } : attribute
      ),
    });
  };
  const addAttribute = (e) => {
    setItemData({
      ...itemData,
      attribute: [...itemData.attribute, { attrType: '', attrName: '' }],
    });
  };

  //State From FORM
  const handleStatsChange = (stateIndex, type, value) => {
    setItemData({
      ...itemData,
      stats: itemData.stats.map((stat, index) =>
        index === stateIndex ? { ...stat, [type]: value } : stat
      ),
    });
    setNewData({
      ...newData,
      name: itemData.name,
      designation: itemData.designation,
      about: itemData.about,
      attribute: itemData.attribute,
      levels: itemData.levels,
      stats: itemData.stats,
    });
  };
  const addStats = (e) => {
    setItemData({
      ...itemData,
      stats: [
        ...itemData.stats,
        { statsServer: '', statsSpeed: '', statsUsername: '' },
      ],
    });
  };
  const deleteStats = (stateIndex) => {
    if (itemData.stats.length > 1) {
      setItemData({
        ...itemData,
        stats: itemData.stats.filter((s, index) => index !== stateIndex),
      });
    }
  };

  const handleDisplayTheme = (e) => {
    setCollectionData({
      ...collectionData,
      display_theme: e.currentTarget.id,
    });
    console.info(e.currentTarget.id);
  };

  return (
    <>
      <main>
        <section className='create-bg-section bg-section'>
          <div className='container-fluid p-0'>
            <div className='create-tab-container'>
              <ul
                className='nav nav-pills mb-3 justify-content-center'
                id='pills-tab'
                role='tablist'
              >
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link active'
                    id='create-item-tab'
                    href='#create-item'
                    data-bs-toggle='pill'
                    data-bs-target='#create-item'
                    type='button'
                    role='tab'
                    aria-selected='true'
                  >
                    Create a New Item
                  </button>
                </li>
                <li className='nav-item' role='presentation'>
                  <button
                    className='nav-link'
                    id='create-collection-tab'
                    data-bs-toggle='pill'
                    href='#create-collection'
                    data-bs-target='#create-collection'
                    type='button'
                    role='tab'
                    aria-selected='false'
                  >
                    Create a Collection
                  </button>
                </li>
              </ul>
            </div>

            <div className='tab-content nav-tabs'>
              <div
                className='tab-pane fade show active'
                id='create-item'
                role='tabpanel'
              >
                <div className='col-lg-12'>
                  <div className='row'>
                    <div className='col-md-4 col-lg-3'>
                      <div className='card-preview-area'>
                        <h2 className='title-name'>Preview Item</h2>
                        <div className='preview-card'>
                          <div className='card-body'>
                            <div className='name-content'>
                              <h3>
                                {itemData.name
                                  ? itemData.name
                                  : 'Creative Art Collection'}
                              </h3>
                              <p>
                                Owner{' '}
                                <span>
                                  {user
                                    ? `${user.first_name} ${user.last_name}`
                                    : 'Ralph Garraway'}
                                </span>
                              </p>
                            </div>
                            <div className='creator-create-by'>
                              <a href='#'>
                                <img
                                  src='assets/images/img2.png'
                                  alt=''
                                  className='avatar-icon img-fluid'
                                />
                              </a>
                              <span href='#' className='creator-name'>
                                Created by @{user.user_name}
                              </span>
                            </div>
                            <div className='card-media'>
                              <a href='#'>
                                <img
                                  src={
                                    itemData.uploadFile
                                      ? `${process.env.REACT_APP_BASE_URL}/${itemData.uploadFile.filename}`
                                      : 'assets/images/artboard.png'
                                  }
                                  alt=''
                                  className='img-fluid'
                                />
                              </a>
                            </div>
                            <div className='card-title'>
                              <h3>
                                {itemData.putOnMarketplace
                                  ? activeTab
                                  : 'Not For Sale'}
                              </h3>
                              <span>
                                {activeTab === 'Fixed price' ? (
                                  <span>{fixedPrice.price}</span>
                                ) : activeTab === 'Open for bids' ? (
                                  ''
                                ) : (
                                  <span>{timedAuction.minimumBid}</span>
                                )}
                                <img
                                  src={blockchainImage}
                                  alt=''
                                  className='img-fluid'
                                />
                              </span>
                            </div>
                            <a className='btn btn-violet' href='#'>
                              {activeTab === 'Fixed price'
                                ? 'Post'
                                : activeTab === 'Open for bids'
                                ? 'Make a bid'
                                : 'Make bid'}
                            </a>
                            <div
                              className='clear-all mt-2 d-flex align-items-center'
                              onClick={handleClearClick}
                            >
                              <i className='ri-close-circle-line me-1' />
                              Clear All
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-8 col-lg-9'>
                      <div className='create-item-section'>
                        <div className='create-item-content border-bottom pb-3 mb-3'>
                          <h4 className='create-item-title'>Choose Type</h4>
                          <h5 className='create-item-subtitle'>
                            Choose "Single" for one of a kind or "multiple" if
                            you want to sell one collectible multiple times
                          </h5>
                          <div className='row mt-4'>
                            <div className='col-lg-4 col-md-6 mb-lg-0 mb-4'>
                              <label className='w-100 mb-0'>
                                <input
                                  type='radio'
                                  name='chooseType'
                                  value='item single'
                                  className='card-input-element'
                              onChange={handleItemChange}
                                  defaultChecked
                                />
                                <div className='panel card-input m-0'>
                                  <div className='panel-body d-flex'>
                                    <div className='panel-body-content-two'>
                                      <img
                                        src='assets/images/icons/mobile-phone1.png'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <h3>Single</h3>
                                      <p>
                                        If you want to highlight the uniqueness
                                        and individuality of your item
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className='col-lg-4 col-md-6'>
                              <label className='w-100 mb-0'>
                                <input
                                  // onChange={handleRadioChange}
                                  type='radio'
                                  name='chooseType'
                                  value='item multiple'
                                  className='card-input-element'
                              onChange={handleItemChange}

                                />
                                <div className='panel card-input m-0'>
                                  <div className='panel-body d-flex'>
                                    <div className='panel-body-content-two'>
                                      <img
                                        src='assets/images/icons/mobile-phone2.png'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <h3>Multiple</h3>
                                      <p>
                                        If you want to share your item with a
                                        large number of community members
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className='create-item-content border-bottom pb-3 mb-3'>
                          <h4 className='create-item-title'>
                            Upload File ( Image, Audio, Video, 3D Model)
                          </h4>
                          <div className='row mt-4'>
                            <div className='col-lg-12 col-md-12'>
                              <div>
                                <label class='uploadFile file-drop overflow-hidden position-relative'>
                                  <h4 id='file_name'>
                                    PNG, GIF, WEBP, MP4, Max 100Mb.
                                  </h4>
                                  {uploadedFile ? (
                                    <img
                                      src={uploadedFile}
                                      alt=''
                                      className='bannerImage position-absolute'
                                    />
                                  ) : (
                                    ''
                                  )}

                                  <input
                                    onChange={handleImageChange}
                                    type='file'
                                    // filename="uploadFile"
                                    className='inputfile form-control position-absolute'
                                    name='uploadFile'
                                    required
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='create-item-content border-bottom mb-3 pb-3'>
                          <h4 className='create-item-title mb-3'>Name</h4>
                          <div className='mb-2'>
                            <input
                              onChange={handleItemChange}
                              name='name'
                              value={itemData.name}
                              type='text'
                              className='form-control'
                              placeholder='E.g.Redeemable T-Shirt With Logo'
                              pattern='.{3,}'
                              required
                            />
                          </div>
                        </div>
                        <div className='create-item-content border-bottom mb-3 pb-3'>
                          <h4 className='create-item-title mb-3'>
                            Description(Optional)
                          </h4>
                          <div className='mb-2'>
                            <input
                              onChange={handleItemChange}
                              name='designation'
                              value={itemData.designation}
                              type='text'
                              className='form-control'
                              pattern='.{3,}'
                              required
                              title='3 characters minimum'
                              placeholder='E.g.Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.'
                            />
                          </div>
                        </div>
                        <div className='create-item-content border-bottom mb-3 pb-3'>
                          <h4 className='create-item-title mb-3'>About</h4>
                          <div className='mb-2'>
                            <input
                              onChange={handleItemChange}
                              value={itemData.about}
                              name='about'
                              type='text'
                              className='form-control'
                              placeholder='E.g.Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.'
                            />
                          </div>
                        </div>
                        {/* <div className="create-item-content mb-3">
                                                  <h4 className="create-item-title mb-3">Royalties</h4>
                                                  <div className="mb-2">
                                                    <input type="text" className="form-control" placeholder="10%" />
                                                  </div>
                                                </div> */}
                        <div className='create-item-content border-bottom pb-3 mb-3'>
                          <h4 className='create-item-title'>
                            Choose Collection
                          </h4>
                          <Select
                            value={collections.value}
                            onChange={handleItemCollection}
                            components={{
                              SingleValue: IconSingleValue,
                              Option: IconOption,
                            }}
                            options={collections}
                            name='collection'
                            styles={customStyles}
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary25: '#fcf5fd',
                                primary: '#fcf5fd',
                              },
                            })}
                          />
                        </div>
                        <div className='create-item-content border-bottom pb-3 mb-3'>
                          <h4 className='create-item-title'>
                            Choose Blockchain
                          </h4>
                          <h5 className='create-item-subtitle'>
                            Choose the most suitable blockchain for your needs.
                            you need to sign in for creator
                          </h5>
                          <Select
                            value={blockchains.value}
                            onChange={handleItemBlockchain}
                            components={{
                              SingleValue: IconSingleValue,
                              Option: IconOption,
                            }}
                            options={blockchains}
                            name='blockchain'
                            styles={customStyles}
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary25: '#fcf5fd',
                                primary: '#fcf5fd',
                              },
                            })}
                          />
                        </div>

                        <div className='create-item-content overflow-hidden'>
                          <div className='d-flex justify-content-between align-items-center mb-3'>
                            <div>
                              <h4 className='create-item-title'>
                                Put On Marketplace
                              </h4>
                              <h5 className='create-item-subtitle'>
                                Enter price to allow users instantly purchase
                                your NFT
                              </h5>
                            </div>
                            <label className='switch'>
                              <input
                                type='checkbox'
                                required
                                defaultChecked
                                // onChange={(e) => setFormData({
                                //     ...formData,
                                //     agree: !formData.agree
                                // })}/>

                                // onChange={handleMarketplaceChange}
                              />

                              <span className='slider round' />
                            </label>
                          </div>
                          <div className='row'>
                            <div className='create-item-tab'>
                              <div className='col-md-12 col-lg-12'>
                                <ul
                                  className='nav nav-pills pb-4 mb-3 border-bottom'
                                  id='pills-tab'
                                  role='tablist'
                                >
                                  <li className='nav-item' role='presentation'>
                                    <a
                                      className='nav-link active mb-4 mb-lg-0'
                                      id='Fixed price'
                                      onClick={(e) =>
                                        setActiveTab(e.currentTarget.id)
                                      }
                                      data-bs-toggle='pill'
                                      data-bs-target='#fixed-price'
                                      role='tab'
                                      aria-selected='true'
                                    >
                                      <img
                                        src='assets/images/icons/price-tag.png'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <h5>Fixed Price</h5>
                                    </a>
                                  </li>
                                  <li className='nav-item' role='presentation'>
                                    <a
                                      className='nav-link mb-4 mb-lg-0'
                                      onClick={(e) =>
                                        setActiveTab(e.currentTarget.id)
                                      }
                                      id='Open for bids'
                                      data-bs-toggle='pill'
                                      data-bs-target='#open-bid'
                                      role='tab'
                                      aria-selected='false'
                                    >
                                      <img
                                        src='assets/images/icons/auction.png'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <h5>Open For Bids</h5>
                                    </a>
                                  </li>
                                  <li className='nav-item' role='presentation'>
                                    <a
                                      className='nav-link'
                                      onClick={(e) =>
                                        setActiveTab(e.currentTarget.id)
                                      }
                                      id='Timed auction'
                                      data-bs-toggle='pill'
                                      data-bs-target='#timed-auction'
                                      role='tab'
                                      aria-selected='false'
                                    >
                                      <img
                                        src='assets/images/icons/clock.png'
                                        alt=''
                                        className='img-fluid'
                                      />
                                      <h5>Timed Auction</h5>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='tab-content'
                                id='pills-tabContent'
                              >
                                <div
                                  className='tab-pane fade show active'
                                  id='fixed-price'
                                  role='tabpanel'
                                >
                                  <div className='create-item-content border-bottom mb-3 pb-3'>
                                    <h4 className='create-item-title mb-3'>
                                      Price
                                    </h4>
                                    <div className='input-group mb-2'>
                                      <input
                                        type='text'
                                        className='form-control'
                                        name='price'
                                        onChange={handleFixedPriceChange}
                                        value={fixedPrice.price}
                                        placeholder='Enter Price For One Piece'
                                      />
                                      <div className='input-group-append'>
                                        <select
                                          className='form-select'
                                          id='basic-addon2'
                                        >
                                          <option selected>ETH</option>
                                          <option value={1}>ETH</option>
                                          <option value={2}>ETH</option>
                                          <option value={3}>ETH</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className='d-flex align-items-center price-detail'>
                                      <a href='#' className='me-3'>
                                        <h6 className='mb-0'>
                                          Service Fee <span>2%</span>
                                        </h6>
                                      </a>
                                      <a href='#'>
                                        <h6 className='mb-0'>
                                          You Will Receive <span>0 ETH</span>
                                        </h6>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className='tab-pane fade'
                                  id='open-bid'
                                  role='tabpanel'
                                >
                                  {/* .. */}
                                </div>
                                <div
                                  className='tab-pane fade'
                                  id='timed-auction'
                                  role='tabpanel'
                                >
                                  <div className='create-item-content border-bottom mb-3 pb-3'>
                                    <h4 className='create-item-title mb-3'>
                                      Minimum Bid
                                    </h4>
                                    <div className='mb-2'>
                                      <input
                                        name='minimumBid'
                                        value={timedAuction.minimumBid}
                                        onChange={handleTimedAuctionChange}
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter minimum bid'
                                      />
                                    </div>
                                    <div className='d-flex align-items-center price-detail'>
                                      <a href='#'>
                                        <h6 className='mb-0'>
                                          Bids below this amount won't be
                                          allowed.
                                        </h6>
                                      </a>
                                    </div>
                                  </div>
                                  <div className='create-item-content border-bottom mb-3 pb-3'>
                                    <div className='row'>
                                      <div className='col-lg-6 col-md-6'>
                                        <h4 className='create-item-title mb-3'>
                                          Start Date
                                        </h4>
                                        <select
                                          onChange={handleStartDate}
                                          className='form-select form-control d-block'
                                        >
                                          <option
                                            value='Right after listing'
                                            selected
                                          >
                                            Right after listing
                                          </option>
                                          <option value='One'>One</option>
                                          <option value='Two'>Two</option>
                                          <option value='Three'>Three</option>
                                        </select>
                                      </div>
                                      <div className='col-lg-6 col-md-6'>
                                        <h4 className='create-item-title mb-3'>
                                          End Date
                                        </h4>
                                        <select
                                          onChange={handleFinishDate}
                                          className='form-select form-control d-block'
                                        >
                                          <option
                                            value='Right after listing'
                                            selected
                                          >
                                            Right after listing
                                          </option>
                                          <option value='One'>One</option>
                                          <option value='Two'>Two</option>
                                          <option value='Three'>Three</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='create-item-content border-bottom pb-3 mb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <div>
                                <h4 className='create-item-title'>
                                  Unlock Once Purchased
                                </h4>
                                <h5 className='create-item-subtitle d-inline-flex align-items-center mb-0'>
                                  Content will be unlocked after successful
                                  transaction
                                  <span className='tooltip-wrapper1'>
                                    <i className='ri-information-fill ms-1' />
                                    <div
                                      className='tooltip'
                                      style={{ top: 'auto !important' }}
                                    >
                                      Lorem ipsum is simply dummy text of the
                                      printing and typesetting industry. lorem
                                      ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an t
                                    </div>
                                  </span>
                                </h5>
                              </div>
                              <label className='switch'>
                                <input
                                  type='checkbox'
                                  onChange={handleUnlockPurchase}
                                />
                                <span className='slider round' />
                              </label>
                            </div>
                          </div>
                          <div className='create-item-content border-bottom mb-3 pb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <div>
                                <h4 className='create-item-title'>Attribute</h4>
                                <h5 className='create-item-subtitle mb-0'>
                                  Textual traits that show up as rectangles
                                </h5>
                              </div>
                              <Link
                                data-bs-toggle='modal'
                                data-bs-target='#makeOfferModal'
                              >
                                {' '}
                                <div className='create-item-block'>
                                  <span>+</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className='create-item-content border-bottom mb-3 pb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <div>
                                <h4 className='create-item-title'>Levels</h4>
                                <h5 className='create-item-subtitle mb-0'>
                                  Numerical traits that show as per progress bar
                                </h5>
                              </div>
                              <Link
                                data-bs-toggle='modal'
                                data-bs-target='#makeOfferModal1'
                              >
                                {' '}
                                <div className='create-item-block'>
                                  <span>+</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className='create-item-content border-bottom mb-3 pb-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                              <div>
                                <h4 className='create-item-title'>Stats</h4>
                                <h5 className='create-item-subtitle mb-0'>
                                  Numerical traits that show as per progress bar
                                </h5>
                              </div>
                              <Link
                                data-bs-toggle='modal'
                                data-bs-target='#makeOfferModal2'
                              >
                                {' '}
                                <div className='create-item-block'>
                                  <span>+</span>
                                </div>
                              </Link>
                            </div>
                          </div>
                          {/* <div className="create-item-content border-bottom pb-3 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h4 className="create-item-title">Unlockable Content</h4>
                                <h5 className="create-item-subtitle d-flex align-items-center mb-0">Include
                                  Unlockable Content Thta Can Only Be Revealed By The Owner Of The Item</h5>
                              </div>
                              <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" />
                              </label>
                            </div>
                          </div> */}
                          <div className='create-item-content border-bottom pb-3 mb-3'>
                            <div className='d-lg-flex d-md-flex justify-content-between align-items-center'>
                              <div>
                                <h4 className='create-item-title'>
                                  Explicit &amp; Sensitive Content
                                </h4>
                                <h5 className='create-item-subtitle d-flex align-items-center mb-0'>
                                  Set This Collection As Explicit And Sensitive
                                  Content
                                  <span className='tooltip-wrapper1'>
                                    <i className='ri-information-fill ms-1' />
                                    <div className='tooltip'>
                                      Lorem ipsum is simply dummy text of the
                                      printing and typesetting industry. lorem
                                      ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an t
                                    </div>
                                  </span>
                                </h5>
                              </div>
                              <label className='switch'>
                                <input
                                  type='checkbox'
                                  checked={itemData.explicitAndSensitiveContent}
                                  name='explicitAndSensitiveContent'
                                  onChange={handleExplicitItemChange}
                                />
                                <span className='slider round' />
                              </label>
                            </div>
                          </div>

                          <div className='pt-3 create-item-btn'>
                            {/* <a className="btn btn-violet w-100" href="#">
                              Create Item
                            </a> */}
                            <button
                              className='btn btn-violet w-100'
                              onClick={handleSubmitNewItem}
                            >
                              Submit
                            </button>
                          </div>
                        </div>

                        <div className='create-item-content border-bottom pb-3 mb-3'></div>
                      </div>
                      {/*</form>*/}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='tab-pane fade'
                id='create-collection'
                role='tabpanel'
              >
                {/*<form  onSubmit={handleSubmitNew}>*/}
                <div className='col-md-12 col-lg-12'>
                  <div className='create-item-section'>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Choose Type</h4>
                      <h5 className='create-item-subtitle'>
                        Choose "Single" for one of a kind or "multiple" if you
                        want to sell one collectible multiple times
                      </h5>
                      <div className='row mt-4'>
                        <div className='col-lg-4 col-md-6 mb-lg-0 mb-4'>
                          <label className='w-100 mb-0'>
                            <input
                              type='radio'
                              name='chooseType'
                              value='collection single'
                              className='card-input-element'
                            onChange={handleCollectionChange}

                              defaultChecked
                            />
                            <div className='panel card-input m-0'>
                              <div className='panel-body d-flex'>
                                <div className='panel-body-content-two'>
                                  <img
                                    src='assets/images/icons/mobile-phone1.png'
                                    alt=''
                                    className='img-fluid'
                                  />
                                  <h3>Single</h3>
                                  <p>
                                    If you want to highlight the uniqueness and
                                    individuality of your item
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                          <label className='w-100 mb-0'>
                            <input
                              // onChange={handleRadioChange}
                              type='radio'
                              name='chooseType'
                              value='collection multiple'
                              className='card-input-element'
                            onChange={handleCollectionChange}

                            />
                            <div className='panel card-input m-0'>
                              <div className='panel-body d-flex'>
                                <div className='panel-body-content-two'>
                                  <img
                                    src='assets/images/icons/mobile-phone2.png'
                                    alt=''
                                    className='img-fluid'
                                  />
                                  <h3>Multiple</h3>
                                  <p>
                                    If you want to share your item with a large
                                    number of community members
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>
                        Logo Image <span className='text-red'>*</span>
                      </h4>
                      <h5 className='create-item-subtitle'>
                        This Image Will Also Be Used For Navigation. 350 X 350
                        Recommended.
                      </h5>
                      <div className='row mt-4'>
                        <div className='col-lg-12 col-md-12 mb-lg-0 mb-4'>
                          <label className='img-upload up-box1 overflow-hidden'>
                            {logoImage? (
                              <img
                                src={logoImage}
                                alt=''
                                className='bannerImage'
                              />
                            ) : (
                              <img
                                src='/assets/images/icons/picture-icon.png'
                                alt=''
                                className='img-fluid'
                              />
                            )}
                            <input
                              onChange={handleLogoImage}
                              name='logo_image'
                              type='file'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Featured Image</h4>
                      <h5 className='create-item-subtitle'>
                        This Image Will Be Used For Featuring Your Collection On
                        The Homepage, Category Pages, Or Other Promotional Areas
                        Of Nfthee. 600 X 400 Recommended.
                      </h5>
                      <div className='row mt-4'>
                        <div className='col-lg-12 col-md-12 mb-lg-0 mb-4'>
                          <label className='img-upload up-box2 overflow-hidden'>
                            {featuredImage ? (
                              <img
                                src={featuredImage}
                                alt=''
                                className='bannerImage'
                              />
                            ) : (
                              <img
                                src='/assets/images/icons/picture-icon.png'
                                alt=''
                                className='img-fluid'
                              />
                            )}

                            <input
                              onChange={handleFeaturedImage}
                              name='featured_image'
                              type='file'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Banner Image</h4>
                      <h5 className='create-item-subtitle'>
                        This Image Will Be Used For Featuring Your Collection On
                        The Homepage, Category Pages, Or Other Promotional Areas
                        Of Nfthee. 600 X 400 Recommended.
                      </h5>
                      <div className='row mt-4'>
                        <div className='col-lg-12 col-md-12 mb-lg-0 mb-4'>
                          <label className='img-upload up-box3 overflow-hidden'>
                            {bannerImage ? (
                              <img
                                src={bannerImage}
                                alt=''
                                className='bannerImage'
                              />
                            ) : (
                              <img
                                src='/assets/images/icons/picture-icon.png'
                                alt=''
                                className='img-fluid'
                              />
                            )}
                            <input
                              onChange={handleBannerImage}
                              name='banner_image'
                              type='file'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Name</h4>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <input
                            name='name'
                            value={collectionData.name}
                            onChange={handleCollectionChange}
                            type='text'
                            className='form-control'
                            placeholder='E.g. Treasures of the sea'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Symbol</h4>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <input
                            name='symbol'
                            value={collectionData.symbol}
                            onChange={handleCollectionChange}
                            type='text'
                            className='form-control'
                            placeholder='E.g. Treasures of the sea'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>URL</h4>
                      <h5 className='create-item-subtitle'>
                        Customize Your URL On Nfthee. Must Only Contain
                        Lowercase Letters,Numbers, And Hyphens.
                      </h5>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <input
                            name='url'
                            value={collectionData.url}
                            onChange={handleCollectionChange}
                            type='text'
                            className='form-control'
                            placeholder='https://nfthee.in/collection/'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Description</h4>
                      <h5 className='create-item-subtitle'>
                        0 Of 1000 Characters Used.
                      </h5>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <textarea
                            name='description'
                            value={collectionData.description}
                            onChange={handleCollectionChange}
                            className='form-control'
                            // name
                            // id
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <div className='d-flex justify-content-between align-items-center'>
                            <div>
                              <h4 className='create-item-title'>Description</h4>
                              <h5 className='create-item-subtitle mb-lg-0'>
                                0 Of 1000 Characters Used.
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Add Category</h4>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <Select
                            value={categories.value}
                            onChange={handleCategorySelect}
                            options={categories}
                            name='category'
                            styles={customStyles}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <h4 className='create-item-title'>Links</h4>
                          <div className='link-box'>
                            <div className='input-group'>
                              <input
                                name='website'
                                value={collectionData.website}
                                onChange={handleCollectionChange}
                                type='text'
                                className='form-control'
                                id='basic-url'
                                placeholder='www.yoursitename.io'
                              />
                            </div>
                            <div className='input-group'>
                              <input
                                name='discord'
                                value={collectionData.discord}
                                onChange={handleCollectionChange}
                                type='text'
                                className='form-control'
                                id='basic-url'
                                placeholder='https://discord.gg'
                              />
                            </div>
                            <div className='input-group'>
                              <input
                                name='instagram'
                                value={collectionData.instagram}
                                onChange={handleCollectionChange}
                                type='text'
                                className='form-control'
                                id='basic-url'
                                placeholder='www.instagram.com'
                              />
                            </div>
                            <div className='input-group'>
                              <input
                                name='medium'
                                value={collectionData.medium}
                                onChange={handleCollectionChange}
                                type='text'
                                className='form-control'
                                id='basic-url'
                                placeholder='https://medium.com'
                              />
                            </div>
                            <div className='input-group'>
                              <input
                                name='telegram'
                                value={collectionData.telegram}
                                onChange={handleCollectionChange}
                                type='text'
                                className='form-control'
                                id='basic-url'
                                placeholder='https://t.me'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Creator Earnings</h4>
                      <h5 className='create-item-subtitle mb-0'>
                        Collect A Fee When A User Re-Sells An Item You
                        Originally Created. This Is Deducted From The Final Sale
                        Price And Paid Monthly To A Payout Address Of Your
                        Choosing.
                      </h5>
                      <h5 className='create-item-subtitle1'>
                        Learn More About Creator Earnings.
                      </h5>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <input
                            name='creator_earnings'
                            value={collectionData.creator_earnings}
                            onChange={handleCollectionChange}
                            type='text'
                            className='form-control'
                            placeholder='e.g 25'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Blockchain</h4>
                      <h5 className='create-item-subtitle'>
                        Select The Blockchain Where You'd Like New Items From
                        This Collection To Be Added By Default
                      </h5>
                      <div className='row'>
                        <div className='col-lg-9 col-md-9'>
                          <Select
                            value={blockchains.value}
                            onChange={handleCollectionBlockchain}
                            components={{
                              SingleValue: IconSingleValue,
                              Option: IconOption,
                            }}
                            options={blockchains}
                            name='blockchain'
                            styles={customStyles}
                            theme={(theme) => ({
                              ...theme,
                              borderRadius: 0,
                              colors: {
                                ...theme.colors,
                                primary25: '#fcf5fd',
                                primary: '#fcf5fd',
                              },
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Payment Tokens</h4>
                      <h5 className='create-item-subtitle'>
                        These Tokens Can Be Used To Buy And Sell Your Items.
                      </h5>
                      <div className='col-lg-4 col-md-4 p-0 mt-lg-3'>
                        <div className='row'>
                          <div className='col-lg-6 col-md-6'>
                            <div className='token-card mb-3 mb-lg-0'>
                              <div className='token-body d-flex'>
                                <div className='icon'>
                                  <span>
                                    <img
                                      src='assets/images/icons/ethereum-pink.png'
                                      alt=''
                                      className='img-fluid eth-icon'
                                    />
                                  </span>
                                </div>
                                <div className='token-body-content'>
                                  <h3>ETH</h3>
                                  <p>Ethereum</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-lg-6 col-md-6'>
                            <div className='token-card mb-3 mb-lg-0'>
                              <div className='token-body d-flex'>
                                <div className='icon'>
                                  <span>
                                    <img
                                      src='assets/images/icons/solona.png'
                                      alt=''
                                      className='img-fluid'
                                    />
                                  </span>
                                </div>
                                <div className='token-body-content'>
                                  <h3>Solana</h3>
                                  <p>Ethereum</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='row mt-4'>
                        <div className='col-lg-9 col-md-9'>
                          <select
                            name='payment_token'
                            value={collectionData.payment_token}
                            onChange={handleCollectionChange}
                            className='form-select form-control d-block'
                          >
                            <option selected> Add Token</option>
                            <option value='Polygon'>Polygon</option>
                            <option value='Solana'>Solana</option>
                            <option value='Binance'>Binance</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <h4 className='create-item-title'>Display Theme</h4>
                      <h5 className='create-item-subtitle mb-0'>
                        Change How Your Items Are Shown.
                      </h5>
                      <div className='row mt-4'>
                        <div className='col-lg-8 col-md-8'>
                          <div className='row'>
                            <div className='col-lg-4 col-md-4'>
                              <div className='display-theme-content'>
                                <label
                                  className='w-100 mb-0'
                                  id='padded-theme'
                                  onClick={handleDisplayTheme}
                                >
                                  <input
                                    type='radio'
                                    name='display_theme'
                                    value='theme1'
                                    className='card-input-element'
                                    defaultChecked
                                  />
                                  <div className='panel card-input'>
                                    <div className='panel-body'>
                                      <div className='icon mb-3'>
                                        <div className='row gx-3'>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme1.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme1.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme1.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='panel-body-content'>
                                        <h3>Padded</h3>
                                        <p>
                                          Recommended For Assets With
                                          Transparent Background
                                        </p>
                                      </div>
                                    </div>
                                    <span className='control-check'>
                                      <img
                                        src='assets/images/icons/check-white.png'
                                        alt=''
                                        className='check-icon-img'
                                      />
                                    </span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className='col-lg-4 col-md-4'>
                              <div className='display-theme-content'>
                                <label
                                  id='contained-theme'
                                  onClick={handleDisplayTheme}
                                >
                                  <input
                                    type='radio'
                                    name='display_theme'
                                    value='theme2'
                                    className='card-input-element'
                                  />
                                  <div className='panel card-input'>
                                    <div className='panel-body'>
                                      <div className='icon mb-3'>
                                        <div className='row gx-3'>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme2.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme2.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme2.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='panel-body-content'>
                                        <h3>Contained</h3>
                                        <p>
                                          Recommended For Assets With
                                          Transparent Background
                                        </p>
                                      </div>
                                    </div>
                                    <span className='control-check'>
                                      <img
                                        src='assets/images/icons/check-white.png'
                                        alt=''
                                        className='check-icon-img'
                                      />
                                    </span>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div className='col-lg-4 col-md-4'>
                              <div className='display-theme-content'>
                                <label
                                  className='w-100 mb-0'
                                  id='covered-theme'
                                  onClick={handleDisplayTheme}
                                >
                                  <input
                                    name='display_theme'
                                    value='theme3'
                                    type='radio'
                                    className='card-input-element'
                                  />
                                  <div className='panel card-input'>
                                    <div className='panel-body '>
                                      <div className='icon mb-3'>
                                        <div className='row gx-3'>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme3.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme3.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                          <div className='col-lg-4 col-md-4 col-4'>
                                            <div className='theme-thumbnail'>
                                              <img
                                                src='assets/images/icons/theme3.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className='panel-body-content'>
                                        <h3>Covered</h3>
                                        <p>
                                          Recommended For Assets With
                                          Transparent Background
                                        </p>
                                      </div>
                                    </div>
                                    <span className='control-check'>
                                      <img
                                        src='assets/images/icons/check-white.png'
                                        alt=''
                                        className='check-icon-img'
                                      />
                                    </span>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='create-item-content border-bottom pb-3 mb-3'>
                      <div className='d-lg-flex d-md-flex justify-content-between align-items-center'>
                        <div>
                          <h4 className='create-item-title'>
                            Explicit &amp; Sensitive Content
                          </h4>
                          <h5 className='create-item-subtitle d-flex align-items-center mb-0'>
                            Set This Collection As Explicit And Sensitive
                            Content
                            <span className='tooltip-wrapper1'>
                              <i className='ri-information-fill ms-1' />
                              <div className='tooltip'>
                                Lorem ipsum is simply dummy text of the printing
                                and typesetting industry. lorem ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an t
                              </div>
                            </span>
                          </h5>
                        </div>
                        <label className='switch'>
                          <input
                            type='checkbox'
                            defaultChecked
                            checked={collectionData.explicit_sensitive_content}
                            name='explicit_sensitive_content'
                            onChange={handleExplicitCollectionChange}
                          />
                          <span className='slider round' />
                        </label>
                      </div>
                    </div>
                    <div className='pt-3'>
                      {/* <a className="btn btn-violet" href="#">
                        Create Collection
                      </a> */}
                      <button
                        className='btn btn-violet w-100'
                        onClick={handleSubmitNewCollection}
                      >
                        Submit
                      </button>

                      <button
                        className='btn btn-violet w-100'
                        onClick={handleNFTListing}
                      >
                       Test
                      </button>
                    </div>
                  </div>
                </div>
                {/*</form>*/}
              </div>
            </div>
          </div>
        </section>

        <div
          className='modal fade'
          id='makeOfferModal'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered modal-lg make-offer-modal-section'>
            <div className='modal-content'>
              <div className='modal-header text-center d-block'>
                <h5 className='modal-title d-inline-block'>Add Properties</h5>
                <button
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>
                <div className='offer-expiration'>
                  {/* <label htmlFor className="form-label">Type</label> */}
                  {itemData.attribute.map((attri, attrIndex) => (
                    <div className='row mb-3' key={attrIndex}>
                      <div className='col-md-4 pe-lg-2'>
                        <div>
                          <label for=''>Type</label>
                          <div class='input-group mb-3'>
                            <div class='input-group-prepend'>
                              <span class='input-group-text' id='basic-addon1'>
                                X
                              </span>
                            </div>
                            <input
                              name='attrType'
                              value={attri.attrType}
                              // onChange={handleChangeToggle}
                              onChange={(e) =>
                                handleAttributeChange(
                                  attrIndex,
                                  'attrType',
                                  e.target.value
                                )
                              }
                              type='text'
                              class='form-control shadow-none'
                              placeholder='Character'
                              aria-label='Username'
                              aria-describedby='basic-addon1'
                              style={{ borderRadius: '0.25rem' }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='col-md-8 ps-lg-0'>
                        <div>
                          <label>Name</label>
                          <input
                            name='attrName'
                            value={attri.attrName}
                            onChange={(e) =>
                              handleAttributeChange(
                                attrIndex,
                                'attrName',
                                e.target.value
                              )
                            }
                            // value={name}

                            type='text'
                            className='form-control shadow-none'
                            placeholder='Name'
                            style={{ borderRadius: '0.25rem' }}
                          />
                          {itemData.attribute.length === 1 ? (
                            ''
                          ) : (
                            <button onClick={(e) => deleteAttribute(attrIndex)}>
                              -
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='modal-footer border-0'>
                <button
                  onClick={addAttribute}
                  className='btn btn-violet-outline ms-lg-3 widthModel '
                >
                  Add More
                </button>
                <button
                  type='button'
                  className='btn btn-violet shadow-none  widthModel'
                  // onClick={handleSubmit1}

                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  {' Submit '}
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className='modal fade'
          id='makeOfferModal1'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered modal-lg make-offer-modal-section'>
            <div className='modal-content'>
              <div className='modal-header text-center d-block'>
                <h5 className='modal-title d-inline-block'>Add Levels</h5>
                <button
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>

                <div className='offer-expiration'>
                  {/* <label htmlFor className="form-label">Type</label> */}
                  {itemData.levels.map((lev, levelIndex) => (
                    <div className='row mb-3'>
                      <div className='col-md-4 pe-lg-2'>
                        <div class='input-group mb-3'>
                          <div class='input-group-prepend'>
                            <span class='input-group-text' id='basic-addon1'>
                              X
                            </span>
                          </div>
                          <input
                            name='levelSpeed'
                            type='text'
                            value={lev.levelSpeed}
                            onChange={(e) =>
                              handleLevelChange(
                                levelIndex,
                                'levelSpeed',
                                e.target.value
                              )
                            }
                            class='form-control shadow-none'
                            placeholder='Speed'
                            aria-label='Username'
                            aria-describedby='basic-addon1'
                            style={{ borderRadius: '0.25rem' }}
                          />
                        </div>
                      </div>
                      <div className='col-md-8 ps-lg-0'>
                        <div class='input-group mb-3'>
                          <input
                            name='levelUsername'
                            type='number'
                            value={lev.levelUsername}
                            onChange={(e) =>
                              handleLevelChange(
                                levelIndex,
                                'levelUsername',
                                e.target.value
                              )
                            }
                            class='form-control'
                            placeholder='Username'
                            // aria-label="Username"
                            style={{ borderRadius: '0.25rem' }}
                          />
                          <span class='input-group-text'>Of </span>
                          <input
                            name='levelServer'
                            type='number'
                            value={lev.levelServer}
                            onChange={(e) =>
                              handleLevelChange(
                                levelIndex,
                                'levelServer',
                                e.target.value
                              )
                            }
                            class='form-control'
                            placeholder='Server'
                            // aria-label="Server"
                            style={{ borderRadius: '0.25rem' }}
                            // defaultValue="5"
                          />
                          {itemData.levels.length === 1 ? (
                            ''
                          ) : (
                            <button onClick={(e) => deleteLevel(levelIndex)}>
                              -
                            </button>
                          )}
                        </div>

                        {/* <input type="text" className="form-control shadow-none" placeholder="Name" style={{ borderRadius: "0.25rem" }} /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='modal-footer border-0'>
                <button
                  onClick={addLevels}
                  className='btn btn-violet-outline ms-lg-3 widthModel '
                >
                  Add More
                </button>
                <button
                  // onClick={handleSubmit11}

                  type='button'
                  className='btn btn-violet shadow-none  widthModel'
                  // onClick={handleSubmit1}

                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  {' Submit '}
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className='modal fade'
          id='makeOfferModal2'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered modal-lg make-offer-modal-section'>
            <div className='modal-content'>
              <div className='modal-header text-center d-block'>
                <h5 className='modal-title d-inline-block'>Add State</h5>
                <button
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old
                </p>

                <div className='offer-expiration'>
                  {/* <label htmlFor className="form-label">Type</label> */}
                  {itemData.stats.map((stat, stateIndex) => (
                    <div className='row mb-3'>
                      <div className='col-md-4 pe-lg-2'>
                        <div class='input-group mb-3'>
                          <div class='input-group-prepend'>
                            <span class='input-group-text' id='basic-addon1'>
                              X
                            </span>
                          </div>
                          <input
                            name='statsSpeed'
                            type='text'
                            value={stat.statsSpeed}
                            onChange={(e) =>
                              handleStatsChange(
                                stateIndex,
                                'statsSpeed',
                                e.target.value
                              )
                            }
                            class='form-control shadow-none'
                            placeholder='Speed'
                            aria-label='Username'
                            aria-describedby='basic-addon1'
                            style={{ borderRadius: '0.25rem' }}
                          />
                        </div>
                      </div>
                      <div className='col-md-8 ps-lg-0'>
                        <div class='input-group mb-3'>
                          <input
                            name='statsUsername'
                            type='number'
                            value={stat.statsUsername}
                            onChange={(e) =>
                              handleStatsChange(
                                stateIndex,
                                'statsUsername',
                                e.target.value
                              )
                            }
                            class='form-control'
                            placeholder='Username'
                            aria-label='Username'
                            style={{ borderRadius: '0.25rem' }}
                            defaultValue='3'
                          />
                          <span class='input-group-text'> Of</span>
                          <input
                            name='statsServer'
                            type='number'
                            value={stat.statsServer}
                            onChange={(e) =>
                              handleStatsChange(
                                stateIndex,
                                'statsServer',
                                e.target.value
                              )
                            }
                            class='form-control'
                            placeholder='Server'
                            aria-label='Server'
                            style={{ borderRadius: '0.25rem' }}
                            defaultValue='5'
                          />{' '}
                          {itemData.stats.length === 1 ? (
                            ''
                          ) : (
                            <button onClick={(e) => deleteStats(stateIndex)}>
                              -
                            </button>
                          )}
                        </div>
                        {/* <input type="text" className="form-control shadow-none" placeholder="Name" style={{ borderRadius: "0.25rem" }} /> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='modal-footer border-0'>
                <button
                  onClick={addStats}
                  className='btn btn-violet-outline ms-lg-3 widthModel '
                >
                  Add More
                </button>
                <button
                  type='button'
                  className='btn btn-violet shadow-none  widthModel'
                  // onClick={handleSubmit1}

                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  {' Submit '}
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateNewItem;
{
  /* <button className="btn btn-outline-white1 w-100" data-bs-toggle="modal" data-bs-target="#makeOfferModal"><i className="bx bxs-purchase-tag me-2" /> Make An Offer</button> */
}
