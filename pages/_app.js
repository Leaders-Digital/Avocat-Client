import "react-toastify/dist/ReactToastify.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import "../styles/sass/style.scss";
// import "../pages/fontawesome"

// component 

import { Fragment } from "react";
import FooterArea from "../components/FooterArea";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Barristar – Lawyer and Attorney Next Js Template</title>
      </Head>
      
      <Component {...pageProps} />
      <ToastContainer />
      <FooterArea />
    </Fragment>

  )
}

export default MyApp
