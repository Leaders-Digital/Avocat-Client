import React from 'react'
import { Grid, Hidden } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Link from 'next/link';
const HeaderTop = props => {
    return (
        <Grid className={props.className}>
            <Grid
                container
                alignItems="center"
                className="container headerTopMainWrapper">
                <Grid item sm={6} md={5} lg={5} xs={6}>
                    <ul className="d-flex accountLoginArea">
                        <li><PlaceIcon /> Les Berges Du Lac 2</li>
                    </ul>
                </Grid>
                <Grid item sm={6} md={4} lg={5} xs={6}>
                    <ul className="headerContact">
                        <li><PhoneAndroidIcon /> +216 20202020</li>
                        {/* <li><QueryBuilderIcon /> 9AM - PM</li> */}
                    </ul>
                </Grid>
                <Hidden smDown>
                    <Grid item lg={2} md={3} xs={12} className="text-right">
                        <Link className="btnStyle btnOutlined btnRadius" href="/login">Espace Membre</Link>
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    )
}
export default HeaderTop