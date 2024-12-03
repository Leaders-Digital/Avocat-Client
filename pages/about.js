import React, { Fragment } from 'react'
import Head from 'next/head'
// components 
import HeaderTop from '../components/HeaderTop'
import HeaderBottom from '../components/HeaderBottom'
import Breadcumb from '../components/Breadcumb'
import Service from '../components/Service'
import About from '../components/About'
import ServiceArea from '../components/ServiceArea'
import Testmonial from "../components/Testmonial";
import TeamMember from '../components/TeamMember'
import CounterArea from '../components/CounterArea'
import BlogArea from '../components/BlogArea'
import NewsLetter from '../components/Newsletter'

const aboutText = [
    "Nous disposons d’une équipe expérimentée de comptables, avocats, juridiques, financiers, experts dans les affaires des entreprises et dans les consultations juridiques en droit tunisien. Nous proposons nos services aux particuliers et aux entreprises pour :",
    "Encadrer juridiquement nos clients au moyen de conseils et de sous-traitance. Assurer la rédaction de contrats nationaux et internationaux de tout genre et dans trois principales langues (français, anglais et arabe). Mettre en œuvre les différents montages juridiques. Assister et représenter nos clients auprès des tribunaux et de l’administration tunisienne et étrangère. Faire l’audit et l’expertise juridique (identifier des risques et les lacunes d’ordre juridique et mettre en œuvre des recommandations de régularisation)."
];

const breadcumbMenu = [
    { name: 'Accueil', route: '/' },
    { name: 'About us' }
]

const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>International business consulting - Qui Sommes Nous</title>
            </Head>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                title="About Us"
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Service className="bgColor" />
            <About
                className="aboutAreaStyleTwo"
                title="Pourquoi avez-vous besoin de nous ?"
                subTitle="Nous sommes des experts"
                images="/images/about/1.jpg"
                pragraphs={aboutText}
                changeOrder="changeOrder"
            />
            {/* <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
            /> */}
            <Testmonial />
            <CounterArea
                fullWidth={true}
                className="counterAreaStyleTwo"
            />
            <TeamMember
                title="Avocats qualifiés "
                subTitle="Rencontrez nos experts"
                slider={true}
            />
            {/* <BlogArea className="blogArea"
                title="Latest News"
                subTitle="From Our Blog"
            /> */}
            <NewsLetter />
        </Fragment>
    )
}
export default AboutPage