import React from 'react';
import img from '../../Images/sadman1.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className="max-h-max max-w-lg rounded-lg " src={img} alt='' />
                </div>
                <div className='m-6 text-center'>
                    <h1 class="text-5xl font-bold text-start">Hey! I am Sadman Sakib.</h1>
                    <h1 class="text-3xl font-bold my-2 text-start">Front-end Web Developer</h1>
                    <p class="py-6 text-lg text-start">I worked through 1000+ hours learning HTML, CSS, Tailwind CSS,Bootstrap, JavaScript, React.Js, Node.Js,
                        Express.Js and MongoDB.</p>
                    {/* <button class="btn btn-primary">Get Started</button> */}
                    <a class="btn btn-primary normal-case text-xl" href=''>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;