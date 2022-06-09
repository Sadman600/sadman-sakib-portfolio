import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <MyProjects></MyProjects>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
};

export default Home;