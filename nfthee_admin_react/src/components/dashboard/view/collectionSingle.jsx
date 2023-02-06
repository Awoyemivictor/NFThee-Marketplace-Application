import React, {useEffect, useState} from "react";
import instance from "../../../axios";
import {useLocation} from "react-router-dom";

const CollectionSingle = () => {
    const location = useLocation();
    const _ID = (location.state.state._id);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        instance.get(`/api/getCollection/?id=${_ID}`)
            .then(response => setCollection(response.data.data))
    }, [])
    return (
        <>
            <h1>collection view</h1>
        </>
    )
}
export default CollectionSingle;