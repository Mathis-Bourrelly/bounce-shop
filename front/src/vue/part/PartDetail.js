import React, {useEffect, useState} from "react"
import SideMenu from "../component/SideMenu";
import Navbar from "../component/Navbar";
import './component/css/partDetail.css';
import Api from "../../API";
import {useParams} from "react-router-dom";
import PreviousParts from "./component/PreviousParts";
import PricesParts from "./component/PricesParts";

const PartDetail = () => {
    let {partID} = useParams();
    const pageName = "part-detail"
    const pageTitle = `detail de la pièce ${partID}`
    const api = new Api()
    const [part, setPart] = useState(null);

    useEffect(() => {
        fetchParts();
    }, [partID]);

    const fetchParts = async () => {
        const token = sessionStorage.getItem("token");
        try {
            let url = `parts/getByID/${partID}`;

            const data = await api.getFromRoute(url, token)
            setPart(data);
        } catch (error) {
            console.log('Error fetching data:', error);
            if (error.status === 401) {
                api.navigate("/")
            }
        }
    };

    if (part) {
        return (
            <>
                <SideMenu page={pageName}/>
                <div className="main-content">
                    <Navbar page={pageTitle}/>
                    <div className="content">
                        <div className="table-container">
                            <div className="container-column">
                                <div className="card-fit">
                                    <img width="256" height="256"
                                         src="https://img.icons8.com/fluency-systems-regular/256/image--v1.png"
                                         alt="image--v1"/>
                                </div>
                                <div className="card-left">
                                    <div className="part-details">
                                        <div className="detail-item">
                                            <div className="detail-title">{part.label}</div>
                                        </div>
                                        <div className="detail-item">
                                            <div className="id-row">{part.partID}</div>
                                        </div>
                                        <div className="detail-item">
                                            {part.isBought && <span className="type-badge bought">Bought</span>}
                                            {part.isRaw && <span className="type-badge raw">Raw</span>}
                                            {part.isIntermediate &&
                                                <span className="type-badge intermediate">Intermediate</span>}
                                            {part.isDeliverable &&
                                                <span className="type-badge deliverable">Deliverable</span>}
                                        </div>
                                        {part.Range && (
                                            <div className="detail-item">
                                                <strong>Gamme :</strong><span
                                                className="range-badge"></span>{part.Range.rangeID}
                                            </div>
                                        )}
                                        {part.Supplier && (
                                            <div className="detail-item">
                                                <strong>Supplier: </strong>{part.Supplier.name}
                                            </div>
                                        )}
                                        <div className="detail-item">
                                            <div className="sm-text">{part.quantity} pieces available</div>
                                        </div>
                                        <div className="detail-item">
                                            {part.Prices[0] &&<><strong>{part.Prices[0].price}€</strong><span className="sm-text"> /pièce</span></>}
                                        </div>

                                        <p>{part.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container-column">
                                <div className="card-left">
                                    <div className="detail-title">Composition</div>
                                    <PreviousParts parts={part.PreviousParts} api={api}/>
                                </div>
                                <div className="card-left">
                                    <div className="detail-title">Prix</div>
                                    <PricesParts prices={part.Prices}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PartDetail
