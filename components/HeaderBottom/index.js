import React, { useState, Fragment } from 'react'
import { InputAdornment, Grid, TextField, Button } from '@mui/material'
import Link from 'next/link'
import { useRouter } from "next/router";
import SearchIcon from '@mui/icons-material/Search';

const HeaderBottom = props => {
    const [search, setSearch] = useState()
    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const clickHandler = () => {
        setTrigger(!trigger)
    }
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
    const router = useRouter();
    return (
        <Fragment>
            {trigger && <Grid className="backdrop" onClick={clickHandler} ></Grid>}
            <Grid className={props.className}>
                <Grid
                    container
                    alignItems="center"
                    className="container">
                    <Grid item xs={8} sm={6} md={3}>
                        <Grid className="logo">
                            <Link href="/">
                                <img src="/images/logo/logo.png" alt="logo" />
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8}
                        className={responsive ?
                            "responsiveWrapper active" :
                            "responsiveWrapper"}>
                        <ul className="mainMenuWrap">
                            <li><Link href='/' className={router.pathname == "/" || router.pathname == "/home-two" ? "active" : ""}>Home</Link>
                                {/* <ul className="subMenu">
                                    <li><Link href='/' className={router.pathname == "/" ? "active" : ""}>Home One</Link></li>
                                    <li><Link href='/home-two' className={router.pathname == "/home-two" ? "active" : ""}>Home Two</Link></li>
                                    <li><Link href='/home-three' className={router.pathname == "/home-three" ? "active" : ""}>Home Three</Link></li>
                                </ul> */}
                            </li>
                            <li><Link href='/about' className={router.pathname == "/about" ? "active" : ""}>Nos Services</Link></li>

                            <li><Link href='/about' className={router.pathname == "/about" ? "active" : ""}>Qui Sommes Nous</Link></li>

                            {/* <li><Link href='/about' className={router.pathname == "/about" ? "active" : ""}>About</Link></li>

                            <li><Link href='/about' className={router.pathname == "/about" ? "active" : ""}>About</Link></li> */}
                            {/* <li><Link href='/practice' className={router.pathname == "/practice" || router.pathname == "/practice/[id]" ? "active" : ""}>Practice</Link>
                                <ul className="subMenu">
                                    <li><Link href='/practice' className={router.pathname == "/practice" ? "active" : ""}>Practice areas</Link></li>
                                    <li><Link href='/practice/1' className={router.pathname == "/practice/1" ? "active" : ""}>Practice areas single</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href='/case-stadies' className={router.pathname == "/case-stadies" || router.pathname == "/case-stadies/[id]" ? "active" : ""}>Cases</Link>
                                <ul className="subMenu">
                                    <li><Link href='/case-stadies' className={router.pathname == "/case-stadies" ? "active" : ""}>Cases</Link></li>
                                    <li><Link href='/case-stadies/1' className={router.pathname == "/case-stadies/1" ? "active" : ""}>Cases single</Link></li>
                                </ul>
                            </li>
                            <li><Link href='/blog' className={router.pathname == "/blog" || router.pathname == "/blog/[id]" ? "active" : ""}>Blog</Link>
                                <ul className="subMenu">
                                    <li><Link href='/blog' className={router.pathname == "/blog" ? "active" : ""}>Blog left sidebar</Link></li>
                                    <li><Link href='/blog-right' className={router.pathname == "/blog-right" ? "active" : ""}>Blog Right sidebar</Link></li>
                                    <li><Link href='/blog-fullwidth' className={router.pathname == "/blog-fullwidth" ? "active" : ""}>Blog FullWidth</Link></li>
                                </ul>
                            </li>
                            <li><Link href='/attorneys' className={router.pathname == "/attorneys" || router.pathname == "/attorneys/[id]" ? "active" : ""}>Attorneys</Link>
                                <ul className='subMenu'>
                                    <li><Link href='/attorneys' className={router.pathname == "/attorneys" ? "active" : ""}>Attorneys</Link></li>
                                    <li><Link href='/attorneys/1' className={router.pathname == "/attorneys/1" ? "active" : ""}>Attorneys single</Link></li>
                                </ul>
                            </li> */}
                            <li><Link href='/contact' className={router.pathname == "/contact" ? "active" : ""}>Contactez-nous</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs={4} sm={6} md={1}>
                        <Grid className="searchMenuWrapper">
                            <Grid className="searchWrap">
                                <i className="fa fa-search search" onClick={clickHandler} ></i>
                                <Grid className={trigger ? 'searchform active' : 'searchform'}>
                                    <TextField
                                        placeholder="Search Here"
                                        value={search}
                                        type="text"
                                        variant="outlined"
                                        className="searchInput"
                                        onChange={event => setSearch(event.target.value)}
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end">
                                                <Button><SearchIcon /></Button>
                                            </InputAdornment>,
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid onClick={responsiveHandler} className="responsiveTrigger">
                                <span className="first"></span>
                                <span className="second"></span>
                                <span className="third"></span>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default HeaderBottom