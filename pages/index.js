import React, { Fragment } from 'react'
import Head from 'next/head'

// components 
import HeaderTop from '../components/HeaderTop'
import HeaderBottom from '../components/HeaderBottom'
import HeroSlider from '../components/HeroSlider'
import Service from '../components/Service'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import Portfolio from '../components/Portfolio'
import Testmonial from "../components/Testmonial";
import ContactArea from '../components/ContactArea'
import TeamMember from '../components/TeamMember'
import CounterArea from '../components/CounterArea'
import BlogArea from '../components/BlogArea'
import NewsLetter from '../components/Newsletter'

const aboutText = [
    'Contrairement aux idées reçues, un cabinet d’avocats ne se limite pas à représenter ses clients devant les tribunaux. Il s’agit également d’un lieu où expertise, conseil et stratégie se rencontrent pour défendre vos droits.',
    'Nos avocats s’appuient sur des années d’expérience et une compréhension approfondie du droit pour offrir des solutions personnalisées. Nous sommes dédiés à protéger vos intérêts et à vous guider dans toutes vos démarches juridiques.'
];


const portfolio = [
    {
        image: '/images/studies/1.jpg',
        title: 'General Service',
        subtitle: 'Corporate',
        id: 1
    },
    {
        image: '/images/studies/2.jpg',
        title: 'Personal Issue',
        subtitle: 'General',
        id: 2
    },
    {
        image: '/images/studies/3.jpg',
        title: 'Business Accounting',
        subtitle: 'Business',
        id: 3
    },
    {
        image: '/images/studies/4.jpg',
        title: 'Accounting issue',
        subtitle: 'Criminal',
        id: 4
    },
    {
        image: '/images/studies/5.jpg',
        title: 'Business Accounting',
        subtitle: 'Family Issue',
        id: 5
    }
]


const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>International business consulting</title>
            </Head>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea" />
            </header>
            <HeroSlider />
            <Service className="bgColor" />
            
             <About
                title="À propos de nous"
                images="/images/about/2.jpg"
                signature="/images/about/1.png"
                pragraphs={aboutText}
            />
         {/*   <ServiceArea
                title="How Can We Help You"
                subTitle="Area Of Practice"
                className="bgWhite"
            />
            <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                portfolioItem={portfolio}
            />
            
            <Testmonial />
            <ContactArea />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                slider={true}
            />
            <CounterArea />
            <BlogArea
                title="Latest News"
                subTitle="From Our Blog"
            />
            <NewsLetter /> */}
        </Fragment>
    )
}
export default Home