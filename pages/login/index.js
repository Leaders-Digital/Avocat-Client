import React, { Fragment } from 'react'
import Head from 'next/head'
import HeaderTop from '../../components/HeaderTop'
import HeaderBottom from '../../components/HeaderBottom'
import Breadcumb from '../../components/Breadcumb'
import { Grid, Button } from '@mui/material'


const breadcumbMenu = [
    { name: 'Accueil', route: '/' },
    { name: 'Login', },
]


const Login = () => {


    return (
        <Fragment>
            <Head>
                <title>Connecter</title>
            </Head>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Contact"
                breadcumbMenu={breadcumbMenu}
                background="/images/breadcumb/1.jpg"
            />

            <Grid className="contactusPageArea">
                <Grid container spacing={2} className="container">
                    <Grid item md={7} xs={12}>
                        <Grid className="contactUsInfo">
                            <h3>Connexion au Portail Client</h3>
                            <p>Connectez-vous à votre espace sécurisé pour accéder à vos dossiers, suivre l'évolution de vos affaires juridiques, et communiquer avec nos avocats en toute confidentialité.
                            </p>
                        </Grid>
                    </Grid>
                    <Grid item md={5} xs={12}>

                        <div class="contactForm">
                            <div class="formInput" style={{paddingBottom:"15px"}}>
                                <input type="email" placeholder="Adresse e-mail" required />
                            </div>
                            <div class="formInput" style={{paddingBottom:"15px"}}>
                                <input type="password" placeholder="Mot de passe" required />
                            </div>
                            <button type="submit">Se connecter</button>
                        </div>


                    </Grid>
                </Grid>
            </Grid>

        </Fragment>
    );
};

export default Login;
