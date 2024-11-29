import React, { Component } from 'react';
import Joi from 'joi-browser';
import { Button, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import apiClient from '../../service/apiClient';

class Form extends Component {
    state = {
        userType: 'personne physique',
        companyName: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        description: '',
        error: {},
    };

    schema = {
        userType: Joi.string().required().error(() => 'Veuillez sélectionner un type d\'utilisateur.'),
        companyName: Joi.when('userType', {
            is: 'entreprise',
            then: Joi.string().required().error(() => 'Le nom de l\'entreprise ne peut pas être vide.'),
            otherwise: Joi.optional(),
        }),
        firstName: Joi.when('userType', {
            is: 'personne physique',
            then: Joi.string().required().error(() => 'Le prénom ne peut pas être vide.'),
            otherwise: Joi.optional(),
        }),
        lastName: Joi.when('userType', {
            is: 'personne physique',
            then: Joi.string().required().error(() => 'Le nom de famille ne peut pas être vide.'),
            otherwise: Joi.optional(),
        }),
        phone: Joi.string().required().error(() => 'Le numéro de téléphone ne peut pas être vide.'),
        email: Joi.string()
            .email({ minDomainAtoms: 2 })
            .required()
            .error(() => 'Veuillez entrer une adresse e-mail valide.'),
        description: Joi.string().required().error(() => 'La description ne peut pas être vide.'),
    };
    
    changeHandler = (event) => {
        const { name, value } = event.target;
        const error = { ...this.state.error };

        const errorMessage = this.validationProperty({ name, value });
        if (errorMessage) error[name] = errorMessage;
        else delete error[name];

        this.setState({ [name]: value, error });
    };

    validationProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    validate = () => {
        const options = { abortEarly: false };
        const { userType, companyName, firstName, lastName, phone, email, description } = this.state;
        const data = { userType, companyName, firstName, lastName, phone, email, description };

        const { error } = Joi.validate(data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };

    submitHandler = async (event) => {
        event.preventDefault();
        const error = this.validate();
        if (error) {
            this.setState({ error });
            return;
        }

        const { userType, companyName, firstName, lastName, phone, email, description } = this.state;
        const data = {
            typeClient: userType,
            nom_entreprise: companyName,
            prenom: firstName,
            nom: lastName,
            telephone: phone,
            email,
            notes: description,
        };

        try {
            const response = await apiClient.post('/clients', data);
            toast.success('Client added successfully!');
            console.log('Response:', response.data);

            this.setState({
                userType: 'personne',
                companyName: '',
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                description: '',
                error: {},
            });
        } catch (err) {
            toast.error(err.response?.data?.error || 'An error occurred.');
            console.error(err);
        }
    };

    render() {
        const { userType, companyName, firstName, lastName, phone, email, description, error } = this.state;

        return (
            <form onSubmit={this.submitHandler} className="contactForm">
                <Grid container spacing={4}>
                    {/* Dropdown for User Type */}
                    <Grid item xs={12} sm={12}>
                        <Grid className="formInput">
                            <select
                                className="form-control"
                                name="userType"
                                value={userType}
                                onChange={this.changeHandler}
                            >
                                <option value="personne physique">Personne</option>
                                <option value="entreprise">Entreprise</option>
                            </select>
                            {error.userType && <p>{error.userType}</p>}
                        </Grid>
                    </Grid>

                    {/* Conditional Fields */}
                    {userType === 'entreprise' ? (
                        <Grid item xs={12} sm={12}>
                            <Grid className="formInput">
                                <input
                                    placeholder="Nom d'entreprise"
                                    name="companyName"
                                    value={companyName}
                                    onChange={this.changeHandler}
                                    className="form-control"
                                    type="text"
                                />
                                {error.companyName && <p>{error.companyName}</p>}
                            </Grid>
                        </Grid>
                    ) : (
                        <>
                            <Grid item xs={12} sm={6}>
                                <Grid className="formInput">
                                    <input
                                        placeholder="Nom"
                                        name="lastName"
                                        value={lastName}
                                        onChange={this.changeHandler}
                                        className="form-control"
                                        type="text"
                                    />
                                    {error.lastName && <p>{error.lastName}</p>}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid className="formInput">
                                    <input
                                        placeholder="Prenom"
                                        name="firstName"
                                        value={firstName}
                                        onChange={this.changeHandler}
                                        className="form-control"
                                        type="text"
                                    />
                                    {error.firstName && <p>{error.firstName}</p>}
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {/* Other Fields */}
                    <Grid item xs={12} sm={6}>
                        <Grid className="formInput">
                            <input
                                placeholder="Telephone"
                                name="phone"
                                value={phone}
                                onChange={this.changeHandler}
                                className="form-control"
                                type="text"
                            />
                            {error.phone && <p>{error.phone}</p>}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid className="formInput">
                            <input
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.changeHandler}
                                className="form-control"
                                type="email"
                            />
                            {error.email && <p>{error.email}</p>}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="formInput">
                            <textarea
                                placeholder="Notes"
                                name="description"
                                value={description}
                                onChange={this.changeHandler}
                                className="form-control"
                            />
                            {error.description && <p>{error.description}</p>}
                        </Grid>
                    </Grid>

                    {/* Submit Button */}
                    <Grid item xs={12} sm={6}>
                        <Button type="submit">Envoyer</Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default Form;
