import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import './css/partForm.css';
import '../../App.css';
import Api from "../../../API";
import PartFormSelectPart from "./PartFormSelectPart";
import PartFormSelectOperation from "./PartFormSelectOperation";

const PartForm = () => {
    const {register, handleSubmit} = useForm();
    const token = sessionStorage.getItem("token");
    const api = new Api()

    const [suppliers, setSuppliers] = useState([])
    const [users, setUsers] = useState([])
    const [selectedParts, setSelectedParts] = useState([]);
    const [selectedOperations, setSelectedOperations] = useState([]);
    const [typeFilters, setTypeFilters] = useState({
        raw: false,
        bought: false,
        intermediate: false,
        deliverable: false
    });

    useEffect(() => {
        const fetchSuppliers = async () => {
            const result = await api.getFromRoute("suppliers", token);
            setSuppliers(result);
        };
        const fetchUsers = async () => {
            const result = await api.getFromRoute("users", token);
            setUsers(result);
        };
        fetchSuppliers();
        fetchUsers();
    }, []);
    const getFirstTrueType = (filters) => {
        for (const key in filters) {
            if (filters[key]) {
                return key.charAt(0).toUpperCase();
            }
        }
        return null;
    };
    const onSubmit = async (data) => {
        data.type = getFirstTrueType(typeFilters)
        document.getElementById("alert-server").style.display = "none"
        document.getElementById("alert-input").style.display = "none"
        let createdRange
        try {
            let newPart = await api.postFromRoute("parts", data, token)
            if (typeFilters["bought"] || typeFilters["deliverable"] || typeFilters["raw"]) {
                let priceData = {
                    price: data.price,
                    date: Date.now(),
                    partID: newPart.partID
                }
                await api.postFromRoute("parts/prices", priceData, token)
            }
            if (typeFilters["intermediate"] || typeFilters["deliverable"]) {
                let rangeData = {
                    partID: newPart.partID,
                    userID: data.personInCharge
                }
                for (const selectedPart of selectedParts) {
                    let previousPartData = {
                        partID: selectedPart.partID,
                        quantity: selectedPart.quantity,
                        mainPartID: newPart.partID,
                        prevLabel: selectedPart.label
                    };
                    await api.postFromRoute("parts/previousPart", previousPartData, token);
                }
                createdRange = await api.postFromRoute("ranges", rangeData, token)
            }
            if (typeFilters["intermediate"]) {
                for (const selectedOperation of selectedOperations) {
                    let previousOperationData = {
                        rangeID: createdRange.rangeID,
                        operationID: selectedOperation.operationID
                    };
                    console.log("selectedOperation============",selectedOperation)
                    await api.postFromRoute("ranges/addOperation", previousOperationData, token);
                }
            }
            await api.navigateTo("/part?toastData=partSuccess")
        } catch (e) {
            if (e === 500) {
                document.getElementById("alert-server").style.display = "block"
            }
            if (e === 400) {
                document.getElementById("alert-input").style.display = "block"
            }
            console.log(e)
        }

    };


    const handleType = (type) => {
        {
            setTypeFilters(prevFilters => {
                const newFilters = {
                    raw: false,
                    bought: false,
                    intermediate: false,
                    deliverable: false,
                };

                if (prevFilters[type]) {
                    newFilters[type] = false;
                } else {
                    newFilters[type] = true;
                }

                return newFilters;
            });
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-group">
                    <label className="title-label">Nom</label>
                    <input {...register('label')} required placeholder="Nom"/>
                </div>

                <div className="form-group">
                    <label className="title-label">Déscription</label>
                    <textarea {...register('description')} required placeholder="Déscription"/>
                </div>

                <div className="form-group">
                    <label className="title-label">Type</label>
                    <div className="button-group">
                        <div className="cat bought">
                            <label className="type-checkbox bought">
                                <input checked={typeFilters.bought}
                                       onChange={() => handleType("bought")}
                                       type="checkbox"/>
                                <span>Acheté</span>
                            </label>
                        </div>

                        <div className="cat deliverable">
                            <label className="type-checkbox deliverable">
                                <input checked={typeFilters.deliverable}
                                       onChange={() => handleType("deliverable")}
                                       type="checkbox"/>
                                <span>Déliverable</span>
                            </label>
                        </div>

                        <div className="cat raw">
                            <label className="type-checkbox raw">
                                <input checked={typeFilters.raw}
                                       onChange={() => handleType("raw")} type="checkbox"/>
                                <span>Matériaux</span>
                            </label>
                        </div>

                        <div className="cat intermediate">
                            <label className="type-checkbox intermediate">
                                <input checked={typeFilters.intermediate}
                                       onChange={() => handleType("intermediate")}
                                       type="checkbox"/>
                                <span>Intermédiaire</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="title-label">Quantité</label>
                    <input {...register('quantity')} required placeholder="Quantité" type="number"/>
                </div>
                {(typeFilters["bought"]) && <div id='priceField' className="form-group">
                    <label className="title-label">Prix d'achat</label>
                    <input {...register('price')} required placeholder="Prix" type="number"/>
                </div>}
                {(typeFilters["raw"]) && <div id='priceField' className="form-group">
                    <label className="title-label">Prix d'achat</label>
                    <input {...register('price')} required placeholder="Prix" type="number"/>
                </div>}
                {(typeFilters["deliverable"]) && <div id='priceField' className="form-group">
                    <label className="title-label">Prix de vente</label>
                    <input {...register('price')} required placeholder="Prix" type="number"/>
                </div>}


                {typeFilters["intermediate"] && <div id="personInChargeField" className="form-group">
                    <label className="title-label">Résponsable</label>
                    <select {...register('personInCharge')} required>
                        <option value="">Sélectionnez un résponsable</option>
                        {users.map((user) => (
                            <option key={user.userID} value={user.userID}>{user.name}</option>
                        ))}
                    </select>
                </div>}

                {(typeFilters["raw"] || typeFilters["bought"]) && <div className="form-group">
                    <label className="title-label">Fournisseur</label>
                    <div className="form-group">
                        <select {...register('supplierID')} required>
                            <option value="">Sélectionnez un Fournisseur</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier.supplierID} value={supplier.supplierID}>{supplier.name}</option>
                            ))}
                        </select>
                        <button type="button" className="btn-color">nouveau fournisseur</button>
                    </div>
                </div>}

                {(typeFilters["intermediate"] || typeFilters["deliverable"]) &&
                    <PartFormSelectPart token={token} onSelectedPartsChange={setSelectedParts}/>
                }

                {typeFilters["intermediate"] &&
                    <PartFormSelectOperation token={token} onSelectedOperationsChange={setSelectedOperations}/>
                }
                <div className="card-alert" id="alert-server" style={{display: "none"}}>
                    Erreur serveur, veuillez réessayer ultérieurement.
                </div>
                <div className="card-alert" id="alert-input" style={{display: "none"}}>
                    Veuillez remplir tout les champs et sélectionner un type.
                </div>
                <button type="submit" className="btn-color">Enregister</button>
            </form>
        </div>
    );
}

export default PartForm;
