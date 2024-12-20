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




const aboutText = ['Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at', 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum'
]

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
const HomePageTwo = () => {
    return (
        <Fragment>
            <Head>
                <title>Home page two</title>
            </Head>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBottom className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <HeroSlider
                className="heroSliderAreaStyleTwo" />
            <Service className="serviceAreaStyleTwo" />
            <About
                className="aboutAreaStyleTwo"
                title="Why You Need Us"
                subTitle="We Are Expert"
                images="/images/about/1.jpg"
                // videoId="XxVg_s8xAms"
                pragraphs={aboutText}
                changeOrder="changeOrder"
            />
            <ServiceArea
                className="ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
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
                className="blogArea"
                title="Latest News"
                subTitle="From Our Blog
                "
            />
            <NewsLetter />
        </Fragment>
    )
}
export default HomePageTwo