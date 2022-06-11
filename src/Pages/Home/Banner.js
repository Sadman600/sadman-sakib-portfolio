import React from 'react';
import { Button } from 'primereact/button';
import img from '../../Images/sadman1.png';
import banner from '../../Images/banner-2.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className="max-h-max max-w-lg rounded-lg " src={img} alt='' />
                </div>
                <div className='m-6 text-center'>
                    <h1 class="text-5xl font-bold text-start text-accent">Hey! I am Sadman Sakib</h1>
                    <h1 class="text-3xl font-bold my-2 text-start">Front-end Web Developer</h1>
                    <p class="py-6 text-lg text-start font-extrabold">I worked through 1000+ hours learning HTML, CSS, Tailwind CSS,Bootstrap, JavaScript, React.Js, Node.Js,
                        Express.Js and MongoDB.</p>
                    {/* <button class="btn btn-primary">Get Started</button> */}
                    <a class="btn btn-primary normal-case text-xl text-white font-bold"
                        href='https://drive.google.com/file/d/1IDEZcF8zV44vVpHD7TYMTJoRXWgqW0QD/view?usp=sharing'
                        target="_blank">
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;