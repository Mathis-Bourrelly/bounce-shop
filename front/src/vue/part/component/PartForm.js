import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import './css/partForm.css';
import '../../App.css';
import Api from "../../../API";
import PartFormSelectPart from "./PartFormSelectPart";

const PartForm = () => {
    const {register, handleSubmit} = useForm();
    const token = sessionStorage.getItem("token");
    const api = new Api()

    const [suppliers, setSuppliers] = useState([])
    const [users, setUsers] = useState([])
    const [selectedParts, setSelectedParts] = useState([]);
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
    const onSubmit = async (data) => {
        let newPart = await api.postFromRoute("parts", data, token)
        let priceData = {
            price: data.price,
            date: Date.now(),
            partID: newPart.partID
        }
        await api.postFromRoute("parts/prices", priceData, token)
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
        await api.postFromRoute("ranges", rangeData, token)
        console.log(newPart)
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
                    <input {...register('label')} placeholder="Nom"/>
                </div>

                <div className="form-group">
                    <label className="title-label">Déscription</label>
                    <textarea {...register('description')} placeholder="Déscription"/>
                </div>

                <div className="form-group">
                    <label className="title-label">Type</label>
                    <div className="button-group">
                        <div className="cat bought">
                            <label className="type-checkbox bought">
                                <input {...register('isBought')} checked={typeFilters.bought}
                                       onChange={() => handleType("bought")}
                                       type="checkbox"/>
                                <span>Acheté</span>
                            </label>
                        </div>

                        <div className="cat deliverable">
                            <label className="type-checkbox deliverable">
                                <input {...register('isDeliverable')} checked={typeFilters.deliverable}
                                       onChange={() => handleType("deliverable")}
                                       type="checkbox"/>
                                <span>Déliverable</span>
                            </label>
                        </div>

                        <div className="cat raw">
                            <label className="type-checkbox raw">
                                <input {...register('isRaw')} checked={typeFilters.raw}
                                       onChange={() => handleType("raw")} type="checkbox"/>
                                <span>Matériaux</span>
                            </label>
                        </div>

                        <div className="cat intermediate">
                            <label className="type-checkbox intermediate">
                                <input {...register('isIntermediate')} checked={typeFilters.intermediate}
                                       onChange={() => handleType("intermediate")}
                                       type="checkbox"/>
                                <span>Intermédiaire</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="title-label">Quantité</label>
                    <input {...register('quantity')} placeholder="Quantité" type="number"/>
                </div>
                {(typeFilters["bought"]) &&<div id='priceField' className="form-group">
                    <label className="title-label">Prix d'achat</label>
                    <input {...register('price')} placeholder="Prix" type="number"/>
                </div>}
                {(typeFilters["raw"]) &&<div id='priceField' className="form-group">
                    <label className="title-label">Prix d'achat</label>
                    <input {...register('price')} placeholder="Prix" type="number"/>
                </div>}
                {(typeFilters["deliverable"]) &&<div id='priceField' className="form-group">
                    <label className="title-label">Prix de vente</label>
                    <input {...register('price')} placeholder="Prix" type="number"/>
                </div>}


                {typeFilters["intermediate"] && <div id="personInChargeField" className="form-group">
                    <label className="title-label">Résponsable</label>
                    <select {...register('personInCharge')}>
                        <option value="">Sélectionnez un résponsable</option>
                        {users.map((user) => (
                            <option key={user.userID} value={user.userID}>{user.name}</option>
                        ))}
                    </select>
                </div>}

                {(typeFilters["raw"] || typeFilters["bought"]) &&<div id='supplierField' className="form-group">
                    <label className="title-label">Fournisseur</label>
                    <div className="form-group">
                        <select {...register('supplierID')}>
                            <option value="">Sélectionnez un Fournisseur</option>
                            {suppliers.map((supplier) => (
                                <option key={supplier.supplierID} value={supplier.supplierID}>{supplier.name}</option>
                            ))}
                        </select>
                        <button type="button" className="btn-color">nouveau fournisseur</button>
                    </div>
                </div>}

                {(typeFilters["intermediate"] || typeFilters["deliverable"]) &&<div id="prevPartField">
                    <PartFormSelectPart token={token} onSelectedPartsChange={setSelectedParts}/>
                </div>}

                {typeFilters["intermediate"] && <div className="card">
                    <label className="title-label">Opération</label>
                    <div className="form-group  ">
                        <input placeholder="Rechercher une opérations..."/>
                        <button type="button" className="btn-color">Ajouter l'opération</button>
                    </div>
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Temps de travail</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Row 2</td>
                            <td>Row 2</td>
                        </tr>
                        <tr>
                            <td>Row 2</td>
                            <td>Row 2</td>
                        </tr>

                        </tbody>
                    </table>
                </div>}

                <button type="submit" className="btn-color">Enregister</button>
            </form>
        </div>
    );
}

export default PartForm;
