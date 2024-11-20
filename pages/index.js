import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button } from '@mui/material'

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
    'Nous disposons d’une équipe expérimentée de comptables, avocats, juridiques, financiers, experts dans les affaires des entreprises et dans les consultations juridiques en droit tunisien. Nous proposons nos services aux particuliers et aux entreprises pour :',
    'Encadrer juridiquement nos clients au moyen de conseils et de sous-traitance. Assurer la rédaction de contrats nationaux et internationaux de tout genre et dans trois principales langues (français, anglais et arabe). Mettre en œuvre les différents montages juridiques. Assister et représenter nos clients auprès des tribunaux et de l’administration tunisienne et étrangère. Faire l’audit et l’expertise juridique (identifier des risques et les lacunes d’ordre juridique et mettre en œuvre des recommandations de régularisation).'
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
                // signature="/images/about/1.png"
                pragraphs={aboutText}
            />

            <ServiceArea
                title="Comment pouvons-nous vous aider ?"
                subTitle="Nos Service"
                className="bgWhite"
                limit={6}  // Limit to the first 6 services
            />

<Testmonial />

<ContactArea />


            {/*
            <Portfolio
                title="Our Resent Case Studies"
                subTitle="Here Our Best Work"
                portfolioItem={portfolio}
            />
            
       
          
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