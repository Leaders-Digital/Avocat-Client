import React from 'react'
import { Parallax } from 'react-parallax';
import { Grid } from '@mui/material'

const services = [
    {
        icon: "fi flaticon-lawyer",
        subtitle: 'Prenez Votre',
        title: 'Rendez-vous'
    },
    {
        icon: "fi flaticon-scale",
        subtitle: 'Obtenez un',
        title: 'Conseil Gratuit'
    },
    {
        icon: 'fi flaticon-network',
        subtitle: 'Rejoignez Facilement',
        title: 'Notre Équipe'
    }
    
]
const Service = ({ className = '' }) => {
    return (
        <Parallax
            bgImage="/images/services/1.jpg"
            bgImageAlt="the cat"
            contentClassName={`serviceArea ${className}`}
            strength={200}>
            <Grid container spacing={4} className="container">
                {services.map((service, i) => (
                    <Grid item md={4} sm={6} xs={12} key={i}>
                        <Grid className="serviceItem">
                            <Grid className="serviceIcon">
                                <i className={service.icon}></i>
                            </Grid>
                            <Grid className="serviceText">
                                <span>{service.subtitle}</span>
                                <h3>{service.title}</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Parallax>
    )
}
export default Service