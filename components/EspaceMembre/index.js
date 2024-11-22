import React from "react";
import { Parallax } from "react-parallax";


const breadcumbMenu = [
    { name: 'Accueil', route: '/' },
    { name: 'Login', },
]


const EspaceMembre = () => {
   

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

        </Fragment>
    );
};

export default EspaceMembre;
