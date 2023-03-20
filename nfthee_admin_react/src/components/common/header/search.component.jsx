import React, {useState,useEffect,useCallback} from 'react';
import {MENUITEMS} from '../sidebar/menu'
import {Link} from 'react-router-dom'

const Search = () => {

    // eslint-disable-next-line
    const [mainmenu, setMainMenu] = useState(MENUITEMS);
    const [searchValue, setsearchValue] = useState('');
    // eslint-disable-next-line
    const [searchResult, setSearchResult] = useState(false);
    // eslint-disable-next-line
    const [searchResultEmpty, setSearchResultEmpty] = useState(false);
    const[searchopenclose,setsearchOpenclose] = useState(false)

    const escFunction = useCallback((event) => {
        if(event.keyCode === 27) {
            //setsearchOpen(false)
            setsearchValue('')
        }
    }, []);

    useEffect(() => {
        // if (width <= 991) {
        //     document.querySelector(".page-main-header").className = 'page-main-header open' 
        //     document.querySelector(".page-sidebar").className = 'page-sidebar open' 
        // }
        // else {
        //     document.querySelector(".page-main-header").className = 'page-main-header '
        //     document.querySelector(".page-sidebar").className = 'page-sidebar ' + sidebar_background_color
        // }
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
      }, [escFunction]);
    
      const handleSearchKeyword = (keyword) => {
          keyword ? addFix() : removeFix()
          const items = [];
          setsearchValue(keyword)
          mainmenu.filter(menuItems => {
              if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === 'link') {
                  items.push(menuItems);
              }
              if (!menuItems.children) return false
              menuItems.children.filter(subItems => {
                  if (subItems.title.toLowerCase().includes(keyword) && subItems.type === 'link') {
                      subItems.icon = menuItems.icon
                      items.push(subItems);
                  }
                  if (!subItems.children) return false
                  subItems.children.filter(suSubItems => {
                      if (suSubItems.title.toLowerCase().includes(keyword)) {
                          suSubItems.icon = menuItems.icon
                          items.push(suSubItems);
                      }
                      return suSubItems
                  })
                  return subItems
              })
              checkSearchResultEmpty(items)
              setsearchValue(items);
              return menuItems
          });
      }
    
      const checkSearchResultEmpty = (items) => {
          if (!items.length) {
              setSearchResultEmpty(true);
              document.querySelector(".empty-menu").classList.add('is-open');
          } else {
              setSearchResultEmpty(false);
              document.querySelector(".empty-menu").classList.remove('is-open');
          }
      }
    
      const addFix = () => {
          setSearchResult(true);
          document.querySelector(".Typeahead-menu").classList.add('is-open');
      }
    
      const removeFix = () => { 
          setSearchResult(false)
          setsearchValue('')
          document.querySelector(".Typeahead-menu").classList.remove('is-open');
      }

      const searchToggle = () => {
          if(searchopenclose){
            setsearchOpenclose(!searchopenclose)
            document.querySelector(".form-control-plaintext").classList.add('open');          
          } else{
            setsearchOpenclose(!searchopenclose)
            document.querySelector(".form-control-plaintext").classList.remove('open'); 
            }
        }

    return (
        <form className="form-inline search-form">
            <div className="form-group">
                <label className="sr-only">Email</label>
                <input
                    type="search"
                    id="search"
                    className="form-control-plaintext"
                    placeholder="Search.."
                    defaultValue={searchValue}
                    onChange={(e) => handleSearchKeyword(e.target.value)}
                    
                />
                <span className="d-sm-none mobile-search" onClick={searchToggle}></span>

                <div className="Typeahead-menu custom-scrollbar" id="search-outer">
                  {searchValue ?
                      searchValue.map((data, index) => {
                          return (
                              <div className="ProfileCard u-cf" key={index}>
                                  <div className="ProfileCard-avatar">
                                      <i className={`icon-${data.icon}`}></i>
                                  </div>
                                  <div className="ProfileCard-details">
                                      <div className="ProfileCard-realName">
                                          <Link 
                                              to={data.path} 
                                              className="realname" 
                                              onClick={removeFix}
                                          >
                                              {data.title}
                                          </Link>
                                      </div>
                                  </div>
                              </div>
                          )
                      }) : ''
                  }
                </div>
                <div className="Typeahead-menu empty-menu">
                    <div className="tt-dataset tt-dataset-0">
                        <div className="EmptyMessage">
                            Opps!! There are no result found.
                        </div>
                    </div>
                </div>

            </div>
        </form>
    );
}

export default Search