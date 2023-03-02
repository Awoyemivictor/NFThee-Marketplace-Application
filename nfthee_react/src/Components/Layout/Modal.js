import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export const Modal = ({onRequestClose}) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                // Close the modal when the Escape key is pressed
                onRequestClose();
            }
        }

        // Prevent scolling
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        // Clear things up when unmounting this component
        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });
    const data = [
        {id: 1, name: "USD", value: "usd"},
        {id: 2, name: "INR", value: "inr"},
        {id: 3, name: "EUR", value: "eur"},
        {id: 4, name: "JPY", value: "jpy"},
        {id: 5, name: "GBP", value: "gbp"},
        {id: 6, name: "IDR", value: "idr"}];
    const [selectedId, setSelectedId] = useState("bg-disabled")
    console.log(selectedId)

    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <div class="row">
                    <div class="col-11">
                        <h3 className="modal__title">Select Currency</h3>
                    </div>
                    <div class="col-1">
                        <Link onClick={onRequestClose}>
                            <img src="assets/images/icons/close.png" alt=""/></Link>
                    </div>
                </div>

                <div className="card" style={{border: 'none'}}>
                    <div className="card-body">
                        <div class="row">
                            {data.map(card => {
                                return (<>
                                    <div onClick={() => setSelectedId(card.id)}
                                         className={selectedId && selectedId == card.id ? 'bg-disabled col-lg-4 mb-5' : "col-lg-4 mb-5"}>
                                        <div
                                            className={selectedId && selectedId == card.id ? "btn-card selected-card" : "btn-card"}>
                             <span className="me-2"><img src="assets/images/icons/currency-rate-icon.png" alt=""/>
                             </span> {card.name} </div>
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                </div>


                {/* <button type="button" onClick={onRequestClose}>
					Close
				</button> */}

            </div>
        </div>

    );
};

export const ModalBuynft = ({onRequestClose,collectionData}) => {
    // Use useEffect to add an event listener to the document
    useEffect(() => {

        function onKeyDown(event) {
            onRequestClose();
        }

        // Prevent scolling
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        // Clear things up when unmounting this component
        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });

    return (
        <div className="modal__backdrop">
            <div className="modal__container1">
                <div class="row">
                    <div class="col-11">
                        <h2 class="modal_title">Complete Checkout</h2>
                    </div>
                    <div class="col-1">
                        <Link onClick={onRequestClose}>
                            <img src="/assets/images/icons/close.png" alt=""/></Link>
                    </div>
                </div>

                <div className="card" style={{border: 'none'}}>
                    <div className="card-body">
                        <div className="  table-responsive">
                            <table className="table">
                                <thead>
                                <tr>

                                    <th scope="col" style={{fontSize: "22px"}}>Item</th>
                                    <th scope="col" style={{fontSize: "22px"}}>Unit Price</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <img src={collectionData.uploadFile||"/assets/images/icons/activeimg.png"} alt="" class="user-img"
                                                 style={{height: "100px", width: "100px"}}/>
                                            <span class="ms-2" style={{fontSize: "18px"}}>{collectionData.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="price-detail">
                                            <h5><img src="/assets/images/icons/ethereum.png" alt="" class="me-1"
                                                     style={{fontSize: "18px"}}/>{collectionData?.putOnMarketplace?.price}</h5>
                                            <h6>$52547.30</h6>
                                        </div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                        </div>
                        <a type="button" href="#" className="btn btn-violet edit-profile-btn ms-2 w-100">Checkout</a>
                    </div>
                </div>


                {/* <button type="button" onClick={onRequestClose}>
					Close
				</button> */}

            </div>
        </div>

    );
};
