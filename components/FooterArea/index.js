import React from 'react'
import Link from 'next/link'
import { Grid } from '@mui/material'
const footerLinks = [
    // {
    //     title: 'Quick Link', menus: [
    //         { name: 'Home', route: '/' },
    //         { name: 'Practice Area', route: 'practice' },
    //         { name: 'Our Team', route: 'team' },
    //         { name: 'Recent Case', route: 'case' },
    //         { name: 'Our Blog', route: 'blog' },
    //     ]
    // },
    {
        title: 'Liens utiles', menus: [
            { name: 'Mentions légales', route: 'practice' },
            { name: 'Politique de confidentialité', route: 'practice' },
            { name: 'Politique de cookies', route: 'practice' },
            { name: 'Qui somme nous', route: 'practice' },
            { name: 'Contactez-nous', route: 'practice' },
        ]
    },
    {
        title: 'Contactez-nous', menus: [
            { name: 'International business consulting' },
            { name: 'Les Berges Du Lac II,', },
            { name: 'Tunisie', },
            { name: 'Téléphone: 216 20202020', },
            { name: 'Email: info@example.com', },
        ]
    },
]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <Grid className="footerTopArea">
                <Grid
                    container
                    spacing={3}
                    className="container">
                    <Grid item lg={6} sm={6} xs={12}>
                        <Grid className="footerLogo">
                            <Link href="/">
                                <img src="/images/logo/logo.png" alt="logo" />
                            </Link>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                        </Grid>
                    </Grid>
                    {footerLinks.map((menu, i) => (
                        <Grid key={i} item lg={3} sm={6} xs={12}>
                            <div className="footerWrap">
                                <h3>{menu.title}</h3>
                                <ul>
                                    {menu.menus.map((item, i) => (
                                        <li key={i}><Link href={`${item.route}`}>{item.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid className="footerBottomArea">
                <Grid container spacing={3} className="container">
                    <Grid item md={8} sm={10} xs={12}>
                        <span>All rights reserved | © 2024 IBC. By Leaders Digital</span>
                    </Grid>
                    <Grid item md={4} sm={2} xs={12}>
                        <ul className="socialListFooter">
                            <li><a href="#"><i className='fa fa-facebook'></i></a></li>
                            <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                            <li><a href="#"><i className='fa fa-instagram'></i></a></li>
                            <li><a href="#"><i className='fa fa-linkedin'></i></a></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
export default FooterArea