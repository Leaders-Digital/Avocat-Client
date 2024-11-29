import React, { useEffect, useState } from 'react';
import { Grid, Hidden, Menu, MenuItem, Button } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Link from 'next/link';
import apiClient from '../../service/apiClient';

const HeaderTop = (props) => {
    const [userId, setUserId] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const getUser = async () => {
        try {
            const res = await apiClient.get("/clients/verify");
            setUserId(res.data.user.id);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await apiClient.post("/clients/logout");
            setUserId(null); // Clear user ID on logout
        } catch (error) {
            console.log(error);
        }
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Grid className={props.className}>
            <Grid
                container
                alignItems="center"
                className="container headerTopMainWrapper"
            >
                <Grid item sm={6} md={5} lg={5} xs={6}>
                    <ul className="d-flex accountLoginArea">
                        <li><PlaceIcon /> Les Berges Du Lac 2</li>
                    </ul>
                </Grid>
                <Grid item sm={6} md={4} lg={5} xs={6}>
                    <ul className="headerContact">
                        <li><PhoneAndroidIcon /> +216 20202020</li>
                    </ul>
                </Grid>
                {
                    !userId ? (
                        <Hidden smDown>
                            <Grid item lg={2} md={3} xs={12} className="text-right">
                                <Link className="btnStyle btnOutlined btnRadius" href="/login">Espace Membre</Link>
                            </Grid>
                        </Hidden>
                    ) : (
                        <Hidden smDown>
                            <Grid item lg={2} md={3} xs={12} className="text-right">
                                <Button
                                    className="btnStyle btnOutlined btnRadius"
                                    aria-controls="account-menu"
                                    aria-haspopup="true"
                                    onClick={handleMenuOpen}
                                >
                                    Mon compte
                                </Button>
                                <Menu
                                    id="account-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleMenuClose}
                                >
                                    <MenuItem onClick={handleMenuClose}>
                                        <Link href="/moncompte" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Mon compte
                                        </Link>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            handleMenuClose();
                                            logout();
                                        }}
                                        
                                    >
                                          <Link href="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                          Déconnexion
                                        </Link>
                                        
                                    </MenuItem>
                                </Menu>
                            </Grid>
                        </Hidden>
                    )
                }
            </Grid>
        </Grid>
    );
};

export default HeaderTop;
