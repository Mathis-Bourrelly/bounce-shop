import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/partForm.css';
import '../../App.css';


function App() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-group">
                    <label className="title-label">Nom</label>
                    <input {...register('label')} placeholder="Nom" />
                </div>

                <div className="form-group">
                    <label className="title-label">Déscription</label>
                    <textarea {...register('description')} placeholder="Déscription" />
                </div>

                <div className="form-group">
                    <label className="title-label">Type</label>
                    <div className="button-group">
                        <div className="cat bought">
                            <label className="type-checkbox bought">
                                <input {...register('bought')} type="checkbox"/>
                                <span>Acheté</span>
                            </label>
                        </div>

                        <div className="cat deliverable">
                            <label className="type-checkbox deliverable">
                                <input {...register('deliverable')} type="checkbox"/>
                                <span>Déliverable</span>
                            </label>
                        </div>

                        <div className="cat raw">
                            <label className="type-checkbox raw">
                                <input {...register('raw')} type="checkbox"/>
                                <span>Matériaux</span>
                            </label>
                        </div>

                        <div className="cat intermediate">
                            <label className="type-checkbox intermediate">
                                <input {...register('intermediate')} type="checkbox"/>
                                <span>Intermédiaire</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="title-label">Quantité</label>
                    <input {...register('quantity')} placeholder="Quantité" type="number" />
                    <label className="title-label">Prix</label>
                    <input {...register('price')} placeholder="Prix" type="number" />
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
                        <select {...register('supplier')}>
                            <option value="">Sélectionnez un Fournisseur</option>
                            {/* Add options dynamically here */}
                        </select>
                        <button type="button" className="btn-color">nouveau fournisseur</button>
                    </div>
                </div>

                <div className="card">
                    <label className="title-label">Composition</label>
                    <div className="form-group">
                        <input placeholder="Rechercher une pièce..." />
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
                            <td><input className="input-count" type="number" defaultValue="1" /></td>
                        </tr>
                        <tr>
                            <td className="part-label-row">Row 1</td>
                            <td><input className="input-count" type="number" defaultValue="1" /></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="card">
                    <label className="title-label">Opération</label>
                    <div className="form-group  ">
                        <input placeholder="Rechercher une opérations..." />
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

export default App;
