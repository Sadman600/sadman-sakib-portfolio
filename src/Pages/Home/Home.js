import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <About></About>
            <Skills></Skills>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;