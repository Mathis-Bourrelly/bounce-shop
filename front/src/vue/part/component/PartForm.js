import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import './css/partForm.css';
import '../../App.css';
import Api from "../../../API";

const PartForm = () => {
    const {register, handleSubmit} = useForm();
    const token = sessionStorage.getItem("token");
    const api = new Api()

    const [suppliers, setSuppliers] = useState([])
    useEffect(() => {
        const fetchSuppliers = async () => {
            const result = await api.getFromRoute("suppliers",token);
            setSuppliers(result);
        };
        fetchSuppliers();
    }, []);
    const onSubmit = async (data) => {
        let priceData = {
            price: data.price,
            date: Date.now()
        }
        let newPrice = await api.postFromRoute("parts/prices", priceData, token)
        data.priceID = newPrice.priceID
        let newPart = await api.postFromRoute("parts", data, token)
        /*let rangeData = {
            partID:newPart.partID,
            userID:1
        }
        let newPartList = await api.postFromRoute("parts/partlist",{},token)
        //TODO:for of
        let previousPartData = {
            partID:1,
            quantity:20,
            partListID: newPartList.partListID
        }
        let newPreviousPart = await api.postFromRoute("parts/previousPart",previousPartData,token)

        await api.postFromRoute("ranges",rangeData,token)
*/
        console.log(newPart)
    };

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
                                <input {...register('isBought')} type="checkbox"/>
                                <span>Acheté</span>
                            </label>
                        </div>

                        <div className="cat deliverable">
                            <label className="type-checkbox deliverable">
                                <input {...register('isDeliverable')} type="checkbox"/>
                                <span>Déliverable</span>
                            </label>
                        </div>

                        <div className="cat raw">
                            <label className="type-checkbox raw">
                                <input {...register('isRaw')} type="checkbox"/>
                                <span>Matériaux</span>
                            </label>
                        </div>

                        <div className="cat intermediate">
                            <label className="type-checkbox intermediate">
                                <input {...register('isIntermediate')} type="checkbox"/>
                                <span>Intermédiaire</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="title-label">Quantité</label>
                    <input {...register('quantity')} placeholder="Quantité" type="number"/>
                    <label className="title-label">Prix</label>
                    <input {...register('price')} placeholder="Prix" type="number"/>
                </div>

                <div className="form-group">
                    <label className="title-label">Résponsable</label>
                    <select {...register('personInCharge')}>
                        <option value="">Sélectionnez un résponsable</option>
                        {/* Add options dynamically here */}
                    </select>
                </div>

                <div className="form-group">
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
                </div>

                <div className="card">
                    <label className="title-label">Composition</label>
                    <div className="form-group">
                        <input placeholder="Rechercher une pièce..."/>
                        <button type="button" className="btn-color">Ajouter la pièce</button>
                    </div>
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Label</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="part-label-row">Row 1</td>
                            <td><input className="input-count" type="number" defaultValue="1"/></td>
                        </tr>
                        <tr>
                            <td className="part-label-row">Row 1</td>
                            <td><input className="input-count" type="number" defaultValue="1"/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="card">
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
                </div>

                <button type="submit" className="btn-color">Submit</button>
            </form>
        </div>
    );
}

export default PartForm;
