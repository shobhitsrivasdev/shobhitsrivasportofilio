import React from 'react'
import { Helmet } from 'react-helmet';
import { Navbar, Footer, Landing, About, Skills, /*Testimonials*/ Blog, /*Education */ Experience, Contacts, Projects, Services, Portfolio, Achievement, Gallery } from '../../components';
import { headerData } from '../../data/headerData';

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            {/* <Education /> */}
            <Skills />
            <Experience />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main;
