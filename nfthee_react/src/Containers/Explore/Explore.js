import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {OwlCarouselSlider} from "../../Components";
import instance from "../../axios";
import ExploreCollectionList from "./ExploreCollectionList";
import Loader from "../../Components/Loader/Loader";

function Explore() {
    const {t} = useTranslation();
    const [collections, setCollections] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        instance.get("/api/getCollection")
            .then(response => setCollections(response.data.data))

        instance.get('/api/getCategory')
            .then(response => setCategories(response.data.data)).finally(() => setIsLoading(false))
    }, [])

    const [filteredCollections, setFilteredCollections] = useState([])
    const handleSelectTab = e => {
        if (e.target.textContent === "All Collections") {
            setFilteredCollections(collections)
            return;
        }
        const filter = collections.filter((el) => (el.category===e.target.textContent))
        setFilteredCollections(filter)
    }

    useEffect(() => {
        console.log("first",collections)
        setFilteredCollections(collections)
    }, [collections])

   
    return (
        <>
            {isLoading ? <Loader/> : (
                <main>
                    <section className="explore-bg-section bg-section">
                        <div className="container">
                            <div className="section-heading text-center">
                                <h2 className="section-title mb-1">
                                    {t("explore.Explore Collections")}
                                </h2>
                                <span>
                                    <img
                                        src="assets/images/path1.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                  </span>
                            </div>
                        </div>
                        <div className="container-fluid p-0 overflow-hidden">
                            <div className="row align-items-center mt-5">
                                <div className="col-lg-12 col-md-12">
                                    <div className="tabbable-panel">
                                        <ul className="nav nav-pills mb-5">
                                            <div className="container">
                                                <div className="col-lg-10 mx-auto">
                                                    <OwlCarouselSlider selectTab={handleSelectTab}
                                                                       categories={categories}/>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="container">
                                        <div className="tab-content">
                                            <div id="all-collection" className="tab-panel active">
                                                <div className="tabbable-gallery">
                                                    <ExploreCollectionList collections={filteredCollections}/>
                                                </div>
                                            </div>

                                            
                                            <div id="collectibles" className="tab-pane"></div>
                                            <div id="domain-name" className="tab-pane"></div>
                                            <div id="music" className="tab-pane"></div>
                                            <div id="photography" className="tab-pane"></div>
                                            <div id="sports" className="tab-pane"></div>
                                            <div id="trading-cards" className="tab-pane"></div>
                                            <div id="utility" className="tab-pane"></div>
                                            <div id="virtualworld" className="tab-pane"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}

export default Explore;
