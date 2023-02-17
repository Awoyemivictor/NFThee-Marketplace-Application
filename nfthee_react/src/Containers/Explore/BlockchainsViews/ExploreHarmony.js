import React from 'react';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import instance from "../../../axios";
import Loader from "../../../Components/Loader/Loader";
import Filters from "../Filters";
import ExploreItemRow from "../ExploreItem/ExploreItemRow";
import ExploreItemColumn from "../ExploreItem/ExploreItemColumn";

const ExploreHarmony = () => {
    const {t} = useTranslation();

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        instance.get('/api/all?blockChain=Harmony Testnet')
            .then(response => setData(response.data.data))
            .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
        let arr = []
        data.filter((nft) => {
            if (nft.chooseBlockchain === "Harmony Testnet ")
                return arr.push(nft)
        })
        setSortedData(arr)
    }, [data])

    const [nftData, setNftData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [isOpen, setIsopen] = useState(true);
    const [filter, setfilter] = useState("filterClose");

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };

    const FilterClose = () => {
        window.scrollTo(0, 0)
        filter === "filterClose" ? setfilter("") : setfilter("filterClose");
    };
    const [isModalOpen, setModalIsOpen] = useState(false);
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    const [selectedFilter, setSelectedFilter] = useState([]);

    const handleSelectFilters = (name) => {
        if (selectedFilter.includes(name)) {
            const removeFilter = selectedFilter.filter((el) => {
                return el !== name ? true : false
            })
            setSelectedFilter(removeFilter)
        } else {
            setSelectedFilter([
                ...selectedFilter,
                name
            ])
        }
    }

    const [sortBy, setSortBy] = useState("name A-Z");
    const handleSortChange = e => {
        setSortBy(e.target.value)
    }

    const handleSortClick = () => {
        switch (sortBy) {
            case "name A-Z":
                console.info("A-Z")
                break;

            case "name Z-A":
                console.info("Z-A")
                break;

            case "price-low":
                console.info("Low - High")
                break;

            case "price-high":
                console.info("High - Low")
                break;
        }

    }

    const [filteredData, setFilteredData] = useState([]);

    

    const [searchText, setSearchText] = useState("")
    // const handleSearchText = e => {
    //     setSearchText(e.target.value)
    // }

    useEffect(() => {
        setFilteredData(sortedData)
    }, [sortedData])

    useEffect(() => {
        const filterByCategory = sortedData.filter(data => {
            return selectedFilter.includes(data.chooseCategory)
        })

        const filterByCollection = sortedData.filter((data) => {
            return selectedFilter.includes(data.chooseCollection)
        })

        if (selectedFilter.length)
            setFilteredData([
                ...filterByCategory,
                ...filterByCollection
            ])
        else
            setFilteredData(sortedData)
    }, [selectedFilter])

    useEffect(() => {
        const filteredArray = sortedData.filter(data => {
            if (searchText !== "")
                return Object.values(data.name).join('').toLowerCase().includes(searchText.toLowerCase())
            else
                setFilteredData(sortedData)
        })
        if (filteredArray.length)
            setFilteredData([
                ...filteredArray
            ])
    }, [searchText])

    useEffect(() => {
        switch (sortBy) {
            case "name A-Z":
                const nameAz = sortedData?.sort((a, b) => (a.name > b.name ? 1 : 1))
                setFilteredData([
                    ...nameAz
                ])
                break;

            case "name Z-A":
                const nameZa = sortedData?.sort((a, b) => (a.name > b.name ? -1 : 1))
                setFilteredData([
                    ...nameZa
                ])
                break;

            case "price-low":
                const lowToHigh = sortedData?.sort((a, b) => (a.putOnMarketplace.price > b.putOnMarketplace.price ? 1 : -1))
                setFilteredData([
                    ...lowToHigh
                ])
                break;

            case "price-high":
                const highToLow = sortedData?.sort((a, b) => (a.putOnMarketplace.price > b.putOnMarketplace.price ? -1 : 1))
                setFilteredData([
                    ...highToLow
                ])
                break;
        }
    }, [sortBy])

    return (
        <>
            {isLoading ? <Loader/> : (
                <main>
                    <section className="explore-filter-section explore-nft-area bg-section">
                        <div className="container-fluid">
                            <div className="row">
                                {isOpen ?
                                    <div
                                        className={`col-lg-3 collection-filter-wrapper filter-sticky custom-scrollbar ${filter}`}>
                                        <div className="collection-filter">
                                            <div className="panel">
                                                <div
                                                    className="panel-heading d-flex justify-content-between align-items-center mb-4">
                                                    <div className="panel-title">
                                                        {filter ? <img src="assets/images/icons/filter-icon.png" alt=""
                                                                       className="me-2 filter-icon"
                                                                       onClick={ToggleSidebar}/>
                                                            : <img src="assets/images/icons/filter-icon.png" alt=""
                                                                   className="me-2 filter-icon"
                                                                   onClick={FilterClose}/>} Filter
                                                    </div>
                                                    <span> {filter ? <img src="assets/images/icons/close.png" alt=""
                                                                          className="img-fluid close-icon"
                                                                          onClick={ToggleSidebar}/>
                                                        : <img src="assets/images/icons/close.png" alt=""
                                                               className="img-fluid close-icon"
                                                               onClick={FilterClose}/>} </span>
                                                </div>

                                                {isOpen ?
                                                    <div className="panel-body">
                                                        <div className="accordion" id="accordionExample">
                                                            <Filters handleSelectFilters={handleSelectFilters}
                                                                    //  handleSearchText={handleSearchText}
                                                                     searchText={searchText}
                                                                     setSearchText={setSearchText}/>
                                                        </div>
                                                    </div>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="col-lg-1" style={{width: '5.333333%'}}>
                                        <div className="collection-filter filter-sticky">
                                            <div className="panel p-0">
                                                <div className="panel-heading">
                                                    <div
                                                        className="panel-title filter-border"
                                                        onClick={ToggleSidebar}
                                                    >
                                                        <img
                                                            src="assets/images/icons/filter-icon.png"
                                                            alt=""
                                                            className="filter-icon"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                }
                                {filter ?
                                    <div className="col-lg-12 filter-mobile-wrapper">
                                        <button onClick={FilterClose} className="filter_button"><img
                                            src="assets/images/icons/filter-icon.png" alt="" className="me-3"/>Filter
                                        </button>
                                    </div> : ""}
                                <div className={`${isOpen ? 'col-lg-9' : 'col-lg-11'} collection-filter-card`}
                                     style={{width: `${isOpen ? "" : "94.666667%"}`}}>
                                    <div className="collection-wrapper">
                                        <div className="collection-content bg-transparent">
                                            <div className="top-wrapper">
                                                <h3 className="search-count">Showing 01-09
                                                    of {sortedData.length} Results</h3>
                                                <div className="d-flex justify-content-between">
                                                    <div className="sort-by-filter me-2">
                                                        <span>Sort By : </span>
                                                        <select className="form-select"
                                                                aria-label="Default select example"
                                                                style={{display: 'none'}}>
                                                            <option selected>Most Popular</option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>
                                                        <select className="nice-select form-select"
                                                                tabIndex={0}
                                                                onChange={(e) => setSortBy(e.target.value)}
                                                                onClick={handleSortClick}
                                                        >
                                                            <option value="name A-Z" className="option">Name: A-Z
                                                            </option>
                                                            <option value="name Z-A" className="option">Name: Z-A
                                                            </option>
                                                            <option value="price-low" className="option">Price: Low -
                                                                High
                                                            </option>
                                                            <option value="price-high" className="option">Price: High -
                                                                low
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="collection-grid-mode">
                                                        <ul className="nav" id="pills-tab" role="tablist">
                                                            <li className="nav-item" role="presentation">
                                                                <a href="#" className="active" id="grid-view"
                                                                   data-bs-toggle="pill"
                                                                   data-bs-target="#pills-grid-view"
                                                                   type="button" role="tab"
                                                                   aria-controls="pills-grid-view"
                                                                   aria-selected="true"
                                                                >
                                                                    <img src="assets/images/icons/grid-view-pink.png"
                                                                         alt=""
                                                                         className="img-fluid grid-icon1"/>
                                                                    <img src="assets/images/icons/grid-view-gray.png"
                                                                         alt=""
                                                                         className="img-fluid grid-icon2"/>
                                                                </a>
                                                            </li>
                                                            <li className="nav-item" role="presentation">
                                                                <a href="#" className="ms-2" id="list-view"
                                                                   data-bs-toggle="pill"
                                                                   data-bs-target="#pills-list-view"
                                                                   type="button" role="tab"
                                                                   aria-controls="pills-list-view"
                                                                   aria-selected="false">
                                                                    <img src="assets/images/icons/list-view-gray.png"
                                                                         alt=""
                                                                         className="img-fluid grid-icon2 "/>
                                                                    <img src="assets/images/icons/list-view-pink.png"
                                                                         alt=""
                                                                         className="img-fluid grid-icon1"/>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="pills-grid-view" role="tabpanel"
                                             aria-labelledby="pills-grid-view-tab">
                                            <div className="bottom-wrapper">
                                                <ExploreItemRow data={filteredData}/>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-list-view" role="tabpanel"
                                             aria-labelledby="pills-list-view-tab">
                                            <div className="bottom-wrapper">
                                                <div className="shop-bottom-wrapper">
                                                    <ExploreItemColumn data={filteredData}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </>
    )
};

export default ExploreHarmony;
