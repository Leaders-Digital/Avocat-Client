import React, { Fragment } from 'react'
import { Grid } from '@mui/material'
import Head from 'next/head'
import HeaderTop from '../../components/HeaderTop'
import HeaderBottom from '../../components/HeaderBottom'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import Form from '../../components/Form'

const breadcumbMenu = [
    { name: 'Accueil', route: '/' },
    { name: 'Contactez-nous', },
]

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact us</title>
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
                    <Grid item md={5} xs={12}>
                        <Grid className="contactUsInfo">
                            <h3>Nos Coordonnées</h3>
                            <p>Nous sommes là pour répondre à vos questions et vous aider avec tout ce dont vous avez besoin. Contactez-nous aujourd'hui pour plus d'informations.
                                </p>
                            <h4>Address :</h4>
                            <span>Lac 2 Tunis</span>
                            <h4>Téléphone :</h4>
                            <span>+216 20202020</span>
                            <span>+216 80808080</span>
                            <h4>Email :</h4>
                            <span>test@gmail.com</span>
                        </Grid>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Grid className="contactUSForm container">
                            <h3>Formulaire de Contact Rapide</h3>
                            <Form
                                addressInfo={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <NewsLetter />
        </Fragment>
    )
}
export default Contact